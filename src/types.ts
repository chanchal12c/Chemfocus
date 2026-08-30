export type TabType = 
  | 'home' 
  | 'curriculum' 
  | 'topics' 
  | 'spectroscopy' 
  | 'laboratory' 
  | 'revision' 
  | 'comparison' 
  | 'practice' 
  | 'viva';

export type BranchId = 
  | 'physical'
  | 'organic'
  | 'inorganic'
  | 'analytical'
  | 'spectroscopy'
  | 'biochemistry'
  | 'polymer'
  | 'environmental'
  | 'industrial'
  | 'laboratory'
  | 'advanced';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface KeyDefinition {
  term: string;
  definition: string;
}

export interface ImportantEquation {
  label: string;
  formula: string;
  explanation?: string;
}

export interface FormulaCategory {
  category: string;
  formulas: string[];
}

export interface WorkedExample {
  title: string;
  problem: string;
  steps: string[];
  answer: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  why: string;
}

export interface PracticeQuestion {
  question: string;
  formulaContext?: string;
  options?: { id: string; text: string }[];
  correctOptionId?: string;
  answer?: string;
  explanation: string;
}

export interface TopicViva {
  question: string;
  answer: string;
  examinerTip?: string;
}

export interface ChemistryTopicSection {
  title: string;
  subtitle?: string;
  description: string;
  analogy?: {
    title: string;
    text: string;
  };
  points: {
    label: string;
    text: string;
    type?: 'check' | 'info' | 'warn';
  }[];
  formulaBox?: {
    title: string;
    formula: string;
  };
}

export interface ChemistryTopicInsight {
  title: string;
  caption: string;
  badgeText: string;
  diagramType: 
    | 'sn2_backside' 
    | 'thermo_cycle' 
    | 'titration_curve' 
    | 'gas_deviation'
    | 'quantum_box'
    | 'orbital_hybrid'
    | 'coordination_cft'
    | 'nmr_splitting'
    | 'ir_vibration'
    | 'enzyme_michaelis'
    | 'polymer_chain'
    | 'greenhouse_cycle'
    | 'haber_bosch'
    | 'distillation_setup'
    | 'band_theory'
    | 'salt_analysis';
}

export interface ChemistryTopic {
  id: string;
  title: string;
  branchId?: BranchId;
  subjectId?: string;
  category: string;
  difficulty?: DifficultyLevel;
  tags: string[];
  shortDescription: string;
  leadExplanation: string;
  subtopics?: string[];
  basicExchange?: {
    title: string;
    description: string;
    formula: string;
  };
  sections: ChemistryTopicSection[];
  insightCard: ChemistryTopicInsight;
  keyDefinitions?: KeyDefinition[];
  importantEquations?: ImportantEquation[];
  formulaSheet?: FormulaCategory[];
  workedExamples?: WorkedExample[];
  commonMistakes?: CommonMistake[];
  examFocusedPoints?: string[];
  practiceQuestions?: PracticeQuestion[];
  vivaQuestionsList?: TopicViva[];
  relatedTopicIds?: string[];
}

export interface ChemistrySubject {
  id: string;
  branchId: BranchId;
  title: string;
  description: string;
  topicIds: string[];
}

export interface ChemistryBranch {
  id: BranchId;
  name: string;
  shortDescription: string;
  iconName: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  subjects: ChemistrySubject[];
}

export interface RevisionCard {
  id: string;
  title: string;
  category: string;
  branchId?: BranchId;
  iconName: string;
  description: string;
  formulaSnapshot: {
    label: string;
    formulas: string[];
  };
  keyPoints: {
    label?: string;
    text: string;
  }[];
}

export interface ComparisonDataset {
  id: string;
  title: string;
  category: string;
  branchId?: BranchId;
  tags: string[];
  description: string;
  conceptA: {
    name: string;
    icon: string;
    equationTitle: string;
    equation: string;
    itemsHeader: string;
    items: {
      id: string;
      title: string;
      desc: string;
      highlightCategory?: 'pressure' | 'volume' | 'kinetics' | 'solvent' | 'substrate' | 'energy' | 'structure';
    }[];
  };
  conceptB: {
    name: string;
    icon: string;
    equationTitle: string;
    equation: string;
    itemsHeader: string;
    items: {
      id: string;
      title: string;
      desc: string;
      highlightCategory?: 'pressure' | 'volume' | 'kinetics' | 'solvent' | 'substrate' | 'energy' | 'structure';
    }[];
  };
  commonMistake: {
    title: string;
    text: string;
  };
  takeawayCards: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
}

export interface MCQQuestion {
  id: string;
  topicId: string;
  moduleName: string;
  branchId?: BranchId;
  question: string;
  formulaContext?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  hint?: string;
}

export interface VivaQuestion {
  id: string;
  topicId: string;
  moduleName: string;
  branchId?: BranchId;
  question: string;
  answer: string[];
  principle?: string;
  precautions?: string[];
  observations?: string;
}
