import { useState } from 'react'

// 物质分类树状图 - 完整显示版
function MatterClassification() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodeInfo = {
    matter: { title: '物质', desc: '由原子或分子组成的实体' },
    mixture: { title: '混合物', desc: '由两种或多种物质混合而成，各成分保持原有性质', examples: '空气、溶液、合金' },
    pureSubstance: { title: '纯净物', desc: '由一种物质组成，有固定的组成和性质', examples: 'H₂O、NaCl、O₂' },
    element: { title: '单质', desc: '由同种元素组成的纯净物', examples: 'O₂、Fe、C、S' },
    compound: { title: '化合物', desc: '由不同种元素组成的纯净物', examples: 'H₂O、NaCl、H₂SO₄' },
    oxide: { title: '氧化物', desc: '由两种元素组成，其中一种是氧', examples: 'H₂O、CaO、CO₂' },
    acid: { title: '酸', desc: '电离出的阳离子全部是H⁺', examples: 'HCl、H₂SO₄、HNO₃' },
    base: { title: '碱', desc: '电离出的阴离子全部是OH⁻', examples: 'NaOH、Ca(OH)₂' },
    salt: { title: '盐', desc: '由金属离子和酸根离子组成', examples: 'NaCl、CaCO₃' },
  }

  return (
    <div className="diagram-container">
      <svg
        viewBox="0 0 800 420"
        className="diagram-svg w-full max-w-3xl"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        {/* 顶层节点：物质 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('matter')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="325" y="15" width="150" height="45" rx="8" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
          <text x="400" y="43" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#1f2937">物质</text>
        </g>

        {/* 第一层连接线 */}
        <line x1="400" y1="60" x2="400" y2="75" stroke="#374151" strokeWidth="2" />
        <line x1="150" y1="75" x2="650" y2="75" stroke="#374151" strokeWidth="2" />
        <line x1="150" y1="75" x2="150" y2="90" stroke="#374151" strokeWidth="2" />
        <line x1="650" y1="75" x2="650" y2="90" stroke="#374151" strokeWidth="2" />

        {/* 混合物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('mixture')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="50" y="90" width="200" height="55" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="150" y="115" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">混合物</text>
          <text x="150" y="132" textAnchor="middle" fontSize="11" fill="#78350f">如：空气、溶液、合金</text>
        </g>

        {/* 纯净物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('pureSubstance')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="550" y="90" width="200" height="55" rx="8" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
          <text x="650" y="115" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#155e75">纯净物</text>
          <text x="650" y="132" textAnchor="middle" fontSize="11" fill="#164e63">有固定的组成和性质</text>
        </g>

        {/* 第二层连接线 */}
        <line x1="650" y1="145" x2="650" y2="160" stroke="#0891b2" strokeWidth="2" />
        <line x1="400" y1="160" x2="650" y2="160" stroke="#0891b2" strokeWidth="2" />
        <line x1="400" y1="160" x2="400" y2="175" stroke="#0891b2" strokeWidth="2" />
        <line x1="650" y1="160" x2="650" y2="175" stroke="#0891b2" strokeWidth="2" />

        {/* 单质 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('element')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="300" y="175" width="200" height="55" rx="8" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="400" y="200" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#166534">单质</text>
          <text x="400" y="217" textAnchor="middle" fontSize="11" fill="#14532d">如：O₂、Fe、C、S</text>
        </g>

        {/* 化合物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('compound')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="550" y="175" width="200" height="55" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="650" y="200" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#5b21b6">化合物</text>
          <text x="650" y="217" textAnchor="middle" fontSize="11" fill="#4c1d95">如：H₂O、NaCl</text>
        </g>

        {/* 第三层连接线 - 化合物的子类 */}
        <line x1="650" y1="230" x2="650" y2="245" stroke="#7c3aed" strokeWidth="2" />
        <line x1="100" y1="245" x2="700" y2="245" stroke="#7c3aed" strokeWidth="2" />
        <line x1="100" y1="245" x2="100" y2="260" stroke="#7c3aed" strokeWidth="2" />
        <line x1="300" y1="245" x2="300" y2="260" stroke="#7c3aed" strokeWidth="2" />
        <line x1="500" y1="245" x2="500" y2="260" stroke="#7c3aed" strokeWidth="2" />
        <line x1="700" y1="245" x2="700" y2="260" stroke="#7c3aed" strokeWidth="2" />

        {/* 氧化物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('oxide')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="20" y="260" width="160" height="50" rx="6" fill="#fde68a" stroke="#ca8a04" strokeWidth="2" />
          <text x="100" y="282" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#854d0e">氧化物</text>
          <text x="100" y="298" textAnchor="middle" fontSize="10" fill="#713f12">H₂O、CaO、CO₂</text>
        </g>

        {/* 酸 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('acid')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="220" y="260" width="160" height="50" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="300" y="282" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#991b1b">酸</text>
          <text x="300" y="298" textAnchor="middle" fontSize="10" fill="#7f1d1d">HCl、H₂SO₄、HNO₃</text>
        </g>

        {/* 碱 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('base')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="420" y="260" width="160" height="50" rx="6" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="500" y="282" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#166534">碱</text>
          <text x="500" y="298" textAnchor="middle" fontSize="10" fill="#14532d">NaOH、Ca(OH)₂</text>
        </g>

        {/* 盐 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('salt')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="620" y="260" width="160" height="50" rx="6" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="700" y="282" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">盐</text>
          <text x="700" y="298" textAnchor="middle" fontSize="10" fill="#1e3a8a">NaCl、CaCO₃</text>
        </g>

        {/* 提示框 */}
        {hoveredNode && nodeInfo[hoveredNode] && (
          <g>
            <rect x="100" y="340" width="600" height="55" rx="8" fill="#1f2937" fillOpacity="0.95" />
            <text x="400" y="363" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">
              {nodeInfo[hoveredNode].title}：{nodeInfo[hoveredNode].desc}
            </text>
            {nodeInfo[hoveredNode].examples && (
              <text x="400" y="382" textAnchor="middle" fontSize="12" fill="#d1d5db">
                例如：{nodeInfo[hoveredNode].examples}
              </text>
            )}
          </g>
        )}
      </svg>
    </div>
  )
}

export default MatterClassification
