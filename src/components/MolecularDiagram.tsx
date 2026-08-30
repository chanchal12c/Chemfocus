import React, { useState } from 'react';

export interface MolecularDiagramProps {
  type: 
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

export const MolecularDiagram: React.FC<MolecularDiagramProps> = ({ type }) => {
  // Interactive states for different diagram simulators
  const [quantumN, setQuantumN] = useState<number>(1);
  const [cftField, setCftField] = useState<'Oh' | 'Td'>('Oh');
  const [cftSpin, setCftSpin] = useState<'low' | 'high'>('low');
  const [nmrNeighbors, setNmrNeighbors] = useState<number>(3);
  const [inhibitionType, setInhibitionType] = useState<'none' | 'competitive' | 'noncompetitive'>('none');
  const [haberPressure, setHaberPressure] = useState<number>(200);

  // 1. Quantum 1D Box Simulator
  if (type === 'quantum_box') {
    // Generate sine wave points based on quantum number N
    const pointsPsi: string[] = [];
    const pointsProb: string[] = [];
    const width = 300;
    const height = 120;
    const baseline = 70;
    const amp = 35;

    for (let x = 0; x <= width; x += 3) {
      const frac = x / width;
      const val = Math.sin(quantumN * Math.PI * frac);
      const yPsi = baseline - val * amp;
      const yProb = 130 - (val * val) * (amp * 1.3);
      pointsPsi.push(`${x + 40},${yPsi}`);
      pointsProb.push(`${x + 40},${yProb}`);
    }

    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-between text-white select-none relative overflow-hidden">
        {/* Interactive Controls */}
        <div className="w-full flex items-center justify-between z-10 text-xs border-b border-white/10 pb-2 mb-2">
          <span className="font-mono text-[#76f3ea] font-semibold">Quantum State: n = {quantumN}</span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setQuantumN(n)}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  quantumN === n 
                    ? 'bg-[#76f3ea] text-[#041627]' 
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                n={n}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Visualization */}
        <svg viewBox="0 0 380 150" className="w-full h-auto max-h-[140px]">
          {/* Potential Well Walls */}
          <line x1="40" y1="20" x2="40" y2="135" stroke="#94a3b8" strokeWidth="3" />
          <line x1="340" y1="20" x2="340" y2="135" stroke="#94a3b8" strokeWidth="3" />
          <line x1="40" y1="135" x2="340" y2="135" stroke="#94a3b8" strokeWidth="2" />
          <text x="35" y="145" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">x=0</text>
          <text x="330" y="145" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">x=L</text>

          {/* V = inf labels */}
          <text x="10" y="70" fill="#f43f5e" fontSize="9" fontFamily="JetBrains Mono">V=∞</text>
          <text x="345" y="70" fill="#f43f5e" fontSize="9" fontFamily="JetBrains Mono">V=∞</text>

