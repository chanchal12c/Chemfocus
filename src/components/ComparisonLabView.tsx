import React, { useState } from 'react';
import { COMPARISONS } from '../data/chemistryData';
import { ComparisonDataset, TabType } from '../types';
import { 
  ArrowLeftRight, 
  CircleDot, 
  Orbit, 
  AlertTriangle, 
  ArrowDown, 
  ArrowUp, 
  CheckCircle, 
  Hourglass, 
  Zap, 
  Filter,
  Check
} from 'lucide-react';

interface ComparisonLabViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const ComparisonLabView: React.FC<ComparisonLabViewProps> = ({ setActiveTab, onSelectTopic }) => {
  const [selectedComparisonId, setSelectedComparisonId] = useState<string>('ideal-vs-real-gases');
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const activeComparison: ComparisonDataset =
    COMPARISONS.find((c) => c.id === selectedComparisonId) || COMPARISONS[0];

  const getConceptIcon = (iconName: string) => {
    switch (iconName) {
      case 'circle-dot':
        return <CircleDot className="w-5 h-5" />;
      case 'orbit':
        return <Orbit className="w-5 h-5" />;
      case 'hourglass':
        return <Hourglass className="w-5 h-5" />;
      case 'zap':
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getTakeawayIcon = (iconName: string) => {
    switch (iconName) {
      case 'arrow-down':
        return <ArrowDown className="w-4 h-4 text-[#006a65]" />;
      case 'arrow-up':
        return <ArrowUp className="w-4 h-4 text-[#006a65]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#006a65]" />;
    }
  };

  return (
    <div className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
      {/* Header Topic Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#c4c6cd]/60">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-5 h-5 text-[#006a65]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#44474c]">
            Comparison Matrix:
          </span>
        </div>
        <div className="flex gap-2">
          {COMPARISONS.map((comp) => {
            const isSelected = comp.id === activeComparison.id;
            return (
              <button
                key={comp.id}
                onClick={() => {
                  setSelectedComparisonId(comp.id);
                  setActiveHighlight(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#006a65] text-white shadow-xs font-semibold'
                    : 'bg-[#e5eeff] text-[#041627] hover:bg-[#dce9ff]'
                }`}
              >
                {comp.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {activeComparison.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#e5eeff] text-[#006a65]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#041627] font-heading mb-2">
          {activeComparison.title}
        </h1>
        <p className="text-sm text-[#44474c] leading-relaxed max-w-3xl">
          {activeComparison.description}
        </p>
      </div>

      {/* Interactive Highlight Toolbar matching Image 8 */}
      <div className="bg-[#eff4ff] border border-[#c4c6cd] rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#041627] font-heading">
          <Filter className="w-4 h-4 text-[#006a65]" />
          <span>Interactive Property Highlights:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveHighlight(null)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeHighlight === null
                ? 'bg-[#006a65] text-white font-bold'
                : 'bg-white text-[#44474c] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
            }`}
          >
            Show All
          </button>

          {activeComparison.id === 'ideal-vs-real-gases' ? (
            <>
              <button
                onClick={() =>
                  setActiveHighlight(activeHighlight === 'pressure' ? null : 'pressure')
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeHighlight === 'pressure'
                    ? 'bg-[#041627] text-[#76f3ea] font-bold ring-2 ring-[#006a65]'
                    : 'bg-white text-[#041627] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
                }`}
              >
                Highlight Pressure Term (a)
              </button>
              <button
                onClick={() =>
                  setActiveHighlight(activeHighlight === 'volume' ? null : 'volume')
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeHighlight === 'volume'
                    ? 'bg-[#041627] text-[#76f3ea] font-bold ring-2 ring-[#006a65]'
                    : 'bg-white text-[#041627] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
                }`}
              >
                Highlight Volume Term (b)
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  setActiveHighlight(activeHighlight === 'kinetics' ? null : 'kinetics')
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeHighlight === 'kinetics'
                    ? 'bg-[#041627] text-[#76f3ea] font-bold ring-2 ring-[#006a65]'
                    : 'bg-white text-[#041627] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
                }`}
              >
                Highlight Kinetics & Steps
              </button>
              <button
                onClick={() =>
                  setActiveHighlight(activeHighlight === 'substrate' ? null : 'substrate')
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeHighlight === 'substrate'
                    ? 'bg-[#041627] text-[#76f3ea] font-bold ring-2 ring-[#006a65]'
                    : 'bg-white text-[#041627] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
                }`}
              >
                Highlight Substrate & Stereochemistry
              </button>
              <button
                onClick={() =>
                  setActiveHighlight(activeHighlight === 'solvent' ? null : 'solvent')
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeHighlight === 'solvent'
                    ? 'bg-[#041627] text-[#76f3ea] font-bold ring-2 ring-[#006a65]'
                    : 'bg-white text-[#041627] border border-[#c4c6cd]/80 hover:bg-[#dce9ff]'
                }`}
              >
                Highlight Solvent Effects
              </button>
            </>
          )}
        </div>
      </div>

      {/* Side-by-Side Bento Grid Columns matching Image 8 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Concept A Column (e.g. Ideal Gas or SN1) */}
        <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#eff4ff]">
              <div className="w-10 h-10 rounded-xl bg-[#041627] text-[#76f3ea] flex items-center justify-center shadow-2xs">
                {getConceptIcon(activeComparison.conceptA.icon)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#041627] font-heading">
                  {activeComparison.conceptA.name}
                </h2>
                <span className="text-[11px] font-mono text-[#006a65]">Theoretical Baseline</span>
              </div>
            </div>

            {/* Equation of State / Rate Law */}
            <div className="bg-[#041627] text-white p-4 rounded-xl border border-[#1a2b3c]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#b7c8de] block mb-1">
                {activeComparison.conceptA.equationTitle}
              </span>
              <div className="font-mono text-lg font-bold text-[#76f3ea] tracking-wide">
                {activeComparison.conceptA.equation}
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              <div className="text-xs font-bold font-mono uppercase text-[#74777d]">
                {activeComparison.conceptA.itemsHeader}
              </div>
              {activeComparison.conceptA.items.map((item) => {
                const isItemHighlighted =
                  activeHighlight && item.highlightCategory === activeHighlight;
                const isDimmed = activeHighlight && item.highlightCategory !== activeHighlight;

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isItemHighlighted
                        ? 'bg-[#dce9ff] border-[#006a65] shadow-xs scale-[1.01]'
                        : isDimmed
                        ? 'bg-[#f8f9ff] border-[#e2e8f0] opacity-40'
                        : 'bg-[#eff4ff]/60 border-[#c4c6cd]/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#041627] mb-1 font-heading">
                      {item.title}
                    </div>
                    <p className="text-xs text-[#44474c] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Concept B Column (e.g. Real Gas or SN2) */}
        <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#eff4ff]">
              <div className="w-10 h-10 rounded-xl bg-[#006a65] text-[#76f3ea] flex items-center justify-center shadow-2xs">
                {getConceptIcon(activeComparison.conceptB.icon)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#041627] font-heading">
                  {activeComparison.conceptB.name}
                </h2>
                <span className="text-[11px] font-mono text-[#006a65]">Real Physical System</span>
              </div>
            </div>

            {/* Van der Waals Equation / Rate Law */}
            <div className="bg-[#041627] text-white p-4 rounded-xl border border-[#1a2b3c]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#b7c8de] block mb-1">
                {activeComparison.conceptB.equationTitle}
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#76f3ea] tracking-wide">
                {activeComparison.conceptB.equation}
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              <div className="text-xs font-bold font-mono uppercase text-[#74777d]">
                {activeComparison.conceptB.itemsHeader}
              </div>
              {activeComparison.conceptB.items.map((item) => {
                const isItemHighlighted =
                  activeHighlight && item.highlightCategory === activeHighlight;
                const isDimmed = activeHighlight && item.highlightCategory !== activeHighlight;

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isItemHighlighted
                        ? 'bg-[#dce9ff] border-[#006a65] shadow-xs scale-[1.01]'
                        : isDimmed
                        ? 'bg-[#f8f9ff] border-[#e2e8f0] opacity-40'
                        : 'bg-[#eff4ff]/60 border-[#c4c6cd]/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#041627] mb-1 font-heading">
                      {item.title}
                    </div>
                    <p className="text-xs text-[#44474c] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Common Mistake Alert Card matching Image 8 */}
      <div className="bg-[#ffdad6]/60 border-l-4 border-[#ba1a1a] p-5 rounded-r-2xl mb-8 flex items-start gap-4 shadow-xs">
        <div className="p-2 bg-[#ffdad6] rounded-xl text-[#93000a] shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#93000a] font-heading">
            {activeComparison.commonMistake.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#44474c] mt-1 leading-relaxed">
            {activeComparison.commonMistake.text}
          </p>
        </div>
      </div>

      {/* Takeaway Cards (Conditions for Ideal Behavior / Stereochemical Outcomes) */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-bold uppercase text-[#74777d]">
          Key Conditions & Summary Rules
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeComparison.takeawayCards.map((card, cIdx) => (
            <div
              key={cIdx}
              className="bg-white border border-[#c4c6cd]/80 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs"
            >
              <div className="p-2 rounded-lg bg-[#eff4ff] shrink-0">
                {getTakeawayIcon(card.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#041627] font-heading">{card.title}</h4>
                <p className="text-xs text-[#44474c] mt-0.5 leading-relaxed">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation Footer */}
        <div className="bg-[#eff4ff] border border-[#c4c6cd]/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div>
            <h4 className="text-sm font-bold text-[#041627] font-heading">
              Ready to test your conceptual clarity?
            </h4>
            <p className="text-xs text-[#44474c] mt-0.5">
              Practice timed MCQs on this comparison or review detailed reaction mechanisms.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (activeComparison.id.includes('sn1')) {
                  onSelectTopic('sn1-sn2');
                } else {
                  onSelectTopic('thermodynamics');
                }
                setActiveTab('topics');
              }}
              className="px-4 py-2 bg-white border border-[#c4c6cd] hover:border-[#006a65] text-[#041627] rounded-xl text-xs font-semibold cursor-pointer transition-all"
            >
              Read Full Chapter
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className="px-4 py-2 bg-[#006a65] hover:bg-[#00504c] text-white rounded-xl text-xs font-bold cursor-pointer transition-all shadow-xs"
            >
              Take Practice Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
