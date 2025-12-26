import { useState } from 'react'

// 电解质分类图
function ElectrolyteClass() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodeInfo = {
    electrolyte: { title: '电解质', desc: '在水溶液中或熔融状态下能导电的化合物' },
    nonElectrolyte: { title: '非电解质', desc: '在水溶液中和熔融状态下都不能导电的化合物', examples: '蔗糖、酒精' },
    strong: { title: '强电解质', desc: '在水溶液中完全电离', examples: '强酸、强碱、大多数盐' },
    weak: { title: '弱电解质', desc: '在水溶液中部分电离', examples: '弱酸、弱碱、水' },
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 320" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="350" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          电解质与非电解质分类
        </text>

        {/* 顶层：化合物 */}
        <g>
          <rect x="275" y="45" width="150" height="40" rx="6" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
          <text x="350" y="70" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1f2937">化合物</text>
        </g>

        {/* 连接线 */}
        <line x1="350" y1="85" x2="350" y2="100" stroke="#374151" strokeWidth="2" />
        <line x1="175" y1="100" x2="525" y2="100" stroke="#374151" strokeWidth="2" />
        <line x1="175" y1="100" x2="175" y2="115" stroke="#374151" strokeWidth="2" />
        <line x1="525" y1="100" x2="525" y2="115" stroke="#374151" strokeWidth="2" />

        {/* 电解质 */}
        <g
          onMouseEnter={() => setHoveredNode('electrolyte')}
          onMouseLeave={() => setHoveredNode(null)}
          className="cursor-pointer"
        >
          <rect x="75" y="115" width="200" height="50" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="175" y="140" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e40af">电解质</text>
          <text x="175" y="155" textAnchor="middle" fontSize="10" fill="#1e3a8a">溶于水或熔融能导电</text>
        </g>

        {/* 非电解质 */}
        <g
          onMouseEnter={() => setHoveredNode('nonElectrolyte')}
          onMouseLeave={() => setHoveredNode(null)}
          className="cursor-pointer"
        >
          <rect x="425" y="115" width="200" height="50" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="525" y="140" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#991b1b">非电解质</text>
          <text x="525" y="155" textAnchor="middle" fontSize="10" fill="#7f1d1d">如：蔗糖、酒精、CO₂</text>
        </g>

        {/* 电解质子分类连接线 */}
        <line x1="175" y1="165" x2="175" y2="180" stroke="#2563eb" strokeWidth="2" />
        <line x1="100" y1="180" x2="250" y2="180" stroke="#2563eb" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="195" stroke="#2563eb" strokeWidth="2" />
        <line x1="250" y1="180" x2="250" y2="195" stroke="#2563eb" strokeWidth="2" />

        {/* 强电解质 */}
        <g
          onMouseEnter={() => setHoveredNode('strong')}
          onMouseLeave={() => setHoveredNode(null)}
          className="cursor-pointer"
        >
          <rect x="25" y="195" width="150" height="85" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="100" y="218" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#166534">强电解质</text>
          <text x="100" y="235" textAnchor="middle" fontSize="10" fill="#14532d">完全电离（用 = ）</text>
          <line x1="45" y1="245" x2="155" y2="245" stroke="#16a34a" strokeWidth="1" strokeDasharray="3,2" />
          <text x="100" y="260" textAnchor="middle" fontSize="9" fill="#166534">强酸：HCl、H₂SO₄</text>
          <text x="100" y="272" textAnchor="middle" fontSize="9" fill="#166534">强碱：NaOH、KOH</text>
        </g>

        {/* 弱电解质 */}
        <g
          onMouseEnter={() => setHoveredNode('weak')}
          onMouseLeave={() => setHoveredNode(null)}
          className="cursor-pointer"
        >
          <rect x="175" y="195" width="150" height="85" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="250" y="218" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#92400e">弱电解质</text>
          <text x="250" y="235" textAnchor="middle" fontSize="10" fill="#78350f">部分电离（用 ⇌ ）</text>
          <line x1="195" y1="245" x2="305" y2="245" stroke="#d97706" strokeWidth="1" strokeDasharray="3,2" />
          <text x="250" y="260" textAnchor="middle" fontSize="9" fill="#92400e">弱酸：CH₃COOH</text>
          <text x="250" y="272" textAnchor="middle" fontSize="9" fill="#92400e">弱碱：NH₃·H₂O</text>
        </g>

        {/* 注意事项框 */}
        <g>
          <rect x="380" y="195" width="280" height="85" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <text x="520" y="218" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">⚠️ 重要提醒</text>
          <text x="520" y="238" textAnchor="middle" fontSize="10" fill="#78350f">• 单质和混合物不属于此分类</text>
          <text x="520" y="253" textAnchor="middle" fontSize="10" fill="#78350f">• 电解质本身不一定导电</text>
          <text x="520" y="268" textAnchor="middle" fontSize="10" fill="#78350f">• CO₂溶于水能导电是因为生成H₂CO₃</text>
        </g>

        {/* 提示框 */}
        {hoveredNode && nodeInfo[hoveredNode] && (
          <g>
            <rect x="100" y="290" width="500" height="25" rx="4" fill="#1f2937" fillOpacity="0.9" />
            <text x="350" y="307" textAnchor="middle" fontSize="12" fill="white">
              {nodeInfo[hoveredNode].title}：{nodeInfo[hoveredNode].desc}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default ElectrolyteClass
