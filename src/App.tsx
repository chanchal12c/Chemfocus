import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CurriculumView } from './components/CurriculumView';
import { ExplainTopicView } from './components/ExplainTopicView';
import { RevisionView } from './components/RevisionView';
import { ComparisonLabView } from './components/ComparisonLabView';
import { PracticeView } from './components/PracticeView';
import { VivaView } from './components/VivaView';
import { SyllabusModal } from './components/SyllabusModal';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [currentTopicId, setCurrentTopicId] = useState<string>('sn1-sn2');
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);

  const handleSelectTopic = (topicId: string) => {
    setCurrentTopicId(topicId);
  };

  const showSidebar = activeTab !== 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectTopic={handleSelectTopic}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
      />

      {/* Main Content Layout */}
      <div className="flex-1 flex w-full">
        {/* Left Sidebar on Content/Study Pages */}
        {showSidebar && (
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenSyllabus={() => setIsSyllabusOpen(true)}
          />
        )}

        {/* Dynamic View Container */}
        <main className="flex-1 flex flex-col w-full overflow-x-hidden">
          {activeTab === 'home' && (
            <HomeView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
              onOpenSyllabus={() => setIsSyllabusOpen(true)}
            />
          )}

          {activeTab === 'curriculum' && (
            <CurriculumView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
            />
          )}

          {activeTab === 'topics' && (
            <ExplainTopicView
              currentTopicId={currentTopicId}
              onSelectTopic={handleSelectTopic}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'revision' && (
            <RevisionView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
            />
          )}

          {activeTab === 'comparison' && (
            <ComparisonLabView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
            />
          )}

          {activeTab === 'practice' && (
            <PracticeView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
            />
          )}

          {activeTab === 'viva' && (
            <VivaView
              setActiveTab={setActiveTab}
              onSelectTopic={handleSelectTopic}
            />
          )}
        </main>
      </div>

      {/* Global Chemistry Honours Syllabus Modal */}
      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        setActiveTab={setActiveTab}
        onSelectTopic={handleSelectTopic}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
      />
    </div>
  );
}

export default App;
