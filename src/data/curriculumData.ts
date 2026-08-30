import { ChemistryBranch, ChemistryTopic } from '../types';

export const CHEMISTRY_BRANCHES: ChemistryBranch[] = [
  {
    id: 'physical',
    name: 'Physical Chemistry',
    shortDescription: 'Quantum mechanics, thermodynamics, kinetics, electrochemistry, and surface phenomena.',
    iconName: 'Atom',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'quantum-chem',
        branchId: 'physical',
        title: 'Quantum Chemistry & Atomic Structure',
        description: 'Wave mechanics, Schrödinger equation, particle in a box, quantum numbers, and MOT.',
        topicIds: ['quantum-schrodinger', 'molecular-orbital-theory', 'atomic-structure']
      },
      {
        id: 'thermo-energetics',
        branchId: 'physical',
        title: 'Thermodynamics & Thermochemistry',
        description: 'First, Second, and Third Laws, enthalpy, entropy, Gibbs & Helmholtz free energy.',
        topicIds: ['thermodynamics', 'chemical-equilibrium', 'phase-rule']
      },
      {
        id: 'kinetics-electro',
        branchId: 'physical',
        title: 'Kinetics, Electrochemistry & Surfaces',
        description: 'Rate laws, Arrhenius equation, Nernst equation, conductance, adsorption, and catalysis.',
        topicIds: ['chemical-kinetics', 'electrochemistry-nernst', 'surface-catalysis']
      }
    ]
  },
  {
    id: 'organic',
    name: 'Organic Chemistry',
    shortDescription: 'Structure, bonding, stereochemistry, reaction mechanisms, functional groups, and synthesis.',
    iconName: 'Sparkles',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'mechanisms-substitution',
        branchId: 'organic',
        title: 'Reaction Mechanisms & Substitution',
        description: 'SN1, SN2, E1, E2, E1cB pathways, nucleophiles, carbocations, and leaving group trends.',
        topicIds: ['sn1-sn2', 'elimination-mechanisms', 'electrophilic-addition']
      },
      {
        id: 'aromatics-stereochem',
        branchId: 'organic',
        title: 'Aromaticity, Stereochemistry & Carbonyls',
        description: 'Electrophilic aromatic substitution, chirality, enantiomers, aldehydes, ketones, and enolates.',
        topicIds: ['aromatic-substitution', 'stereochemistry-chirality', 'carbonyl-reactions']
      },
      {
        id: 'synthesis-named-rxns',
        branchId: 'organic',
        title: 'Organic Synthesis & Named Reactions',
        description: 'Retrosynthetic analysis, Grignard, Aldol, Diels-Alder, Wittig, and pericyclic processes.',
        topicIds: ['organic-synthesis-named', 'pericyclic-reactions']
      }
    ]
  },
  {
    id: 'inorganic',
    name: 'Inorganic Chemistry',
    shortDescription: 'Periodic trends, coordination compounds, Werner theory, CFT, d/f-blocks, and organometallics.',
    iconName: 'Layers',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'coordination-chemistry',
        branchId: 'inorganic',
        title: 'Coordination Chemistry & Bonding',
        description: 'Crystal Field Theory (CFT), Ligand Field Theory, Werner theory, isomerism, and stability.',
        topicIds: ['coordination-cft', 'ligand-field-stability', 'coordination-isomerism']
      },
      {
        id: 'periodic-elements',
        branchId: 'inorganic',
        title: 'Periodic Trends & Block Elements',
        description: 's, p, d, and f block elements, lanthanide contraction, actinide series, and metallurgy.',
        topicIds: ['d-block-transition', 'lanthanides-actinides', 'main-group-chemistry']
      },
      {
        id: 'bioinorganic-organometallic',
        branchId: 'inorganic',
        title: 'Organometallic & Bioinorganic Chemistry',
        description: '18-electron rule, metal carbonyls, ferrocene, hemoglobin, myoglobin, and cisplatin.',
        topicIds: ['organometallic-inorganic', 'bioinorganic-chemistry']
      }
    ]
  },
  {
    id: 'analytical',
    name: 'Analytical Chemistry',
    shortDescription: 'Quantitative titrations, chromatography, gravimetry, electroanalytical methods, and error analysis.',
    iconName: 'FlaskConical',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'volumetric-titrations',
        branchId: 'analytical',
        title: 'Volumetric & Potentiometric Analysis',
        description: 'Acid-base, redox, complexometric (EDTA), precipitation titrations, and pH indicators.',
        topicIds: ['titration-equilibria', 'redox-complexometric-titrations', 'potentiometric-methods']
      },
      {
        id: 'chromatography-separation',
        branchId: 'analytical',
        title: 'Separation Techniques & Chromatography',
        description: 'TLC, column chromatography, Gas Chromatography (GC), and High-Performance Liquid Chromatography (HPLC).',
        topicIds: ['chromatography-techniques', 'error-analysis-calibration']
      }
    ]
  },
  {
    id: 'spectroscopy',
    name: 'Spectroscopy',
    shortDescription: '1H/13C NMR, IR, Raman, UV-Vis, Mass Spectrometry, ESR, and molecular structure elucidation.',
    iconName: 'Activity',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'nmr-spectroscopy',
        branchId: 'spectroscopy',
        title: 'NMR Spectroscopy (1H & 13C)',
        description: 'Chemical shift (δ), spin-spin coupling (J), integration, multiplicity, and 2D NMR.',
        topicIds: ['nmr-spectroscopy-core', 'carbon13-2d-nmr']
      },
      {
        id: 'vibrational-electronic',
        branchId: 'spectroscopy',
        title: 'IR, Raman & UV-Visible Spectroscopy',
        description: 'Hooke law, characteristic functional group IR stretches, selection rules, and Beer-Lambert law.',
        topicIds: ['ir-raman-spectroscopy', 'uv-vis-spectrophotometry']
      },
      {
        id: 'mass-structure-determination',
        branchId: 'spectroscopy',
        title: 'Mass Spectrometry & Structure Elucidation',
        description: 'Molecular ion peak, isotopic patterns, McLafferty rearrangement, and combined spectra solving.',
        topicIds: ['mass-spectrometry-structure']
      }
    ]
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    shortDescription: 'Biomolecules, protein structures, enzyme kinetics, glycolysis, Krebs cycle, and bioenergetics.',
    iconName: 'Dna',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'enzymes-kinetics',
        branchId: 'biochemistry',
        title: 'Enzyme Kinetics & Bioenergetics',
        description: 'Michaelis-Menten kinetics, Lineweaver-Burk plots, enzyme inhibition, and ATP bioenergetics.',
        topicIds: ['enzyme-kinetics-michaelis', 'metabolic-pathways-atp']
      },
      {
        id: 'biomolecules-structure',
        branchId: 'biochemistry',
        title: 'Proteins, Nucleic Acids & Lipids',
        description: 'Amino acid chirality, peptide bonds, DNA double helix, RNA transcription, and lipid bilayers.',
        topicIds: ['biomolecules-proteins-dna']
      }
    ]
  },
  {
    id: 'polymer',
    name: 'Polymer Chemistry',
    shortDescription: 'Step-growth, chain-growth, molecular weight averages (Mn, Mw), thermoplastics, and biodegradability.',
    iconName: 'Network',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'polymerization-mechanisms',
        branchId: 'polymer',
        title: 'Polymer Synthesis & Molecular Weight',
        description: 'Addition, condensation, living radical polymerization, polydispersity index (PDI), and Tg.',
        topicIds: ['polymer-synthesis-weight', 'thermoplastics-biodegradable']
      }
    ]
  },
  {
    id: 'environmental',
    name: 'Environmental Chemistry',
    shortDescription: 'Atmospheric chemistry, ozone depletion, greenhouse gases, water pollution, and Green Chemistry.',
    iconName: 'Leaf',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'atmosphere-climate',
        branchId: 'environmental',
        title: 'Atmospheric Chemistry & Climate',
        description: 'Chapman ozone cycle, chlorofluorocarbons (CFCs), photochemical smog, and greenhouse effect.',
        topicIds: ['atmospheric-ozone-greenhouse', 'water-soil-green-chemistry']
      }
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial Chemistry',
    shortDescription: 'Haber-Bosch, Contact process, Chlor-Alkali, petrochemicals, heterogeneous catalysis, and scaling.',
    iconName: 'Factory',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'industrial-processes',
        branchId: 'industrial',
        title: 'Major Industrial Chemical Processes',
        description: 'Ammonia synthesis, sulfuric acid contact process, steam cracking, and heterogeneous zeolites.',
        topicIds: ['industrial-haber-contact', 'petrochemicals-catalysis']
      }
    ]
  },
  {
    id: 'laboratory',
    name: 'Laboratory Chemistry',
    shortDescription: 'Lab safety, volumetric preparation, recrystallization, distillation, salt analysis, and Viva Voce.',
    iconName: 'ShieldCheck',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'lab-safety-technique',
        branchId: 'laboratory',
        title: 'Lab Safety, Measurements & Purification',
        description: 'Good Laboratory Practice (GLP), standard solutions, recrystallization, fractional distillation, and TLC.',
        topicIds: ['lab-safety-purification', 'qualitative-salt-analysis']
      }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Chemistry',
    shortDescription: 'Computational chemistry, density functional theory (DFT), supramolecular chemistry, and nanochemistry.',
    iconName: 'Cpu',
    color: '#006a65',
    badgeBg: '#eff4ff',
    badgeText: '#006a65',
    subjects: [
      {
        id: 'computational-nanomaterials',
        branchId: 'advanced',
        title: 'Computational & Advanced Materials',
        description: 'Hartree-Fock, DFT, band structure, quantum dots, metal-organic frameworks (MOFs), and supramolecular hosts.',
        topicIds: ['computational-dft-modelling', 'supramolecular-nanomaterials']
      }
    ]
  }
];

