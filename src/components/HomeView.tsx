import React, { useState } from 'react';
import { TabType } from '../types';
import { CHEMISTRY_TOPICS, CHEMISTRY_BRANCHES } from '../data/chemistryData';
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  StickyNote, 
  ArrowLeftRight, 
  CheckSquare, 
  FlaskConical, 
  Atom, 
  Sparkles, 
  Layers, 
  Activity, 
  Dna, 
  Network, 
  Leaf, 
  Factory, 
  ShieldCheck, 
  Cpu,
  GraduationCap
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
  onOpenSyllabus: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onSelectTopic, onOpenSyllabus }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setActiveTab('curriculum');
      return;
    }
    const q = searchQuery.toLowerCase();
    const matched = CHEMISTRY_TOPICS.find(
      t =>
        t.title.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.subtopics?.some(s => s.toLowerCase().includes(q))
    );
    if (matched) {
      onSelectTopic(matched.id);
      setActiveTab('topics');
    } else {
      setActiveTab('curriculum');
    }
  };

  const renderBranchIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Dna': return <Dna className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex-1 w-full hex-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-12 py-12 md:py-20 max-w-[1240px] mx-auto text-center">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dce9ff] text-[#006a65] font-semibold text-xs mb-6 shadow-xs font-mono">
          <GraduationCap className="w-4 h-4 text-[#006a65]" />
          <span>Undergraduate Chemistry Honours Master Platform · 11 Branches</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#041627] mb-5 font-heading max-w-4xl mx-auto leading-tight">
          Master Chemistry with <br className="hidden sm:inline" />
          <span className="text-[#006a65] underline decoration-[#76f3ea] decoration-4 underline-offset-8">
            Molecular Precision
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg text-[#44474c] max-w-3xl mx-auto mb-8 leading-relaxed">
          Comprehensive curriculum from quantum wavefunctions to spectroscopy, organic synthesis, enzyme kinetics, and laboratory purification.
        </p>

        {/* Hero Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-md rounded-2xl bg-white p-1.5 border border-[#c4c6cd]/80 hover:border-[#006a65] transition-all">
            <Search className="w-5 h-5 text-[#74777d] ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 11 branches, equations, mechanisms (e.g. Schrödinger, SN2, CFT, NMR)..."
              className="w-full font-mono text-sm sm:text-base py-3 px-3.5 text-[#0b1c30] placeholder-[#74777d] bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#006a65] text-white px-5 sm:px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#00504c] transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('curriculum')}
            className="bg-[#006a65] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#00504c] transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore 11 Branches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenSyllabus}
            className="bg-[#eff4ff] text-[#041627] border border-[#c4c6cd] px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#dce9ff] transition-all cursor-pointer flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-[#006a65]" />
            <span>Honours Syllabus Map</span>
          </button>
        </div>
      </section>

      {/* 11 Major Chemistry Branches Grid */}
      <section className="px-4 sm:px-6 md:px-12 py-10 max-w-[1240px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#006a65]">
              Full Honours Spectrum
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#041627] font-heading">
              11 Major Chemistry Branches
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('curriculum')}
            className="text-sm font-semibold text-[#006a65] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <span>View full curriculum tree</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CHEMISTRY_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              onClick={() => {
                const firstTopic = branch.subjects[0]?.topicIds[0];
                if (firstTopic) {
                  onSelectTopic(firstTopic);
                  setActiveTab('topics');
                } else {
                  setActiveTab('curriculum');
                }
              }}
              className="bg-white border border-[#c4c6cd]/80 hover:border-[#006a65] rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006a65] group-hover:bg-[#006a65] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                  {renderBranchIcon(branch.iconName)}
                </div>
                <h3 className="font-bold text-[#041627] text-base mb-1 font-heading group-hover:text-[#006a65] transition-colors">
                  {branch.name}
                </h3>
                <p className="text-xs text-[#44474c] line-clamp-2 leading-relaxed">
                  {branch.shortDescription}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eff4ff] flex items-center justify-between text-[11px] font-mono text-[#74777d]">
                <span>{branch.subjects.length} Subjects</span>
                <span className="text-[#006a65] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid: Interactive Learning Pathways */}
      <section className="px-4 sm:px-6 md:px-12 py-10 max-w-[1240px] mx-auto">
        <div className="bg-[#eff4ff] rounded-3xl p-8 sm:p-10 border border-[#c4c6cd]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#041627] font-heading">
              Everything You Need for Chemistry Honours
            </h2>
            <p className="text-sm text-[#44474c] mt-2">
              Designed according to university examination syllabi and practical viva voce requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pathway 1 */}
            <div 
              onClick={() => setActiveTab('topics')}
              className="bg-white p-5 rounded-2xl border border-[#c4c6cd]/80 hover:border-[#006a65] transition-all cursor-pointer group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#006a65] mb-3 group-hover:bg-[#006a65] group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#041627] text-base mb-1 font-heading">Explain Concepts</h4>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Step-by-step intuitive breakdowns, real-world analogies, and molecular mechanism insights.
              </p>
            </div>

            {/* Pathway 2 */}
            <div 
              onClick={() => setActiveTab('revision')}
              className="bg-white p-5 rounded-2xl border border-[#c4c6cd]/80 hover:border-[#006a65] transition-all cursor-pointer group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#006a65] mb-3 group-hover:bg-[#006a65] group-hover:text-white transition-colors">
                <StickyNote className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#041627] text-base mb-1 font-heading">Revision Hub</h4>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Bento-grid exam notes, JetBrains Mono formula snapshots, and printable summary exports.
              </p>
            </div>

            {/* Pathway 3 */}
            <div 
              onClick={() => setActiveTab('comparison')}
              className="bg-white p-5 rounded-2xl border border-[#c4c6cd]/80 hover:border-[#006a65] transition-all cursor-pointer group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#006a65] mb-3 group-hover:bg-[#006a65] group-hover:text-white transition-colors">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#041627] text-base mb-1 font-heading">Comparison Lab</h4>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Side-by-side comparison tables with interactive highlight filters across mechanisms & crystal fields.
              </p>
            </div>

            {/* Pathway 4 */}
            <div 
              onClick={() => setActiveTab('practice')}
              className="bg-white p-5 rounded-2xl border border-[#c4c6cd]/80 hover:border-[#006a65] transition-all cursor-pointer group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#006a65] mb-3 group-hover:bg-[#006a65] group-hover:text-white transition-colors">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#041627] text-base mb-1 font-heading">Practice & Viva</h4>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Exam MCQs with formula panels, scratchpad, timer, and oral practical viva defense prep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
