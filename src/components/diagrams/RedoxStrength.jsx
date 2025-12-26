// 氧化还原性强弱比较图
function RedoxStrength() {
  const metals = [
    { symbol: 'K', name: '钾' },
    { symbol: 'Ca', name: '钙' },
    { symbol: 'Na', name: '钠' },
    { symbol: 'Mg', name: '镁' },
    { symbol: 'Al', name: '铝' },
    { symbol: 'Zn', name: '锌' },
    { symbol: 'Fe', name: '铁' },
    { symbol: 'Sn', name: '锡' },
    { symbol: 'Pb', name: '铅' },
    { symbol: 'H', name: '氢', special: true },
    { symbol: 'Cu', name: '铜' },
    { symbol: 'Hg', name: '汞' },
    { symbol: 'Ag', name: '银' },
    { symbol: 'Pt', name: '铂' },
    { symbol: 'Au', name: '金' },
  ]

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 800 280" className="diagram-svg w-full max-w-3xl">
        {/* 标题 */}
        <text x="400" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          金属活动性顺序表
        </text>

        {/* 还原性箭头 */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
          </marker>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dcfce7" />
            <stop offset="50%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#fee2e2" />
          </linearGradient>
        </defs>

        {/* 背景渐变条 */}
        <rect x="25" y="50" width="750" height="90" rx="8" fill="url(#metalGradient)" opacity="0.5" />

        {/* 金属元素 */}
        {metals.map((metal, index) => {
          const x = 50 + index * 50
          const isActive = index < 5
          const isModerate = index >= 5 && index < 9
          const isH = metal.special
          const isInactive = index > 9

          let bgColor = '#bbf7d0'
          let borderColor = '#16a34a'
          let textColor = '#166534'

          if (isModerate) {
            bgColor = '#fef3c7'
            borderColor = '#d97706'
            textColor = '#92400e'
          } else if (isH) {
            bgColor = '#e5e7eb'
            borderColor = '#6b7280'
            textColor = '#374151'
          } else if (isInactive) {
            bgColor = '#fecaca'
            borderColor = '#dc2626'
            textColor = '#991b1b'
          }

          return (
            <g key={metal.symbol}>
              <rect
                x={x}
                y={60}
                width="40"
                height="50"
                rx="6"
                fill={bgColor}
                stroke={borderColor}
                strokeWidth="2"
              />
              <text
                x={x + 20}
                y={88}
                textAnchor="middle"
                fontWeight="bold"
                fontSize="16"
                fill={textColor}
              >
                {metal.symbol}
              </text>
              <text
                x={x + 20}
                y={105}
                textAnchor="middle"
                fontSize="8"
                fill={textColor}
              >
                {metal.name}
              </text>
            </g>
          )
        })}

        {/* 还原性强弱箭头 */}
        <line x1="50" y1="130" x2="750" y2="130" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="400" y="148" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
          还原性逐渐减弱 →
        </text>

        {/* 说明框 */}
        <g>
          <rect x="25" y="165" width="230" height="100" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="140" y="188" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#166534">活泼金属（K-Al）</text>
          <text x="140" y="208" textAnchor="middle" fontSize="10" fill="#14532d">• 能与冷水反应</text>
          <text x="140" y="223" textAnchor="middle" fontSize="10" fill="#14532d">• 能与稀酸反应置换出H₂</text>
          <text x="140" y="238" textAnchor="middle" fontSize="10" fill="#14532d">• 还原性强</text>
          <text x="140" y="253" textAnchor="middle" fontSize="10" fill="#14532d">• 只能用电解法冶炼</text>
        </g>

        <g>
          <rect x="285" y="165" width="230" height="100" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="400" y="188" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">中等活泼（Zn-Pb）</text>
          <text x="400" y="208" textAnchor="middle" fontSize="10" fill="#78350f">• 能与稀酸反应</text>
          <text x="400" y="223" textAnchor="middle" fontSize="10" fill="#78350f">• 能与盐溶液发生置换</text>
          <text x="400" y="238" textAnchor="middle" fontSize="10" fill="#78350f">• 可用热还原法冶炼</text>
          <text x="400" y="253" textAnchor="middle" fontSize="10" fill="#78350f">• Fe与稀HNO₃不产生H₂</text>
        </g>

        <g>
          <rect x="545" y="165" width="230" height="100" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="660" y="188" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#991b1b">不活泼金属（Cu-Au）</text>
          <text x="660" y="208" textAnchor="middle" fontSize="10" fill="#7f1d1d">• 不与稀酸反应</text>
          <text x="660" y="223" textAnchor="middle" fontSize="10" fill="#7f1d1d">• 还原性弱</text>
          <text x="660" y="238" textAnchor="middle" fontSize="10" fill="#7f1d1d">• Cu/Ag可用湿法冶金</text>
          <text x="660" y="253" textAnchor="middle" fontSize="10" fill="#7f1d1d">• Au只溶于王水</text>
        </g>
      </svg>
    </div>
  )
}

export default RedoxStrength
