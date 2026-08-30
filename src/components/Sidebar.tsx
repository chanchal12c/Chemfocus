import React from 'react';
import { TabType } from '../types';
import { 
  Home, 
  BookOpen, 
  StickyNote, 
  ArrowLeftRight, 
  CheckSquare, 
  FlaskConical, 
  Play,
  GraduationCap,
  Layers
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenSyllabus?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onOpenSyllabus }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'curriculum', label: 'Curriculum', icon: <Layers className="w-4 h-4" /> },
    { id: 'topics', label: 'Explain Topic', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'revision', label: 'Revision Hub', icon: <StickyNote className="w-4 h-4" /> },
    { id: 'comparison', label: 'Comparison Lab', icon: <ArrowLeftRight className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice & Quiz', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'viva', label: 'Viva Voce', icon: <FlaskConical className="w-4 h-4" /> },
  ];

  return (
    <aside className="hidden lg:flex flex-col p-4 gap-2 bg-[#eff4ff] border-r border-[#c4c6cd] h-[calc(100vh-4rem)] w-64 sticky top-16 overflow-y-auto shrink-0 select-none">
      {/* Brand & User Profile Snippet */}
      <div className="mb-4 px-2 pt-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#041627] border border-[#c4c6cd] flex items-center justify-center text-[#76f3ea] font-bold text-sm shadow-sm">
            CF
          </div>
          <div>
            <div className="text-[16px] font-bold text-[#006a65] leading-tight font-heading">
              ChemFocus
            </div>
            <div className="text-[11px] text-[#44474c] font-medium font-mono">
              B.Sc. Chemistry (Hons)
            </div>
          </div>
        </div>

        {/* Start Quiz Action */}
        <button
          onClick={() => setActiveTab('practice')}
          className="w-full bg-[#006a65] text-white rounded-xl hover:bg-[#00504c] transition-colors py-2.5 px-3 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          Start Practice Quiz
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] transition-all text-left cursor-pointer ${
                isActive
                  ? 'bg-[#76f3ea] text-[#006f69] font-bold translate-x-1 shadow-xs'
                  : 'text-[#44474c] hover:bg-[#dce9ff] hover:text-[#041627] font-medium'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick stats & Syllabus bottom indicator */}
      <div className="mt-auto pt-4 border-t border-[#c4c6cd]/60 px-2 space-y-3">
        {onOpenSyllabus && (
          <button
            onClick={onOpenSyllabus}
            className="w-full p-2.5 bg-white border border-[#c4c6cd]/80 hover:border-[#006a65] hover:bg-[#dce9ff]/40 rounded-xl text-xs font-semibold text-[#006a65] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Honours Syllabus</span>
          </button>
        )}
        <div className="text-[12px]">
          <div className="text-[#44474c] font-medium mb-1">Master Curriculum</div>
          <div className="flex items-center justify-between text-[11px] text-[#74777d]">
            <span>11 Branches · 35+ Subjects</span>
            <span className="text-[#006a65] font-bold">Loaded</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