export const MASTER_TOPICS: ChemistryTopic[] = [
  // 1. PHYSICAL - Quantum Chemistry & Schrödinger Equation
  {
    id: 'quantum-schrodinger',
    title: 'Quantum Chemistry: Wave Mechanics & The Schrödinger Equation',
    branchId: 'physical',
    subjectId: 'quantum-chem',
    category: 'Physical',
    difficulty: 'Intermediate',
    tags: ['Physical Chemistry', 'Quantum Mechanics', 'Wavefunctions', 'Operators'],
    shortDescription: 'Understanding the particle-wave duality, Hamiltonian operators, wavefunctions, and the 1D Particle in a Box.',
    leadExplanation: 'Classical mechanics fails to describe electrons bound inside atoms. The time-independent Schrödinger equation replaces deterministic trajectories with probabilistic wavefunctions, where boundary conditions quantize energy levels naturally.',
    subtopics: [
      'Postulates of Quantum Mechanics',
      'Hamiltonian Operator & Eigenvalue Equations',
      'Particle in a 1-Dimensional Box',
      'Zero-Point Energy & Normalization',
      'Quantum Numbers (n, l, ml, ms) & Radial Nodes'
    ],
    basicExchange: {
      title: 'The Time-Independent Schrödinger Equation',
      description: 'The total energy operator (Hamiltonian Ĥ) acts on the spatial wavefunction ψ(x) to yield the quantized energy eigenvalue E multiplied by ψ(x).',
      formula: 'Ĥψ = Eψ   ⇒   [-ħ²/(2m) · d²ψ/dx² + V(x)ψ] = Eψ'
    },
    keyDefinitions: [
      {
        term: 'Wavefunction (ψ)',
        definition: 'A single-valued, continuous mathematical function describing the quantum amplitude of a particle; |ψ|² represents the probability density.'
      },
      {
        term: 'Hamiltonian Operator (Ĥ)',
        definition: 'The quantum mechanical operator representing the sum of kinetic energy (-ħ²/2m ∇²) and potential energy (V).'
      },
      {
        term: 'Zero-Point Energy (ZPE)',
        definition: 'The lowest non-zero kinetic energy a confined quantum particle must possess even at absolute zero (0 K), satisfying Heisenberg uncertainty.'
      }
    ],
    importantEquations: [
      {
        label: '1D Box Energy Levels',
        formula: 'E_n = (n² h²) / (8 m L²),   n = 1, 2, 3, ...',
        explanation: 'Energy is quantized proportional to n² and inversely proportional to box width squared (L²).'
      },
      {
        label: 'Normalized 1D Wavefunction',
        formula: 'ψ_n(x) = √(2/L) · sin(nπx / L)',
        explanation: 'Boundary condition requires ψ(0) = ψ(L) = 0, creating standing wave harmonic nodes.'
      },
      {
        label: 'Heisenberg Uncertainty Principle',
        formula: 'Δx · Δp_x ≥ ħ / 2',
        explanation: 'Simultaneous exact determination of position and conjugate momentum is physically forbidden.'
      }
    ],
    formulaSheet: [
      {
        category: 'Quantum Constants',
        formulas: [
          'Planck Constant: h = 6.626 × 10⁻³⁴ J·s',
          'Reduced Planck: ħ = h / (2π) = 1.055 × 10⁻³⁴ J·s',
          'Electron mass: m_e = 9.109 × 10⁻³¹ kg'
        ]
      },
      {
        category: 'Particle in 1D Box (Length L)',
        formulas: [
          'E_n = n²h² / (8mL²)',
          'ΔE(n → n+1) = (2n + 1)h² / (8mL²)',
          'Number of nodes = n - 1'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Calculating the Absorption Wavelength in a Conjugated Polyene',
        problem: 'Estimate the longest wavelength absorption (HOMO → LUMO) of 1,3,5-hexatriene modeled as a 1D box with 6 π-electrons and box length L = 0.86 nm.',
        steps: [
          'Step 1: Determine the HOMO and LUMO quantum numbers. 6 π-electrons pair into n = 1, 2, and 3. Thus, HOMO = n=3 and LUMO = n=4.',
          'Step 2: Calculate energy transition ΔE = E₄ - E₃ = (4² - 3²)h² / (8m_eL²) = 7h² / (8m_eL²).',
          'Step 3: Plug in numerical constants: ΔE = 7 × (6.626 × 10⁻³⁴)² / [8 × (9.109 × 10⁻³¹) × (0.86 × 10⁻⁹)²] = 3.07 × 10⁻³⁴ / 5.38 × 10⁻⁴⁸ = 5.71 × 10⁻¹⁹ J.',
          'Step 4: Convert energy to wavelength: λ = hc / ΔE = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) / (5.71 × 10⁻¹⁹) = 3.48 × 10⁻⁷ m = 348 nm.'
        ],
        answer: 'λ = 348 nm (falls in the near-UV spectrum, in excellent agreement with experimental hexatriene λ_max = 258-270 nm).'
      }
    ],
    sections: [
      {
        title: 'Postulates & Eigenvalue Mechanics',
        subtitle: 'From operator algebra to measurable physical observables',
        description: 'In quantum chemistry, every physical observable (momentum, position, kinetic energy) corresponds to a linear Hermitian operator. Measuring an observable always yields one of its eigenvalues.',
        analogy: {
          title: 'The Analogy: The Guitar String Harmonics',
          text: 'Clamping both ends of a guitar string forbids arbitrary vibrations. Only standing wave modes with an integer number of half-wavelengths can survive without destructive interference. Similarly, confining an electron in a potential well quantizes its allowable energy levels.'
        },
        points: [
          {
            label: 'Orthogonality & Normalization',
            text: 'Wavefunctions must satisfy ∫ ψ_i* ψ_j dx = δ_ij (Kronecker delta), guaranteeing total probability in all space equals exactly 1.',
            type: 'check'
          },
          {
            label: 'Boundary Conditions',
            text: 'For an infinite square well (V=0 inside, V=∞ outside), the wavefunction must vanish strictly at the walls (x=0 and x=L).',
            type: 'check'
          },
          {
            label: 'Nodes and Kinetic Energy',
            text: 'Higher quantum numbers (n) introduce more internal zero-crossings (nodes = n - 1). More nodes increase the spatial curvature (d²ψ/dx²), directly increasing kinetic energy.',
            type: 'info'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming n = 0 is allowed for a particle in a box.',
        correction: 'The ground state is strictly n = 1.',
        why: 'If n = 0, ψ(x) = 0 everywhere, meaning the particle does not exist. Zero-point energy (n=1) prevents Δx·Δp from violating uncertainty.'
      },
      {
        mistake: 'Confusing the wavefunction ψ with the probability density |ψ|².',
        correction: 'ψ can be negative or imaginary, but |ψ|² is always positive and represents real probability.',
        why: 'Wavefunctions interfere (destructive or constructive), but detector probability is the square of amplitude.'
      }
    ],
    examFocusedPoints: [
      'Always remember that for a 1D box, the number of nodes inside the box is (n - 1).',
      'The transition energy from level n₁ to n₂ is proportional to (n₂² - n₁²).',
      'Degeneracy in 2D and 3D cubic boxes arises when different combinations of quantum numbers yield the same sum of squares (e.g., E(1,2) = E(2,1)).'
    ],
    practiceQuestions: [
      {
        question: 'What is the ratio of energy of the second excited state (n=3) to the ground state (n=1) for a particle in a 1D box?',
        formulaContext: 'E_n = n² E₁',
        options: [
          { id: 'a', text: '3 : 1' },
          { id: 'b', text: '4 : 1' },
          { id: 'c', text: '9 : 1' },
          { id: 'd', text: '6 : 1' }
        ],
        correctOptionId: 'c',
        explanation: 'Since E_n ∝ n², for n = 3, E₃ = 3² E₁ = 9 E₁. Thus, the ratio E₃ / E₁ = 9 : 1.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why can a particle confined in a 1-dimensional box never possess zero kinetic energy?',
        answer: 'If E = 0, the particle would have exact momentum p = 0 (Δp = 0). By the Heisenberg Uncertainty Principle (Δx · Δp ≥ ħ/2), the uncertainty in position Δx would have to be infinite, which violates the confinement within box length L.',
        examinerTip: 'Connect Zero-Point Energy directly with Heisenberg Uncertainty and boundary condition non-triviality.'
      }
    ],
    relatedTopicIds: ['molecular-orbital-theory', 'nmr-spectroscopy-core'],
    insightCard: {
      title: 'Quantum Wavefunction Visualizer',
      caption: 'Toggle quantum number n=1, 2, 3 to observe standing wave nodes and probability distribution density |ψ_n(x)|².',
      badgeText: 'Fig 1. 1D Particle in a Box',
      diagramType: 'quantum_box'
    }
  },

  // 2. INORGANIC - Coordination Chemistry & Crystal Field Theory
  {
    id: 'coordination-cft',
    title: 'Coordination Chemistry: Crystal Field & Ligand Field Theory',
    branchId: 'inorganic',
    subjectId: 'coordination-chemistry',
    category: 'Inorganic',
    difficulty: 'Intermediate',
    tags: ['Inorganic Chemistry', 'Coordination Compounds', 'CFT', 'd-Orbitals', 'Spectrochemical Series'],
    shortDescription: 'Octahedral and tetrahedral d-orbital splitting (Δo, Δt), high-spin vs low-spin complexes, and Jahn-Teller distortion.',
    leadExplanation: 'Crystal Field Theory (CFT) treats ligands as point negative charges that break the 5-fold degeneracy of transition metal d-orbitals through electrostatic repulsion, creating t2g and eg orbital manifolds.',
    subtopics: [
      'Degeneracy Breaking in Octahedral (Oh) Fields',
      'Tetrahedral (Td) Splitting & Relation Δt = (4/9)Δo',
      'Spectrochemical Series & Ligand Field Strength',
      'Crystal Field Stabilization Energy (CFSE) Calculations',
      'Jahn-Teller Theorem & Tetragonal Elongation'
    ],
    basicExchange: {
      title: 'Octahedral Crystal Field Splitting (Δo)',
      description: 'Axial ligands approaching along x, y, and z repel d_z² and d_x²-y² orbitals (raising them by +0.6 Δo to eg), while non-axial d_xy, d_yz, and d_xz orbitals are stabilized by -0.4 Δo (t2g).',
      formula: 'CFSE = [-0.4 · n(t_2g) + 0.6 · n(e_g)] · Δ_o + m · P'
    },
    keyDefinitions: [
      {
        term: 'Crystal Field Splitting (Δo / 10 Dq)',
        definition: 'The energy gap between the lower t2g and higher eg orbital sets in an octahedral coordination environment.'
      },
      {
        term: 'Spectrochemical Series',
        definition: 'Empirical ranking of ligands according to increasing field strength (splitting ability): I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ ≈ CO.'
      },
      {
        term: 'Spin Pairing Energy (P)',
        definition: 'The electrostatic coulombic repulsion and quantum exchange penalty incurred when forcing two electrons to occupy the same orbital.'
      }
    ],
    importantEquations: [
      {
        label: 'Octahedral CFSE',
        formula: 'CFSE(O_h) = [-0.4 n(t_{2g}) + 0.6 n(e_g)] Δ_o',
        explanation: 'Measures thermodynamic stabilization relative to a hypothetical spherical crystal field.'
      },
      {
        label: 'Tetrahedral Field Relationship',
        formula: 'Δ_t = (4/9) Δ_o',
        explanation: 'Tetrahedral splitting is smaller because there are only 4 ligands and none point directly at d-orbital lobes.'
      },
      {
        label: 'Spin-Only Magnetic Moment',
        formula: 'μ_{eff} = √[n(n + 2)]  BM  (Bohr Magnetons)',
        explanation: 'Relates bulk magnetic susceptibility to the number of unpaired d-electrons (n).'
      }
    ],
    formulaSheet: [
      {
        category: 'CFSE for d⁴ in Octahedral Complex',
        formulas: [
          'High-spin (t2g³ eg¹): CFSE = 3(-0.4) + 1(+0.6) = -0.6 Δo',
          'Low-spin (t2g⁴ eg⁰): CFSE = 4(-0.4) + P = -1.6 Δo + P'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Predicting Spin State and Magnetic Moment of [Fe(CN)₆]³⁻ vs [FeF₆]³⁻',
        problem: 'Calculate the CFSE and spin-only magnetic moment for the Fe(III) complexes [Fe(CN)₆]³⁻ and [FeF₆]³⁻.',
        steps: [
          'Step 1: Determine Fe oxidation state and d-electron count. Fe is Fe³⁺ (3d⁵).',
          'Step 2: Evaluate ligand field strength. Cyanide (CN⁻) is a strong-field ligand (Δo > P), giving a low-spin configuration (t2g⁵ eg⁰). Fluoride (F⁻) is weak-field (Δo < P), giving high-spin (t2g³ eg²).',
          'Step 3: Compute CFSE. For [Fe(CN)₆]³⁻: CFSE = 5(-0.4 Δo) + 2P = -2.0 Δo + 2P. For [FeF₆]³⁻: CFSE = 3(-0.4 Δo) + 2(+0.6 Δo) = 0 Δo.',
          'Step 4: Compute magnetic moments: [Fe(CN)₆]³⁻ has 1 unpaired electron → μ = √(1×3) = 1.73 BM. [FeF₆]³⁻ has 5 unpaired electrons → μ = √(5×7) = 5.92 BM.'
        ],
        answer: '[Fe(CN)₆]³⁻ is low-spin paramagnetic (1.73 BM); [FeF₆]³⁻ is high-spin paramagnetic (5.92 BM).'
      }
    ],
    sections: [
      {
        title: 'Octahedral vs Tetrahedral Splitting Geometries',
        subtitle: 'Why tetrahedral complexes are almost universally high-spin',
        description: 'In an octahedral complex, six ligands approach along the Cartesian axes (±x, ±y, ±z), directly overlapping with dx²-y² and dz² orbitals. In a tetrahedral field, four ligands approach alternate corners of a cube, pointing between axes and causing the e and t2 ordering to invert.',
        points: [
          {
            label: 'High-Spin vs Low-Spin Criterion',
            text: 'If Δo > P, electrons pair up in t2g first (low-spin). If Δo < P, electrons jump into eg to minimize pairing repulsion (high-spin).',
            type: 'check'
          },
          {
            label: 'Tetrahedral Inversion',
            text: 'In Td, e orbitals (dz², dx²-y²) are lower (-0.6 Δt) and t2 orbitals are higher (+0.4 Δt). Because Δt is only ~44% of Δo, Δt is almost never large enough to overcome pairing energy P, making Td complexes high-spin.',
            type: 'info'
          },
          {
            label: 'Jahn-Teller Effect',
            text: 'Any non-linear molecular system in a degenerate electronic state will distort geometrically to remove the degeneracy and lower the overall energy (most prominent in high-spin d⁴, low-spin d⁷, and d⁹ Cu²⁺ complexes).',
            type: 'warn'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Thinking tetrahedral complexes split into t2g and eg with g subscripts.',
        correction: 'Tetrahedral complexes lack a center of inversion (inversion center i), so the "g" (gerade) label is omitted (they are labeled e and t2).',
        why: 'Group theory parity labels (g/u) only apply to centrosymmetric point groups (like Oh).'
      }
    ],
    examFocusedPoints: [
      'd³ and d⁸ octahedral complexes have identical CFSE regardless of whether the ligand is strong or weak field.',
      'Strong π-acceptor ligands (CO, CN⁻, NO⁺) create the largest Δo values by stabilizing t2g via back-bonding.',
      'Hexaaquacopper(II) [Cu(H₂O)₆]²⁺ undergoes severe tetragonal z-out elongation due to d⁹ Jahn-Teller distortion.'
    ],
    practiceQuestions: [
      {
        question: 'Which of the following complex ions is diamagnetic (μ_eff = 0 BM)?',
        options: [
          { id: 'a', text: '[CoF₆]³⁻ (Co³⁺ d⁶ high-spin)' },
          { id: 'b', text: '[Co(NH₃)₆]³⁺ (Co³⁺ d⁶ low-spin)' },
          { id: 'c', text: '[Ni(H₂O)₆]²⁺ (Ni²⁺ d⁸)' },
          { id: 'd', text: '[Fe(H₂O)₆]²⁺ (Fe²⁺ d⁶ high-spin)' }
        ],
        correctOptionId: 'b',
        explanation: 'In [Co(NH₃)₆]³⁺, Co³⁺ has a 3d⁶ configuration. Ammonia is a strong-field ligand here, forcing all 6 electrons to pair into t2g⁶ eg⁰, leaving 0 unpaired electrons (diamagnetic).'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why are tetrahedral complexes almost always high-spin, whereas octahedral complexes can be both high-spin and low-spin?',
        answer: 'Because Δt = (4/9) Δo, the crystal field splitting in tetrahedral geometry is less than half of that in octahedral geometry. The energy gap Δt is virtually always smaller than the pairing energy P required to pair electrons, so electrons occupy all orbitals singly first.',
        examinerTip: 'Cite both the 4/9 geometric factor and the comparison between Δt and spin pairing energy P.'
      }
    ],
    relatedTopicIds: ['d-block-transition', 'nmr-spectroscopy-core'],
    insightCard: {
      title: 'Interactive Crystal Field Splitting Lab',
      caption: 'Toggle between Octahedral (Oh) and Tetrahedral (Td) crystal fields, and switch high-spin vs low-spin states to see d-orbital electron distribution.',
      badgeText: 'Fig 2. d-Orbital CFT Splitting',
      diagramType: 'coordination_cft'
    }
  },

  // 3. SPECTROSCOPY - 1H and 13C NMR Spectroscopy
  {
    id: 'nmr-spectroscopy-core',
    title: 'NMR Spectroscopy: 1H & 13C Chemical Shift & Spin-Spin Coupling',
    branchId: 'spectroscopy',
    subjectId: 'nmr-spectroscopy',
    category: 'Spectroscopy',
    difficulty: 'Intermediate',
    tags: ['Spectroscopy', '1H NMR', '13C NMR', 'Chemical Shift', 'Spin Coupling', 'Splitting'],
    shortDescription: 'Mastering nuclear spin I=1/2, chemical shift scale (δ ppm), integration, N+1 splitting rule, and coupling constant J (Hz).',
    leadExplanation: 'Nuclear Magnetic Resonance (NMR) is the gold standard technique for organic structure determination. Nuclei with spin I = 1/2 (such as ¹H and ¹³C) precess in a strong magnetic field B₀; radiofrequency pulses induce transitions that reveal local electronic shielding.',
    subtopics: [
      'Nuclear Spin & Larmor Precession Frequency (ν = γB₀ / 2π)',
      'Chemical Shift Scale (ppm) relative to Tetramethylsilane (TMS)',
      'Diamagnetic Shielding & Anisotropic Deshielding (Benzene, Carbonyls, Alkynes)',
      'Spin-Spin Splitting & Pascal Triangle Multiplicities (N+1 Rule)',
      'Coupling Constants (J in Hz) & Vicinal Karplus Relationship'
    ],
    basicExchange: {
      title: 'The Resonance & Chemical Shift Equation',
      description: 'Chemical shift (δ) is normalized in parts per million (ppm) so that spectra recorded at different spectrometer frequencies (300 MHz vs 600 MHz) are directly comparable.',
      formula: 'δ (ppm) = [ (ν_sample - ν_TMS in Hz) / (Spectrometer Frequency in MHz) ] × 10⁶'
    },
    keyDefinitions: [
      {
        term: 'Chemical Shift (δ)',
        definition: 'The resonant frequency of a nucleus relative to a standard (TMS δ = 0.0 ppm), determined by the local diamagnetic shielding of surrounding electrons.'
      },
      {
        term: 'Spin-Spin Coupling Constant (J)',
        definition: 'The magnetic interaction between non-equivalent neighboring nuclei transmitted through chemical bonds, measured strictly in Hertz (Hz) independent of spectrometer field strength.'
      },
      {
        term: 'Diamagnetic Anisotropy',
        definition: 'Induced ring currents in π-systems (such as benzene ring current) that deshield aromatic protons (δ 7.27 ppm) while shielding protons in acetylenic cone zones.'
      }
    ],
    importantEquations: [
      {
        label: 'Larmor Frequency',
        formula: 'ν_0 = (γ / 2π) B_0',
        explanation: 'Nuclear precession frequency is directly proportional to external magnetic field strength B₀.'
      },
      {
        label: 'The (N + 1) Multiplicity Rule',
        formula: 'Multiplicity = N + 1  (for equivalent spin I = 1/2 neighbors)',
        explanation: 'A proton with N equivalent neighboring protons splits into N+1 peaks with binomial intensity ratios.'
      },
      {
        label: 'Coupling Constant from Hz',
        formula: 'J (Hz) = Δδ (ppm) × Spectrometer Frequency (MHz)',
        explanation: 'Converts peak separation in ppm into field-independent J coupling values in Hz.'
      }
    ],
    formulaSheet: [
      {
        category: 'Typical ¹H Chemical Shifts (δ ppm)',
        formulas: [
          'Alkyl (R-CH₃, R₂-CH₂): 0.9 – 1.5 ppm',
          'Protons α to Carbonyl (CH₃-C=O): 2.1 – 2.5 ppm',
          'Protons α to Oxygen/Halogen (CH₃-O-R, CH₃-Cl): 3.3 – 4.0 ppm',
          'Aromatic (Ar-H): 6.5 – 8.5 ppm',
          'Aldehyde (R-CHO): 9.5 – 10.0 ppm',
          'Carboxylic Acid (R-COOH): 10.5 – 12.5 ppm'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Elucidating the Structure of C₃H₇Br from ¹H NMR',
        problem: 'An unknown compound with formula C₃H₇Br shows: (1) doublet at δ 1.7 ppm (6H, J = 7 Hz), and (2) septet at δ 4.2 ppm (1H, J = 7 Hz). Identify the isomer.',
        steps: [
          'Step 1: Calculate degrees of unsaturation (DoU) = C - H/2 - X/2 + 1 = 3 - 7/2 - 1/2 + 1 = 0 (saturated aliphatic).',
          'Step 2: Analyze the 6H doublet. Six equivalent hydrogens (two identical -CH₃ groups) are split by exactly 1 neighboring proton (N+1 = 2).',
          'Step 3: Analyze the 1H septet at δ 4.2 ppm. One hydrogen is split by 6 equivalent neighbor hydrogens (N+1 = 6+1 = 7). Its downfield shift (δ 4.2 ppm) indicates it is directly bonded to the electronegative Bromine atom.',
          'Step 4: Combine fragments: (CH₃)₂CH-Br (2-Bromopropane / Isopropyl bromide).'
        ],
        answer: 'Structure is 2-Bromopropane (Isopropyl bromide).'
      }
    ],
    sections: [
      {
        title: 'The Origin of Multiplicity: Pascal Triangle',
        subtitle: 'Why neighboring protons split absorption peaks into multiplets',
        description: 'A neighboring proton has two possible spin orientations in the magnetic field: aligned (+1/2, α) or opposed (-1/2, β). This creates two slightly different micro-magnetic environments at the observed nucleus, splitting its signal into a doublet.',
        points: [
          {
            label: '1 Neighbor (N=1)',
            text: 'Doublet (1:1 ratio, equal probability of α and β spin states).',
            type: 'check'
          },
          {
            label: '2 Neighbors (N=2)',
            text: 'Triplet (1:2:1 ratio: αα, [αβ or βα], ββ).',
            type: 'check'
          },
          {
            label: '3 Neighbors (N=3)',
            text: 'Quartet (1:3:3:1 ratio, typical of -CH₂- split by adjacent -CH₃ in ethyl groups).',
            type: 'check'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Thinking coupling constant J changes when moving from a 400 MHz to an 800 MHz NMR instrument.',
        correction: 'J (measured in Hz) is an intrinsic chemical bond property and is 100% invariant with spectrometer frequency.',
        why: 'Chemical shift in Hz scales with B₀, but δ (ppm) and J (Hz) remain constant.'
      }
    ],
    examFocusedPoints: [
      'Equivalent protons do not split each other (e.g., all 6 protons of ethane C₂H₆ appear as a sharp singlet).',
      'The Karplus equation relates vicinal ³J_HH coupling to the dihedral angle θ: J is maximal at θ = 180° (trans ~12-18 Hz) and θ = 0° (cis ~8-10 Hz), and minimal near 90° (0-2 Hz).',
      '¹³C NMR is typically broad-band proton decoupled, meaning each unique carbon environment appears as a single sharp singlet.'
    ],
    practiceQuestions: [
      {
        question: 'How many signals will 1,4-dichlorobenzene show in its broadband decoupled ¹³C NMR spectrum?',
        options: [
          { id: 'a', text: '1 signal' },
          { id: 'b', text: '2 signals' },
          { id: 'c', text: '4 signals' },
          { id: 'd', text: '6 signals' }
        ],
        correctOptionId: 'b',
        explanation: 'Due to high molecular symmetry (D2h symmetry), there are only 2 distinct carbon environments: C-Cl (2 ipso carbons) and C-H (4 equivalent ortho/meta carbons).'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why is Tetramethylsilane (TMS) universally used as an internal reference standard in NMR spectroscopy?',
        answer: '1. Highly shielded: 12 equivalent protons and 4 equivalent carbons give a single sharp intense resonance far upfield from almost all organic signals (set to δ = 0.0 ppm).\n2. Chemically inert and non-reactive.\n3. Low boiling point (27 °C), allowing easy removal from precious reaction samples by mild evaporation.',
        examinerTip: 'State all three properties: high shielding, single sharp resonance, and high volatility.'
      }
    ],
    relatedTopicIds: ['ir-raman-spectroscopy', 'mass-spectrometry-structure'],
    insightCard: {
      title: 'Interactive ¹H NMR Multiplet Simulator',
      caption: 'Adjust neighboring proton count N to visualize singlet, doublet, triplet, quartet, and septet splitting patterns with Pascal binomial intensities.',
      badgeText: 'Fig 3. Spin-Spin Splitting Simulator',
      diagramType: 'nmr_splitting'
    }
  },

  // 4. BIOCHEMISTRY - Enzyme Kinetics & Michaelis-Menten
  {
    id: 'enzyme-kinetics-michaelis',
    title: 'Biochemistry: Enzyme Kinetics & Michaelis-Menten Mechanisms',
    branchId: 'biochemistry',
    subjectId: 'enzymes-kinetics',
    category: 'Biochemistry',
    difficulty: 'Intermediate',
    tags: ['Biochemistry', 'Enzyme Kinetics', 'Michaelis-Menten', 'Lineweaver-Burk', 'Inhibition'],
    shortDescription: 'Deriving steady-state enzyme kinetics, Vmax, Km, turnover number kcat, and competitive vs non-competitive inhibition.',
    leadExplanation: 'Enzymes are biological catalysts that accelerate reaction rates by millions of times by stabilizing transition states. The Briggs-Haldane steady-state approximation derives the hyperbolic Michaelis-Menten velocity equation.',
    subtopics: [
      'Briggs-Haldane Steady-State Hypothesis (d[ES]/dt = 0)',
      'Michaelis Constant (Km) & Catalytic Efficiency (kcat / Km)',
      'Lineweaver-Burk Double-Reciprocal Linearization',
      'Competitive vs Non-Competitive vs Uncompetitive Inhibition',
      'Allosteric Regulation & Hill Cooperativity Coefficient'
    ],
    basicExchange: {
      title: 'The Michaelis-Menten Velocity Equation',
      description: 'Initial reaction velocity v₀ approaches maximal velocity V_max as substrate concentration [S] saturates active enzyme sites.',
      formula: 'v_0 = (V_{max} [S]) / (K_m + [S])'
    },
    keyDefinitions: [
      {
        term: 'Michaelis Constant (Km)',
        definition: 'The substrate concentration at which the reaction velocity is exactly half of the maximal velocity (v₀ = V_max / 2); inversely reflects substrate binding affinity.'
      },
      {
        term: 'Turnover Number (kcat)',
        definition: 'The maximum number of substrate molecules converted to product per enzyme active site per second when saturated (k_cat = V_max / [E]_total).'
      },
      {
        term: 'Competitive Inhibitor',
        definition: 'A molecule structurally resembling the substrate that binds reversibly to the active site, increasing apparent Km while leaving Vmax unchanged.'
      }
    ],
    importantEquations: [
      {
        label: 'Michaelis-Menten Equation',
        formula: 'v_0 = (V_{max} [S]) / (K_m + [S])',
        explanation: 'Hyperbolic curve showing first-order kinetics at [S] << Km, and zero-order saturation at [S] >> Km.'
      },
      {
        label: 'Lineweaver-Burk Double Reciprocal',
        formula: '1 / v_0 = (K_m / V_{max}) · (1 / [S]) + (1 / V_{max})',
        explanation: 'Linear plot (y = mx + c) where y-intercept = 1/Vmax, x-intercept = -1/Km, and slope = Km/Vmax.'
      },
      {
        label: 'Catalytic Efficiency',
        formula: 'Efficiency = k_{cat} / K_m  (M⁻¹ s⁻¹)',
        explanation: 'The true measure of enzyme perfection; upper diffusion-controlled limit is ~10⁸ - 10⁹ M⁻¹ s⁻¹.'
      }
    ],
    formulaSheet: [
      {
        category: 'Inhibition Patterns Summary',
        formulas: [
          'Competitive: Apparent Km increases (Km_app = α Km), Vmax unchanged.',
          'Non-Competitive (Pure): Km unchanged, Vmax decreases (Vmax_app = Vmax / α).',
          'Uncompetitive: Both Km and Vmax decrease by the exact same factor (α).'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Determining Km and Vmax from Lineweaver-Burk Intercepts',
        problem: 'A double reciprocal plot gives a y-intercept of 0.05 (μmol/min)⁻¹ and an x-intercept of -0.25 mM⁻¹. Calculate Vmax and Km.',
        steps: [
          'Step 1: Relate y-intercept to Vmax: y-int = 1 / V_max = 0.05. Therefore, V_max = 1 / 0.05 = 20 μmol/min.',
          'Step 2: Relate x-intercept to Km: x-int = -1 / K_m = -0.25. Therefore, K_m = 1 / 0.25 = 4.0 mM.',
          'Step 3: Verify with velocity at [S] = 4.0 mM: v₀ = (20 × 4) / (4 + 4) = 80 / 8 = 10 μmol/min = V_max / 2.'
        ],
        answer: 'V_max = 20 μmol/min and K_m = 4.0 mM.'
      }
    ],
    sections: [
      {
        title: 'Modes of Enzyme Inhibition',
        subtitle: 'Competitive, Non-competitive, and Uncompetitive mechanisms',
        description: 'Inhibitors modulate enzyme activity physiologically and pharmacologically. Diagnostic Lineweaver-Burk plots allow rapid identification of the inhibition mechanism.',
        points: [
          {
            label: 'Competitive Inhibition',
            text: 'Inhibitor competes directly with substrate for the free active site. Adding high excess substrate outcompetes the inhibitor, restoring Vmax.',
            type: 'check'
          },
          {
            label: 'Non-Competitive Inhibition',
            text: 'Inhibitor binds to an allosteric site on both free enzyme (E) and enzyme-substrate complex (ES) with equal affinity. Substrate binding cannot overcome the inhibition.',
            type: 'info'
          },
          {
            label: 'Uncompetitive Inhibition',
            text: 'Inhibitor binds exclusively to the enzyme-substrate complex (ES), locking it in a dead-end complex.',
            type: 'warn'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Assuming a high Km means an enzyme has high binding affinity.',
        correction: 'Km is inversely proportional to affinity: a low Km indicates high affinity (saturates at very low substrate concentration).',
        why: 'Km represents dissociation / consumption; smaller Km means tighter binding.'
      }
    ],
    examFocusedPoints: [
      'At [S] = Km, the velocity is exactly half of Vmax (v₀ = 0.5 Vmax).',
      'In competitive inhibition Lineweaver-Burk lines intersect on the y-axis (same 1/Vmax).',
      'In non-competitive inhibition Lineweaver-Burk lines intersect on the negative x-axis (same -1/Km).'
    ],
    practiceQuestions: [
      {
        question: 'When [S] >> Km, what is the apparent kinetic order of the enzyme catalyzed reaction with respect to substrate?',
        options: [
          { id: 'a', text: 'First order' },
          { id: 'b', text: 'Second order' },
          { id: 'c', text: 'Zero order (rate independent of [S])' },
          { id: 'd', text: 'Half order' }
        ],
        correctOptionId: 'c',
        explanation: 'When [S] >> Km, the denominator (Km + [S]) ≈ [S], reducing v₀ = Vmax [S] / [S] = Vmax (constant). The reaction becomes zero-order.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'What is the physical meaning of the Briggs-Haldane steady-state approximation in enzyme kinetics?',
        answer: 'It assumes that after a brief initial pre-steady-state burst, the concentration of the intermediate enzyme-substrate complex [ES] remains virtually constant over the course of the measurement because its rate of formation equals its rate of breakdown: d[ES]/dt ≈ 0.',
        examinerTip: 'Emphasize that d[ES]/dt = 0, not [ES] = 0.'
      }
    ],
    relatedTopicIds: ['chemical-kinetics', 'metabolic-pathways-atp'],
    insightCard: {
      title: 'Interactive Michaelis-Menten Velocity Curve',
      caption: 'Toggle Competitive, Non-Competitive, or No Inhibitor to observe shifts in the hyperbolic curve and Lineweaver-Burk double-reciprocal plot.',
      badgeText: 'Fig 4. Enzyme Kinetics & Inhibition',
      diagramType: 'enzyme_michaelis'
    }
  },

  // 5. INDUSTRIAL CHEMISTRY - Haber-Bosch & Contact Process
  {
    id: 'industrial-haber-contact',
    title: 'Industrial Chemistry: The Haber-Bosch & Contact Processes',
    branchId: 'industrial',
    subjectId: 'industrial-processes',
    category: 'Industrial',
    difficulty: 'Intermediate',
    tags: ['Industrial Chemistry', 'Haber-Bosch', 'Ammonia', 'Contact Process', 'Sulfuric Acid', 'Heterogeneous Catalysis'],
    shortDescription: 'Industrial scaling of equilibrium reactions, Le Chatelier optimization, catalyst poisoning, and sulfuric acid synthesis.',
    leadExplanation: 'Large-scale chemical manufacturing balances thermodynamic equilibrium yield against kinetic reaction rate. The Haber-Bosch synthesis of NH₃ and the Contact Process for H₂SO₄ exemplify chemical engineering optimization.',
    subtopics: [
      'Thermodynamics of Ammonia Synthesis: N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol)',
      'Optimizing Compromise Conditions (400-450 °C, 150-200 atm, Fe/K₂O/Al₂O₃ Catalyst)',
      'The Contact Process: SO₂ Oxidation to SO₃ over V₂O₅ Catalyst',
      'Oleum (H₂S₂O₇) Formation & Safe Dilution Dynamics',
      'Green Chemistry Metrics & Industrial Atom Economy'
    ],
    basicExchange: {
      title: 'The Haber-Bosch Equilibrium',
      description: 'High pressure favors forward conversion because 4 moles of gaseous reactant yield 2 moles of product. Moderate temperature balances exothermicity with kinetic rate.',
      formula: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g),   ΔH° = -92.4 kJ/mol'
    },
    keyDefinitions: [
      {
        term: 'Compromise Operating Conditions',
        definition: 'Industrial reaction conditions (e.g., 450 °C) that accept a moderate equilibrium yield (~15-20% per pass) in order to achieve a commercially viable reaction speed with recycled gas loops.'
      },
      {
        term: 'Promoter (e.g., K₂O, Al₂O₃)',
        definition: 'A substance added to a catalyst (such as porous metallic iron) that is not catalytic alone, but increases catalyst surface area and active site electronic activity.'
      },
      {
        term: 'Oleum (Pyrosulfuric Acid, H₂S₂O₇)',
        definition: 'A dense, fuming solution produced by absorbing SO₃ directly into 98% concentrated H₂SO₄ to prevent uncontrollable acid mist formation.'
      }
    ],
    importantEquations: [
      {
        label: 'Ammonia Synthesis Equilibrium',
        formula: 'K_p = [P(NH_3)]^2 / [ P(N_2) · P(H_2)^3 ]',
        explanation: 'Increasing total system pressure raises the partial pressure of NH₃ quadratically.'
      },
      {
        label: 'Contact Process Oxidation',
        formula: '2 SO_2(g) + O_2(g) ⇌ 2 SO_3(g),   ΔH° = -196 kJ/mol  (over V_2O_5)',
        explanation: 'Exothermic equilibrium carried out in multi-stage catalytic beds at ~450 °C.'
      },
      {
        label: 'Oleum Dilution to 98% H₂SO₄',
        formula: 'H_2S_2O_7 + H_2O → 2 H_2SO_4',
        explanation: 'Controlled stoichiometric addition of water safely produces pure commercial sulfuric acid.'
      }
    ],
    formulaSheet: [
      {
        category: 'Haber-Bosch Optimal Parameters',
        formulas: [
          'Operating Pressure: 150 – 200 atm (15 – 20 MPa)',
          'Operating Temperature: 400 – 450 °C',
          'Catalyst: Finely divided α-iron with K₂O and Al₂O₃ promoters',
          'Single-Pass Conversion: ~15-20% (unreacted N₂/H₂ condensed and recycled)'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Equilibrium Shift with Le Chatelier Pressure Doubling',
        problem: 'In the Haber process, if the total pressure of an equilibrium mixture of N₂, H₂, and NH₃ is suddenly doubled from 100 atm to 200 atm at constant temperature, how does the reaction quotient Q_p respond?',
        steps: [
          'Step 1: Write expression for Q_p in terms of mole fractions (x_i) and total pressure P: Q_p = [ (x_NH3 · P)² ] / [ (x_N2 · P) · (x_H2 · P)³ ] = [ x_NH3² / (x_N2 · x_H2³) ] × (1 / P²).',
          'Step 2: Evaluate the pressure dependence: Q_p is proportional to 1 / P².',
          'Step 3: When P doubles (P → 2P), Q_p decreases by a factor of 4 (Q_p = K_p / 4 < K_p).',
          'Step 4: Because Q_p < K_p, the system must shift to the right (producing more NH₃) to restore equilibrium.'
        ],
        answer: 'Q_p drops to 0.25 K_p, driving a forward shift to form more ammonia.'
      }
    ],
    sections: [
      {
        title: 'The Contact Process: Why Direct Dissolution in Water is Forbidden',
        subtitle: 'Why SO₃ is absorbed into 98% H₂SO₄ instead of water',
        description: 'Dissolving sulfur trioxide (SO₃) directly in water is intensely exothermic. The enormous heat of hydration instantly vaporizes water, creating an uncontrollable aerosol fog of fine sulfuric acid mist that cannot be condensed or scrubbed.',
        points: [
          {
            label: 'The Oleum Solution',
            text: 'SO₃ gas is absorbed smoothly into 98% concentrated H₂SO₄ to form Oleum (H₂S₂O₇), which is then safely diluted with calculated water.',
            type: 'check'
          },
          {
            label: 'V₂O₅ Vanadium Pentoxide Catalyst',
            text: 'Vanadium(V) oxide catalyzes SO₂ oxidation through a V⁵⁺/V⁴⁺ redox cycle (V₂O₅ + SO₂ → 2VO₂ + SO₃; 2VO₂ + ½O₂ → V₂O₅).',
            type: 'info'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Thinking industrial Haber plants operate at low temperatures because ΔH is exothermic.',
        correction: 'At low temperatures, the N≡N triple bond (945 kJ/mol bond energy) reacts too slowly to be commercially viable, necessitating a 450 °C compromise.',
        why: 'Kinetic activation rate and thermodynamic yield must be balanced.'
      }
    ],
    examFocusedPoints: [
      'The Haber-Bosch feed gas must be meticulously scrubbed of sulfur and carbon monoxide (CO) to prevent irreversible poisoning of the iron catalyst.',
      'Unreacted N₂ and H₂ are cooled below -33 °C to liquefy ammonia product and recycled continuously with >98% overall conversion efficiency.'
    ],
    practiceQuestions: [
      {
        question: 'What is the primary role of Al₂O₃ added as a promoter to the iron catalyst in the Haber-Bosch process?',
        options: [
          { id: 'a', text: 'To act as a reducing agent for N₂' },
          { id: 'b', text: 'To prevent sintering and preserve high microscopic surface area of iron' },
          { id: 'c', text: 'To lower the reaction enthalpy ΔH' },
          { id: 'd', text: 'To absorb moisture from the feed gas' }
        ],
        correctOptionId: 'b',
        explanation: 'Al₂O₃ acts as a structural promoter, preventing the microscopic iron crystallites from aggregating (sintering) under high temperatures (450 °C) and maintaining a large active surface area.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why is sulfur trioxide absorbed in concentrated sulfuric acid rather than water in the Contact Process?',
        answer: 'The reaction between SO₃ and water (SO₃ + H₂O → H₂SO₄) is violently exothermic. The heat released vaporizes water, producing a dense, highly corrosive acid mist that does not condense easily and damages equipment. Absorbing in 98% H₂SO₄ yields liquid oleum without fogging.',
        examinerTip: 'Highlight the severe exothermicity and the formation of uncontrollable acid mist aerosol.'
      }
    ],
    relatedTopicIds: ['chemical-kinetics', 'thermodynamics'],
    insightCard: {
      title: 'Haber-Bosch Yield vs Temperature & Pressure',
      caption: 'Explore how equilibrium conversion changes with pressure (100 to 300 atm) and temperature (300 to 600 °C) along with catalyst activation.',
      badgeText: 'Fig 5. Industrial Equilibrium Matrix',
      diagramType: 'haber_bosch'
    }
  },

  // 6. LABORATORY CHEMISTRY - Qualitative Salt Analysis & Purification
  {
    id: 'lab-safety-purification',
    title: 'Laboratory Chemistry: Purification & Practical Techniques',
    branchId: 'laboratory',
    subjectId: 'lab-safety-technique',
    category: 'Laboratory',
    difficulty: 'Beginner',
    tags: ['Laboratory Chemistry', 'Recrystallization', 'Distillation', 'TLC', 'Melting Point', 'Errors & Safety'],
    shortDescription: 'Principles of recrystallization solvent selection, simple vs fractional distillation, extraction, TLC, and error mitigation.',
    leadExplanation: 'Undergraduate practical chemistry demands rigorous mastery of separation and purification protocols. Recrystallization exploits temperature-dependent solubility gradients, while fractional distillation utilizes vapor-liquid equilibrium theoretical plates.',
    subtopics: [
      'Good Laboratory Practice (GLP) & Chemical Safety Protocols',
      'Recrystallization: Ideal Solvent Criteria & Decolorization with Activated Charcoal',
      'Fractional Distillation & Vigreux Column Theoretical Plates',
      'Liquid-Liquid Extraction & Partition Coefficient (K_D)',
      'Thin-Layer Chromatography (TLC): Stationary vs Mobile Phase Rf Calculations',
      'Melting Point & Mixed Melting Point Purity Determination'
    ],
    basicExchange: {
      title: 'Solvent Selection Rule for Recrystallization',
      description: 'An ideal recrystallization solvent must dissolve the desired compound sparingly at room temperature, but completely at its boiling point, while keeping impurities either insoluble or soluble when cold.',
      formula: 'Recovery % = [ (Mass of Purified Crystals) / (Initial Crude Mass) ] × 100%'
    },
    keyDefinitions: [
      {
        term: 'Retardation Factor (Rf)',
        definition: 'The ratio of the distance traveled by a solute spot to the distance traveled by the solvent front in planar chromatography: Rf = d_spot / d_front.'
      },
      {
        term: 'Theoretical Plate',
        definition: 'A hypothetical discrete stage in a fractional distillation column where vapor and liquid reach complete thermodynamic equilibrium.'
      },
      {
        term: 'Mixed Melting Point Technique',
        definition: 'Mixing an authentic sample with an unknown compound to confirm identity: if the compounds are identical, the melting point remains sharp and un-depressed.'
      }
    ],
    importantEquations: [
      {
        label: 'Chromatographic Rf Value',
        formula: 'R_f = (Distance traveled by solute) / (Distance traveled by solvent front)',
        explanation: 'Polar stationary phase (Silica gel SiO₂) binds polar analytes tighter, resulting in lower Rf values in non-polar eluents.'
      },
      {
        label: 'Partition Coefficient (K_D)',
        formula: 'K_D = C_{organic} / C_{aqueous}',
        explanation: 'Governs the distribution of a neutral solute between two immiscible solvent layers in separatory funnel extractions.'
      },
      {
        label: 'Multiple Extraction Efficiency',
        formula: 'q_n = [ V_{aq} / (V_{aq} + K_D · V_{org}) ]^n',
        explanation: 'Multiple extractions with smaller solvent volumes (n extractions) are mathematically far more efficient than a single extraction with the total volume.'
      }
    ],
    formulaSheet: [
      {
        category: 'Purification Verification Standards',
        formulas: [
          'Sharp Melting Range: Pure compounds melt sharply within a 0.5 – 1.5 °C range.',
          'Impurity Effect: Impurities cause melting point depression and broaden the range.',
          'Boiling Point Elevation: Non-volatile impurities elevate the liquid boiling point.'
        ]
      }
    ],
    workedExamples: [
      {
        title: 'Comparing Single vs Multiple Liquid-Liquid Extractions',
        problem: '1.0 g of compound X is dissolved in 100 mL of water (K_D = 4.0 for diethyl ether / water). Compare the remaining unextracted compound in water after: (a) a single 60 mL ether extraction vs (b) two sequential 30 mL ether extractions.',
        steps: [
          'Step 1: Single extraction formula: fraction remaining q₁ = V_aq / (V_aq + K_D · V_org) = 100 / (100 + 4.0 × 60) = 100 / 340 = 0.294 (0.294 g remains, 70.6% extracted).',
          'Step 2: Double extraction with 30 mL portions: q₂ = [ 100 / (100 + 4.0 × 30) ]² = [ 100 / 220 ]² = (0.4545)² = 0.207 (0.207 g remains, 79.3% extracted).',
          'Step 3: Conclusion: Performing two smaller extractions recovers significantly more product (79.3% vs 70.6%) using the exact same total solvent volume (60 mL).'
        ],
        answer: 'Single extraction leaves 0.294 g (70.6% recovery); double extraction leaves only 0.207 g (79.3% recovery).'
      }
    ],
    sections: [
      {
        title: 'Steps for Flawless Recrystallization',
        subtitle: 'From crude dissolution to crystal harvesting',
        description: 'Recrystallization is the primary method for purifying organic solids. Following standardized steps ensures maximum recovery and crystal purity.',
        points: [
          {
            label: '1. Dissolution at Boiling Point',
            text: 'Add minimal boiling solvent just until the solid fully dissolves. Excess solvent prevents crystal formation upon cooling.',
            type: 'check'
          },
          {
            label: '2. Hot Gravity Filtration',
            text: 'Use a fluted filter paper and pre-warmed stemless funnel to remove insoluble dust or activated charcoal without premature crystallization.',
            type: 'info'
          },
          {
            label: '3. Slow Controlled Cooling',
            text: 'Allow cooling to room temperature undisturbed before chilling in an ice bath to grow large, pure crystal lattices that exclude impurities.',
            type: 'check'
          },
          {
            label: '4. Vacuum Filtration (Buchner Funnel)',
            text: 'Collect crystals on a Buchner funnel with suction, wash with ice-cold pure solvent, and dry under vacuum.',
            type: 'check'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using too much solvent during the initial heating step of recrystallization.',
        correction: 'Always add solvent dropwise in minimum quantities at the boiling point.',
        why: 'An excess of solvent leaves the solution unsaturated when cooled, drastically lowering product yield.'
      }
    ],
    examFocusedPoints: [
      'Activated charcoal must NEVER be added to a boiling solution directly; it acts as boiling chips and will cause instant violent flash boiling (bumping). Cool the solution slightly first.',
      'A stemless funnel is used in hot gravity filtration to prevent crystals from precipitating and clogging the narrow funnel stem.'
    ],
    practiceQuestions: [
      {
        question: 'Why is multiple extractions with small volumes of organic solvent preferred over a single extraction with a large volume?',
        options: [
          { id: 'a', text: 'It prevents emulsion formation' },
          { id: 'b', text: 'The partition coefficient K_D increases with smaller volumes' },
          { id: 'c', text: 'Mathematical distribution equilibrium yields a higher total percentage of extracted solute' },
          { id: 'd', text: 'It avoids the need for a separatory funnel' }
        ],
        correctOptionId: 'c',
        explanation: 'According to the partition formula q_n = [V_aq / (V_aq + K_D · V_org)]^n, dividing the extractant into n sequential portions exponentially reduces the unextracted fraction q_n.'
      }
    ],
    vivaQuestionsList: [
      {
        question: 'Why is a stemless funnel used during hot filtration in recrystallization?',
        answer: 'As the hot saturated solution flows down a long funnel stem, it cools rapidly against the glass. This premature cooling causes rapid crystallization inside the narrow stem, clogging the funnel and causing severe loss of product.',
        examinerTip: 'State clearly that avoiding premature crystallization and clogging is the core reason.'
      }
    ],
    relatedTopicIds: ['titration-equilibria', 'chromatography-techniques'],
    insightCard: {
      title: 'Fractional Distillation & Theoretical Plates',
      caption: 'Examine vapor-liquid equilibrium (VLE) separation in a fractionating column with packed Vigreux indentations.',
      badgeText: 'Fig 6. Distillation Column Dynamics',
      diagramType: 'distillation_setup'
    }
  }
];
