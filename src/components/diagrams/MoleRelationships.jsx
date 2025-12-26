import { useState } from 'react'

// 摩尔关系图
function MoleRelationships() {
  const [activeRelation, setActiveRelation] = useState(null)

  const relations = {
    mass: { formula: 'n = m / M', desc: '质量与物质的量的关系' },
    particles: { formula: 'n = N / Nₐ', desc: '粒子数与物质的量的关系' },
    volume: { formula: 'n = V / Vₘ', desc: '气体体积与物质的量的关系（标准状况）' },
    concentration: { formula: 'n = c · V', desc: '浓度与物质的量的关系' },
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 600 550" className="diagram-svg w-full max-w-xl">
        {/* 标题 */}
        <text x="300" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          物质的量（n）的核心关系
        </text>

        {/* 中心圆 */}
        <circle cx="300" cy="250" r="70" fill="#fcd34d" stroke="#ca8a04" strokeWidth="3" />
        <text x="300" y="240" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#78350f">物质的量</text>
        <text x="300" y="265" textAnchor="middle" fontWeight="bold" fontSize="20" fill="#78350f">n</text>

        {/* 上方：粒子数 */}
        <g
          className="node-box"
          onMouseEnter={() => setActiveRelation('particles')}
          onMouseLeave={() => setActiveRelation(null)}
        >
          <line x1="300" y1="180" x2="300" y2="100" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)" />
          <rect x="220" y="50" width="160" height="60" rx="10" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="300" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#166534">粒子数 N</text>
          <text x="300" y="95" textAnchor="middle" fontSize="12" fill="#14532d">×Nₐ ↑ ÷Nₐ ↓</text>
        </g>

        {/* 下方：气体体积 */}
        <g
          className="node-box"
          onMouseEnter={() => setActiveRelation('volume')}
          onMouseLeave={() => setActiveRelation(null)}
        >
          <line x1="300" y1="320" x2="300" y2="400" stroke="#ec4899" strokeWidth="3" markerEnd="url(#arrowPink)" />
          <rect x="210" y="400" width="180" height="60" rx="10" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <text x="300" y="425" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#9d174d">气体体积 V</text>
          <text x="300" y="445" textAnchor="middle" fontSize="12" fill="#831843">×22.4 ↑ ÷22.4 ↓ (STP)</text>
        </g>

        {/* 左侧：质量 */}
        <g
          className="node-box"
          onMouseEnter={() => setActiveRelation('mass')}
          onMouseLeave={() => setActiveRelation(null)}
        >
          <line x1="230" y1="250" x2="130" y2="250" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowBlue)" />
          <rect x="30" y="220" width="120" height="60" rx="10" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="90" y="245" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e40af">质量 m</text>
          <text x="90" y="265" textAnchor="middle" fontSize="12" fill="#1e3a8a">×M ← ÷M →</text>
        </g>

        {/* 右侧：浓度 */}
        <g
          className="node-box"
          onMouseEnter={() => setActiveRelation('concentration')}
          onMouseLeave={() => setActiveRelation(null)}
        >
          <line x1="370" y1="250" x2="470" y2="250" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#arrowPurple)" />
          <rect x="450" y="220" width="140" height="60" rx="10" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="520" y="245" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#5b21b6">浓度 c</text>
          <text x="520" y="265" textAnchor="middle" fontSize="12" fill="#4c1d95">÷V(溶液) → ×V ←</text>
        </g>

        {/* 箭头定义 - 放在最前面确保被引用 */}
        <defs>
          <marker id="arrowGreen" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
            <path d="M0,0 L0,12 L12,6 z" fill="#22c55e" />
          </marker>
          <marker id="arrowPink" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
            <path d="M0,0 L0,12 L12,6 z" fill="#ec4899" />
          </marker>
          <marker id="arrowBlue" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
            <path d="M0,0 L0,12 L12,6 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowPurple" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
            <path d="M0,0 L0,12 L12,6 z" fill="#8b5cf6" />
          </marker>
        </defs>

        {/* 信息显示框 */}
        {activeRelation && (
          <g>
            <rect x="100" y="480" width="400" height="50" rx="8" fill="#1f2937" fillOpacity="0.95" />
            <text x="300" y="502" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#fcd34d">
              {relations[activeRelation].formula}
            </text>
            <text x="300" y="520" textAnchor="middle" fontSize="12" fill="#d1d5db">
              {relations[activeRelation].desc}
            </text>
          </g>
        )}
      </svg>

      {/* 公式总结框 */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-center font-mono text-lg">
          n = N/Nₐ = m/M = V/Vₘ = c·V
        </p>
      </div>
    </div>
  )
}

export default MoleRelationships
