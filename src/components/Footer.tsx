import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  setActiveTab?: (tab: TabType) => void;
  onOpenSyllabus?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSyllabus }) => {
  return (
    <footer className="bg-[#041627] text-white w-full mt-auto relative z-10 border-t border-[#1a2b3c]">
      <div className="w-full py-10 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto gap-6">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="text-[20px] font-bold text-[#79f6ed] font-heading tracking-tight">
              ChemFocus
            </span>
          </div>
          <p className="text-[12px] font-mono text-[#b7c8de]">
            © {new Date().getFullYear()} ChemFocus. Molecular Precision in Learning.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-[13px] font-mono text-[#b7c8de]">
          {setActiveTab && (
            <>
              <button 
                onClick={() => setActiveTab('topics')} 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Topics
              </button>
              <button 
                onClick={() => setActiveTab('revision')} 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Revision
              </button>
              <button 
                onClick={() => setActiveTab('comparison')} 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Comparison Lab
              </button>
              <button 
                onClick={() => setActiveTab('practice')} 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Practice MCQs
              </button>
              <button 
                onClick={() => setActiveTab('viva')} 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Viva Prep
              </button>
            </>
          )}
          {onOpenSyllabus && (
            <button 
              onClick={onOpenSyllabus} 
              className="hover:text-[#76f3ea] transition-colors cursor-pointer"
            >
              Curriculum Syllabus
            </button>
          )}
        </nav>
      </div>
    </footer>
  );
};
