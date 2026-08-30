import React, { useState } from 'react';
import { VIVA_QUESTIONS } from '../data/chemistryData';
import { VivaQuestion, TabType } from '../types';
import { 
  FlaskConical, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  FileText,
  BookOpen
} from 'lucide-react';

interface VivaViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const VivaView: React.FC<VivaViewProps> = ({ setActiveTab, onSelectTopic }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<string[]>(['viva-1']);
  const [selectedModule, setSelectedModule] = useState<string>('All');

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(VIVA_QUESTIONS.map((q) => q.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const filteredViva = VIVA_QUESTIONS.filter((item) => {
    const matchesModule =
      selectedModule === 'All' || item.moduleName.toLowerCase().includes(selectedModule.toLowerCase());
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.principle && item.principle.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesModule && matchesSearch;
  });

  return (
    <div className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#c4c6cd]/60">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9ff] text-[#006a65] text-xs font-mono font-bold uppercase mb-2">
            Practical Examination Prep
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#041627] font-heading">
            Laboratory Viva Voce Q&A
          </h1>
          <p className="text-sm text-[#44474c] mt-1 max-w-2xl">
            Frequent oral examination questions, underlying chemical principles, experimental precautions, and error analysis for honours practical assessments.
          </p>
        </div>

        {/* Quick Expand / Collapse Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg border border-[#c4c6cd] text-xs font-medium text-[#44474c] hover:bg-[#eff4ff] cursor-pointer"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg border border-[#c4c6cd] text-xs font-medium text-[#44474c] hover:bg-[#eff4ff] cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* Module Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Acid-Base Titrations', 'Practical Errors', 'Organic Reaction Mechanisms', 'Calorimetry'].map(
            (mod) => (
              <button
                key={mod}
                onClick={() => setSelectedModule(mod)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedModule === mod
                    ? 'bg-[#006a65] text-white shadow-xs font-semibold'
                    : 'bg-[#eff4ff] text-[#44474c] hover:bg-[#dce9ff]'
                }`}
              >
                {mod}
              </button>
            )
          )}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search viva questions..."
            className="w-full font-mono text-xs bg-white border border-[#c4c6cd] rounded-xl pl-9 pr-3 py-2 text-[#0b1c30] focus:outline-none focus:border-[#006a65]"
          />
          <Search className="w-3.5 h-3.5 text-[#74777d] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Viva Question Accordions */}
      <div className="space-y-4">
        {filteredViva.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#c4c6cd]">
            <FlaskConical className="w-8 h-8 text-[#74777d] mx-auto mb-2" />
            <p className="text-sm text-[#44474c]">No viva questions match your search.</p>
          </div>
        ) : (
          filteredViva.map((item, index) => {
            const isExpanded = expandedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white border border-[#c4c6cd]/80 rounded-2xl overflow-hidden shadow-xs hover:border-[#006a65]/70 transition-all"
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#f8f9ff] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase text-[#006a65] bg-[#eff4ff] px-2 py-0.5 rounded">
                        {item.moduleName}
                      </span>
                      <span className="text-xs font-mono text-[#74777d]">Q{index + 1}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#041627] font-heading mt-1">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#006a65] shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Answer Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#eff4ff] space-y-4">
                    {/* Underlying Principle */}
                    {item.principle && (
                      <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#c4c6cd]/60 flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-[#006a65] shrink-0 mt-0.5" />
                        <div className="text-xs text-[#041627]">
                          <strong className="text-[#006a65] font-heading mr-1">Underlying Principle:</strong>
                          {item.principle}
                        </div>
                      </div>
                    )}

                    {/* Step-by-Step Answer Explanations */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold font-mono text-[#74777d] uppercase">
                        Model Examiner Answer
                      </div>
                      {item.answer.map((ansParagraph, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44474c] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#006a65] shrink-0 mt-0.5" />
                          <span>{ansParagraph}</span>
                        </div>
                      ))}
                    </div>

                    {/* Precautions & Observations */}
                    {item.precautions && item.precautions.length > 0 && (
                      <div className="bg-[#ffdad6]/30 border-l-3 border-[#ba1a1a] p-3 rounded-r-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#93000a] font-heading">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Important Laboratory Precautions</span>
                        </div>
                        {item.precautions.map((prec, pIdx) => (
                          <p key={pIdx} className="text-xs text-[#44474c] pl-5">
                            • {prec}
                          </p>
                        ))}
                      </div>
                    )}

                    {item.observations && (
                      <div className="flex items-center gap-2 text-xs text-[#006a65] bg-[#dce9ff]/40 p-2.5 rounded-lg font-mono">
                        <Eye className="w-3.5 h-3.5" />
                        <span><strong>Observation Key:</strong> {item.observations}</span>
                      </div>
                    )}

                    {/* Link to full topic */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => {
                          onSelectTopic(item.topicId);
                          setActiveTab('topics');
                        }}
                        className="text-xs font-bold text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Review Related Topic Chapter</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
