import { useState } from 'react'

// 氯气反应网络图
function ChlorineReactions() {
  const [hoveredReaction, setHoveredReaction] = useState(null)

  const reactions = {
    withNa: '2Na + Cl₂ = 2NaCl（点燃，白烟）',
    withFe: '2Fe + 3Cl₂ = 2FeCl₃（点燃，棕烟）',
    withCu: 'Cu + Cl₂ = CuCl₂（点燃，棕黄烟）',
    withH2: 'H₂ + Cl₂ = 2HCl（点燃或光照）',
    withH2O: 'Cl₂ + H₂O ⇌ HCl + HClO',
    withNaOH: 'Cl₂ + 2NaOH = NaCl + NaClO + H₂O',
    withCaOH: '2Cl₂ + 2Ca(OH)₂ = CaCl₂ + Ca(ClO)₂ + 2H₂O',
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 430" className="diagram-svg w-full max-w-2xl">
        {/* 箭头定义 - 放在最前面 */}
        <defs>
          <marker id="clArrowBlue" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#2563eb" />
          </marker>
          <marker id="clArrowGray" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#71717a" />
          </marker>
          <marker id="clArrowOrange" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#ea580c" />
          </marker>
          <marker id="clArrowYellow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#d97706" />
          </marker>
          <marker id="clArrowSky" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#3b82f6" />
          </marker>
          <marker id="clArrowPurple" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#7c3aed" />
          </marker>
          <marker id="clArrowPink" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#db2777" />
          </marker>
        </defs>

        {/* 标题 */}
        <text x="350" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          氯气的化学性质
        </text>

        {/* 中心：Cl2 */}
        <g>
          <circle cx="350" cy="190" r="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" />
          <text x="350" y="185" textAnchor="middle" fontWeight="bold" fontSize="28" fill="#166534">Cl₂</text>
          <text x="350" y="205" textAnchor="middle" fontSize="11" fill="#14532d">黄绿色气体</text>
        </g>

        {/* 与金属反应 - 上方 */}
        <g>
          <text x="350" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">
            与金属反应
          </text>

          {/* Na */}
          <g
            onMouseEnter={() => setHoveredReaction('withNa')}
            onMouseLeave={() => setHoveredReaction(null)}
            className="cursor-pointer"
          >
            <rect x="150" y="65" width="80" height="40" rx="6" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
            <text x="190" y="90" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#1e40af">Na</text>
          </g>
          <path d="M 230 85 L 305 150" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#clArrowBlue)" />

          {/* Fe */}
          <g
            onMouseEnter={() => setHoveredReaction('withFe')}
            onMouseLeave={() => setHoveredReaction(null)}
            className="cursor-pointer"
          >
            <rect x="310" y="65" width="80" height="40" rx="6" fill="#d4d4d8" stroke="#71717a" strokeWidth="2" />
            <text x="350" y="90" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#3f3f46">Fe</text>
          </g>
          <line x1="350" y1="105" x2="350" y2="140" stroke="#71717a" strokeWidth="2" markerEnd="url(#clArrowGray)" />

          {/* Cu */}
          <g
            onMouseEnter={() => setHoveredReaction('withCu')}
            onMouseLeave={() => setHoveredReaction(null)}
            className="cursor-pointer"
          >
            <rect x="470" y="65" width="80" height="40" rx="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
            <text x="510" y="90" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#9a3412">Cu</text>
          </g>
          <path d="M 470 85 L 395 150" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#clArrowOrange)" />
        </g>

        {/* 与非金属反应 - 左侧 */}
        <g
          onMouseEnter={() => setHoveredReaction('withH2')}
          onMouseLeave={() => setHoveredReaction(null)}
          className="cursor-pointer"
        >
          <rect x="80" y="170" width="100" height="40" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="130" y="195" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">H₂</text>
        </g>
        <line x1="180" y1="190" x2="300" y2="190" stroke="#d97706" strokeWidth="2" markerEnd="url(#clArrowYellow)" />
        <text x="240" y="183" textAnchor="middle" fontSize="10" fill="#78350f">点燃或光照</text>

        {/* 与水反应 - 下左 */}
        <g
          onMouseEnter={() => setHoveredReaction('withH2O')}
          onMouseLeave={() => setHoveredReaction(null)}
          className="cursor-pointer"
        >
          <rect x="120" y="270" width="100" height="50" rx="6" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
          <text x="170" y="295" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1d4ed8">H₂O</text>
          <text x="170" y="312" textAnchor="middle" fontSize="10" fill="#1e40af">→ HCl + HClO</text>
        </g>
        <path d="M 220 270 L 320 230" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#clArrowSky)" />

        {/* 与碱反应 - 右侧 */}
        <g>
          <text x="560" y="160" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">
            与碱反应
          </text>

          <g
            onMouseEnter={() => setHoveredReaction('withNaOH')}
            onMouseLeave={() => setHoveredReaction(null)}
            className="cursor-pointer"
          >
            <rect x="510" y="170" width="100" height="40" rx="6" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
            <text x="560" y="195" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#5b21b6">NaOH</text>
          </g>
          <line x1="400" y1="190" x2="510" y2="190" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#clArrowPurple)" />

          <g
            onMouseEnter={() => setHoveredReaction('withCaOH')}
            onMouseLeave={() => setHoveredReaction(null)}
            className="cursor-pointer"
          >
            <rect x="510" y="225" width="100" height="40" rx="6" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
            <text x="560" y="248" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#9d174d">Ca(OH)₂</text>
          </g>
          <path d="M 395 210 L 510 245" stroke="#db2777" strokeWidth="2" fill="none" markerEnd="url(#clArrowPink)" />
          <text x="560" y="280" textAnchor="middle" fontSize="10" fill="#9d174d">→ 漂白粉</text>
        </g>

        {/* 产物说明 - 下方 */}
        <g>
          <rect x="280" y="330" width="140" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <text x="350" y="350" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#92400e">氯水成分</text>
          <text x="350" y="365" textAnchor="middle" fontSize="9" fill="#78350f">分子：Cl₂、H₂O、HClO</text>
          <text x="350" y="380" textAnchor="middle" fontSize="9" fill="#78350f">离子：H⁺、Cl⁻、ClO⁻、OH⁻</text>
        </g>

        {/* 反应方程式提示框 */}
        {hoveredReaction && reactions[hoveredReaction] && (
          <g>
            <rect x="100" y="400" width="500" height="25" rx="4" fill="#1f2937" fillOpacity="0.95" />
            <text x="350" y="417" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">
              {reactions[hoveredReaction]}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default ChlorineReactions
