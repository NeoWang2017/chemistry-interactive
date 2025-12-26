import { useState } from 'react'

// 铝及其化合物转化网络图
function AluminumNetwork() {
  const [hoveredPath, setHoveredPath] = useState(null)

  const reactions = {
    alToAl3: '2Al + 6HCl = 2AlCl₃ + 3H₂↑',
    alToAlO2: '2Al + 2NaOH + 2H₂O = 2NaAlO₂ + 3H₂↑',
    al3ToAlOH3: 'Al³⁺ + 3NH₃·H₂O = Al(OH)₃↓ + 3NH₄⁺',
    alO2ToAlOH3: 'AlO₂⁻ + CO₂ + 2H₂O = Al(OH)₃↓ + HCO₃⁻',
    alOH3ToAl3: 'Al(OH)₃ + 3H⁺ = Al³⁺ + 3H₂O',
    alOH3ToAlO2: 'Al(OH)₃ + OH⁻ = AlO₂⁻ + 2H₂O',
    al2O3ToAl3: 'Al₂O₃ + 6HCl = 2AlCl₃ + 3H₂O',
    al2O3ToAlO2: 'Al₂O₃ + 2NaOH = 2NaAlO₂ + H₂O',
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 480" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="350" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          铝及其化合物转化网络
        </text>
        <text x="350" y="45" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="bold">
          ⭐ 两性物质是核心考点
        </text>

        {/* 中心：Al */}
        <g>
          <circle cx="350" cy="130" r="45" fill="#d4d4d8" stroke="#71717a" strokeWidth="3" />
          <text x="350" y="135" textAnchor="middle" fontWeight="bold" fontSize="28" fill="#3f3f46">Al</text>
        </g>

        {/* Al³⁺ - 左侧 */}
        <g
          onMouseEnter={() => setHoveredPath('al3ToAlOH3')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <circle cx="150" cy="220" r="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="150" y="225" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#1e40af">Al³⁺</text>
        </g>

        {/* Al → Al³⁺ */}
        <path d="M 305 145 L 190 200" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#alArrowB)" />
        <text x="235" y="160" textAnchor="middle" fontSize="10" fill="#2563eb">+酸</text>

        {/* AlO₂⁻ - 右侧 */}
        <g
          onMouseEnter={() => setHoveredPath('alO2ToAlOH3')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <circle cx="550" cy="220" r="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="550" y="225" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#166534">AlO₂⁻</text>
        </g>

        {/* Al → AlO₂⁻ */}
        <path d="M 395 145 L 510 200" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#alArrowG)" />
        <text x="465" y="160" textAnchor="middle" fontSize="10" fill="#16a34a">+碱</text>

        {/* Al(OH)₃ - 中间下方 */}
        <g
          onMouseEnter={() => setHoveredPath('alOH3ToAl3')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <rect x="275" y="290" width="150" height="55" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="3" />
          <text x="350" y="318" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#15803d">Al(OH)₃</text>
          <text x="350" y="335" textAnchor="middle" fontSize="10" fill="#166534">白色胶状（两性）</text>
        </g>

        {/* Al³⁺ → Al(OH)₃ */}
        <path d="M 175 255 L 290 300" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#alArrowSky)" />
        <text x="200" y="290" fontSize="9" fill="#3b82f6">+NH₃·H₂O</text>

        {/* AlO₂⁻ → Al(OH)₃ */}
        <path d="M 525 255 L 410 300" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#alArrowG)" />
        <text x="490" y="290" fontSize="9" fill="#22c55e">+CO₂+H₂O</text>

        {/* Al(OH)₃ → Al³⁺ (反向) */}
        <path d="M 290 320 L 175 260" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3" fill="none" markerEnd="url(#alArrowR)" />
        <text x="195" y="300" fontSize="9" fill="#dc2626">+酸</text>

        {/* Al(OH)₃ → AlO₂⁻ (反向) */}
        <path d="M 410 320 L 525 260" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,3" fill="none" markerEnd="url(#alArrowP)" />
        <text x="495" y="300" fontSize="9" fill="#7c3aed">+强碱</text>

        {/* Al₂O₃ - 上方 */}
        <g>
          <rect x="275" y="60" width="150" height="40" rx="8" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
          <text x="350" y="85" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#374151">Al₂O₃（两性）</text>
        </g>

        {/* Al₂O₃ ↔ Al³⁺ 和 AlO₂⁻ */}
        <path d="M 290 80 L 175 180" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,2" fill="none" />
        <text x="210" y="125" fontSize="8" fill="#6b7280">+酸</text>

        <path d="M 410 80 L 525 180" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,2" fill="none" />
        <text x="480" y="125" fontSize="8" fill="#6b7280">+碱</text>

        {/* 图例说明 */}
        <g>
          <rect x="50" y="370" width="200" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="150" y="390" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e40af">酸性环境</text>
          <text x="150" y="408" textAnchor="middle" fontSize="10" fill="#1e3a8a">Al³⁺ 存在</text>
          <text x="150" y="425" textAnchor="middle" fontSize="9" fill="#1e3a8a">（如：AlCl₃溶液）</text>
        </g>

        <g>
          <rect x="450" y="370" width="200" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="550" y="390" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#166534">碱性环境</text>
          <text x="550" y="408" textAnchor="middle" fontSize="10" fill="#14532d">AlO₂⁻ 存在</text>
          <text x="550" y="425" textAnchor="middle" fontSize="9" fill="#14532d">（如：NaAlO₂溶液）</text>
        </g>

        <g>
          <rect x="250" y="370" width="200" height="70" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
          <text x="350" y="390" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#15803d">沉淀Al(OH)₃</text>
          <text x="350" y="408" textAnchor="middle" fontSize="10" fill="#166534">用弱碱/弱酸生成</text>
          <text x="350" y="425" textAnchor="middle" fontSize="9" fill="#166534">避免沉淀溶解</text>
        </g>

        {/* 箭头定义 - 放在最前面 */}
        <defs>
          <marker id="alArrowB" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
          </marker>
          <marker id="alArrowG" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
          </marker>
          <marker id="alArrowR" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
          </marker>
          <marker id="alArrowP" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed" />
          </marker>
          <marker id="alArrowSky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
          </marker>
        </defs>

        {/* 反应方程式提示 */}
        {hoveredPath && reactions[hoveredPath] && (
          <g>
            <rect x="100" y="445" width="500" height="25" rx="4" fill="#1f2937" fillOpacity="0.95" />
            <text x="350" y="462" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">
              {reactions[hoveredPath]}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default AluminumNetwork
