import { useState } from 'react'

// Fe²⁺ 和 Fe³⁺ 互相转化图
function IronIonConversion() {
  const [hoveredPath, setHoveredPath] = useState(null)

  const pathInfo = {
    feToFe2: { label: '+HCl', desc: 'Fe + 2HCl = FeCl₂ + H₂↑' },
    feToFe3: { label: '+Cl₂', desc: '2Fe + 3Cl₂ = 2FeCl₃（点燃）' },
    fe2ToFe3: { label: '+氧化剂', desc: '2Fe²⁺ + Cl₂ = 2Fe³⁺ + 2Cl⁻' },
    fe3ToFe2: { label: '+还原剂', desc: '2Fe³⁺ + Fe = 3Fe²⁺' },
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 600 380" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="300" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          Fe²⁺ 与 Fe³⁺ 的相互转化
        </text>

        {/* Fe 金属 */}
        <g>
          <circle cx="150" cy="180" r="55" fill="#9ca3af" stroke="#374151" strokeWidth="3" />
          <text x="150" y="175" textAnchor="middle" fontWeight="bold" fontSize="28" fill="#1f2937">Fe</text>
          <text x="150" y="200" textAnchor="middle" fontSize="12" fill="#374151">金属 (0)</text>
        </g>

        {/* Fe²⁺ */}
        <g>
          <circle cx="300" cy="180" r="55" fill="#86efac" stroke="#16a34a" strokeWidth="3" />
          <text x="300" y="175" textAnchor="middle" fontWeight="bold" fontSize="24" fill="#166534">Fe²⁺</text>
          <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#15803d">亚铁离子 (浅绿色)</text>
        </g>

        {/* Fe³⁺ */}
        <g>
          <circle cx="450" cy="180" r="55" fill="#fcd34d" stroke="#ca8a04" strokeWidth="3" />
          <text x="450" y="175" textAnchor="middle" fontWeight="bold" fontSize="24" fill="#78350f">Fe³⁺</text>
          <text x="450" y="200" textAnchor="middle" fontSize="12" fill="#92400e">铁离子 (黄色)</text>
        </g>

        {/* Fe → Fe²⁺ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setHoveredPath('feToFe2')}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <path
            d="M 205 180 L 245 180"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            markerEnd="url(#arrowBlue)"
          />
          <rect x="200" y="145" width="55" height="25" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1" />
          <text x="227" y="162" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">+HCl</text>
        </g>

        {/* Fe → Fe³⁺ (弧线) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setHoveredPath('feToFe3')}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <path
            d="M 190 135 Q 300 50 410 135"
            fill="none"
            stroke="#dc2626"
            strokeWidth="3"
            markerEnd="url(#arrowRed)"
          />
          <rect x="270" y="60" width="60" height="25" rx="4" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
          <text x="300" y="77" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">+Cl₂</text>
        </g>

        {/* Fe²⁺ ⇌ Fe³⁺ */}
        {/* 氧化方向 */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setHoveredPath('fe2ToFe3')}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <path
            d="M 355 165 L 395 165"
            fill="none"
            stroke="#dc2626"
            strokeWidth="3"
            markerEnd="url(#arrowRed)"
          />
          <text x="375" y="155" textAnchor="middle" fontSize="10" fill="#dc2626">氧化</text>
          <text x="375" y="142" textAnchor="middle" fontSize="9" fill="#991b1b">+Cl₂,+HNO₃</text>
        </g>

        {/* 还原方向 */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setHoveredPath('fe3ToFe2')}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <path
            d="M 395 195 L 355 195"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            markerEnd="url(#arrowBlue)"
          />
          <text x="375" y="215" textAnchor="middle" fontSize="10" fill="#3b82f6">还原</text>
          <text x="375" y="228" textAnchor="middle" fontSize="9" fill="#1e40af">+Fe,+I⁻</text>
        </g>

        {/* 箭头定义 */}
        <defs>
          <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
          </marker>
        </defs>

        {/* 重要规律框 */}
        <rect x="80" y="280" width="440" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="300" y="305" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">
          还原性强弱：S²⁻ {'>'} I⁻ {'>'} Fe²⁺ {'>'} Br⁻ {'>'} Cl⁻
        </text>
        <text x="300" y="330" textAnchor="middle" fontSize="12" fill="#78350f">
          Fe³⁺能氧化 S²⁻、I⁻，但不能氧化 Br⁻、Cl⁻
        </text>

        {/* 悬停信息 */}
        {hoveredPath && pathInfo[hoveredPath] && (
          <g>
            <rect x="150" y="360" width="300" height="30" rx="6" fill="#1f2937" />
            <text x="300" y="380" textAnchor="middle" fontSize="12" fill="white">
              {pathInfo[hoveredPath].desc}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default IronIonConversion
