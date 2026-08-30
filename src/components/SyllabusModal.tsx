import React from 'react';
import { X, BookOpen, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';
import { TabType } from '../types';
import { CHEMISTRY_BRANCHES } from '../data/chemistryData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: TabType) => void;
  onSelectTopic: (topicId: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
  onSelectTopic
}) => {
  if (!isOpen) return null;

  const handleSubjectClick = (topicId?: string) => {
    if (topicId) {
      onSelectTopic(topicId);
      setActiveTab('topics');
    } else {
      setActiveTab('curriculum');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#041627]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-[#c4c6cd] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-[#eff4ff] border-b border-[#c4c6cd]/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006a65] text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#041627] font-heading">
                B.Sc. Chemistry Honours Master Syllabus
              </h2>
              <p className="text-xs text-[#44474c]">
                Complete 11-branch curriculum breakdown with direct access to topics and interactive modules
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#74777d] hover:text-[#041627] hover:bg-[#dce9ff] rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 11 Branches List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 divide-y divide-[#eff4ff]">
          {CHEMISTRY_BRANCHES.map((branch, bIdx) => (
            <div key={branch.id} className={bIdx > 0 ? 'pt-5 space-y-3' : 'space-y-3'}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#006a65] text-white text-[11px] font-bold font-mono flex items-center justify-center">
                    {bIdx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#041627] font-heading">
                    {branch.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#006a65] bg-[#e5eeff] px-2.5 py-0.5 rounded font-semibold">
                  {branch.subjects.length} Subjects
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {branch.subjects.map((subject) => {
                  const targetTopicId = subject.topicIds[0];
                  return (
                    <button
                      key={subject.id}
                      onClick={() => handleSubjectClick(targetTopicId)}
                      className="p-3 rounded-xl border border-[#c4c6cd]/70 hover:border-[#006a65] hover:bg-[#eff4ff] bg-[#f8f9ff] text-left text-xs transition-all flex items-center justify-between cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2 overflow-hidden pr-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#006a65] shrink-0" />
                        <span className="font-semibold text-[#041627] truncate group-hover:text-[#006a65]">
                          {subject.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#006a65] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#eff4ff] flex items-center justify-between">
          <button
            onClick={() => {
              setActiveTab('curriculum');
              onClose();
            }}
            className="text-xs font-bold text-[#006a65] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Open Full Curriculum Tree View →</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#006a65] text-white text-xs font-semibold hover:bg-[#00504c] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