          {/* Zero baseline for wavefunction */}
          <line x1="40" y1="70" x2="340" y2="70" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Wavefunction ψ_n(x) */}
          <polyline points={pointsPsi.join(' ')} fill="none" stroke="#76f3ea" strokeWidth="2.5" />
          <text x="50" y="35" fill="#76f3ea" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
            ψ_{quantumN}(x) (Nodes: {quantumN - 1})
          </text>

          {/* Probability Density |ψ_n(x)|² */}
          <polyline points={pointsProb.join(' ')} fill="none" stroke="#f472b6" strokeWidth="2" strokeDasharray="2,2" />
          <text x="210" y="35" fill="#f472b6" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
            |ψ_{quantumN}|² Probability
          </text>
        </svg>

        {/* Quantized Energy Badge */}
        <div className="w-full flex items-center justify-between text-[11px] text-slate-300 font-mono pt-1">
          <span>E_{quantumN} = {quantumN * quantumN} · (h² / 8mL²)</span>
          <span className="text-[#76f3ea]">ZPE (n=1): h²/(8mL²)</span>
        </div>
      </div>
    );
  }

  // 2. Crystal Field Splitting (CFT) Lab
  if (type === 'coordination_cft') {
    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-between text-white select-none relative overflow-hidden">
        {/* Interactive Controls */}
        <div className="w-full flex items-center justify-between z-10 text-xs border-b border-white/10 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCftField('Oh')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                cftField === 'Oh' ? 'bg-[#76f3ea] text-[#041627]' : 'bg-white/10 text-slate-300'
              }`}
            >
              Octahedral (Oh)
            </button>
            <button
              onClick={() => setCftField('Td')}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                cftField === 'Td' ? 'bg-[#76f3ea] text-[#041627]' : 'bg-white/10 text-slate-300'
              }`}
            >
              Tetrahedral (Td)
            </button>
          </div>

          {cftField === 'Oh' && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCftSpin('low')}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                  cftSpin === 'low' ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-white/10 text-slate-300'
                }`}
              >
                Low-Spin (d⁶)
              </button>
              <button
                onClick={() => setCftSpin('high')}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                  cftSpin === 'high' ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-white/10 text-slate-300'
                }`}
              >
                High-Spin (d⁶)
              </button>
            </div>
          )}
        </div>

        {/* CFT Diagram SVG */}
        <svg viewBox="0 0 380 150" className="w-full h-auto max-h-[140px]">
          {/* Free Ion d-orbitals (5 degenerate) */}
          <g transform="translate(40, 75)">
            <text x="25" y="-15" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">Free Ion (3d⁵/3d⁶)</text>
            {[-30, -15, 0, 15, 30].map((dx, idx) => (
              <line key={idx} x1={25 + dx - 6} y1="0" x2={25 + dx + 6} y2="0" stroke="#cbd5e1" strokeWidth="3" />
            ))}
          </g>

          {/* Barycenter Dotted Reference Line */}
          <line x1="120" y1="75" x2="340" y2="75" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
          <text x="300" y="70" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Barycenter</text>

          {cftField === 'Oh' ? (
            /* Octahedral: t2g (3 lower) and eg (2 higher) */
            <g transform="translate(200, 75)">
              {/* eg orbitals (+0.6 Δo) */}
              <line x1="20" y1="-35" x2="50" y2="-35" stroke="#f472b6" strokeWidth="3" />
              <line x1="60" y1="-35" x2="90" y2="-35" stroke="#f472b6" strokeWidth="3" />
              <text x="100" y="-32" fill="#f472b6" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">e_g (+0.6 Δo)</text>
              <text x="30" y="-45" fill="#94a3b8" fontSize="8">dz², dx²-y²</text>

              {/* t2g orbitals (-0.4 Δo) */}
              <line x1="10" y1="35" x2="35" y2="35" stroke="#76f3ea" strokeWidth="3" />
              <line x1="42" y1="35" x2="67" y2="35" stroke="#76f3ea" strokeWidth="3" />
              <line x1="74" y1="35" x2="99" y2="35" stroke="#76f3ea" strokeWidth="3" />
              <text x="105" y="38" fill="#76f3ea" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">t_2g (-0.4 Δo)</text>
              <text x="35" y="50" fill="#94a3b8" fontSize="8">dxy, dyz, dxz</text>

              {/* Energy gap Δo arrow */}
              <line x1="5" y1="-35" x2="5" y2="35" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="-25" y="4" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Δ_o</text>

              {/* Electron arrows on t2g/eg */}
              {cftSpin === 'low' ? (
                /* Low-spin d6: all 6 in t2g */
                <g fill="#76f3ea" fontSize="11" fontWeight="bold">
                  <text x="18" y="32">⇈</text>
                  <text x="50" y="32">⇈</text>
                  <text x="82" y="32">⇈</text>
                </g>
              ) : (
                /* High-spin d6: 4 in t2g, 2 in eg */
                <g fill="#fbbf24" fontSize="11" fontWeight="bold">
                  <text x="18" y="32">⇈</text>
                  <text x="50" y="32">↑</text>
                  <text x="82" y="32">↑</text>
                  <text x="32" y="-38">↑</text>
                  <text x="72" y="-38">↑</text>
                </g>
              )}
            </g>
          ) : (
            /* Tetrahedral: e (2 lower) and t2 (3 higher) */
            <g transform="translate(200, 75)">
              {/* t2 orbitals (+0.4 Δt) */}
              <line x1="10" y1="-30" x2="35" y2="-30" stroke="#76f3ea" strokeWidth="3" />
              <line x1="42" y1="-30" x2="67" y2="-30" stroke="#76f3ea" strokeWidth="3" />
              <line x1="74" y1="-30" x2="99" y2="-30" stroke="#76f3ea" strokeWidth="3" />
              <text x="105" y="-27" fill="#76f3ea" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">t_2 (+0.4 Δt)</text>

              {/* e orbitals (-0.6 Δt) */}
              <line x1="25" y1="30" x2="55" y2="30" stroke="#f472b6" strokeWidth="3" />
              <line x1="65" y1="30" x2="95" y2="30" stroke="#f472b6" strokeWidth="3" />
              <text x="105" y="33" fill="#f472b6" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">e (-0.6 Δt)</text>

              {/* Energy gap Δt */}
              <line x1="5" y1="-30" x2="5" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="-35" y="4" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">Δ_t=4/9Δo</text>
            </g>
          )}
        </svg>

        {/* Footer info */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>{cftField === 'Oh' ? 'Oh: t2g lower (-0.4Δo), eg higher (+0.6Δo)' : 'Td: Inverted levels without g subscript'}</span>
          <span className="text-[#76f3ea]">{cftField === 'Oh' ? (cftSpin === 'low' ? 'CFSE = -2.4 Δo + 2P' : 'CFSE = -0.4 Δo') : 'High-Spin Dominant'}</span>
        </div>
      </div>
    );
  }

  // 3. 1H NMR Spin-Spin Splitting Simulator
  if (type === 'nmr_splitting') {
    // Pascal triangle coefficients for N neighbors
    const binomialCoeffs: { [key: number]: number[] } = {
      0: [1],
      1: [1, 1],
      2: [1, 2, 1],
      3: [1, 3, 3, 1],
      4: [1, 4, 6, 4, 1],
      5: [1, 5, 10, 10, 5, 1],
      6: [1, 6, 15, 20, 15, 6, 1]
    };

    const names: { [key: number]: string } = {
      0: 'Singlet (s)',
      1: 'Doublet (d)',
      2: 'Triplet (t)',
      3: 'Quartet (q)',
      4: 'Quintet',
      5: 'Sextet',
      6: 'Septet'
    };

    const coeffs = binomialCoeffs[nmrNeighbors] || [1];
    const maxVal = Math.max(...coeffs);
    const count = coeffs.length;
    const spacing = 18;
    const startX = 190 - ((count - 1) * spacing) / 2;

    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-between text-white select-none relative overflow-hidden">
        {/* Interactive Controls */}
        <div className="w-full flex items-center justify-between z-10 text-xs border-b border-white/10 pb-2 mb-2">
          <span className="font-mono text-[#76f3ea] font-semibold">
            Neighboring Protons: N = {nmrNeighbors}
          </span>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4, 6].map((n) => (
              <button
                key={n}
                onClick={() => setNmrNeighbors(n)}
                className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  nmrNeighbors === n ? 'bg-[#76f3ea] text-[#041627]' : 'bg-white/10 text-slate-300'
                }`}
              >
                N={n}
              </button>
            ))}
          </div>
        </div>

        {/* NMR Spectrum SVG */}
        <svg viewBox="0 0 380 140" className="w-full h-auto max-h-[130px]">
          {/* Baseline */}
          <line x1="30" y1="110" x2="350" y2="110" stroke="#64748b" strokeWidth="2" />
          <text x="320" y="125" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">δ ppm →</text>
          <text x="40" y="125" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">Downfield (Deshielded)</text>

          {/* Multiplicity Peaks */}
          {coeffs.map((coeff, idx) => {
            const px = startX + idx * spacing;
            const heightPeak = (coeff / maxVal) * 75;
            const topY = 110 - heightPeak;

            return (
              <g key={idx}>
                {/* Peak line */}
                <line x1={px} y1="110" x2={px} y2={topY} stroke="#76f3ea" strokeWidth="2.5" />
                {/* Relative intensity ratio text */}
                <text x={px} y={topY - 5} textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="JetBrains Mono">
                  {coeff}
                </text>
              </g>
            );
          })}

          {/* J coupling indicator if count > 1 */}
          {count > 1 && (
            <g transform={`translate(${startX}, 25)`}>
              <line x1="0" y1="0" x2={spacing} y2="0" stroke="#f472b6" strokeWidth="1.5" />
              <text x={spacing / 2} y="-4" textAnchor="middle" fill="#f472b6" fontSize="9" fontFamily="JetBrains Mono">
                J (Hz)
              </text>
            </g>
          )}

          <text x="30" y="30" fill="#cbd5e1" fontSize="12" fontWeight="bold" fontFamily="Montserrat">
            {names[nmrNeighbors]} ({coeffs.join(':')})
          </text>
        </svg>

        {/* Footnote */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>Multiplicity = N + 1 = {nmrNeighbors + 1} peaks</span>
          <span className="text-[#76f3ea]">Pascal Binomial Distribution</span>
        </div>
      </div>
    );
  }

  // 4. Enzyme Kinetics (Michaelis-Menten & Lineweaver-Burk)
  if (type === 'enzyme_michaelis') {
    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-between text-white select-none relative overflow-hidden">
        {/* Interactive Controls */}
        <div className="w-full flex items-center justify-between z-10 text-xs border-b border-white/10 pb-2 mb-2">
          <span className="font-mono text-[#76f3ea] font-semibold">Enzyme Inhibition Mode:</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setInhibitionType('none')}
              className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                inhibitionType === 'none' ? 'bg-[#76f3ea] text-[#041627]' : 'bg-white/10 text-slate-300'
              }`}
            >
              Uninhibited
            </button>
            <button
              onClick={() => setInhibitionType('competitive')}
              className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                inhibitionType === 'competitive' ? 'bg-amber-400 text-slate-900' : 'bg-white/10 text-slate-300'
              }`}
            >
              Competitive
            </button>
            <button
              onClick={() => setInhibitionType('noncompetitive')}
              className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                inhibitionType === 'noncompetitive' ? 'bg-rose-400 text-slate-900' : 'bg-white/10 text-slate-300'
              }`}
            >
              Non-Competitive
            </button>
          </div>
        </div>

        {/* Michaelis-Menten Velocity Curve SVG */}
        <svg viewBox="0 0 380 140" className="w-full h-auto max-h-[130px]">
          {/* Axes */}
          <line x1="45" y1="115" x2="350" y2="115" stroke="#64748b" strokeWidth="1.5" />
          <line x1="45" y1="115" x2="45" y2="15" stroke="#64748b" strokeWidth="1.5" />
          <text x="15" y="25" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">v₀</text>
          <text x="310" y="130" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">[S] (mM) →</text>

          {/* Vmax Asymptote Line */}
          <line x1="45" y1="35" x2="350" y2="35" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
          <text x="50" y="30" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono">V_max</text>

          {/* Normal Curve */}
          <path d="M 45 115 Q 110 45 340 38" fill="none" stroke="#76f3ea" strokeWidth="2.5" />

          {/* Competitive Inhibitor Curve (Km shifted right, same Vmax) */}
          {inhibitionType === 'competitive' && (
            <g>
              <path d="M 45 115 Q 190 75 340 40" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4,4" />
              <text x="170" y="85" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                + Comp Inhibitor (Apparent Km ↑)
              </text>
            </g>
          )}

          {/* Non-Competitive Inhibitor Curve (Lower Vmax, same Km) */}
          {inhibitionType === 'noncompetitive' && (
            <g>
              <path d="M 45 115 Q 110 75 340 70" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4,4" />
              <text x="170" y="65" fill="#f43f5e" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                + Non-Comp (Apparent Vmax ↓)
              </text>
            </g>
          )}

          {/* Vmax / 2 marker */}
          <line x1="45" y1="75" x2="105" y2="75" stroke="#76f3ea" strokeWidth="1" strokeDasharray="2,2" />
          <text x="10" y="78" fill="#76f3ea" fontSize="8">½Vmax</text>
          <line x1="105" y1="75" x2="105" y2="115" stroke="#76f3ea" strokeWidth="1" strokeDasharray="2,2" />
          <text x="95" y="128" fill="#76f3ea" fontSize="9" fontWeight="bold">K_m</text>
        </svg>

        {/* Footnote */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>v₀ = (V_max [S]) / (K_m + [S])</span>
          <span className="text-[#76f3ea]">
            {inhibitionType === 'competitive' && 'Competes at active site (Vmax restored at infinite [S])'}
            {inhibitionType === 'noncompetitive' && 'Allosteric binding reduces catalytic turnover kcat'}
            {inhibitionType === 'none' && 'Hyperbolic Steady-State Kinetics'}
          </span>
        </div>
      </div>
    );
  }

  // 5. Haber-Bosch Industrial Equilibrium Matrix
  if (type === 'haber_bosch') {
    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-between text-white select-none relative overflow-hidden">
        {/* Interactive Controls */}
        <div className="w-full flex items-center justify-between z-10 text-xs border-b border-white/10 pb-2 mb-2">
          <span className="font-mono text-[#76f3ea] font-semibold">Operating Pressure:</span>
          <div className="flex items-center gap-1.5">
            {[100, 200, 300].map((p) => (
              <button
                key={p}
                onClick={() => setHaberPressure(p)}
                className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  haberPressure === p ? 'bg-[#76f3ea] text-[#041627]' : 'bg-white/10 text-slate-300'
                }`}
              >
                {p} atm
              </button>
            ))}
          </div>
        </div>

        {/* Equilibrium Yield Curve SVG */}
        <svg viewBox="0 0 380 140" className="w-full h-auto max-h-[130px]">
          {/* Axes */}
          <line x1="45" y1="115" x2="350" y2="115" stroke="#64748b" strokeWidth="1.5" />
          <line x1="45" y1="115" x2="45" y2="15" stroke="#64748b" strokeWidth="1.5" />
          <text x="10" y="25" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">% NH₃</text>
          <text x="280" y="130" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">Temp (°C) →</text>

          {/* Temperature ticks */}
          <text x="90" y="128" fill="#64748b" fontSize="8">300°C</text>
          <text x="180" y="128" fill="#fbbf24" fontSize="8" fontWeight="bold">450°C (Compromise)</text>
          <text x="290" y="128" fill="#64748b" fontSize="8">600°C</text>

          {/* Yield Curves for 100, 200, 300 atm */}
          {/* 300 atm curve */}
          <path d="M 60 25 Q 160 55 330 105" fill="none" stroke="#76f3ea" strokeWidth={haberPressure === 300 ? 3.5 : 1.5} opacity={haberPressure === 300 ? 1 : 0.4} />
          {/* 200 atm curve */}
          <path d="M 60 45 Q 160 75 330 110" fill="none" stroke="#38bdf8" strokeWidth={haberPressure === 200 ? 3.5 : 1.5} opacity={haberPressure === 200 ? 1 : 0.4} />
          {/* 100 atm curve */}
          <path d="M 60 65 Q 160 90 330 112" fill="none" stroke="#f472b6" strokeWidth={haberPressure === 100 ? 3.5 : 1.5} opacity={haberPressure === 100 ? 1 : 0.4} />

          {/* Operating Point marker at 450 C */}
          <circle cx="180" cy={haberPressure === 300 ? 68 : haberPressure === 200 ? 82 : 98} r="5" fill="#fbbf24" />
          <line x1="180" y1="20" x2="180" y2="115" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,3" />
        </svg>

        {/* Footnote */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ/mol)</span>
          <span className="text-[#76f3ea]">Fe catalyst + K₂O/Al₂O₃ promoter</span>
        </div>
      </div>
    );
  }

  // 6. Fractional Distillation Column
  if (type === 'distillation_setup') {
    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-center text-white select-none relative overflow-hidden">
        <svg viewBox="0 0 380 160" className="w-full h-auto max-h-[150px]">
          {/* Boiling Flask */}
          <circle cx="90" cy="115" r="30" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <rect x="82" y="60" width="16" height="30" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <text x="90" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">Boiling Mixture</text>

          {/* Fractionating Column with Vigreux indentations */}
          <rect x="82" y="20" width="16" height="45" fill="#0f172a" stroke="#76f3ea" strokeWidth="2" />
          {/* Vigreux Plates */}
          <line x1="82" y1="30" x2="90" y2="35" stroke="#76f3ea" strokeWidth="2" />
          <line x1="98" y1="40" x2="90" y2="45" stroke="#76f3ea" strokeWidth="2" />
          <line x1="82" y1="50" x2="90" y2="55" stroke="#76f3ea" strokeWidth="2" />
          <text x="110" y="42" fill="#76f3ea" fontSize="9" fontFamily="JetBrains Mono">Vigreux Plates (VLE)</text>

          {/* Condenser Tube */}
          <path d="M 98 25 L 140 25 L 260 90" fill="none" stroke="#38bdf8" strokeWidth="3" />
          {/* Water Jacket */}
          <rect x="145" y="20" width="105" height="45" transform="rotate(27 145 20)" fill="#0284c7" fillOpacity="0.25" stroke="#0284c7" strokeWidth="1.5" />
          <text x="210" y="45" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono">Water Jacket (Cooling)</text>

          {/* Receiving Flask */}
          <circle cx="280" cy="120" r="22" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <text x="280" y="123" textAnchor="middle" fill="#76f3ea" fontSize="8" fontWeight="bold">Pure Distillate</text>
        </svg>
        <div className="text-[11px] text-[#b7c8de] mt-1 font-mono">
          Vapor-Liquid Equilibrium (VLE) & Theoretical Plate Separation
        </div>
      </div>
    );
  }

  // 7. Standard SN2 Backside Diagram
  if (type === 'sn2_backside') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden text-white select-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#76f3ea_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <svg viewBox="0 0 400 180" className="w-full h-auto max-h-[170px]">
          <defs>
            <linearGradient id="tealGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#76f3ea" />
              <stop offset="100%" stopColor="#006a65" />
            </linearGradient>
            <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8577" />
              <stop offset="100%" stopColor="#ba1a1a" />
            </linearGradient>
            <linearGradient id="carbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* Backside Approach Arrow (180°) */}
          <path d="M 60 90 L 140 90" stroke="#76f3ea" strokeWidth="2.5" strokeDasharray="4,4" />
          <text x="75" y="75" fill="#76f3ea" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">180° Backside Attack</text>

          {/* Nucleophile Nu⁻ */}
          <g transform="translate(45, 90)">
            <circle r="22" fill="url(#tealGlow)" />
            <text textAnchor="middle" dy="4" fill="#041627" fontWeight="bold" fontSize="13" fontFamily="Montserrat">Nu⁻</text>
          </g>

          {/* Central Carbon */}
          <g transform="translate(195, 90)">
            <line x1="0" y1="0" x2="-20" y2="-45" stroke="#94a3b8" strokeWidth="4" />
            <line x1="0" y1="0" x2="0" y2="48" stroke="#94a3b8" strokeWidth="4" strokeDasharray="3,3" />
            <polygon points="0,0 25,-35 15,-42" fill="#94a3b8" />

            <circle cx="-20" cy="-45" r="10" fill="#e2e8f0" />
            <text x="-20" y="-42" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">H</text>

            <circle cx="0" cy="48" r="10" fill="#e2e8f0" />
            <text x="0" y="51" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">H</text>

            <circle cx="20" cy="-38" r="12" fill="#cbd5e1" />
            <text x="20" y="-35" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">R</text>

            <circle r="18" fill="url(#carbonGrad)" />
            <text textAnchor="middle" dy="4" fill="#ffffff" fontWeight="bold" fontSize="12" fontFamily="Montserrat">C</text>
          </g>

          {/* Leaving Group LG⁻ */}
          <line x1="213" y1="90" x2="310" y2="90" stroke="#f87171" strokeWidth="2.5" strokeDasharray="3,3" />
          <text x="260" y="75" fill="#ffb59c" fontSize="10" fontFamily="JetBrains Mono">Bond Cleavage</text>

          <g transform="translate(340, 90)">
            <circle r="22" fill="url(#redGlow)" />
            <text textAnchor="middle" dy="4" fill="#ffffff" fontWeight="bold" fontSize="13" fontFamily="Montserrat">LG⁻</text>
          </g>

          {/* Transition state indicator */}
          <path d="M 120 30 L 110 30 L 110 150 L 120 150" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <path d="M 270 30 L 280 30 L 280 150 L 270 150" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <text x="285" y="40" fill="#cbd5e1" fontSize="14" fontWeight="bold">‡</text>
        </svg>

        <div className="text-[11px] text-[#b7c8de] mt-1 font-mono tracking-wide">
          [Nu···C···LG]‡ Concerted Transition State (Walden Inversion)
        </div>
      </div>
    );
  }

  // 8. Standard Thermo Cycle
  if (type === 'thermo_cycle') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden text-white select-none">
        <svg viewBox="0 0 380 170" className="w-full h-auto max-h-[160px]">
          <line x1="40" y1="140" x2="350" y2="140" stroke="#64748b" strokeWidth="1.5" />
          <line x1="40" y1="140" x2="40" y2="20" stroke="#64748b" strokeWidth="1.5" />
          <text x="20" y="30" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">G (Energy)</text>
          <text x="280" y="155" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">Progress →</text>

          <line x1="60" y1="65" x2="130" y2="65" stroke="#76f3ea" strokeWidth="3" />
          <text x="65" y="55" fill="#76f3ea" fontSize="12" fontWeight="bold">Reactants</text>

          <path d="M 130 65 Q 190 20 230 115 L 300 115" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          
          <text x="250" y="105" fill="#ffb59c" fontSize="12" fontWeight="bold">Products</text>
          <line x1="230" y1="115" x2="310" y2="115" stroke="#ffb59c" strokeWidth="3" />

          <line x1="325" y1="65" x2="325" y2="115" stroke="#76f3ea" strokeWidth="2" strokeDasharray="3,3" />
          <text x="332" y="94" fill="#76f3ea" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">ΔG &lt; 0</text>
          <text x="180" y="25" fill="#e2e8f0" fontSize="10" fontFamily="JetBrains Mono">E_a Barrier</text>
        </svg>
        <div className="text-[11px] text-[#b7c8de] mt-1 font-mono">
          Spontaneous Exergonic Process (ΔG = ΔH - TΔS &lt; 0)
        </div>
      </div>
    );
  }

  // 9. Standard Titration Curve
  return (
    <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c2238] to-[#041627] rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden text-white select-none">
      <svg viewBox="0 0 380 170" className="w-full h-auto max-h-[160px]">
        <line x1="45" y1="140" x2="340" y2="140" stroke="#64748b" strokeWidth="1.5" />
        <line x1="45" y1="140" x2="45" y2="20" stroke="#64748b" strokeWidth="1.5" />
        <text x="15" y="30" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">pH</text>
        <text x="250" y="155" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">V(NaOH) mL →</text>

        <text x="25" y="138" fill="#64748b" fontSize="9">1</text>
        <text x="25" y="85" fill="#76f3ea" fontSize="9" fontWeight="bold">7</text>
        <text x="20" y="32" fill="#64748b" fontSize="9">14</text>

        <rect x="45" y="55" width="295" height="20" fill="#f43f5e" fillOpacity="0.15" />
        <text x="220" y="68" fill="#fda4af" fontSize="9" fontFamily="JetBrains Mono">Indicator Zone (8.2-10.0)</text>

        <path d="M 45 130 C 130 128, 160 115, 175 80 C 190 45, 220 35, 330 32" fill="none" stroke="#76f3ea" strokeWidth="3" />

        <circle cx="175" cy="80" r="5" fill="#76f3ea" />
        <line x1="175" y1="80" x2="175" y2="140" stroke="#76f3ea" strokeWidth="1.5" strokeDasharray="3,3" />
        <text x="140" y="98" fill="#76f3ea" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">Equiv. Pt (pH 7.0)</text>
      </svg>
      <div className="text-[11px] text-[#b7c8de] mt-1 font-mono">
        Strong Acid - Strong Base Titration Inflection
      </div>
    </div>
  );
};
