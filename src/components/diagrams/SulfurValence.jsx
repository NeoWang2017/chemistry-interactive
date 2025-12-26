// 硫元素价态变化图
function SulfurValence() {
  const sulfurCompounds = [
    { formula: 'H₂S', valence: '-2', color: '#bbf7d0', borderColor: '#16a34a', textColor: '#166534',
      role: '只能做还原剂', position: 'lowest' },
    { formula: 'S', valence: '0', color: '#fef3c7', borderColor: '#d97706', textColor: '#92400e',
      role: '既可氧化也可还原', position: 'middle' },
    { formula: 'SO₂', valence: '+4', color: '#fed7aa', borderColor: '#ea580c', textColor: '#c2410c',
      role: '既可氧化也可还原', position: 'middle' },
    { formula: 'H₂SO₄', valence: '+6', color: '#fecaca', borderColor: '#dc2626', textColor: '#991b1b',
      role: '只能做氧化剂', position: 'highest' },
  ]

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 350" className="diagram-svg w-full max-w-2xl">
        {/* 箭头定义 - 放在最前面 */}
        <defs>
          <marker id="sulfurArrowUp" markerWidth="10" markerHeight="7" refX="5" refY="7" orient="auto">
            <polygon points="0 7, 5 0, 10 7" fill="#6b7280" />
          </marker>
          <marker id="sulfurArrowG" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#16a34a" />
          </marker>
          <marker id="sulfurArrowO" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#d97706" />
          </marker>
          <marker id="sulfurArrowR" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#ea580c" />
          </marker>
          <marker id="sulfurArrowP" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#7c3aed" />
          </marker>
          <linearGradient id="valenceGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#dcfce7" />
            <stop offset="50%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#fee2e2" />
          </linearGradient>
        </defs>

        {/* 标题 */}
        <text x="350" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          硫元素的价态与反应角色
        </text>

        {/* 背景渐变 */}
        <rect x="60" y="50" width="580" height="210" rx="10" fill="url(#valenceGradient)" opacity="0.3" />

        {/* 价态轴线 */}
        <line x1="100" y1="250" x2="100" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#sulfurArrowUp)" />
        <text x="90" y="50" textAnchor="middle" fontSize="11" fill="#6b7280">化合价</text>

        {/* 化合物卡片 */}
        {sulfurCompounds.map((compound, index) => {
          const x = 160 + index * 130
          const y = compound.valence === '-2' ? 195 :
                    compound.valence === '0' ? 155 :
                    compound.valence === '+4' ? 115 : 75

          return (
            <g key={compound.formula}>
              {/* 连接线到y轴 */}
              <line x1="100" y1={y + 20} x2={x} y2={y + 20} stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,2" />

              {/* 价态标记 */}
              <text x="112" y={y + 25} fontSize="10" fill="#6b7280">{compound.valence}</text>

              {/* 化合物卡片 */}
              <rect
                x={x}
                y={y}
                width="95"
                height="50"
                rx="8"
                fill={compound.color}
                stroke={compound.borderColor}
                strokeWidth="2"
              />
              <text
                x={x + 48}
                y={y + 22}
                textAnchor="middle"
                fontWeight="bold"
                fontSize="15"
                fill={compound.textColor}
              >
                {compound.formula}
              </text>
              <text
                x={x + 48}
                y={y + 40}
                textAnchor="middle"
                fontSize="8"
                fill={compound.textColor}
              >
                {compound.role}
              </text>
            </g>
          )
        })}

        {/* 转化箭头 - 氧化方向（向上） */}
        {/* H2S → S */}
        <path d="M 255 200 C 275 180 285 175 290 165" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#sulfurArrowG)" />
        <text x="260" y="175" fontSize="9" fill="#16a34a">氧化</text>

        {/* S → SO2 */}
        <path d="M 385 160 C 405 140 415 135 420 125" stroke="#d97706" strokeWidth="2" fill="none" markerEnd="url(#sulfurArrowO)" />
        <text x="388" y="130" fontSize="9" fill="#d97706">氧化</text>

        {/* SO2 → H2SO4 */}
        <path d="M 515 120 C 535 100 545 95 550 90" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#sulfurArrowR)" />
        <text x="520" y="95" fontSize="9" fill="#ea580c">氧化</text>

        {/* 还原方向（向下） - H2SO4 → SO2 */}
        <path d="M 545 125 C 535 145 520 150 510 145" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,2" fill="none" markerEnd="url(#sulfurArrowP)" />
        <text x="555" y="140" fontSize="9" fill="#7c3aed">还原</text>

        {/* 典型反应 */}
        <g>
          <rect x="100" y="275" width="500" height="65" rx="8" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
          <text x="350" y="295" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#374151">
            典型反应示例
          </text>
          <text x="350" y="315" textAnchor="middle" fontSize="10" fill="#4b5563">
            2H₂S + SO₂ = 3S↓ + 2H₂O （归中反应：-2价和+4价 → 0价）
          </text>
          <text x="350" y="330" textAnchor="middle" fontSize="10" fill="#4b5563">
            S + O₂ = SO₂ （氧化反应：0价 → +4价）
          </text>
        </g>
      </svg>
    </div>
  )
}

export default SulfurValence
