import { useState } from 'react'

// 钠及其化合物转化网络
function SodiumNetwork() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)

  const nodes = {
    na: { name: 'Na', desc: '钠单质，银白色金属', color: '#d1d5db' },
    na2o: { name: 'Na₂O', desc: '氧化钠，白色固体', color: '#e5e7eb' },
    na2o2: { name: 'Na₂O₂', desc: '过氧化钠，淡黄色固体', color: '#fef08a' },
    naoh: { name: 'NaOH', desc: '氢氧化钠，烧碱', color: '#bbf7d0' },
    na2co3: { name: 'Na₂CO₃', desc: '碳酸钠，纯碱', color: '#bfdbfe' },
    nahco3: { name: 'NaHCO₃', desc: '碳酸氢钠，小苏打', color: '#ddd6fe' },
  }

  const paths = {
    'na-na2o': { condition: '+O₂(常温)', equation: '4Na + O₂ = 2Na₂O' },
    'na-na2o2': { condition: '+O₂(点燃)', equation: '2Na + O₂ = Na₂O₂' },
    'na2o-naoh': { condition: '+H₂O', equation: 'Na₂O + H₂O = 2NaOH' },
    'na2o2-naoh': { condition: '+H₂O', equation: '2Na₂O₂ + 2H₂O = 4NaOH + O₂↑' },
    'naoh-na2co3': { condition: '+CO₂(少量)', equation: '2NaOH + CO₂ = Na₂CO₃ + H₂O' },
    'naoh-nahco3': { condition: '+CO₂(过量)', equation: 'NaOH + CO₂ = NaHCO₃' },
    'na2co3-nahco3': { condition: '+CO₂+H₂O', equation: 'Na₂CO₃ + CO₂ + H₂O = 2NaHCO₃' },
    'nahco3-na2co3': { condition: '加热', equation: '2NaHCO₃ = Na₂CO₃ + H₂O + CO₂↑' },
  }

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 450" className="diagram-svg w-full max-w-3xl">
        {/* 标题 */}
        <text x="350" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          钠及其化合物的转化网络
        </text>

        {/* Na 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('na')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="50" y="150" width="100" height="60" rx="10" fill={nodes.na.color} stroke="#6b7280" strokeWidth="2" />
          <text x="100" y="185" textAnchor="middle" fontWeight="bold" fontSize="20" fill="#374151">Na</text>
        </g>

        {/* Na₂O 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('na2o')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="200" y="100" width="100" height="60" rx="10" fill={nodes.na2o.color} stroke="#6b7280" strokeWidth="2" />
          <text x="250" y="135" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#374151">Na₂O</text>
        </g>

        {/* Na₂O₂ 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('na2o2')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="200" y="200" width="100" height="60" rx="10" fill={nodes.na2o2.color} stroke="#ca8a04" strokeWidth="2" />
          <text x="250" y="235" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#78350f">Na₂O₂</text>
        </g>

        {/* NaOH 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('naoh')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="375" y="150" width="100" height="60" rx="10" fill={nodes.naoh.color} stroke="#16a34a" strokeWidth="2" />
          <text x="425" y="185" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#166534">NaOH</text>
        </g>

        {/* Na₂CO₃ 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('na2co3')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="525" y="100" width="120" height="60" rx="10" fill={nodes.na2co3.color} stroke="#2563eb" strokeWidth="2" />
          <text x="585" y="135" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#1e40af">Na₂CO₃</text>
        </g>

        {/* NaHCO₃ 节点 */}
        <g
          className="node-box"
          onMouseEnter={() => setHoveredNode('nahco3')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect x="525" y="200" width="120" height="60" rx="10" fill={nodes.nahco3.color} stroke="#7c3aed" strokeWidth="2" />
          <text x="585" y="235" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#5b21b6">NaHCO₃</text>
        </g>

        {/* 连接线 */}
        {/* Na → Na₂O */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setSelectedPath('na-na2o')}
          onMouseLeave={() => setSelectedPath(null)}
        >
          <line x1="150" y1="165" x2="200" y2="140" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
          <text x="160" y="140" fontSize="10" fill="#4b5563">+O₂</text>
          <text x="160" y="152" fontSize="9" fill="#6b7280">(常温)</text>
        </g>

        {/* Na → Na₂O₂ */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setSelectedPath('na-na2o2')}
          onMouseLeave={() => setSelectedPath(null)}
        >
          <line x1="150" y1="195" x2="200" y2="220" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrowYellow)" />
          <text x="155" y="220" fontSize="10" fill="#ca8a04">+O₂</text>
          <text x="155" y="232" fontSize="9" fill="#a16207">(点燃)</text>
        </g>

        {/* Na₂O → NaOH */}
        <g>
          <line x1="300" y1="130" x2="375" y2="165" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowGreen)" />
          <text x="330" y="135" fontSize="10" fill="#16a34a">+H₂O</text>
        </g>

        {/* Na₂O₂ → NaOH */}
        <g>
          <line x1="300" y1="230" x2="375" y2="195" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowGreen)" />
          <text x="320" y="225" fontSize="10" fill="#16a34a">+H₂O</text>
        </g>

        {/* NaOH → Na₂CO₃ */}
        <g>
          <line x1="475" y1="165" x2="525" y2="140" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <text x="485" y="140" fontSize="10" fill="#2563eb">+CO₂</text>
        </g>

        {/* NaOH → NaHCO₃ */}
        <g>
          <line x1="475" y1="195" x2="525" y2="220" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrowPurple)" />
          <text x="480" y="220" fontSize="10" fill="#7c3aed">+CO₂(过量)</text>
        </g>

        {/* Na₂CO₃ ⇌ NaHCO₃ */}
        <g>
          <line x1="585" y1="160" x2="585" y2="200" stroke="#9333ea" strokeWidth="2" />
          <polygon points="585,200 580,190 590,190" fill="#9333ea" />
          <polygon points="585,160 580,170 590,170" fill="#9333ea" />
          <text x="610" y="175" fontSize="9" fill="#7c3aed">+CO₂+H₂O</text>
          <text x="610" y="187" fontSize="9" fill="#7c3aed">↓ 加热 ↑</text>
        </g>

        {/* 箭头定义 */}
        <defs>
          <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#6b7280" />
          </marker>
          <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#ca8a04" />
          </marker>
          <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
          </marker>
          <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" />
          </marker>
          <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#7c3aed" />
          </marker>
        </defs>

        {/* 悬停信息 */}
        {hoveredNode && nodes[hoveredNode] && (
          <g>
            <rect x="150" y="320" width="400" height="50" rx="8" fill="#1f2937" fillOpacity="0.95" />
            <text x="350" y="345" textAnchor="middle" fontWeight="bold" fontSize="14" fill="white">
              {nodes[hoveredNode].name}
            </text>
            <text x="350" y="362" textAnchor="middle" fontSize="12" fill="#d1d5db">
              {nodes[hoveredNode].desc}
            </text>
          </g>
        )}

        {selectedPath && paths[selectedPath] && (
          <g>
            <rect x="150" y="380" width="400" height="50" rx="8" fill="#3b82f6" fillOpacity="0.95" />
            <text x="350" y="405" textAnchor="middle" fontWeight="bold" fontSize="12" fill="white">
              {paths[selectedPath].condition}
            </text>
            <text x="350" y="422" textAnchor="middle" fontSize="12" fill="#bfdbfe">
              {paths[selectedPath].equation}
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default SodiumNetwork
