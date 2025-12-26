// 铁离子检验方法图
function IronIonTests() {
  return (
    <div className="diagram-container">
      <svg viewBox="0 0 700 380" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="350" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          Fe²⁺ 与 Fe³⁺ 的检验方法
        </text>

        {/* Fe³⁺ 检验 - 左侧 */}
        <g>
          <rect x="30" y="50" width="310" height="150" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="185" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">
            Fe³⁺ 的检验
          </text>

          {/* 方法1 */}
          <g>
            <rect x="50" y="90" width="130" height="95" rx="6" fill="white" stroke="#f59e0b" strokeWidth="1" />
            <text x="115" y="110" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#92400e">方法1：加KSCN</text>
            <line x1="60" y1="118" x2="170" y2="118" stroke="#f59e0b" strokeWidth="1" />
            <text x="115" y="138" textAnchor="middle" fontSize="10" fill="#78350f">Fe³⁺ + 3SCN⁻</text>
            <text x="115" y="152" textAnchor="middle" fontSize="10" fill="#78350f">= Fe(SCN)₃</text>
            <rect x="70" y="160" width="90" height="18" rx="4" fill="#dc2626" />
            <text x="115" y="173" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">血红色</text>
          </g>

          {/* 方法2 */}
          <g>
            <rect x="195" y="90" width="130" height="95" rx="6" fill="white" stroke="#f59e0b" strokeWidth="1" />
            <text x="260" y="110" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#92400e">方法2：加NaOH</text>
            <line x1="205" y1="118" x2="315" y2="118" stroke="#f59e0b" strokeWidth="1" />
            <text x="260" y="138" textAnchor="middle" fontSize="10" fill="#78350f">Fe³⁺ + 3OH⁻</text>
            <text x="260" y="152" textAnchor="middle" fontSize="10" fill="#78350f">= Fe(OH)₃↓</text>
            <rect x="215" y="160" width="90" height="18" rx="4" fill="#92400e" />
            <text x="260" y="173" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">红褐色沉淀</text>
          </g>
        </g>

        {/* Fe²⁺ 检验 - 右侧 */}
        <g>
          <rect x="360" y="50" width="310" height="150" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="515" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#166534">
            Fe²⁺ 的检验
          </text>

          {/* 方法1 */}
          <g>
            <rect x="375" y="90" width="140" height="95" rx="6" fill="white" stroke="#22c55e" strokeWidth="1" />
            <text x="445" y="110" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#166534">方法1：KSCN + 氧化</text>
            <line x1="385" y1="118" x2="505" y2="118" stroke="#22c55e" strokeWidth="1" />
            <text x="445" y="135" textAnchor="middle" fontSize="9" fill="#14532d">①先加KSCN</text>
            <text x="445" y="148" textAnchor="middle" fontSize="9" fill="#14532d">（无明显现象）</text>
            <text x="445" y="161" textAnchor="middle" fontSize="9" fill="#14532d">②再加Cl₂水</text>
            <rect x="395" y="165" width="100" height="15" rx="3" fill="#dc2626" />
            <text x="445" y="176" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">→ 变血红色</text>
          </g>

          {/* 方法2 */}
          <g>
            <rect x="525" y="90" width="130" height="95" rx="6" fill="white" stroke="#22c55e" strokeWidth="1" />
            <text x="590" y="110" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#166534">方法2：加NaOH</text>
            <line x1="535" y1="118" x2="645" y2="118" stroke="#22c55e" strokeWidth="1" />
            <text x="590" y="138" textAnchor="middle" fontSize="10" fill="#14532d">Fe²⁺ + 2OH⁻</text>
            <text x="590" y="152" textAnchor="middle" fontSize="10" fill="#14532d">= Fe(OH)₂↓</text>
            <text x="590" y="172" textAnchor="middle" fontSize="9" fill="#166534">白色→灰绿→红褐</text>
          </g>
        </g>

        {/* 颜色变化过程图 */}
        <g>
          <rect x="100" y="220" width="500" height="70" rx="10" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
          <text x="350" y="243" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#374151">
            Fe(OH)₂ 氧化颜色变化过程
          </text>

          {/* 颜色方块 */}
          <rect x="150" y="252" width="60" height="28" rx="4" fill="white" stroke="#6b7280" strokeWidth="1" />
          <text x="180" y="270" textAnchor="middle" fontSize="10" fill="#374151">白色</text>

          <text x="230" y="270" textAnchor="middle" fontSize="14" fill="#6b7280">→</text>

          <rect x="250" y="252" width="80" height="28" rx="4" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" />
          <text x="290" y="270" textAnchor="middle" fontSize="10" fill="white">灰绿色</text>

          <text x="350" y="270" textAnchor="middle" fontSize="14" fill="#6b7280">→</text>

          <rect x="370" y="252" width="80" height="28" rx="4" fill="#92400e" stroke="#78350f" strokeWidth="1" />
          <text x="410" y="270" textAnchor="middle" fontSize="10" fill="white">红褐色</text>

          <text x="485" y="270" textAnchor="middle" fontSize="10" fill="#6b7280">（被O₂氧化）</text>
        </g>

        {/* 鉴别方法对比 */}
        <g>
          <rect x="100" y="305" width="500" height="65" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="350" y="328" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e40af">
            快速鉴别 Fe²⁺ 与 Fe³⁺
          </text>
          <text x="350" y="350" textAnchor="middle" fontSize="11" fill="#1e3a8a">
            滴加 KSCN 溶液：变血红色 → Fe³⁺ ；无明显变化 → 可能是 Fe²⁺ （需再加氧化剂验证）
          </text>
        </g>
      </svg>
    </div>
  )
}

export default IronIonTests
