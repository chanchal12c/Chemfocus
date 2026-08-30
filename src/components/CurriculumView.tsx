import React, { useState } from 'react';
import { ChemistryBranch, TabType } from '../types';
import { CHEMISTRY_BRANCHES, CHEMISTRY_TOPICS } from '../data/chemistryData';
import { 
  Atom, 
  Sparkles, 
  Layers, 
  FlaskConical, 
  Activity, 
  Dna, 
  Network, 
  Leaf, 
  Factory, 
  ShieldCheck, 
  Cpu, 
  Search, 
  ArrowRight, 
  BookOpen, 
  ChevronRight,
  GraduationCap,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';

interface CurriculumViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ setActiveTab, onSelectTopic }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Map icon strings to Lucide icon components
  const renderBranchIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Atom': return <Atom className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Dna': return <Dna className={className} />;
      case 'Network': return <Network className={className} />;
      case 'Leaf': return <Leaf className={className} />;
      case 'Factory': return <Factory className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Filter branches and topics
  const filteredBranches = CHEMISTRY_BRANCHES.filter((b) => {
    if (selectedBranchId !== 'all' && b.id !== selectedBranchId) return false;
    return true;
  });

  const getTopicsForSubject = (topicIds: string[]) => {
    return CHEMISTRY_TOPICS.filter((t) => {
      if (!topicIds.includes(t.id)) return false;
      if (selectedDifficulty !== 'all' && t.difficulty !== selectedDifficulty) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchTags = t.tags.some(tag => tag.toLowerCase().includes(q));
        const matchDesc = t.shortDescription.toLowerCase().includes(q);
        const matchSub = t.subtopics?.some(s => s.toLowerCase().includes(q));
        if (!matchTitle && !matchTags && !matchDesc && !matchSub) return false;
      }
      return true;
    });
  };

  const handleTopicClick = (topicId: string) => {
    onSelectTopic(topicId);
    setActiveTab('topics');
  };

  return (
    <div className="flex-1 w-full bg-[#f8f9ff] min-h-screen py-8 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#c4c6cd]/70 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dce9ff] text-[#006a65] font-mono text-xs font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Hierarchical Master Curriculum (11 Branches)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#041627] font-heading">
              Complete Chemistry Curriculum
            </h1>
            <p className="text-sm text-[#44474c] mt-1 max-w-2xl">
              Standard undergraduate curriculum covering foundational theories, advanced kinetics, spectra, and practical laboratory methods.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('topics')}
              className="bg-[#006a65] text-white px-4 py-2.5 rounded-xl font-semibold text-xs hover:bg-[#00504c] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explain Active Topic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-[#74777d] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, subtopics, equations, theories (e.g. Schrödinger, CFT, NMR)..."
              className="w-full font-mono text-xs sm:text-sm bg-white border border-[#c4c6cd] rounded-xl pl-10 pr-4 py-2.5 text-[#0b1c30] focus:outline-none focus:border-[#006a65] focus:ring-1 focus:ring-[#006a65] transition-all placeholder-[#74777d]"
            />
          </div>

          {/* Difficulty and Branch Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <div className="flex items-center gap-1 bg-white border border-[#c4c6cd] rounded-xl p-1 text-xs font-mono shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#74777d] ml-1.5" />
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedDifficulty === 'all' ? 'bg-[#006a65] text-white font-bold' : 'text-[#44474c] hover:bg-[#eff4ff]'
                }`}
              >
                All Levels
              </button>
              <button
                onClick={() => setSelectedDifficulty('Beginner')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedDifficulty === 'Beginner' ? 'bg-[#006a65] text-white font-bold' : 'text-[#44474c] hover:bg-[#eff4ff]'
                }`}
              >
                Intro
              </button>
              <button
                onClick={() => setSelectedDifficulty('Intermediate')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedDifficulty === 'Intermediate' ? 'bg-[#006a65] text-white font-bold' : 'text-[#44474c] hover:bg-[#eff4ff]'
                }`}
              >
                Core Hons
              </button>
            </div>
          </div>
        </div>

        {/* Branch Selector Pills */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedBranchId('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedBranchId === 'all'
                ? 'bg-[#041627] text-[#76f3ea] shadow-xs'
                : 'bg-white text-[#44474c] border border-[#c4c6cd] hover:border-[#006a65]'
            }`}
          >
            All 11 Branches
          </button>
          {CHEMISTRY_BRANCHES.map((branch) => {
            const isSelected = selectedBranchId === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#006a65] text-white shadow-xs'
                    : 'bg-white text-[#44474c] border border-[#c4c6cd] hover:border-[#006a65]'
                }`}
              >
                {renderBranchIcon(branch.iconName, 'w-3.5 h-3.5')}
                <span>{branch.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hierarchical Curriculum Content */}
      <div className="space-y-10">
        {filteredBranches.map((branch) => {
          return (
            <div 
              key={branch.id} 
              className="bg-white border border-[#c4c6cd]/80 rounded-2xl p-6 shadow-xs hover:border-[#006a65]/50 transition-all"
            >
              {/* Branch Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#eff4ff] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e5eeff] text-[#006a65] flex items-center justify-center shadow-2xs">
                    {renderBranchIcon(branch.iconName, 'w-5 h-5')}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#041627] font-heading flex items-center gap-2">
                      <span>{branch.name}</span>
                      <span className="text-[11px] font-mono font-normal text-[#74777d]">
                        ({branch.subjects.length} Subjects)
                      </span>
                    </h2>
                    <p className="text-xs text-[#44474c]">
                      {branch.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#eff4ff] text-[#006a65] self-start sm:self-auto">
                  Honours Syllabus Unit
                </div>
              </div>

              {/* Subjects / Chapters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branch.subjects.map((subject) => {
                  const subjectTopics = getTopicsForSubject(subject.topicIds);
                  return (
                    <div
                      key={subject.id}
                      className="bg-[#f8f9ff] border border-[#c4c6cd]/70 rounded-xl p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#006a65] font-bold">
                            Chapter
                          </span>
                          <span className="text-[10px] font-mono text-[#74777d]">
                            {subject.topicIds.length} Master Topic{subject.topicIds.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-[#041627] font-heading mb-1">
                          {subject.title}
                        </h3>
                        <p className="text-xs text-[#44474c] mb-3 line-clamp-2">
                          {subject.description}
                        </p>

                        {/* Topics List Under Subject */}
                        <div className="space-y-1.5 mt-3 pt-3 border-t border-[#c4c6cd]/40">
                          {subjectTopics.length === 0 ? (
                            <div className="text-[11px] text-[#74777d] italic py-1">
                              Matching topics in other filters
                            </div>
                          ) : (
                            subjectTopics.map((topic) => (
                              <button
                                key={topic.id}
                                onClick={() => handleTopicClick(topic.id)}
                                className="w-full text-left p-2 rounded-lg bg-white border border-[#c4c6cd]/50 hover:border-[#006a65] hover:bg-[#eff4ff] transition-all group flex items-center justify-between cursor-pointer"
                              >
                                <div className="flex items-center gap-2 overflow-hidden pr-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006a65] shrink-0" />
                                  <span className="text-xs font-semibold text-[#041627] group-hover:text-[#006a65] truncate">
                                    {topic.title}
                                  </span>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-[#74777d] group-hover:text-[#006a65] group-hover:translate-x-0.5 transition-all shrink-0" />
                              </button>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Subtopics Breadcrumb Peek */}
                      {subjectTopics[0]?.subtopics && subjectTopics[0].subtopics.length > 0 && (
                        <div className="mt-3 pt-2 text-[10px] text-[#74777d] flex flex-wrap gap-1">
                          <span className="font-mono text-[#006a65]">Subtopics:</span>
                          {subjectTopics[0].subtopics.slice(0, 2).map((s, idx) => (
                            <span key={idx} className="bg-white px-1.5 py-0.5 rounded border border-[#c4c6cd]/40">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
