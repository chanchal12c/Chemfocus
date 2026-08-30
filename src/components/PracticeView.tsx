import React, { useState, useEffect } from 'react';
import { MCQ_QUESTIONS } from '../data/chemistryData';
import { MCQQuestion, TabType } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Timer, 
  HelpCircle, 
  RotateCcw, 
  Edit3, 
  ArrowRight, 
  ArrowLeft,
  BookOpen, 
  Award, 
  Trash2,
  Check,
  Pause,
  Play,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface PracticeViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ setActiveTab, onSelectTopic }) => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [scratchpadText, setScratchpadText] = useState<string>('25.0 * M1 = 35.5 * 0.150\nM1 = (35.5 * 0.150) / 25.0\nM1 = 5.325 / 25.0 = 0.213 M');
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selected: string; correct: boolean }>>({});
  const [seconds, setSeconds] = useState<number>(45);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);

  const currentQ: MCQQuestion = MCQ_QUESTIONS[currentQIndex] || MCQ_QUESTIONS[0];
  const totalQuestions = MCQ_QUESTIONS.length;

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isSubmitted) return;
    const isCorrect = selectedOption === currentQ.correctOptionId;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    const updatedAnswers = {
      ...userAnswers,
      [currentQIndex]: { selected: selectedOption, correct: isCorrect }
    };
    setUserAnswers(updatedAnswers);
    setIsSubmitted(true);

    // If last question submitted and all questions answered, trigger completion view
    if (Object.keys(updatedAnswers).length === totalQuestions) {
      setTimeout(() => {
        setShowCompletionModal(true);
      }, 1200);
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQIndex(index);
    const ans = userAnswers[index];
    if (ans) {
      setSelectedOption(ans.selected);
      setIsSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
    setShowHint(false);
  };

  const handleNextQuestion = () => {
    if (currentQIndex < totalQuestions - 1) {
      jumpToQuestion(currentQIndex + 1);
    } else if (Object.keys(userAnswers).length === totalQuestions) {
      setShowCompletionModal(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      jumpToQuestion(currentQIndex - 1);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);
    setScore(0);
    setUserAnswers({});
    setSeconds(0);
    setIsTimerRunning(true);
    setShowCompletionModal(false);
  };

  const insertFormulaToScratchpad = (f: string) => {
    setScratchpadText((prev) => (prev ? prev + '\n' + f : f));
  };

  const isCurrentCorrect = selectedOption === currentQ.correctOptionId;

  return (
    <div className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
      {/* Top Question Status & Timer Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#c4c6cd]/60">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#006a65] block mb-1">
            {currentQ.moduleName}
          </span>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-[#041627] font-heading">
              Question {currentQIndex + 1} of {totalQuestions}
            </h1>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#006a65] font-bold border border-[#c4c6cd]/60">
              Score: {score}/{Object.keys(userAnswers).length}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Timer Display with Pause / Play Toggle */}
          <div className="flex items-center gap-2 bg-[#eff4ff] border border-[#c4c6cd] px-3.5 py-1.5 rounded-xl text-xs font-mono text-[#041627]">
            <Timer className="w-4 h-4 text-[#006a65]" />
            <span>Time: {formatTimer(seconds)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="ml-1 text-[#74777d] hover:text-[#006a65] cursor-pointer"
              title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Reset Quiz button */}
          <button
            onClick={handleResetQuiz}
            className="text-xs font-semibold text-[#74777d] hover:text-[#ba1a1a] flex items-center gap-1 cursor-pointer transition-colors px-2 py-1"
            title="Reset Quiz"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart</span>
          </button>
        </div>
      </div>

      {/* Question Progress Bar & Quick Jump Palette */}
      <div className="space-y-3 mb-8">
        <div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#006a65] h-full transition-all duration-300 rounded-full"
            style={{ width: `${((Object.keys(userAnswers).length) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Quick jump question numbers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-[11px] font-mono text-[#74777d] mr-1">Questions:</span>
          {MCQ_QUESTIONS.map((q, idx) => {
            const ans = userAnswers[idx];
            const isCurrent = idx === currentQIndex;
            let btnStyle = 'bg-white border-[#c4c6cd] text-[#44474c] hover:border-[#006a65]';
            if (ans) {
              btnStyle = ans.correct
                ? 'bg-[#76f3ea]/30 border-[#006a65] text-[#006f69] font-bold'
                : 'bg-[#ffdad6]/50 border-[#ba1a1a] text-[#93000a] font-bold';
            }
            if (isCurrent) {
              btnStyle += ' ring-2 ring-[#006a65] ring-offset-1';
            }
            return (
              <button
                key={q.id}
                onClick={() => jumpToQuestion(idx)}
                className={`w-8 h-8 rounded-lg border text-xs font-mono transition-all cursor-pointer flex items-center justify-center shrink-0 ${btnStyle}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Completion Modal / Banner */}
      {showCompletionModal && (
        <div className="bg-gradient-to-r from-[#041627] to-[#1a2b3c] text-white p-6 sm:p-8 rounded-2xl mb-8 shadow-lg border border-[#334155] animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#76f3ea]/20 text-[#76f3ea] rounded-full text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quiz Completed in {formatTimer(seconds)}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">
                Your Final Score: {score} / {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
              </h2>
              <p className="text-xs sm:text-sm text-[#b7c8de] max-w-xl">
                {score === totalQuestions
                  ? 'Perfect score! You demonstrated solid mastery over reaction mechanisms, thermodynamics, and titration equilibria.'
                  : 'Well done! Review the detailed solution keys below or jump into the Viva Voce prep.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleResetQuiz}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={() => setActiveTab('viva')}
                className="px-5 py-2.5 bg-[#76f3ea] hover:bg-[#59dad1] text-[#006f69] rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <span>Practice Viva Voce</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main 2-Column Quiz Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Question & Options - 8 Cols */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 sm:p-8 shadow-xs">
            {/* Question Text */}
            <h2 className="text-base sm:text-lg font-semibold text-[#041627] leading-relaxed mb-6">
              {currentQ.question}
            </h2>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                let optionStyle = 'border-[#c4c6cd]/80 hover:border-[#006a65] bg-white text-[#041627]';

                if (isSubmitted) {
                  if (opt.id === currentQ.correctOptionId) {
                    optionStyle = 'border-[#006a65] bg-[#76f3ea]/20 text-[#006f69] font-bold';
                  } else if (isSelected && !isCurrentCorrect) {
                    optionStyle = 'border-[#ba1a1a] bg-[#ffdad6]/40 text-[#93000a]';
                  } else {
                    optionStyle = 'border-[#eff4ff] bg-[#f8f9ff] text-[#74777d] opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-[#006a65] bg-[#eff4ff] text-[#006a65] font-semibold ring-1 ring-[#006a65]';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 ${
                          isSelected
                            ? 'border-[#006a65] bg-[#006a65] text-white'
                            : 'border-[#c4c6cd] bg-white text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                      <span className="text-sm sm:text-base font-mono">{opt.text}</span>
                    </div>

                    {isSubmitted && opt.id === currentQ.correctOptionId && (
                      <CheckCircle2 className="w-5 h-5 text-[#006a65] shrink-0" />
                    )}
                    {isSubmitted && isSelected && !isCurrentCorrect && (
                      <XCircle className="w-5 h-5 text-[#ba1a1a] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint Box (if toggled) */}
            {showHint && currentQ.hint && (
              <div className="bg-[#eff4ff] border-l-4 border-[#006a65] p-3.5 rounded-r-xl mb-6 text-xs text-[#041627]">
                <strong className="text-[#006a65]">Hint: </strong> {currentQ.hint}
              </div>
            )}

            {/* Answer Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#eff4ff]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3.5 py-2 rounded-xl border border-[#c4c6cd] text-xs font-semibold text-[#44474c] hover:bg-[#eff4ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-[#006a65]" />
                  <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                {currentQIndex > 0 && (
                  <button
                    onClick={handlePrevQuestion}
                    className="px-4 py-2.5 rounded-xl border border-[#c4c6cd] text-xs font-semibold text-[#44474c] hover:bg-[#eff4ff] cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                )}

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOption}
                    className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
                      selectedOption
                        ? 'bg-[#006a65] text-white hover:bg-[#00504c]'
                        : 'bg-[#eff4ff] text-[#74777d] cursor-not-allowed'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-[#006a65] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-[#00504c] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{currentQIndex === totalQuestions - 1 ? 'View Summary' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Explanation Feedback Block (shown after submit) */}
          {isSubmitted && (
            <div
              className={`p-6 rounded-2xl border ${
                isCurrentCorrect
                  ? 'bg-[#76f3ea]/15 border-[#006a65]'
                  : 'bg-[#ffdad6]/40 border-[#ba1a1a]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isCurrentCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-[#006a65]" />
                    <h3 className="font-bold text-[#006f69] font-heading">
                      Correct Solution!
                    </h3>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-[#ba1a1a]" />
                    <h3 className="font-bold text-[#93000a] font-heading">
                      Incorrect Solution
                    </h3>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#041627] leading-relaxed mb-3">
                {currentQ.explanation}
              </p>
              <button
                onClick={() => {
                  onSelectTopic(currentQ.topicId);
                  setActiveTab('topics');
                }}
                className="text-xs font-bold text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Review full chapter notes for this topic</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar: Core Formula, Scratchpad & Mastery - 4 Cols */}
        <div className="lg:col-span-4 space-y-6">
          {/* Core Formula Card */}
          <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-[#041627] font-heading uppercase tracking-wider mb-2 font-mono">
              Core Formula
            </h3>
            {currentQ.formulaContext ? (
              <div className="bg-[#041627] text-[#76f3ea] p-3 rounded-xl font-mono text-sm font-bold text-center border border-[#1a2b3c] mb-3">
                {currentQ.formulaContext}
              </div>
            ) : (
              <div className="bg-[#041627] text-[#76f3ea] p-3 rounded-xl font-mono text-sm font-bold text-center border border-[#1a2b3c] mb-3">
                M₁V₁ = M₂V₂
              </div>
            )}
            <p className="text-[11px] text-[#44474c] leading-relaxed">
              Ensure volumes and molar ratios are verified before calculating stoichiometric equivalence.
            </p>
          </div>

          {/* Interactive Scratchpad Card with Quick Snippet Inserters */}
          <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Edit3 className="w-4 h-4 text-[#006a65]" />
                <h3 className="text-sm font-bold text-[#041627] font-heading font-mono uppercase">
                  Scratchpad
                </h3>
              </div>
              <button
                onClick={() => setScratchpadText('')}
                className="text-[11px] text-[#74777d] hover:text-[#ba1a1a] flex items-center gap-1 cursor-pointer"
                title="Clear notes"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
            <textarea
              value={scratchpadText}
              onChange={(e) => setScratchpadText(e.target.value)}
              placeholder="Type rough calculations here..."
              rows={4}
              className="w-full font-mono text-xs p-3 bg-[#eff4ff] border border-[#c4c6cd] rounded-xl text-[#0b1c30] focus:outline-none focus:border-[#006a65] resize-none"
            />
            {/* Quick formulas to insert */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[10px] text-[#74777d] font-mono mr-1">Insert:</span>
              {['M₁V₁ = M₂V₂', 'ΔG = ΔH - TΔS', 'Rate = k[Substrate]'].map((form) => (
                <button
                  key={form}
                  onClick={() => insertFormulaToScratchpad(form)}
                  className="text-[10px] px-2 py-0.5 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#006a65] rounded font-mono border border-[#c4c6cd]/60 cursor-pointer"
                >
                  +{form.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Mastery Progress Card */}
          <div className="bg-gradient-to-br from-[#eff4ff] to-[#dce9ff] border border-[#c4c6cd] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#006a65]" />
              <h3 className="text-sm font-bold text-[#041627] font-heading">
                Mastery Score
              </h3>
            </div>
            <div className="text-2xl font-bold text-[#006a65] font-heading mb-1">
              {Math.round((score / totalQuestions) * 100)}%
            </div>
            <p className="text-xs text-[#44474c] leading-relaxed mb-3">
              {score === totalQuestions
                ? 'Outstanding performance! You have mastered these honours concepts.'
                : 'Keep practicing to achieve complete concept confidence.'}
            </p>
            <button
              onClick={() => setActiveTab('viva')}
              className="w-full bg-white border border-[#006a65] text-[#006a65] font-semibold text-xs py-2 rounded-xl hover:bg-[#006a65] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <span>Practice Viva Voce Questions</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
