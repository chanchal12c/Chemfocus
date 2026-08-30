import React, { useState } from 'react';
import { TabType } from '../types';
import { CHEMISTRY_TOPICS, CHEMISTRY_BRANCHES } from '../data/chemistryData';
import { MolecularDiagram } from './MolecularDiagram';
import { 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ArrowLeftRight, 
  GraduationCap,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  Calculator,
  Compass,
  Bookmark,
  Share2,
  Check
} from 'lucide-react';

interface ExplainTopicViewProps {
  currentTopicId: string;
  onSelectTopic: (topicId: string) => void;
  setActiveTab: (tab: TabType) => void;
}

export const ExplainTopicView: React.FC<ExplainTopicViewProps> = ({
  currentTopicId,
  onSelectTopic,
  setActiveTab
}) => {
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('all');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [showVivaAnswer, setShowVivaAnswer] = useState<{ [key: number]: boolean }>({});

  const activeTopic =
    CHEMISTRY_TOPICS.find((t) => t.id === currentTopicId) || CHEMISTRY_TOPICS[0];

  // Find parent branch and subject
  const currentBranch = CHEMISTRY_BRANCHES.find(b => b.id === activeTopic.branchId);
  const currentSubject = currentBranch?.subjects.find(s => s.id === activeTopic.subjectId);

  const filteredTopics = CHEMISTRY_TOPICS.filter((t) => {
    if (selectedBranchFilter === 'all') return true;
    return t.branchId === selectedBranchFilter;
  });

  const handleCopyFormula = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const toggleViva = (idx: number) => {
    setShowVivaAnswer(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
      {/* Top Topic Switcher and Branch Selector */}
      <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-4 sm:p-5 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#eff4ff]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#006a65]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#041627]">
              Curriculum Topic Navigator:
            </span>
          </div>

          {/* Branch Filter dropdown/pill */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#74777d]">Branch:</span>
            <select
              value={selectedBranchFilter}
              onChange={(e) => setSelectedBranchFilter(e.target.value)}
              className="text-xs font-semibold bg-[#eff4ff] text-[#006a65] border border-[#c4c6cd] rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#006a65] cursor-pointer"
            >
              <option value="all">All Branches (11 Total)</option>
              {CHEMISTRY_BRANCHES.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Topic Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 scrollbar-thin">
          {filteredTopics.map((topic) => {
            const isSelected = topic.id === activeTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#006a65] text-white shadow-xs font-bold'
                    : 'bg-[#f0f4f9] text-[#041627] hover:bg-[#e2e8f0]'
                }`}
              >
                {topic.title.split(':')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#74777d] mb-4 flex-wrap">
        <button onClick={() => setActiveTab('curriculum')} className="hover:text-[#006a65] hover:underline cursor-pointer">
          Curriculum
        </button>
        <span>/</span>
        <span className="text-[#006a65] font-medium">{currentBranch?.name || activeTopic.category}</span>
        {currentSubject && (
          <>
            <span>/</span>
            <span className="text-[#44474c]">{currentSubject.title}</span>
          </>
        )}
        <span>/</span>
        <span className="text-[#041627] font-semibold truncate max-w-xs">{activeTopic.title.split(':')[0]}</span>
      </div>

      {/* Subtopics Badges & Tags */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#041627] text-[#76f3ea]">
            {activeTopic.difficulty || 'Honours Level'}
          </span>
          {activeTopic.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#e5eeff] text-[#006a65]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button 
          onClick={() => setActiveTab('curriculum')}
          className="text-xs font-mono text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer font-bold"
        >
          <span>Browse 11 Branches Curriculum</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Topic Heading & Lead */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#041627] font-heading leading-tight mb-3">
          {activeTopic.title}
        </h1>
        <p className="text-sm sm:text-base text-[#44474c] leading-relaxed max-w-4xl">
          {activeTopic.leadExplanation}
        </p>

        {/* Subtopic Checklist / Index */}
        {activeTopic.subtopics && activeTopic.subtopics.length > 0 && (
          <div className="mt-4 p-3 bg-[#eff4ff]/60 border border-[#c4c6cd]/50 rounded-xl">
            <span className="text-[11px] font-mono font-bold text-[#006a65] block mb-2">
              CHAPTER SUBTOPICS INCLUDED:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {activeTopic.subtopics.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#041627]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006a65] shrink-0" />
                  <span className="truncate">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Primary Content) - 8 Cols */}
        <div className="lg:col-span-8 space-y-6">
          {/* Basic Exchange / Core Theoretical Foundation */}
          {activeTopic.basicExchange && (
            <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs">
              <h2 className="text-lg font-bold text-[#041627] font-heading mb-2">
                {activeTopic.basicExchange.title}
              </h2>
              <p className="text-sm text-[#44474c] leading-relaxed mb-4">
                {activeTopic.basicExchange.description}
              </p>
              {/* Formula Callout Box */}
              <div className="bg-[#041627] text-[#76f3ea] p-4 rounded-xl font-mono text-center text-sm sm:text-base font-bold tracking-wide border border-[#1a2b3c] shadow-inner relative group select-all">
                {activeTopic.basicExchange.formula}
                <button
                  onClick={() => handleCopyFormula(activeTopic.basicExchange!.formula)}
                  className="absolute right-3 top-3 bg-white/10 hover:bg-white/20 text-slate-300 p-1.5 rounded-lg transition-colors cursor-pointer"
                  title="Copy Formula"
                >
                  {copiedFormula === activeTopic.basicExchange.formula ? (
                    <Check className="w-3.5 h-3.5 text-[#76f3ea]" />
                  ) : (
                    <Bookmark className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Key Definitions & Glossary */}
          {activeTopic.keyDefinitions && activeTopic.keyDefinitions.length > 0 && (
            <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#eff4ff] pb-3 mb-4">
                <BookOpen className="w-4 h-4 text-[#006a65]" />
                <h2 className="text-base font-bold text-[#041627] font-heading">
                  Standard Definitions & Glossary
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTopic.keyDefinitions.map((def, dIdx) => (
                  <div key={dIdx} className="bg-[#f8f9ff] border border-[#c4c6cd]/60 rounded-xl p-3.5">
                    <span className="font-bold text-xs text-[#006a65] font-mono block mb-1">
                      {def.term}
                    </span>
                    <p className="text-xs text-[#44474c] leading-relaxed">
                      {def.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Equations & Master Formula Sheet */}
          {activeTopic.importantEquations && activeTopic.importantEquations.length > 0 && (
            <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#006a65]" />
                  <h2 className="text-base font-bold text-[#041627] font-heading">
                    Key Equations & Formulas
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-[#74777d]">
                  Exam Formula Reference
                </span>
              </div>
              <div className="space-y-3">
                {activeTopic.importantEquations.map((eq, eIdx) => (
                  <div key={eIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#041627] rounded-xl text-white">
                    <div>
                      <span className="text-[11px] font-mono text-[#76f3ea] font-semibold block">
                        {eq.label}
                      </span>
                      <code className="text-sm sm:text-base font-mono font-bold text-amber-300">
                        {eq.formula}
                      </code>
                      <p className="text-[11px] text-[#b7c8de] mt-1 font-sans">
                        {eq.explanation}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyFormula(eq.formula)}
                      className="self-end sm:self-auto bg-white/10 hover:bg-white/20 text-slate-300 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer shrink-0"
                    >
                      {copiedFormula === eq.formula ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Worked Example Step-by-Step Problem Solving */}
          {activeTopic.workedExamples && activeTopic.workedExamples.length > 0 && (
            <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#eff4ff] pb-3 mb-4">
                <Compass className="w-4 h-4 text-[#006a65]" />
                <h2 className="text-base font-bold text-[#041627] font-heading">
                  Step-by-Step Worked Problem
                </h2>
              </div>
              {activeTopic.workedExamples.map((ex, exIdx) => (
                <div key={exIdx} className="space-y-3">
                  <h3 className="text-sm font-bold text-[#041627] font-heading">
                    {ex.title}
                  </h3>
                  <div className="p-3 bg-[#eff4ff] border-l-4 border-[#006a65] rounded-r-xl text-xs sm:text-sm text-[#041627] font-medium">
                    {ex.problem}
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-[#44474c] uppercase tracking-wider font-mono">
                      Solution Breakdown:
                    </span>
                    {ex.steps.map((step, sIdx) => (
                      <div key={sIdx} className="text-xs text-[#44474c] leading-relaxed flex items-start gap-2 bg-[#f8f9ff] p-2.5 rounded-lg border border-[#c4c6cd]/40">
                        <span className="font-mono font-bold text-[#006a65] shrink-0">{sIdx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-[#041627] text-[#76f3ea] rounded-xl font-mono text-xs sm:text-sm font-bold mt-3">
                    Result: {ex.answer}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Structured Topic Sections */}
          {activeTopic.sections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs space-y-4"
            >
              <div className="border-b border-[#eff4ff] pb-3">
                <h2 className="text-xl font-bold text-[#041627] font-heading">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-xs font-mono text-[#006a65] mt-0.5">
                    {section.subtitle}
                  </p>
                )}
              </div>

              <p className="text-sm text-[#44474c] leading-relaxed">
                {section.description}
              </p>

              {/* Analogy Callout Box */}
              {section.analogy && (
                <div className="bg-[#eff4ff] border-l-4 border-[#006a65] p-4 rounded-r-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#006a65] font-heading uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>{section.analogy.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed">
                    {section.analogy.text}
                  </p>
                </div>
              )}

              {/* Formula snapshot within section if present */}
              {section.formulaBox && (
                <div className="bg-[#041627] text-[#76f3ea] p-3 rounded-lg font-mono text-sm text-center">
                  <span className="text-xs text-[#b7c8de] block mb-1 font-sans">{section.formulaBox.title}</span>
                  <code>{section.formulaBox.formula}</code>
                </div>
              )}

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {section.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {pt.type === 'info' ? (
                        <Info className="w-4 h-4 text-[#006a65]" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-[#006a65]" />
                      )}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <span className="font-bold text-[#041627] mr-1.5 font-heading">
                        {pt.label}:
                      </span>
                      <span className="text-[#44474c]">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Common Mistakes & Traps Callout */}
          {activeTopic.commonMistakes && activeTopic.commonMistakes.length > 0 && (
            <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 text-rose-800 font-heading font-bold text-base mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>Common Student Mistakes & Exam Pitfalls</span>
              </div>
              <div className="space-y-3">
                {activeTopic.commonMistakes.map((mistake, mIdx) => (
                  <div key={mIdx} className="bg-white/80 border border-rose-200 rounded-xl p-3.5 text-xs sm:text-sm space-y-1">
                    <div className="text-rose-900 font-semibold">
                      ❌ Pitfall: {mistake.mistake}
                    </div>
                    <div className="text-emerald-900 font-semibold">
                      ✓ Correction: {mistake.correction}
                    </div>
                    {mistake.why && (
                      <div className="text-[#74777d] text-xs pt-1">
                        Reason: {mistake.why}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Viva Voce Questions & Laboratory Defense */}
          {activeTopic.vivaQuestionsList && activeTopic.vivaQuestionsList.length > 0 && (
            <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#eff4ff] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#006a65]" />
                  <h2 className="text-base font-bold text-[#041627] font-heading">
                    Viva Voce & Oral Exam Questions
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTab('viva')}
                  className="text-xs font-mono text-[#006a65] hover:underline font-bold"
                >
                  All Viva Cards →
                </button>
              </div>
              <div className="space-y-3">
                {activeTopic.vivaQuestionsList.map((viva, vIdx) => (
                  <div key={vIdx} className="border border-[#c4c6cd]/60 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleViva(vIdx)}
                      className="w-full text-left p-3 bg-[#f8f9ff] hover:bg-[#eff4ff] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#041627]">
                        Q: {viva.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#74777d] transition-transform ${showVivaAnswer[vIdx] ? 'rotate-180' : ''}`} />
                    </button>
                    {showVivaAnswer[vIdx] && (
                      <div className="p-3 bg-white text-xs text-[#44474c] space-y-2 border-t border-[#c4c6cd]/40">
                        <p className="leading-relaxed">{viva.answer}</p>
                        {viva.examinerTip && (
                          <div className="text-[11px] font-mono text-[#006a65] bg-[#eff4ff] p-2 rounded">
                            Examiner Tip: {viva.examinerTip}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Test Your Knowledge CTA Banner */}
          <div className="bg-gradient-to-r from-[#041627] to-[#1a2b3c] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                Ready to test your understanding?
              </h3>
              <p className="text-xs sm:text-sm text-[#b7c8de] mt-1">
                Take the interactive practice quiz with instant feedback and worked solutions.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('practice')}
              className="bg-[#76f3ea] text-[#006f69] font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#59dad1] transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <span>Test Your Knowledge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column (Molecular Insight, Comparison Promo, Quick Revision) - 4 Cols */}
        <div className="lg:col-span-4 space-y-6">
          {/* Molecular Insight & Interactive Simulation Card */}
          <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-[#041627] font-heading">
                {activeTopic.insightCard.title}
              </h3>
              <span className="text-[10px] font-mono font-bold bg-[#dce9ff] text-[#006a65] px-2 py-0.5 rounded">
                {activeTopic.insightCard.badgeText}
              </span>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="mb-4">
              <MolecularDiagram type={activeTopic.insightCard.diagramType} />
            </div>

            <p className="text-xs text-[#44474c] leading-relaxed">
              {activeTopic.insightCard.caption}
            </p>
          </div>

          {/* Comparison Tool Promo Card */}
          <div className="bg-[#eff4ff] border border-[#c4c6cd] rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-[#006a65] text-white flex items-center justify-center mb-3 shadow-xs">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#041627] font-heading mb-1.5">
              Confused by the details?
            </h3>
            <p className="text-xs text-[#44474c] leading-relaxed mb-4">
              Compare mechanisms and equations side-by-side in our interactive Comparison Lab with custom highlight filters.
            </p>
            <button
              onClick={() => setActiveTab('comparison')}
              className="w-full bg-white border border-[#006a65] text-[#006a65] font-semibold text-xs py-2.5 px-4 rounded-xl hover:bg-[#006a65] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Open Comparison Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Revision Link Card */}
          <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-[#006a65]" />
              <h3 className="text-sm font-bold text-[#041627] font-heading">
                Quick Revision Notes
              </h3>
            </div>
            <p className="text-xs text-[#44474c] leading-relaxed mb-3">
              Need bite-sized formulas and bullet summaries for upcoming exam review?
            </p>
            <button
              onClick={() => setActiveTab('revision')}
              className="text-xs font-bold text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View Revision Hub</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
