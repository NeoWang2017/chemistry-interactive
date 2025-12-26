// 卤素性质递变趋势图
function HalogenTrends() {
  const halogens = [
    { symbol: 'F₂', name: '氟', color: '#fef3c7', borderColor: '#f59e0b', textColor: '#92400e',
      state: '气', colorDesc: '淡黄绿', oxidizing: '最强', withH2: '冷暗处爆炸' },
    { symbol: 'Cl₂', name: '氯', color: '#dcfce7', borderColor: '#16a34a', textColor: '#166534',
      state: '气', colorDesc: '黄绿', oxidizing: '强', withH2: '点燃或光照' },
    { symbol: 'Br₂', name: '溴', color: '#fecaca', borderColor: '#dc2626', textColor: '#991b1b',
      state: '液', colorDesc: '深红棕', oxidizing: '较强', withH2: '加热' },
    { symbol: 'I₂', name: '碘', color: '#e9d5ff', borderColor: '#9333ea', textColor: '#6b21a8',
      state: '固', colorDesc: '紫黑', oxidizing: '较弱', withH2: '持续加热，可逆' },
  ]

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 720 380" className="diagram-svg w-full max-w-3xl">
        {/* 箭头定义 */}
        <defs>
          <marker id="halogenArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
          </marker>
        </defs>

        {/* 标题 */}
        <text x="360" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          卤素单质性质递变规律
        </text>

        {/* 列标题 */}
        <text x="80" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">单质</text>
        <text x="190" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">状态/颜色</text>
        <text x="310" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">氧化性</text>
        <text x="530" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">与H₂反应</text>

        {/* 氧化性趋势箭头 - 放在氧化性列的右侧 */}
        <g>
          <line x1="380" y1="75" x2="380" y2="295" stroke="#dc2626" strokeWidth="2" markerEnd="url(#halogenArrow)" />
          <text x="395" y="190" fontSize="10" fill="#dc2626" fontWeight="bold" transform="rotate(90, 395, 190)">氧化性减弱</text>
        </g>

        {/* 卤素行 */}
        {halogens.map((halogen, index) => {
          const y = 75 + index * 55
          return (
            <g key={halogen.symbol}>
              {/* 单质符号 */}
              <rect x="30" y={y} width="100" height="45" rx="8" fill={halogen.color} stroke={halogen.borderColor} strokeWidth="2" />
              <text x="80" y={y + 28} textAnchor="middle" fontWeight="bold" fontSize="20" fill={halogen.textColor}>
                {halogen.symbol}
              </text>

              {/* 状态/颜色 */}
              <rect x="145" y={y} width="90" height="45" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" />
              <text x="190" y={y + 20} textAnchor="middle" fontSize="11" fill="#374151">{halogen.state}态</text>
              <text x="190" y={y + 36} textAnchor="middle" fontSize="11" fill="#374151">{halogen.colorDesc}色</text>

              {/* 氧化性 */}
              <rect x="250" y={y} width="80" height="45" rx="6"
                fill={index === 0 ? '#dcfce7' : index === 3 ? '#fee2e2' : '#f3f4f6'}
                stroke={index === 0 ? '#16a34a' : index === 3 ? '#dc2626' : '#9ca3af'}
                strokeWidth="2" />
              <text x="290" y={y + 28} textAnchor="middle" fontSize="13" fontWeight="bold"
                fill={index === 0 ? '#166534' : index === 3 ? '#991b1b' : '#374151'}>
                {halogen.oxidizing}
              </text>

              {/* 与H₂反应 */}
              <rect x="420" y={y} width="220" height="45" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" />
              <text x="530" y={y + 28} textAnchor="middle" fontSize="11" fill="#374151">{halogen.withH2}</text>
            </g>
          )
        })}

        {/* 置换反应验证 */}
        <g>
          <rect x="30" y="310" width="610" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="335" y="332" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">
            置换反应验证氧化性强弱
          </text>
          <text x="335" y="355" textAnchor="middle" fontSize="11" fill="#1e3a8a">
            Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂（溶液变橙）  |  Cl₂ + 2I⁻ → 2Cl⁻ + I₂（溶液变褐）
          </text>
        </g>
      </svg>
    </div>
  )
}

export default HalogenTrends
