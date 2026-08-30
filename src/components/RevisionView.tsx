import React, { useState } from 'react';
import { REVISION_CARDS } from '../data/chemistryData';
import { RevisionCard, TabType } from '../types';
import { 
  Download, 
  Bookmark, 
  BookmarkCheck, 
  Search, 
  Bolt, 
  Thermometer, 
  Compass, 
  Sparkles, 
  Hourglass, 
  Zap, 
  Printer, 
  Check,
  BookOpen,
  FileText
} from 'lucide-react';

interface RevisionViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({ setActiveTab, onSelectTopic }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['first-law', 'gibbs-energy']);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showPrintSuccess, setShowPrintSuccess] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bolt':
        return <Bolt className="w-5 h-5" />;
      case 'thermometer':
        return <Thermometer className="w-5 h-5" />;
      case 'compass':
        return <Compass className="w-5 h-5" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'hourglass':
        return <Hourglass className="w-5 h-5" />;
      case 'zap':
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const filteredCards = REVISION_CARDS.filter((card) => {
    const matchesCategory =
      filterCategory === 'All' ||
      card.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
      (filterCategory === 'Bookmarked' && bookmarkedIds.includes(card.id));

    const matchesSearch =
      card.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      card.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      card.keyPoints.some((p) => p.text.toLowerCase().includes(searchFilter.toLowerCase())) ||
      card.formulaSnapshot.formulas.some((f) => f.toLowerCase().includes(searchFilter.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Browser Print / PDF Export
  const handlePrintSummary = () => {
    setIsExporting(true);
    setTimeout(() => {
      try {
        window.print();
      } catch (e) {
        console.warn('Print triggered', e);
      }
      setIsExporting(false);
      setShowPrintSuccess(true);
      setTimeout(() => setShowPrintSuccess(false), 3000);
    }, 400);
  };

  // Direct Markdown / Text File Download Export
  const handleDownloadNotes = () => {
    const lines: string[] = [];
    lines.push('=====================================================');
    lines.push('       CHEMFOCUS - B.SC. CHEMISTRY HONOURS STUDY SHEET');
    lines.push('=====================================================\n');
    
    filteredCards.forEach((card, idx) => {
      lines.push(`[${idx + 1}] ${card.title.toUpperCase()} (${card.category})`);
      lines.push(`Description: ${card.description}`);
      lines.push(`\n--- ${card.formulaSnapshot.label} ---`);
      card.formulaSnapshot.formulas.forEach((f) => {
        lines.push(`  • ${f}`);
      });
      lines.push('\n--- KEY EXAM POINTS ---');
      card.keyPoints.forEach((kp) => {
        lines.push(`  • ${kp.label ? kp.label + ': ' : ''}${kp.text}`);
      });
      lines.push('\n-----------------------------------------------------\n');
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ChemFocus_Study_Sheet_${filterCategory.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#c4c6cd]/60">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9ff] text-[#006a65] text-xs font-mono font-bold uppercase mb-2">
            Exam Revision Deck
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#041627] font-heading">
            Chemistry Revision Hub
          </h1>
          <p className="text-sm text-[#44474c] mt-1 max-w-2xl">
            Bite-sized revision notes, key definitions, and formula snapshots formatted for high-yield honours exam preparation.
          </p>
        </div>

        {/* Action buttons: Download & Print / PDF export */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadNotes}
            className="bg-[#eff4ff] border border-[#c4c6cd] text-[#041627] hover:bg-[#dce9ff] hover:border-[#006a65] px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
            title="Download notes as text file"
          >
            {downloadSuccess ? (
              <span className="flex items-center gap-1.5 text-[#006a65]">
                <Check className="w-4 h-4" /> Downloaded!
              </span>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#006a65]" />
                <span>Download Notes (.txt)</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrintSummary}
            className="bg-[#006a65] text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#00504c] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            {isExporting ? (
              <span className="flex items-center gap-2">Generating...</span>
            ) : showPrintSuccess ? (
              <span className="flex items-center gap-1.5 text-[#76f3ea]">
                <Check className="w-4 h-4" /> Ready to Print
              </span>
            ) : (
              <>
                <Printer className="w-4 h-4" />
                <span>Export Study Sheet</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Physical Chemistry', 'Organic Chemistry', 'Bookmarked'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#006a65] text-white shadow-xs font-semibold'
                  : 'bg-[#eff4ff] text-[#44474c] hover:bg-[#dce9ff]'
              }`}
            >
              {cat === 'Bookmarked' ? `★ Bookmarked (${bookmarkedIds.length})` : cat}
            </button>
          ))}
        </div>

        {/* Quick search input & count */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter formulas or terms..."
              className="w-full font-mono text-xs bg-white border border-[#c4c6cd] rounded-xl pl-9 pr-3 py-2 text-[#0b1c30] focus:outline-none focus:border-[#006a65]"
            />
            <Search className="w-3.5 h-3.5 text-[#74777d] absolute left-3 top-2.5" />
          </div>
          <span className="text-[11px] font-mono text-[#74777d] shrink-0">
            {filteredCards.length} cards
          </span>
        </div>
      </div>

      {/* Bento Grid Revision Cards */}
      {filteredCards.length === 0 ? (
        <div className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-12 text-center">
          <FileText className="w-12 h-12 text-[#74777d] mx-auto mb-3 opacity-50" />
          <h3 className="text-base font-bold text-[#041627]">No revision cards match your filter</h3>
          <p className="text-xs text-[#44474c] mt-1">Try clearing your search term or switching category.</p>
          <button
            onClick={() => { setFilterCategory('All'); setSearchFilter(''); }}
            className="mt-4 px-4 py-2 bg-[#006a65] text-white text-xs font-semibold rounded-lg hover:bg-[#00504c] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const isBookmarked = bookmarkedIds.includes(card.id);
            return (
              <div
                key={card.id}
                className="bg-white border border-[#c4c6cd]/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header Strip with category & bookmark button */}
                  <div className="bg-[#eff4ff] px-5 py-3.5 flex items-center justify-between border-b border-[#c4c6cd]/50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#041627] text-[#76f3ea] flex items-center justify-center">
                        {getIcon(card.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#006a65]">
                          {card.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(card.id)}
                      className="text-[#74777d] hover:text-[#006a65] p-1 transition-colors cursor-pointer"
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark card'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-[#006a65] fill-[#006a65]/20" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#041627] font-heading">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#44474c] mt-1 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Formula Snapshot Box */}
                    <div className="bg-[#041627] text-white p-3.5 rounded-xl border border-[#1a2b3c]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#b7c8de] block mb-1">
                        {card.formulaSnapshot.label}
                      </span>
                      <div className="space-y-1">
                        {card.formulaSnapshot.formulas.map((f, fIdx) => (
                          <div
                            key={fIdx}
                            className="font-mono text-sm sm:text-base font-bold text-[#76f3ea] tracking-wide overflow-x-auto"
                          >
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Exam Points */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-bold text-[#74777d] uppercase tracking-wider font-mono">
                        Key Exam Points
                      </div>
                      {card.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="text-xs text-[#44474c] flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#006a65] font-bold shrink-0">•</span>
                          <span>
                            {point.label && (
                              <strong className="text-[#041627] mr-1">{point.label}:</strong>
                            )}
                            {point.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Action */}
                <div className="px-5 py-3 bg-[#f8f9ff] border-t border-[#eff4ff] flex items-center justify-between text-xs">
                  <span className="text-[#74777d] font-mono text-[11px]">Honours Core</span>
                  <button
                    onClick={() => {
                      if (card.id.includes('sn1') || card.id.includes('sn2')) {
                        onSelectTopic('sn1-sn2');
                      } else {
                        onSelectTopic('thermodynamics');
                      }
                      setActiveTab('topics');
                    }}
                    className="font-bold text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Deep Dive</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
