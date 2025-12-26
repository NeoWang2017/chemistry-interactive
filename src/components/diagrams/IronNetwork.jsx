import { useState } from 'react'

// 铁及其化合物转化网络图
function IronNetwork() {
  const [hoveredPath, setHoveredPath] = useState(null)

  const reactions = {
    feToFe2: 'Fe + 2HCl = FeCl₂ + H₂↑',
    feToFe3: '2Fe + 3Cl₂ = 2FeCl₃',
    feToFeO: '2Fe + O₂ = 2FeO（高温，隔绝空气）',
    feToFe3O4: '3Fe + 2O₂ = Fe₃O₄（点燃）',
    fe2ToFe3: '2Fe²⁺ + Cl₂ = 2Fe³⁺ + 2Cl⁻',
    fe3ToFe2: '2Fe³⁺ + Fe = 3Fe²⁺',
    fe2ToFeOH2: 'Fe²⁺ + 2OH⁻ = Fe(OH)₂↓',
    fe3ToFeOH3: 'Fe³⁺ + 3OH⁻ = Fe(OH)₃↓',
    feOH2ToFeOH3: '4Fe(OH)₂ + O₂ + 2H₂O = 4Fe(OH)₃',
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 750 455" className="diagram-svg w-full max-w-3xl">
        {/* 标题 */}
        <text x="375" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          铁及其化合物转化网络
        </text>

        {/* 中心：Fe */}
        <g>
          <circle cx="375" cy="140" r="45" fill="#d4d4d8" stroke="#71717a" strokeWidth="3" />
          <text x="375" y="145" textAnchor="middle" fontWeight="bold" fontSize="28" fill="#3f3f46">Fe</text>
        </g>

        {/* Fe²⁺ - 左侧 */}
        <g
          onMouseEnter={() => setHoveredPath('fe2ToFe3')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <circle cx="180" cy="220" r="40" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="180" y="218" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#166534">Fe²⁺</text>
          <text x="180" y="235" textAnchor="middle" fontSize="10" fill="#14532d">浅绿色</text>
        </g>

        {/* Fe → Fe²⁺ */}
        <path d="M 330 155 L 220 200" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#ironArrowG)" />
        <text x="260" y="165" textAnchor="middle" fontSize="9" fill="#16a34a">+稀酸</text>

        {/* Fe³⁺ - 右侧 */}
        <g
          onMouseEnter={() => setHoveredPath('fe3ToFe2')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <circle cx="570" cy="220" r="40" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="570" y="218" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#92400e">Fe³⁺</text>
          <text x="570" y="235" textAnchor="middle" fontSize="10" fill="#78350f">黄色</text>
        </g>

        {/* Fe → Fe³⁺ */}
        <path d="M 420 155 L 530 200" stroke="#d97706" strokeWidth="2" fill="none" markerEnd="url(#ironArrowO)" />
        <text x="485" y="165" textAnchor="middle" fontSize="9" fill="#d97706">+Cl₂</text>

        {/* Fe²⁺ ⇌ Fe³⁺ 双向箭头 */}
        <line x1="220" y1="220" x2="530" y2="220" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,3" />
        <polygon points="530,220 520,215 520,225" fill="#7c3aed" />
        <polygon points="220,220 230,215 230,225" fill="#7c3aed" />
        <text x="375" y="212" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">氧化/还原</text>
        <text x="375" y="235" textAnchor="middle" fontSize="9" fill="#5b21b6">+Cl₂ → / +Fe →</text>

        {/* Fe(OH)₂ - 左下 */}
        <g
          onMouseEnter={() => setHoveredPath('feOH2ToFeOH3')}
          onMouseLeave={() => setHoveredPath(null)}
          className="cursor-pointer"
        >
          <rect x="100" y="310" width="110" height="50" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
          <text x="155" y="335" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#15803d">Fe(OH)₂</text>
          <text x="155" y="350" textAnchor="middle" fontSize="9" fill="#166534">白色（易氧化）</text>
        </g>

        {/* Fe²⁺ → Fe(OH)₂ */}
        <line x1="175" y1="260" x2="160" y2="310" stroke="#22c55e" strokeWidth="2" markerEnd="url(#ironArrowG)" />
        <text x="140" y="285" fontSize="9" fill="#22c55e">+OH⁻</text>

        {/* Fe(OH)₃ - 右下 */}
        <g>
          <rect x="540" y="310" width="110" height="50" rx="8" fill="#fef3c7" stroke="#ea580c" strokeWidth="2" />
          <text x="595" y="335" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#c2410c">Fe(OH)₃</text>
          <text x="595" y="350" textAnchor="middle" fontSize="9" fill="#9a3412">红褐色</text>
        </g>

        {/* Fe³⁺ → Fe(OH)₃ */}
        <line x1="575" y1="260" x2="590" y2="310" stroke="#ea580c" strokeWidth="2" markerEnd="url(#ironArrowOr)" />
        <text x="610" y="285" fontSize="9" fill="#ea580c">+OH⁻</text>

        {/* Fe(OH)₂ → Fe(OH)₃ */}
        <line x1="210" y1="335" x2="540" y2="335" stroke="#dc2626" strokeWidth="2" markerEnd="url(#ironArrowR)" />
        <text x="375" y="328" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">氧化（空气中）</text>
        <text x="375" y="348" textAnchor="middle" fontSize="9" fill="#991b1b">白色→灰绿→红褐</text>

        {/* 铁的氧化物 - 上方 */}
        <g>
          <rect x="90" y="70" width="90" height="40" rx="6" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
          <text x="135" y="95" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#374151">FeO（黑）</text>
        </g>
        <path d="M 330 125 L 180 90" stroke="#6b7280" strokeWidth="1.5" fill="none" />

        <g>
          <rect x="570" y="70" width="100" height="40" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="620" y="95" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#991b1b">Fe₂O₃（红棕）</text>
        </g>

        <g>
          <rect x="330" y="45" width="90" height="40" rx="6" fill="#1f2937" stroke="#374151" strokeWidth="2" />
          <text x="375" y="70" textAnchor="middle" fontWeight="bold" fontSize="12" fill="white">Fe₃O₄（黑）</text>
        </g>
        <path d="M 375 95 L 375 95" stroke="#374151" strokeWidth="1.5" fill="none" />
        <text x="375" y="110" textAnchor="middle" fontSize="8" fill="#6b7280">点燃</text>

        {/* 高考重点标记 */}
        <g>
          <rect x="280" y="380" width="190" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <text x="375" y="400" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">
            ⭐ Fe²⁺ ⇌ Fe³⁺ 转化是高考重点
          </text>
        </g>

        {/* 箭头定义 - 放在最前面 */}
        <defs>
          <marker id="ironArrowG" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
          </marker>
          <marker id="ironArrowO" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#d97706" />
          </marker>
          <marker id="ironArrowR" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
          </marker>
          <marker id="ironArrowOr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ea580c" />
          </marker>
        </defs>

        {/* 反应方程式提示 */}
        {hoveredPath && reactions[hoveredPath] && (
          <g>
            <rect x="150" y="420" width="450" height="25" rx="4" fill="#1f2937" fillOpacity="0.95" />
            <text x="375" y="437" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">
              {reactions[hoveredPath]}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default IronNetwork
