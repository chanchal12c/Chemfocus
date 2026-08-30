import { ChemistryTopic, RevisionCard, ComparisonDataset, MCQQuestion, VivaQuestion } from '../types';
import { MASTER_TOPICS, CHEMISTRY_BRANCHES } from './curriculumData';

export { CHEMISTRY_BRANCHES };

// Core topics including original topics enhanced with full subtopics, definitions, equations, examples & exam points
export const BASE_TOPICS: ChemistryTopic[] = [
  {
    id: 'sn1-sn2',
    title: 'Nucleophilic Substitution: The SN1 and SN2 Explained Simply',
    branchId: 'organic',
    subjectId: 'mechanisms-substitution',
    category: 'Organic',
    difficulty: 'Beginner',
    tags: ['Reaction Mechanisms', 'Organic', 'Kinetics', 'Stereochemistry'],
    shortDescription: 'Understanding how molecules swap partners: steric hindrance, solvent effects, and reaction kinetics.',
    leadExplanation: 'Understanding how molecules swap partners. A foundational deep-dive into the mechanisms that drive organic synthesis, focusing on steric hindrance, solvent effects, and reaction kinetics.',
    subtopics: [
      'The SN2 Backside Attack & Transition State',
      'Walden Inversion & Stereochemical Inversion',
      'The SN1 Carbocation Intermediate & Hyperconjugation',
      'Solvent Effects: Polar Protic vs Polar Aprotic',
      'Leaving Group Ability & Nucleophilicity Trends'
    ],
    basicExchange: {
      title: 'The Basic Exchange',
      description: 'At its core, nucleophilic substitution is a molecular dance where one functional group (the leaving group) is replaced by another (the nucleophile). Think of it as a substitution in a football match: one player leaves the field so another can enter.',
      formula: 'Nu⁻ + R-LG → R-Nu + LG⁻'
    },
    keyDefinitions: [
      {
        term: 'Nucleophile (Nu⁻)',
        definition: 'An electron-rich chemical species with a lone pair or π-bond that seeks an electron-deficient electrophilic center.'
      },
      {
        term: 'Leaving Group (LG⁻)',
        definition: 'An atom or group that departs with the bonding pair of electrons; good leaving groups are weak conjugate bases of strong acids (e.g., I⁻, Br⁻, TsO⁻).'
      },
      {
        term: 'Walden Inversion',
        definition: 'The complete reversal of stereochemical configuration at an sp³ chiral center caused by 180° backside nucleophilic attack in SN2 reactions.'
      }
    ],
    importantEquations: [
      {
        label: 'SN2 Rate Law',
        formula: 'Rate = k [Substrate] [Nucleophile]',
        explanation: 'Bimolecular second-order kinetics; doubling either substrate or nucleophile doubles the reaction velocity.'
      },
      {
        label: 'SN1 Rate Law',
        formula: 'Rate = k [Substrate]',
        explanation: 'Unimolecular first-order kinetics; rate is independent of nucleophile concentration.'
      }
    ],
    formulaSheet: [
      {
        category: 'Substrate Reactivity Ranking',
        formulas: [
          'SN2 Reactivity: Methyl > 1° > 2° >> 3° (Steric accessibility)',
          'SN1 Reactivity: 3° > 2° >> 1° > Methyl (Carbocation stabilization)'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Determining the Mechanism for 2-Bromobutane + Sodium Cyanide in DMSO',
        problem: 'Predict the mechanism (SN1 vs SN2) and stereochemical outcome when (S)-2-bromobutane is treated with NaCN in dimethyl sulfoxide (DMSO).',
        steps: [
          'Step 1: Identify the substrate: 2-bromobutane is a secondary (2°) alkyl halide.',
          'Step 2: Identify the nucleophile: Cyanide ion (CN⁻) is a strong, unhindered nucleophile.',
          'Step 3: Identify the solvent: DMSO is a polar aprotic solvent, which solvates Na⁺ cations and leaves the CN⁻ anion uncluttered and highly reactive.',
          'Step 4: Combine factors: Secondary substrate + strong nucleophile + polar aprotic solvent strongly favors the concerted SN2 pathway.',
          'Step 5: Predict stereochemistry: 180° backside attack causes complete inversion of the chiral center from (S) to (R).'
        ],
        answer: 'SN2 mechanism yielding (R)-2-methylbutanenitrile with 100% inversion of stereochemistry.'
      }
    ],
    sections: [
      {
        title: 'The SN2 Mechanism: The Backside Attack',
        subtitle: 'Concerted, one-step bimolecular pathway',
        description: 'SN2 stands for Substitution Nucleophilic Bimolecular. It is a concerted, one-step process where bond-breaking and bond-forming happen simultaneously with no intermediate.',
        analogy: {
          title: 'The Analogy: The Crowded Room',
          text: 'Imagine a person (the leaving group) standing in a small room. Another person (the nucleophile) wants to enter. If the room is cluttered with bulky furniture (bulky alkyl groups on a tertiary carbon), the new person cannot get in. They need clear open space. They must enter through the back door just as the other person leaves through the front.'
        },
        points: [
          {
            label: 'Kinetics',
            text: 'Rate = k[Substrate][Nucleophile]. Second-order kinetics—both reactants dictate the rate.',
            type: 'check'
          },
          {
            label: 'Stereochemistry',
            text: 'Complete inversion of stereochemical configuration (Walden Inversion, like an umbrella blown inside-out in strong wind).',
            type: 'check'
          },
          {
            label: 'Substrate Preference',
            text: 'Methyl > 1° > 2° >> 3° (Tertiary substrates do not undergo SN2 due to severe steric crowding).',
            type: 'check'
          },
          {
            label: 'Favored Solvent',
            text: 'Polar Aprotic solvents (e.g., Acetone, DMSO, DMF) keep the nucleophile naked and reactive without cage-like hydrogen bonding.',
            type: 'info'
          }
        ]
      },
      {
        title: 'The SN1 Mechanism: Wait Your Turn',
        subtitle: 'Two-step unimolecular pathway via carbocation intermediate',
        description: 'SN1 stands for Substitution Nucleophilic Unimolecular. This is a stepwise process. The leaving group must first depart on its own to generate a flat, trigonal planar carbocation intermediate before the nucleophile can attack.',
        analogy: {
          title: 'The Analogy: The Patient Replacement',
          text: 'Think of an important executive chair. The current occupant (leaving group) must completely vacate the seat and leave the room before the new occupant (nucleophile) can sit down. The overall speed of this process depends entirely on how slowly the first person decides to leave.'
        },
        points: [
          {
            label: 'Kinetics',
            text: 'Rate = k[Substrate]. First-order kinetics—the nucleophile concentration does not affect the rate-determining step.',
            type: 'info'
          },
          {
            label: 'Stereochemistry',
            text: 'Racemization (a mix of retention and inversion) because the intermediate carbocation is flat (sp² planar) and can be attacked with equal probability from either face.',
            type: 'info'
          },
          {
            label: 'Substrate Preference',
            text: '3° > 2° >> 1° > Methyl (Tertiary carbocations are stabilized by hyperconjugation and +I inductive electron donation).',
            type: 'check'
          },
          {
            label: 'Favored Solvent',
            text: 'Polar Protic solvents (e.g., Water, Ethanol, Methanol) stabilize both the developing carbocation and the departing leaving group via hydrogen bonding.',
            type: 'info'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming increasing the concentration of nucleophile speeds up an SN1 reaction.',
        correction: 'In SN1, the rate-determining step (RDS) is unimolecular carbocation generation; nucleophile concentration does not appear in the rate law.',
        why: 'The nucleophile only attacks in the rapid second step after the slow leaving group departure.'
      }
    ],
    examFocusedPoints: [
      'Bridgehead alkyl halides cannot undergo SN1 or SN2 because they cannot form a planar carbocation (Bredt Rule) or permit backside attack.',
      'Allylic and benzylic halides react rapidly by both SN1 (resonance stabilized cation) and SN2 (p-orbital overlap in transition state).'
    ],
    practiceQuestions: [
      {
        question: 'Which of the following is the best leaving group in nucleophilic substitutions?',
        options: [
          { id: 'a', text: 'F⁻ (Fluoride)' },
          { id: 'b', text: 'OH⁻ (Hydroxide)' },
          { id: 'c', text: 'I⁻ (Iodide)' },
          { id: 'd', text: 'NH₂⁻ (Amide)' }
        ],
        correctOptionId: 'c',
        explanation: 'Iodide (I⁻) has a large atomic radius and delocalizes negative charge efficiently. It is the conjugate base of hydroiodic acid (HI, pKa ≈ -10), making it an outstanding leaving group.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why do polar protic solvents decelerate SN2 reactions while accelerating SN1 reactions?',
        answer: 'In SN2, polar protic solvents form strong hydrogen bonding cages around small anionic nucleophiles (e.g., F⁻, OH⁻), stabilizing their ground state and increasing the activation energy barrier for backside attack. In SN1, protic solvents stabilize both the separating carbocation and leaving group in the rate-determining transition state, lowering activation energy.',
        examinerTip: 'Contrast ground-state stabilization of nucleophile in SN2 with transition-state stabilization in SN1.'
      }
    ],
    relatedTopicIds: ['aromatic-substitution', 'lab-safety-purification'],
    insightCard: {
      title: 'Molecular Insight',
      caption: 'Notice how the nucleophile (teal/green) approaches precisely 180° away from the leaving group (red). This strict backside steric requirement is why bulky 3° carbons fail to undergo SN2 reactions.',
      badgeText: 'Fig 1. SN2 Backside Attack',
      diagramType: 'sn2_backside'
    }
  },
  {
    id: 'thermodynamics',
    title: 'Chemical Thermodynamics: Energy, Entropy & Spontaneity',
    branchId: 'physical',
    subjectId: 'thermo-energetics',
    category: 'Physical',
    difficulty: 'Intermediate',
    tags: ['Physical Chemistry', 'Energetics', 'Equilibrium', 'Entropy'],
    shortDescription: 'Mastering the fundamental laws of energy conservation, heat transfer, entropy disorder, and Gibbs free energy.',
    leadExplanation: 'Thermodynamics governs whether a chemical reaction can occur spontaneously. Explore the interplay between enthalpy (bond energies) and entropy (molecular disorder) to predict reaction direction and chemical equilibrium.',
    subtopics: [
      'First Law: State Functions & Internal Energy (ΔU = q + w)',
      'Enthalpy (H = U + PV) & Thermochemical Cycles (Hess Law)',
      'Second Law: Entropy as Dispersal of Energy (ΔS = q_rev/T)',
      'Gibbs-Helmholtz Equation & Spontaneity Criterion (ΔG = ΔH - TΔS)',
      'Chemical Equilibrium Link: ΔG° = -RT ln(K_eq)'
    ],
    basicExchange: {
      title: 'The Spontaneity Criterion',
      description: 'The universe favors minimal potential energy (negative enthalpy) and maximal disorder (positive entropy). The Gibbs Helmholtz equation balances these two competing forces to dictate spontaneity at constant temperature and pressure.',
      formula: 'ΔG = ΔH - TΔS  (at constant T, P)'
    },
    keyDefinitions: [
      {
        term: 'State Function',
        definition: 'A thermodynamic property (e.g., U, H, S, G) whose change depends solely on the initial and final states of the system, completely independent of the pathway taken.'
      },
      {
        term: 'Standard Gibbs Free Energy Change (ΔG°)',
        definition: 'The free energy change of a reaction with all reactants and products at standard state (1 bar pressure, 1 M concentration, and 298.15 K).'
      }
    ],
    importantEquations: [
      {
        label: 'Gibbs Free Energy',
        formula: 'ΔG = ΔH - TΔS',
        explanation: 'Negative ΔG indicates thermodynamic feasibility (spontaneity) in a closed system at constant T and P.'
      },
      {
        label: 'Equilibrium Constant Relationship',
        formula: 'ΔG° = -RT ln(K_{eq})',
        explanation: 'Connects standard thermodynamic free energy to the dynamic equilibrium position K_eq.'
      }
    ],
    formulaSheet: [
      {
        category: 'Spontaneity Signs Matrix',
        formulas: [
          'ΔH < 0, ΔS > 0: Spontaneous at all temperatures (ΔG < 0)',
          'ΔH > 0, ΔS < 0: Non-spontaneous at all temperatures (ΔG > 0)',
          'ΔH < 0, ΔS < 0: Spontaneous only at low temperatures (T < ΔH/ΔS)',
          'ΔH > 0, ΔS > 0: Spontaneous only at high temperatures (T > ΔH/ΔS)'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Calculating the Temperature of Spontaneity for CaCO₃ Decomposition',
        problem: 'For the thermal decomposition of calcium carbonate CaCO₃(s) → CaO(s) + CO₂(g), ΔH° = +178.3 kJ/mol and ΔS° = +160.5 J/(mol·K). At what temperature does the reaction become spontaneous under standard 1 bar CO₂ pressure?',
        steps: [
          'Step 1: Set ΔG° = 0 at the threshold temperature where spontaneity flips: ΔG° = ΔH° - T ΔS° = 0.',
          'Step 2: Solve for threshold temperature T_eq = ΔH° / ΔS°.',
          'Step 3: Ensure consistent energy units (convert kJ to J): ΔH° = 178,300 J/mol.',
          'Step 4: Compute T: T = 178,300 / 160.5 = 1,110.9 K.',
          'Step 5: Convert to Celsius: 1,110.9 - 273.15 = 837.8 °C.'
        ],
        answer: 'CaCO₃ decomposes spontaneously above 1,111 K (~838 °C).'
      }
    ],
    sections: [
      {
        title: 'The First & Second Laws of Thermodynamics',
        subtitle: 'Energy conservation and universal entropy increase',
        description: 'The First Law accounts for the quantitative flow of energy, while the Second Law provides the thermodynamic arrow of time.',
        analogy: {
          title: 'The Analogy: The Financial Balance Sheet',
          text: 'Internal energy (U) is like your bank account balance. Heat (q) is incoming cash or expenses, and Work (w) is physical asset transactions. Energy cannot appear out of thin air—every change in your balance must balance between heat exchange and mechanical work done.'
        },
        points: [
          {
            label: 'First Law (Conservation of Energy)',
            text: 'ΔU = q + w. The total energy of an isolated system remains constant.',
            type: 'check'
          },
          {
            label: 'Second Law (Entropy of the Universe)',
            text: 'For any spontaneous natural process, ΔS_universe = ΔS_system + ΔS_surroundings > 0.',
            type: 'check'
          },
          {
            label: 'Third Law (Absolute Zero)',
            text: 'The entropy of a perfectly crystalline pure substance approaches zero at absolute zero temperature (0 K).',
            type: 'info'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting to convert units of ΔS from J/(mol·K) to kJ/(mol·K) when computing ΔG = ΔH - TΔS.',
        correction: 'Always ensure ΔH and TΔS share the same energy units (divide ΔS by 1,000 or multiply ΔH by 1,000).',
        why: 'Unit mismatch is the #1 calculation error in undergraduate thermodynamics exams.'
      }
    ],
    examFocusedPoints: [
      'At equilibrium, ΔG = 0, but ΔG° is generally non-zero and equals -RT ln(K_eq).',
      'For an ideal gas isothermal reversible expansion: q_rev = -w = nRT ln(V₂/V₁).'
    ],
    practiceQuestions: [
      {
        question: 'If K_eq for a chemical reaction at 298 K is greater than 1 (K_eq > 1), what must be true about standard free energy change ΔG°?',
        options: [
          { id: 'a', text: 'ΔG° > 0' },
          { id: 'b', text: 'ΔG° = 0' },
          { id: 'c', text: 'ΔG° < 0' },
          { id: 'd', text: 'ΔG° depends on catalyst concentration' }
        ],
        correctOptionId: 'c',
        explanation: 'From ΔG° = -RT ln(K_eq), when K_eq > 1, ln(K_eq) is positive, making ΔG° negative.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why is standard entropy S° of an element non-zero at 298 K, whereas standard enthalpy of formation ΔHf° is zero?',
        answer: 'By convention, ΔHf° of an element in its standard reference state is defined as zero because formation from itself requires zero heat. In contrast, standard entropy S° is an absolute value calculated from 0 K via the Third Law, and all substances at 298 K possess thermal vibrational/rotational disorder.',
        examinerTip: 'Cite the Third Law of Thermodynamics and the difference between relative enthalpy vs absolute entropy.'
      }
    ],
    relatedTopicIds: ['quantum-schrodinger', 'chemical-equilibrium'],
    insightCard: {
      title: 'Thermodynamic Cycle & Free Energy',
      caption: 'Observe the energetic landscape of reactants, activation barrier, and product energy drop (ΔG < 0).',
      badgeText: 'Fig 2. Free Energy & Activation Barrier',
      diagramType: 'thermo_cycle'
    }
  },
  {
    id: 'titration-equilibria',
    title: 'Acid-Base Equilibria & Titration Practical',
    branchId: 'analytical',
    subjectId: 'volumetric-titrations',
    category: 'Analytical',
    difficulty: 'Beginner',
    tags: ['Analytical Chemistry', 'Practical', 'Equilibria', 'Titrations'],
    shortDescription: 'Master the stoichiometry, indicators, titration curves, and quantitative calculations required in laboratory analysis.',
    leadExplanation: 'Master the calculations and conceptual understanding required to perform and analyze acid-base titrations effectively in undergraduate honours laboratories.',
    subtopics: [
      'Equivalence Point Stoichiometry & M₁V₁ = M₂V₂',
      'Strong Acid - Strong Base Titration Curves (pH 4 to 10 jump)',
      'Weak Acid - Strong Base Titrations & Buffer Region (Henderson-Hasselbalch)',
      'Polyprotic Acids & Multiple Inflection Points',
      'Visual Indicators & Transition Range Mechanics'
    ],
    basicExchange: {
      title: 'Equivalence Point Stoichiometry',
      description: 'At the exact equivalence point, the chemically equivalent amount of standard titrant has been added to neutralize the analyte solution completely according to the balanced stoichiometric ratio.',
      formula: 'n_acid · M_acid · V_acid = n_base · M_base · V_base'
    },
    keyDefinitions: [
      {
        term: 'Equivalence Point',
        definition: 'The theoretical point in a titration where the moles of titrant added are stoichiometrically equivalent to the moles of analyte.'
      },
      {
        term: 'Buffer Region',
        definition: 'The plateau region of a weak acid titration curve where pH resists change due to the presence of a conjugate acid-base pair: pH = pKa + log([A⁻]/[HA]).'
      }
    ],
    importantEquations: [
      {
        label: 'Henderson-Hasselbalch Equation',
        formula: 'pH = pK_a + log( [Conjugate Base] / [Weak Acid] )',
        explanation: 'At the half-equivalence point, [A⁻] = [HA], so log(1) = 0 and pH = pKa exactly.'
      }
    ],
    formulaSheet: [
      {
        category: 'Indicator Transition Ranges',
        formulas: [
          'Methyl Orange: pH 3.1 (Red) to 4.4 (Yellow)',
          'Methyl Red: pH 4.4 (Red) to 6.2 (Yellow)',
          'Phenolphthalein: pH 8.2 (Colorless) to 10.0 (Pink)'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Determining the pH at Half-Equivalence for 0.10 M Acetic Acid',
        problem: 'In a titration of 25.0 mL of 0.10 M Acetic Acid (Ka = 1.8 × 10⁻⁵, pKa = 4.76) with 0.10 M NaOH, what is the pH after adding exactly 12.5 mL of NaOH?',
        steps: [
          'Step 1: Total volume of NaOH required for full equivalence is 25.0 mL.',
          'Step 2: Adding 12.5 mL represents the half-equivalence point.',
          'Step 3: At half-equivalence, exactly half of the initial CH₃COOH has been converted to CH₃COO⁻, so [CH₃COO⁻] = [CH₃COOH].',
          'Step 4: By Henderson-Hasselbalch: pH = pKa + log(1) = pKa + 0 = 4.76.'
        ],
        answer: 'pH = 4.76 (direct experimental determination of pKa).'
      }
    ],
    sections: [
      {
        title: 'Strong Acid - Strong Base Titration Dynamics',
        subtitle: 'Understanding the steep pH jump and indicator selection',
        description: 'During the titration of HCl with NaOH, the pH changes very slowly at first, but leaps dramatically near the equivalence point (from pH 4 to pH 10 with just a single drop of titrant).',
        analogy: {
          title: 'The Analogy: The Seesaw Pivot',
          text: 'Imagine adding sand grains to a balanced seesaw. As you approach the balance point, a single extra grain tips the board completely from one side to the other. That sudden steep transition is the equivalence pH jump.'
        },
        points: [
          {
            label: 'Equivalence Point vs Endpoint',
            text: 'Equivalence point is the theoretical stoichiometric neutrality (pH 7.0 for strong acid-strong base). The endpoint is the experimental point where the indicator visually changes color.',
            type: 'check'
          },
          {
            label: 'Indicator Selection Rule',
            text: 'An indicator is suitable if its transition pH range falls completely within the steep vertical region of the titration curve.',
            type: 'check'
          },
          {
            label: 'Phenolphthalein pH Range',
            text: 'Colorless below pH 8.2, pink above pH 10.0. Perfect for strong acid-strong base and weak acid-strong base titrations.',
            type: 'info'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using phenolphthalein for a weak base - strong acid titration (e.g., NH₃ + HCl).',
        correction: 'Use methyl red or methyl orange instead.',
        why: 'The equivalence point for weak base / strong acid is acidic (pH ~5.2), which falls far below phenolphthalein transition zone.'
      }
    ],
    examFocusedPoints: [
      'The equivalence point pH of a weak acid - strong base titration is always > 7 due to hydrolysis of the conjugate base salt.',
      'At half-neutralization of a weak acid, pH = pKa; this provides an accurate method for pKa determination.'
    ],
    practiceQuestions: [
      {
        question: 'Which indicator is most suitable for titrating a weak base (NH₄OH) with a strong acid (HCl)?',
        options: [
          { id: 'a', text: 'Phenolphthalein (pH 8.2 - 10.0)' },
          { id: 'b', text: 'Methyl Red (pH 4.4 - 6.2)' },
          { id: 'c', text: 'Thymolphthalein (pH 9.3 - 10.5)' },
          { id: 'd', text: 'Alizarin Yellow (pH 10.1 - 12.0)' }
        ],
        correctOptionId: 'b',
        explanation: 'Hydrolysis of NH₄⁺ at equivalence yields an acidic solution with pH ~5.0. Methyl red has a transition interval (4.4 - 6.2) that encompasses this equivalence pH.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why is the pH at the equivalence point of a weak acid titrated by a strong base greater than 7.0?',
        answer: 'At the equivalence point, all the weak acid has been converted to its conjugate base (A⁻). This conjugate base undergoes basic hydrolysis in water: A⁻ + H₂O ⇌ HA + OH⁻, producing excess OH⁻ ions and rendering the solution alkaline (pH > 7.0).',
        examinerTip: 'Write the hydrolysis equilibrium equation: A⁻ + H₂O ⇌ HA + OH⁻.'
      }
    ],
    relatedTopicIds: ['lab-safety-purification'],
    insightCard: {
      title: 'Interactive Titration Inflection Curve',
      caption: 'Phenolphthalein undergoes a structural rearrangement from a colorless lactone form in acidic solution to a conjugated quinoid dianion with visible pink absorption upon deprotonation above pH 8.2.',
      badgeText: 'Fig 3. Indicator Transition',
      diagramType: 'titration_curve'
    }
  }
];

// Combine base topics with new master topics across all 11 branches
export const CHEMISTRY_TOPICS: ChemistryTopic[] = [
  ...BASE_TOPICS,
  ...MASTER_TOPICS
];

// Rich Revision Cards spanning all major branches
export const REVISION_CARDS: RevisionCard[] = [
  {
    id: 'first-law',
    title: 'First Law of Thermodynamics',
    category: 'Physical Chemistry',
    branchId: 'physical',
    iconName: 'bolt',
    description: 'Energy cannot be created or destroyed, only transferred or transformed from one form to another.',
    formulaSnapshot: {
      label: 'Formula Snapshot',
      formulas: ['ΔU = q + w', 'w = -∫ P_ext dV']
    },
    keyPoints: [
      { label: 'ΔU', text: 'Change in internal energy (State function, path independent)' },
      { label: 'q', text: 'Heat added to system (+q endothermic, -q exothermic)' },
      { label: 'w', text: 'Work done on system (w = -P_ext ΔV for expansion work)' }
    ]
  },
  {
    id: 'gibbs-energy',
    title: 'Gibbs Free Energy & Spontaneity',
    category: 'Physical Chemistry',
    branchId: 'physical',
    iconName: 'compass',
    description: 'Maximum reversible non-expansion work obtainable from a thermodynamic system at constant T and P.',
    formulaSnapshot: {
      label: 'Formula Snapshot',
      formulas: ['G = H - TS', 'ΔG = ΔH - TΔS', 'ΔG° = -RT ln(K_eq)']
    },
    keyPoints: [
      { label: 'ΔG < 0', text: 'Spontaneous process (Feasible in forward direction)' },
      { label: 'ΔG = 0', text: 'Dynamic chemical equilibrium state' },
      { label: 'ΔG > 0', text: 'Non-spontaneous (Requires external work input)' }
    ]
  },
  {
    id: 'cft-coordination',
    title: 'Crystal Field Theory (CFT) Cheat-Sheet',
    category: 'Inorganic Chemistry',
    branchId: 'inorganic',
    iconName: 'layers',
    description: 'Octahedral and tetrahedral d-orbital splitting, CFSE calculation, and spectrochemical series.',
    formulaSnapshot: {
      label: 'CFSE Formulas',
      formulas: [
        'CFSE(Oh) = [-0.4 n(t2g) + 0.6 n(eg)] Δo',
        'Δt = (4/9) Δo',
        'μ_eff = √[n(n+2)] BM'
      ]
    },
    keyPoints: [
      { label: 'Strong Field', text: 'CN⁻, CO, NO₂⁻ → Δo > P (Low-spin, maximal pairing)' },
      { label: 'Weak Field', text: 'I⁻, Br⁻, Cl⁻, F⁻, H₂O → Δo < P (High-spin)' },
      { label: 'Jahn-Teller', text: 'Asymmetric eg filling (d⁹ Cu²⁺, d⁴ Cr²⁺) causes tetragonal elongation' }
    ]
  },
  {
    id: 'nmr-spectroscopy-card',
    title: '¹H & ¹³C NMR Diagnostic Rules',
    category: 'Spectroscopy',
    branchId: 'spectroscopy',
    iconName: 'activity',
    description: 'Master chemical shift intervals, integration, N+1 multiplicity, and J coupling constants.',
    formulaSnapshot: {
      label: 'NMR Equations',
      formulas: [
        'δ (ppm) = (ν_sample - ν_TMS in Hz) / ν_0(MHz)',
        'Multiplicity = N + 1',
        'J (Hz) = Δδ (ppm) × Spectrometer (MHz)'
      ]
    },
    keyPoints: [
      { label: 'Alkyl CH₃', text: 'δ 0.9 – 1.5 ppm (shielded)' },
      { label: 'Alpha to C=O', text: 'δ 2.1 – 2.5 ppm' },
      { label: 'Aromatic Ar-H', text: 'δ 6.5 – 8.5 ppm (deshielded by ring current)' },
      { label: 'Aldehyde / Acid', text: 'δ 9.5 – 12.0 ppm (highly deshielded)' }
    ]
  },
  {
    id: 'michaelis-menten-card',
    title: 'Enzyme Kinetics & Lineweaver-Burk',
    category: 'Biochemistry',
    branchId: 'biochemistry',
    iconName: 'dna',
    description: 'Steady-state Briggs-Haldane enzyme kinetics, Vmax, Km, and competitive inhibition diagnostics.',
    formulaSnapshot: {
      label: 'Kinetic Formulas',
      formulas: [
        'v₀ = (V_max [S]) / (K_m + [S])',
        '1/v₀ = (K_m/V_max)(1/[S]) + (1/V_max)',
        'k_cat = V_max / [E]_total'
      ]
    },
    keyPoints: [
      { label: 'K_m', text: 'Substrate concentration at which velocity v₀ = V_max / 2' },
      { label: 'Competitive', text: 'V_max unchanged, apparent K_m increases (crosses y-axis at same point)' },
      { label: 'Non-Competitive', text: 'K_m unchanged, apparent V_max decreases' }
    ]
  },
  {
    id: 'haber-contact-card',
    title: 'Industrial Synthesis: Haber & Contact',
    category: 'Industrial Chemistry',
    branchId: 'industrial',
    iconName: 'factory',
    description: 'Optimization of ammonia and sulfuric acid manufacturing: pressure, temperature, and promoters.',
    formulaSnapshot: {
      label: 'Industrial Equations',
      formulas: [
        'N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol, 450°C, 200 atm, Fe/K₂O)',
        '2SO₂ + O₂ ⇌ 2SO₃ (over V₂O₅ at 450°C)',
        'SO₃ + H₂SO₄ → H₂S₂O₇ (Oleum)'
      ]
    },
    keyPoints: [
      { label: 'Le Chatelier', text: 'High P favors fewer gas moles; moderate T balances rate vs yield' },
      { label: 'Promoter K₂O/Al₂O₃', text: 'Maintains porous structural surface area of metallic iron' },
      { label: 'Oleum Route', text: 'Prevents violent exotherm and dangerous acid aerosol mist formation' }
    ]
  },
  {
    id: 'lab-purification-card',
    title: 'Laboratory Purification & TLC Protocol',
    category: 'Laboratory Chemistry',
    branchId: 'laboratory',
    iconName: 'shield-check',
    description: 'Recrystallization criteria, fractional distillation theoretical plates, and chromatographic Rf.',
    formulaSnapshot: {
      label: 'Lab Formulas',
      formulas: [
        'R_f = (distance of solute) / (distance of solvent front)',
        'K_D = C_org / C_aq',
        'q_n = [ V_aq / (V_aq + K_D V_org) ]^n'
      ]
    },
    keyPoints: [
      { label: 'Recrystallization', text: 'Solvent dissolves solute only when hot; cool slowly to form pure crystals' },
      { label: 'Charcoal Rule', text: 'Never add activated charcoal to boiling liquid (cool first to prevent bumping)' },
      { label: 'Stemless Funnel', text: 'Prevents premature crystallization and clogging during hot filtration' }
    ]
  }
];

// Rich Comparison Datasets
export const COMPARISONS: ComparisonDataset[] = [
  {
    id: 'ideal-vs-real-gases',
    title: 'Ideal vs. Real Gases',
    category: 'Physical Chemistry',
    branchId: 'physical',
    tags: ['Thermodynamics', 'Gas Laws'],
    description: 'Understand the deviations from ideal behavior under varying conditions of pressure and temperature. Toggle the highlights to trace specific parameter differences.',
    conceptA: {
      name: 'Ideal Gas',
      icon: 'circle-dot',
      equationTitle: 'Equation of State',
      equation: 'PV = nRT',
      itemsHeader: 'Kinetic Theory Assumptions',
      items: [
        {
          id: 'ideal-vol',
          title: 'Negligible Volume',
          desc: 'Gas particles have zero volume themselves compared to the total container volume.',
          highlightCategory: 'volume'
        },
        {
          id: 'ideal-imf',
          title: 'No Intermolecular Forces',
          desc: 'Particles do not attract or repel each other (all collisions are perfectly elastic).',
          highlightCategory: 'pressure'
        },
        {
          id: 'ideal-motion',
          title: 'Constant Random Motion',
          desc: 'Particles move in straight lines until collisions occur with container walls.',
          highlightCategory: 'kinetics'
        }
      ]
    },
    conceptB: {
      name: 'Real Gas',
      icon: 'orbit',
      equationTitle: 'Van der Waals Equation',
      equation: '[P + a(n/V)²] [V - nb] = nRT',
      itemsHeader: 'Deviations & Corrections',
      items: [
        {
          id: 'real-vol',
          title: 'Finite Volume Correction (-nb)',
          desc: 'At high pressures, particle volume becomes significant. Real free volume available is less (V_ideal = V_container - nb).',
          highlightCategory: 'volume'
        },
        {
          id: 'real-imf',
          title: 'Attractive Forces Correction (+a(n/V)²)',
          desc: 'At low temperatures, attractive intermolecular forces pull molecules back, reducing impact force against walls and lowering measured pressure.',
          highlightCategory: 'pressure'
        },
        {
          id: 'real-liq',
          title: 'Liquefaction',
          desc: 'Real gases condense into liquids when cooled below critical temperature (T_c) and compressed.',
          highlightCategory: 'kinetics'
        }
      ]
    },
    commonMistake: {
      title: 'Common Mistake',
      text: "Forgetting that 'a' corrects for intermolecular attractive forces (pressure term) and 'b' corrects for finite molecular co-volume in the Van der Waals equation."
    },
    takeawayCards: [
      {
        title: 'Low Pressure',
        subtitle: 'Molecules are far apart; volume of particles is negligible compared to container.',
        icon: 'arrow-down'
      },
      {
        title: 'High Temperature',
        subtitle: 'High kinetic energy easily overcomes weak intermolecular forces.',
        icon: 'arrow-up'
      }
    ]
  },
  {
    id: 'sn1-vs-sn2-comparison',
    title: 'SN1 vs. SN2 Mechanisms',
    category: 'Organic Chemistry',
    branchId: 'organic',
    tags: ['Reaction Mechanisms', 'Organic', 'Stereochemistry'],
    description: 'Compare the two core nucleophilic substitution pathways across kinetics, stereochemistry, solvent preference, and substrate crowding.',
    conceptA: {
      name: 'SN1 Mechanism',
      icon: 'hourglass',
      equationTitle: 'Rate Equation',
      equation: 'Rate = k[Substrate]',
      itemsHeader: 'Key Characteristics',
      items: [
        {
          id: 'sn1-steps',
          title: 'Two-Step Process',
          desc: 'Leaving group departs first (slow RDS), creating carbocation; nucleophile attacks in step 2.',
          highlightCategory: 'kinetics'
        },
        {
          id: 'sn1-substrate',
          title: 'Substrate Preference: 3° > 2° >> 1°',
          desc: 'Stabilized carbocation intermediates make tertiary substrates highly reactive.',
          highlightCategory: 'substrate'
        },
        {
          id: 'sn1-stereo',
          title: 'Stereochemistry: Racemization',
          desc: 'Trigonal planar carbocation allows nucleophile attack from both top and bottom faces equally.',
          highlightCategory: 'substrate'
        },
        {
          id: 'sn1-solvent',
          title: 'Solvent: Polar Protic (H₂O, EtOH)',
          desc: 'Hydrogen bonding stabilizes both carbocation and leaving group ions.',
          highlightCategory: 'solvent'
        }
      ]
    },
    conceptB: {
      name: 'SN2 Mechanism',
      icon: 'zap',
      equationTitle: 'Rate Equation',
      equation: 'Rate = k[Substrate][Nu⁻]',
      itemsHeader: 'Key Characteristics',
      items: [
        {
          id: 'sn2-steps',
          title: 'One-Step Concerted',
          desc: 'Simultaneous bond forming and bond breaking with no intermediate formed.',
          highlightCategory: 'kinetics'
        },
        {
          id: 'sn2-substrate',
          title: 'Substrate Preference: Methyl > 1° > 2° >> 3°',
          desc: 'Bulky alkyl groups block backside attack; 3° substrates are unreactive.',
          highlightCategory: 'substrate'
        },
        {
          id: 'sn2-stereo',
          title: 'Stereochemistry: Walden Inversion',
          desc: '180° backside attack causes 100% inversion of configuration at the chiral center.',
          highlightCategory: 'substrate'
        },
        {
          id: 'sn2-solvent',
          title: 'Solvent: Polar Aprotic (Acetone, DMSO)',
          desc: 'Does not solvate the nucleophile anions, keeping them naked and highly reactive.',
          highlightCategory: 'solvent'
        }
      ]
    },
    commonMistake: {
      title: 'Common Mistake',
      text: 'Assuming nucleophile strength affects the rate of SN1 reactions. In SN1, the rate-determining step only involves the substrate losing its leaving group!'
    },
    takeawayCards: [
      {
        title: 'Primary Alkyl Halide',
        subtitle: 'Undergoes SN2 almost exclusively due to open backside access and poor 1° carbocation stability.',
        icon: 'check-circle'
      },
      {
        title: 'Tertiary Alkyl Halide',
        subtitle: 'Undergoes SN1 almost exclusively due to high carbocation stability and steric blockage of SN2.',
        icon: 'check-circle'
      }
    ]
  },
  {
    id: 'octahedral-vs-tetrahedral-cft',
    title: 'Octahedral (Oh) vs. Tetrahedral (Td) Crystal Fields',
    category: 'Inorganic Chemistry',
    branchId: 'inorganic',
    tags: ['Inorganic', 'CFT', 'Coordination'],
    description: 'Contrast d-orbital splitting patterns, magnitude of Δ, and spin state consequences between 6-coordinate and 4-coordinate geometries.',
    conceptA: {
      name: 'Octahedral (Oh) Field',
      icon: 'box',
      equationTitle: 'Splitting Energy',
      equation: 'Δ_o (t_2g vs e_g)',
      itemsHeader: 'Octahedral Geometry',
      items: [
        {
          id: 'oh-split',
          title: 't2g (lower) / eg (higher)',
          desc: 'Axial eg orbitals (dz², dx²-y²) point directly at 6 ligands, raised by +0.6 Δo. Non-axial t2g stabilized by -0.4 Δo.',
          highlightCategory: 'structure'
        },
        {
          id: 'oh-spin',
          title: 'High-Spin & Low-Spin Possible',
          desc: 'For d⁴ to d⁷ configurations, strong ligands (CN⁻, CO) give low-spin while weak ligands give high-spin.',
          highlightCategory: 'energy'
        }
      ]
    },
    conceptB: {
      name: 'Tetrahedral (Td) Field',
      icon: 'triangle',
      equationTitle: 'Splitting Energy',
      equation: 'Δ_t = (4/9) Δ_o',
      itemsHeader: 'Tetrahedral Geometry',
      items: [
        {
          id: 'td-split',
          title: 'e (lower) / t2 (higher)',
          desc: 'Orbital energy ordering is completely inverted. Notice the omission of the "g" subscript due to lack of inversion center.',
          highlightCategory: 'structure'
        },
        {
          id: 'td-spin',
          title: 'Almost Exclusively High-Spin',
          desc: 'Because Δt is less than half of Δo, Δt is smaller than electron pairing energy P; electrons singly occupy all orbitals first.',
          highlightCategory: 'energy'
        }
      ]
    },
    commonMistake: {
      title: 'Common Mistake',
      text: 'Adding the "g" subscript to tetrahedral orbital designations (calling them eg and t2g). Tetrahedral symmetry lacks an inversion center i, so g/u symmetry labels are strictly invalid.'
    },
    takeawayCards: [
      {
        title: 'Ligand Direct Line of Sight',
        subtitle: 'Octahedral ligands point directly along Cartesian axes; tetrahedral ligands point between axes.',
        icon: 'check-circle'
      },
      {
        title: 'Coordination Number',
        subtitle: '4 ligands in Td produce ~44% of the electrostatic repulsion produced by 6 ligands in Oh.',
        icon: 'check-circle'
      }
    ]
  }
];

// Rich MCQs with detailed explanations
export const MCQ_QUESTIONS: MCQQuestion[] = [
  {
    id: 'q1',
    topicId: 'titration-equilibria',
    moduleName: 'Module 4: Acid-Base Equilibria',
    branchId: 'analytical',
    question: 'A 25.0 mL sample of HCl requires 35.5 mL of 0.150 M NaOH to reach the phenolphthalein endpoint. Calculate the molarity of the HCl solution.',
    formulaContext: 'M₁V₁ = M₂V₂  (For 1:1 stoichiometric ratios)',
    options: [
      { id: 'opt-a', text: '0.213 M' },
      { id: 'opt-b', text: '0.106 M' },
      { id: 'opt-c', text: '0.426 M' },
      { id: 'opt-d', text: '0.150 M' }
    ],
    correctOptionId: 'opt-a',
    explanation: 'Using the neutralization stoichiometry: M_acid × V_acid = M_base × V_base. Thus, M_HCl = (0.150 M × 35.5 mL) / 25.0 mL = 5.325 / 25.0 = 0.213 M.',
    hint: 'Apply M₁V₁ = M₂V₂ directly since HCl and NaOH react in a 1:1 mole ratio.'
  },
  {
    id: 'q2',
    topicId: 'sn1-sn2',
    moduleName: 'Module 1: Reaction Mechanisms',
    branchId: 'organic',
    question: 'Which of the following alkyl halides will undergo an SN2 reaction at the fastest rate when treated with sodium iodide in acetone?',
    formulaContext: 'Rate = k[R-X][I⁻] (Polar Aprotic Solvent)',
    options: [
      { id: 'opt-a', text: '1-Chlorobutane (Primary)' },
      { id: 'opt-b', text: '2-Chlorobutane (Secondary)' },
      { id: 'opt-c', text: '2-Chloro-2-methylpropane (Tertiary)' },
      { id: 'opt-d', text: '1-Chloro-2,2-dimethylpropane (Neopentyl)' }
    ],
    correctOptionId: 'opt-a',
    explanation: 'SN2 reactions proceed via backside attack and are hindered by steric congestion. Unhindered primary alkyl halides (1-Chlorobutane) react fastest. Tertiary halides do not react via SN2, and neopentyl halides are extremely slow due to beta-branching.',
    hint: 'Think about steric hindrance at the reaction center carbon.'
  },
  {
    id: 'q3',
    topicId: 'thermodynamics',
    moduleName: 'Module 2: Chemical Thermodynamics',
    branchId: 'physical',
    question: 'For an endothermic reaction (ΔH > 0) with a positive entropy change (ΔS > 0), under what condition is the reaction spontaneous (ΔG < 0)?',
    formulaContext: 'ΔG = ΔH - TΔS',
    options: [
      { id: 'opt-a', text: 'At all temperatures' },
      { id: 'opt-b', text: 'Only at sufficiently high temperatures (T > ΔH / ΔS)' },
      { id: 'opt-c', text: 'Only at low temperatures (T < ΔH / ΔS)' },
      { id: 'opt-d', text: 'Never spontaneous at any temperature' }
    ],
    correctOptionId: 'opt-b',
    explanation: 'From ΔG = ΔH - TΔS, when both ΔH and ΔS are positive, the negative term (-TΔS) will outweigh the positive ΔH only when T is large enough, making ΔG negative (spontaneous) at high temperatures.',
    hint: 'To make ΔG negative, the TΔS magnitude must exceed ΔH.'
  },
  {
    id: 'q4',
    topicId: 'quantum-schrodinger',
    moduleName: 'Quantum Mechanics',
    branchId: 'physical',
    question: 'For a particle confined in a one-dimensional box of length L, how many nodes (zero-crossings) exist inside the box for quantum state n = 4?',
    formulaContext: 'Number of internal nodes = n - 1',
    options: [
      { id: 'opt-a', text: '4 nodes' },
      { id: 'opt-b', text: '3 nodes' },
      { id: 'opt-c', text: '2 nodes' },
      { id: 'opt-d', text: '5 nodes' }
    ],
    correctOptionId: 'opt-b',
    explanation: 'For a 1D particle in a box with normalized wavefunction ψ_n(x) = √(2/L) sin(nπx/L), the wavefunction passes through zero inside the box exactly (n - 1) times. For n = 4, there are 4 - 1 = 3 internal nodes (at x = L/4, 2L/4, 3L/4).',
    hint: 'Do not count the boundary walls at x=0 and x=L as internal nodes.'
  },
  {
    id: 'q5',
    topicId: 'coordination-cft',
    moduleName: 'Inorganic Coordination Chemistry',
    branchId: 'inorganic',
    question: 'Calculate the Crystal Field Stabilization Energy (CFSE) for a high-spin octahedral d⁶ complex ion (e.g. [Fe(H₂O)₆]²⁺).',
    formulaContext: 'CFSE = [-0.4 · n(t₂g) + 0.6 · n(e_g)] · Δo',
    options: [
      { id: 'opt-a', text: '-2.4 Δo' },
      { id: 'opt-b', text: '-0.4 Δo' },
      { id: 'opt-c', text: '-1.2 Δo' },
      { id: 'opt-d', text: '0.0 Δo' }
    ],
    correctOptionId: 'opt-b',
    explanation: 'In a high-spin d⁶ octahedral complex (t₂g⁴ e_g²), CFSE = 4(-0.4 Δo) + 2(+0.6 Δo) = -1.6 Δo + 1.2 Δo = -0.4 Δo.',
    hint: 'Count 4 electrons in t2g and 2 electrons in eg.'
  },
  {
    id: 'q6',
    topicId: 'nmr-spectroscopy-core',
    moduleName: 'Spectroscopy',
    branchId: 'spectroscopy',
    question: 'What is the multiplicity of the methylene (-CH₂-) proton signal in pure diethyl ether (CH₃-CH₂-O-CH₂-CH₃) in ¹H NMR?',
    formulaContext: 'Multiplicity = N + 1',
    options: [
      { id: 'opt-a', text: 'Singlet' },
      { id: 'opt-b', text: 'Triplet' },
      { id: 'opt-c', text: 'Quartet (1:3:3:1 ratio)' },
      { id: 'opt-d', text: 'Doublet' }
    ],
    correctOptionId: 'opt-c',
    explanation: 'The -CH₂- protons are directly adjacent to a methyl group (-CH₃) having N = 3 equivalent protons. Applying the (N+1) rule: Multiplicity = 3 + 1 = 4 (Quartet with 1:3:3:1 intensity).',
    hint: 'Count the adjacent protons on the neighboring carbon.'
  },
  {
    id: 'q7',
    topicId: 'enzyme-kinetics-michaelis',
    moduleName: 'Biochemistry',
    branchId: 'biochemistry',
    question: 'In the presence of a competitive inhibitor, what changes are observed in the Lineweaver-Burk double reciprocal plot?',
    formulaContext: '1/v₀ = (Km_app / Vmax)(1/[S]) + (1/Vmax)',
    options: [
      { id: 'opt-a', text: 'The y-intercept increases, x-intercept remains constant' },
      { id: 'opt-b', text: 'The y-intercept remains constant (same 1/Vmax), but the slope increases and x-intercept moves closer to zero' },
      { id: 'opt-c', text: 'Both intercepts decrease proportionally' },
      { id: 'opt-d', text: 'The line shifts strictly parallel' }
    ],
    correctOptionId: 'opt-b',
    explanation: 'Competitive inhibitors compete with substrate for active sites. Adding saturating substrate restores Vmax, so 1/Vmax (y-intercept) is unchanged. However, apparent Km increases (Km_app = α Km), making the slope (Km/Vmax) steeper and moving -1/Km_app closer to the origin.',
    hint: 'Competitive inhibition can be overcome by infinite substrate.'
  },
  {
    id: 'q8',
    topicId: 'industrial-haber-contact',
    moduleName: 'Industrial Chemistry',
    branchId: 'industrial',
    question: 'In the Contact Process, why is vanadium(V) oxide (V₂O₅) preferred as the oxidation catalyst over metallic platinum?',
    formulaContext: '2SO₂ + O₂ ⇌ 2SO₃',
    options: [
      { id: 'opt-a', text: 'V₂O₅ is much cheaper and resistant to poisoning by arsenic impurities' },
      { id: 'opt-b', text: 'V₂O₅ shifts the equilibrium yield to 100%' },
      { id: 'opt-c', text: 'V₂O₅ works efficiently at room temperature (25 °C)' },
      { id: 'opt-d', text: 'V₂O₅ acts as a homogeneous liquid catalyst' }
    ],
    correctOptionId: 'opt-a',
    explanation: 'Although platinum is highly active, it is extremely expensive and readily poisoned by trace arsenic impurities present in sulfur feedstocks. V₂O₅ is economical, durable, and immune to arsenic poisoning.',
    hint: 'Consider industrial cost and catalyst poisoning durability.'
  }
];

// Rich Viva Voce Questions
export const VIVA_QUESTIONS: VivaQuestion[] = [
  {
    id: 'viva-1',
    topicId: 'titration-equilibria',
    moduleName: 'Acid-Base Titrations',
    branchId: 'analytical',
    question: 'Why is phenolphthalein an appropriate indicator for a strong acid - strong base titration?',
    answer: [
      'The equivalence point for a strong acid - strong base titration occurs at a pH of exactly 7.0.',
      'However, the vertical inflection region of the titration curve (where pH jumps abruptly upon adding a fraction of a drop of titrant) spans approximately from pH 4.0 to pH 10.0.',
      'Phenolphthalein has a pH transition interval of ~8.2 to 10.0. Because this interval falls entirely within the steep vertical jump of the curve, the visual color change (colorless to faint persistent pink) virtually coincides with the true equivalence point.'
    ],
    principle: 'Indicator pH range must coincide with the vertical inflection section of the titration curve.',
    precautions: [
      'Add only 1-2 drops of phenolphthalein; excess indicator is a weak acid itself and alters the titre value.',
      'Swirl continuously during titration and observe the persistence of the pale pink color for at least 30 seconds.'
    ],
    observations: 'Sharp transition from completely colorless to faint permanent pink.'
  },
  {
    id: 'viva-2',
    topicId: 'titration-equilibria',
    moduleName: 'Acid-Base Titrations',
    branchId: 'analytical',
    question: 'Why must the burette be rinsed with the standard titrant solution before filling?',
    answer: [
      'Rinsing the burette with distilled water alone leaves microscopic droplets of water adhering to the inner glass walls.',
      'If the standard titrant is added directly without pre-rinsing, these water droplets will dilute the standard solution, lowering its effective molarity.',
      'This dilution causes an artificially higher volume of titrant to be consumed, resulting in a positive systematic error in calculations.'
    ],
    principle: 'Preventing dilution of calibrated standard solutions by residual rinse water.',
    precautions: [
      'Ensure the tip of the burette is filled and free of air bubbles before taking the initial reading.'
    ]
  },
  {
    id: 'viva-3',
    topicId: 'titration-equilibria',
    moduleName: 'Practical Errors & Laboratory Technique',
    branchId: 'analytical',
    question: 'How does a parallax error affect titration volume readings?',
    answer: [
      'Parallax error occurs when the observer’s eye level is not perpendicular to the calibrated graduation scale and the bottom of the meniscus.',
      'Viewing from above the meniscus causes the reading to appear artificially lower than the true value.',
      'Viewing from below causes the reading to appear artificially higher.',
      'For colorless liquids, always read the bottom of the curved meniscus; for deeply colored solutions (like KMnO₄), read the top edge.'
    ],
    principle: 'Minimizing optical displacement errors by keeping line of sight strictly horizontal to the meniscus.'
  },
  {
    id: 'viva-4',
    topicId: 'sn1-sn2',
    moduleName: 'Organic Reaction Mechanisms',
    branchId: 'organic',
    question: 'Why do tertiary alkyl halides predominantly undergo SN1 substitution rather than SN2?',
    answer: [
      '1. Steric Hindrance: Tertiary carbons are bonded to three bulky alkyl groups that physically block the nucleophile from attacking from the 180° backside.',
      '2. Carbocation Stability: Loss of the leaving group yields a tertiary (3°) carbocation, which is strongly stabilized by hyperconjugation and inductive electron donation from the three adjacent alkyl groups.',
      'Hence, the activation energy for the unimolecular ionization pathway (SN1) is far lower than for the backside attack (SN2).'
    ],
    principle: 'Steric crowding prevents bimolecular attack while electronic stabilization favors unimolecular ionization.'
  },
  {
    id: 'viva-5',
    topicId: 'thermodynamics',
    moduleName: 'Calorimetry & Thermochemistry',
    branchId: 'physical',
    question: 'What is the difference between an open, closed, and isolated thermodynamic system in laboratory experiments?',
    answer: [
      'Open System: Can exchange both matter and energy (heat and work) with its surroundings (e.g., an open beaker boiling water).',
      'Closed System: Can exchange energy (heat and work) but NOT matter with surroundings (e.g., a sealed reaction flask in a water bath).',
      'Isolated System: Cannot exchange either matter or energy with surroundings (e.g., an ideal bomb calorimeter with vacuum jacket).'
    ],
    principle: 'Conservation boundaries of mass and energy exchange.'
  },
  {
    id: 'viva-6',
    topicId: 'coordination-cft',
    moduleName: 'Coordination Chemistry',
    branchId: 'inorganic',
    question: 'Why is [Ti(H₂O)₆]³⁺ purple/violet in aqueous solution?',
    answer: [
      'Ti³⁺ has a 3d¹ configuration in an octahedral crystal field with the single electron occupying the lower t₂g level (t₂g¹ eg⁰).',
      'Irradiation with visible light causes the single 3d electron to absorb green-yellow photons (~500 nm, corresponding to energy gap Δo) and promote to the higher eg orbital (d-d transition: t₂g¹ eg⁰ → t₂g⁰ eg¹).',
      'The transmitted complementary light appears characteristic purple/violet.'
    ],
    principle: 'd-d electronic transition across octahedral crystal field splitting Δo.'
  },
  {
    id: 'viva-7',
    topicId: 'nmr-spectroscopy-core',
    moduleName: 'Spectroscopy',
    branchId: 'spectroscopy',
    question: 'Why is deuterated chloroform (CDCl₃) commonly used instead of normal chloroform (CHCl₃) as an NMR solvent?',
    answer: [
      'Protons (¹H) have a high gyromagnetic ratio and give strong NMR signals. Normal CHCl₃ contains a ¹H nucleus that would produce an overwhelming solvent peak obscuring sample resonances.',
      'Deuterium (²H or D) has a spin I = 1 and resonates at a completely different radiofrequency outside the ¹H detection window.',
      'Furthermore, the deuterium resonance provides the lock signal used by the spectrometer field-frequency lock system.'
    ],
    principle: 'Elimination of interfering solvent ¹H signals and provision of instrument deuterium lock.'
  },
  {
    id: 'viva-8',
    topicId: 'lab-safety-purification',
    moduleName: 'Laboratory Chemistry',
    branchId: 'laboratory',
    question: 'What is the purpose of adding boiling chips (porous porcelain granules) during distillation or reflux?',
    answer: [
      'Boiling chips contain microscopic trapped air pockets inside their porous pores.',
      'When heated, these air pockets serve as continuous nucleation sites where bubbles can form smoothly and evenly throughout the liquid.',
      'This prevents superheating of the liquid and avoids violent eruptive boiling known as "bumping", which could splash corrosive chemicals or blow apart glassware.'
    ],
    principle: 'Facilitating smooth bubble nucleation to prevent dangerous superheating and bumping.'
  }
];
