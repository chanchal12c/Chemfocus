import React, { useState, useEffect, useRef } from 'react';
import { TabType } from '../types';
import { CHEMISTRY_TOPICS, COMPARISONS, REVISION_CARDS, VIVA_QUESTIONS, CHEMISTRY_BRANCHES } from '../data/chemistryData';
import { 
  Search, 
  Menu, 
  X, 
  BookOpen, 
  StickyNote, 
  ArrowLeftRight, 
  CheckSquare, 
  FlaskConical, 
  Home,
  User,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onSelectTopic?: (topicId: string) => void;
  onOpenSyllabus?: () => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  type: 'topic' | 'comparison' | 'revision' | 'viva' | 'curriculum';
  topicId?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onSelectTopic,
  onOpenSyllabus
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Comprehensive multi-section search results spanning 11 branches
  const getSearchResults = (): SearchResultItem[] => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    const results: SearchResultItem[] = [];

    // 1. Branches & Subjects
    CHEMISTRY_BRANCHES.forEach(branch => {
      if (branch.name.toLowerCase().includes(q) || branch.shortDescription.toLowerCase().includes(q)) {
        results.push({
          id: branch.id,
          title: branch.name,
          category: 'Curriculum Branch',
          snippet: branch.shortDescription,
          type: 'curriculum'
        });
      }
      branch.subjects.forEach(sub => {
        if (sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q)) {
          results.push({
            id: sub.id,
            title: `${branch.name} → ${sub.title}`,
            category: 'Subject Chapter',
            snippet: sub.description,
            type: 'topic',
            topicId: sub.topicIds[0]
          });
        }
      });
    });

    // 2. Chemistry Topics (Subtopics, Formulas, Titles)
    CHEMISTRY_TOPICS.forEach(topic => {
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchTags = topic.tags.some(tag => tag.toLowerCase().includes(q));
      const matchDesc = topic.shortDescription.toLowerCase().includes(q);
      const matchSub = topic.subtopics?.some(s => s.toLowerCase().includes(q));
      const matchEq = topic.importantEquations?.some(e => e.formula.toLowerCase().includes(q) || e.label.toLowerCase().includes(q));

      if (matchTitle || matchTags || matchDesc || matchSub || matchEq) {
        // avoid duplicates
        if (!results.some(r => r.topicId === topic.id)) {
          results.push({
            id: topic.id,
            title: topic.title,
            category: topic.category,
            snippet: topic.shortDescription,
            type: 'topic',
            topicId: topic.id
          });
        }
      }
    });

    // 3. Comparisons
    COMPARISONS.forEach(comp => {
      if (
        comp.title.toLowerCase().includes(q) ||
        comp.description.toLowerCase().includes(q) ||
        comp.tags.some(t => t.toLowerCase().includes(q)) ||
        comp.conceptA.name.toLowerCase().includes(q) ||
        comp.conceptB.name.toLowerCase().includes(q)
      ) {
        results.push({
          id: comp.id,
          title: comp.title,
          category: 'Comparison Lab',
          snippet: comp.description,
          type: 'comparison'
        });
      }
    });

    // 4. Revision Cards
    REVISION_CARDS.forEach(card => {
      if (
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.formulaSnapshot.formulas.some(f => f.toLowerCase().includes(q))
      ) {
        results.push({
          id: card.id,
          title: card.title,
          category: 'Revision Hub',
          snippet: card.description,
          type: 'revision'
        });
      }
    });

    // 5. Viva Voce
    VIVA_QUESTIONS.forEach(viva => {
      if (
        viva.question.toLowerCase().includes(q) ||
        viva.moduleName.toLowerCase().includes(q) ||
        viva.answer.some(a => a.toLowerCase().includes(q))
      ) {
        results.push({
          id: viva.id,
          title: viva.question,
          category: 'Viva Voce',
          snippet: viva.moduleName,
          type: 'viva',
          topicId: viva.topicId
        });
      }
    });

    return results.slice(0, 10);
  };

  const searchResults = getSearchResults();

  const handleSearchResultClick = (item: SearchResultItem) => {
    if (item.type === 'topic') {
      if (onSelectTopic && item.topicId) {
        onSelectTopic(item.topicId);
      }
      setActiveTab('topics');
    } else if (item.type === 'curriculum') {
      setActiveTab('curriculum');
    } else if (item.type === 'comparison') {
      setActiveTab('comparison');
    } else if (item.type === 'revision') {
      setActiveTab('revision');
    } else if (item.type === 'viva') {
      setActiveTab('viva');
    }
    setSearchQuery('');
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'curriculum', label: 'Curriculum', icon: <Layers className="w-4 h-4" /> },
    { id: 'topics', label: 'Explain Topic', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'revision', label: 'Revision', icon: <StickyNote className="w-4 h-4" /> },
    { id: 'comparison', label: 'Compare Concepts', icon: <ArrowLeftRight className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice & Quiz', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'viva', label: 'Viva Voce', icon: <FlaskConical className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-[#f8f9ff]/95 backdrop-blur-sm border-b border-[#c4c6cd]/60 sticky top-0 z-50 transition-all">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 max-w-[1360px] mx-auto h-16">
        {/* Brand / Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none shrink-0"
        >
          {/* Hexagon ChemFocus Logo Icon */}
          <div className="w-9 h-9 rounded-lg bg-[#041627] flex items-center justify-center text-[#76f3ea] shadow-sm group-hover:bg-[#006a65] transition-colors relative">
            <svg viewBox="0 0 40 40" className="w-6 h-6 stroke-current fill-none stroke-[2.5]">
              <path d="M 20,4 L 34,12 L 34,28 L 20,36 L 6,28 L 6,12 Z" />
              <circle cx="17" cy="18" r="5" strokeWidth="2" />
              <line x1="21" y1="22" x2="27" y2="28" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[19px] font-bold text-[#006a65] tracking-tight font-heading leading-none">
              ChemFocus
            </span>
            <span className="text-[10px] text-[#44474c] font-medium tracking-wide uppercase mt-0.5">
              11 Branches · Hons
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSearchOpen(false);
                }}
                className={`text-[14px] font-medium transition-all duration-200 cursor-pointer pb-1 relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#006a65] font-bold border-b-2 border-[#006a65]'
                    : 'text-[#44474c] hover:text-[#006a65]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Search & Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Search Box Desktop */}
          <div ref={searchContainerRef} className="relative hidden sm:block">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search 11 branches, topics, equations..."
                className="font-mono text-[12px] bg-[#eff4ff] border border-[#c4c6cd] rounded-full pl-9 pr-8 py-1.5 w-52 lg:w-60 xl:w-64 focus:w-72 focus:outline-none focus:border-[#006a65] focus:ring-1 focus:ring-[#006a65] transition-all placeholder-[#74777d] text-[#0b1c30]"
              />
              <Search className="w-4 h-4 text-[#74777d] absolute left-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-[#74777d] hover:text-[#0b1c30] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute right-0 mt-2 w-96 bg-white border border-[#c4c6cd] rounded-2xl shadow-xl p-2 z-50 max-h-96 overflow-y-auto">
                <div className="text-[11px] font-semibold text-[#74777d] uppercase px-3 py-1 font-mono flex items-center justify-between">
                  <span>Curriculum Matches ({searchResults.length})</span>
                  <span className="text-[10px] text-[#006a65]">ESC to close</span>
                </div>
                {searchResults.length === 0 ? (
                  <div className="px-3 py-6 text-center text-[13px] text-[#74777d]">
                    No matching results found for "{searchQuery}"
                  </div>
                ) : (
                  searchResults.map((item) => (
                    <button
                      key={`${item.type}-${item.id}`}
                      onClick={() => handleSearchResultClick(item)}
                      className="w-full text-left p-2.5 hover:bg-[#eff4ff] rounded-xl transition-colors flex flex-col gap-0.5 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-[#041627] group-hover:text-[#006a65] truncate pr-2">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#dce9ff] text-[#006a65] rounded font-mono font-medium shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#44474c] line-clamp-1">
                        {item.snippet}
                      </p>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Quick Syllabus Pill Button */}
          {onOpenSyllabus && (
            <button
              onClick={onOpenSyllabus}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-[#dce9ff]/70 border border-[#c4c6cd]/80 hover:border-[#006a65] hover:bg-[#dce9ff] rounded-full text-[12px] text-[#006a65] font-medium transition-all cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Syllabus Map</span>
            </button>
          )}

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-[#041627] hover:text-[#006a65] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#c4c6cd] px-4 py-4 space-y-3 shadow-lg">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 11 branches, topics, viva..."
              className="w-full font-mono text-[14px] bg-[#eff4ff] border border-[#c4c6cd] rounded-lg pl-10 pr-8 py-2.5 text-[#0b1c30] focus:outline-none focus:border-[#006a65]"
            />
            <Search className="w-4 h-4 text-[#74777d] absolute left-3.5 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-[#74777d]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search suggestions on mobile */}
          {searchQuery.trim().length > 0 && (
            <div className="bg-[#eff4ff] p-2 rounded-xl space-y-1 max-h-60 overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="p-3 text-center text-xs text-[#74777d]">
                  No matching results found
                </div>
              ) : (
                searchResults.map((item) => (
                  <button
                    key={`m-${item.type}-${item.id}`}
                    onClick={() => handleSearchResultClick(item)}
                    className="w-full text-left p-2.5 bg-white rounded-lg text-[13px] font-medium text-[#041627] flex items-center justify-between"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <span className="text-[10px] text-[#006a65] font-mono shrink-0">{item.category}</span>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 p-3 rounded-lg text-[13px] font-medium transition-all ${
                    isActive
                      ? 'bg-[#76f3ea] text-[#006f69] font-bold'
                      : 'bg-[#eff4ff] text-[#44474c] hover:bg-[#dce9ff]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Honours Syllabus Button on Mobile Drawer */}
          {onOpenSyllabus && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="w-full mt-2 py-2.5 px-3 bg-[#041627] text-[#76f3ea] rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>View B.Sc. Chemistry Honours Syllabus</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
