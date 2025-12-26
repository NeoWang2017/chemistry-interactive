import { useState } from 'react'

// 氧化物分类图
function OxideClassification() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodeInfo = {
    acidic: { desc: '与碱反应生成盐和水，对应酸' },
    basic: { desc: '与酸反应生成盐和水，对应碱' },
    amphoteric: { desc: '既能与酸反应，又能与碱反应' },
    neutral: { desc: '不能与酸碱反应生成盐' },
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 320" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="350" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          氧化物的分类
        </text>

        {/* 顶层节点 */}
        <rect x="275" y="50" width="150" height="45" rx="8" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
        <text x="350" y="78" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1f2937">氧化物</text>

        {/* 连接线 */}
        <line x1="350" y1="95" x2="350" y2="115" stroke="#374151" strokeWidth="2" />
        <line x1="100" y1="115" x2="600" y2="115" stroke="#374151" strokeWidth="2" />
        <line x1="100" y1="115" x2="100" y2="135" stroke="#374151" strokeWidth="2" />
        <line x1="266" y1="115" x2="266" y2="135" stroke="#374151" strokeWidth="2" />
        <line x1="433" y1="115" x2="433" y2="135" stroke="#374151" strokeWidth="2" />
        <line x1="600" y1="115" x2="600" y2="135" stroke="#374151" strokeWidth="2" />

        {/* 酸性氧化物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('acidic')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="25" y="135" width="150" height="80" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="100" y="160" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#991b1b">酸性氧化物</text>
          <text x="100" y="180" textAnchor="middle" fontSize="11" fill="#7f1d1d">与碱反应生成盐和水</text>
          <text x="100" y="200" textAnchor="middle" fontSize="11" fill="#7f1d1d">CO₂、SO₂、SO₃</text>
        </g>

        {/* 碱性氧化物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('basic')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="191" y="135" width="150" height="80" rx="8" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="266" y="160" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#166534">碱性氧化物</text>
          <text x="266" y="180" textAnchor="middle" fontSize="11" fill="#14532d">与酸反应生成盐和水</text>
          <text x="266" y="200" textAnchor="middle" fontSize="11" fill="#14532d">Na₂O、CaO、Fe₂O₃</text>
        </g>

        {/* 两性氧化物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('amphoteric')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="358" y="135" width="150" height="80" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="433" y="160" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#5b21b6">两性氧化物</text>
          <text x="433" y="180" textAnchor="middle" fontSize="11" fill="#4c1d95">既能与酸又能与碱反应</text>
          <text x="433" y="200" textAnchor="middle" fontSize="11" fill="#4c1d95">Al₂O₃</text>
        </g>

        {/* 不成盐氧化物 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('neutral')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="525" y="135" width="150" height="80" rx="8" fill="#d1d5db" stroke="#6b7280" strokeWidth="2" />
          <text x="600" y="160" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#374151">不成盐氧化物</text>
          <text x="600" y="180" textAnchor="middle" fontSize="11" fill="#4b5563">不能与酸碱反应生成盐</text>
          <text x="600" y="200" textAnchor="middle" fontSize="11" fill="#4b5563">CO、NO</text>
        </g>

        {/* 提示框 */}
        {hoveredNode && (
          <g>
            <rect x="150" y="250" width="400" height="40" rx="8" fill="#1f2937" fillOpacity="0.9" />
            <text x="350" y="275" textAnchor="middle" fontSize="13" fill="white">
              {nodeInfo[hoveredNode].desc}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default OxideClassification
