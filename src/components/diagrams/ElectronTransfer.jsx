import { useState, useEffect } from 'react'

// 电子转移动画图 - 自动循环播放
function ElectronTransfer() {
  const [animationStep, setAnimationStep] = useState(0)

  // 自动循环播放动画
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 100)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  // 计算电子位置（从Na移动到Cl的抛物线路径）
  const progress = animationStep / 100
  const electronX = 150 + progress * 250
  const electronY = 200 - Math.sin(progress * Math.PI) * 60

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 600 380" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="300" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          氧化还原反应中的电子转移
        </text>
        <text x="300" y="48" textAnchor="middle" fontSize="14" fill="#6b7280">
          2Na + Cl₂ → 2NaCl
        </text>

        {/* 口诀框 */}
        <rect x="150" y="60" width="300" height="32" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="300" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">
          口诀：升失氧，降得还；若说剂，反过来
        </text>

        {/* 钠原子 */}
        <g>
          <circle cx="150" cy="180" r="50" fill="#93c5fd" stroke="#2563eb" strokeWidth="3" />
          <text x="150" y="175" textAnchor="middle" fontWeight="bold" fontSize="24" fill="#1e3a8a">Na</text>
          <text x="150" y="198" textAnchor="middle" fontSize="12" fill="#1e40af">11e⁻</text>
          <text x="150" y="245" textAnchor="middle" fontSize="12" fill="#374151">化合价：0</text>
        </g>

        {/* 氯分子 */}
        <g>
          <circle cx="450" cy="165" r="38" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
          <circle cx="450" cy="200" r="38" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
          <text x="450" y="188" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#166534">Cl₂</text>
          <text x="450" y="255" textAnchor="middle" fontSize="12" fill="#374151">化合价：0</text>
        </g>

        {/* 电子转移路径（虚线） */}
        <path
          d="M 200 180 Q 300 120 400 180"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.5"
        />
        <text x="300" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">
          电子转移
        </text>

        {/* 动画电子 */}
        <g>
          <circle
            cx={electronX}
            cy={electronY}
            r="12"
            fill="#fbbf24"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text
            x={electronX}
            y={electronY + 4}
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#78350f"
          >
            e⁻
          </text>
          {/* 电子光晕效果 */}
          <circle
            cx={electronX}
            cy={electronY}
            r="16"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            opacity={0.3 + 0.3 * Math.sin(animationStep * 0.3)}
          />
        </g>

        {/* 钠离子说明框 */}
        <g>
          <rect x="40" y="275" width="200" height="85" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="75" cy="305" r="22" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
          <text x="75" y="310" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e3a8a">Na⁺</text>
          <text x="160" y="300" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">失去1个电子</text>
          <text x="160" y="318" textAnchor="middle" fontSize="11" fill="#b45309">0 → +1（氧化）</text>
          <text x="140" y="345" textAnchor="middle" fontSize="12" fill="#78350f" fontWeight="bold">还原剂</text>
        </g>

        {/* 氯离子说明框 */}
        <g>
          <rect x="360" y="275" width="200" height="85" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <circle cx="395" cy="305" r="22" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
          <text x="395" y="310" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#166534">Cl⁻</text>
          <text x="480" y="300" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#166534">得到1个电子</text>
          <text x="480" y="318" textAnchor="middle" fontSize="11" fill="#15803d">0 → -1（还原）</text>
          <text x="460" y="345" textAnchor="middle" fontSize="12" fill="#14532d" fontWeight="bold">氧化剂</text>
        </g>
      </svg>
    </div>
  )
}

export default ElectronTransfer
