import { useState } from 'react'

// 铝离子沉淀曲线图
function AluminumIonGraph() {
  const [showAnnotation, setShowAnnotation] = useState(true)

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 650 400" className="diagram-svg w-full max-w-2xl">
        {/* 标题 */}
        <text x="325" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1f2937">
          向AlCl₃溶液滴加NaOH的沉淀量变化
        </text>

        {/* 坐标轴 */}
        <defs>
          <marker id="arrowAxis" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
          </marker>
        </defs>

        {/* Y轴 */}
        <line x1="80" y1="320" x2="80" y2="60" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowAxis)" />
        <text x="50" y="190" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90, 50, 190)">
          Al(OH)₃ 沉淀量
        </text>

        {/* X轴 */}
        <line x1="80" y1="320" x2="580" y2="320" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowAxis)" />
        <text x="380" y="350" textAnchor="middle" fontSize="12" fill="#374151">
          加入NaOH的量
        </text>

        {/* 曲线1：正常滴加（先增后减） */}
        <path
          d="M 80 320 L 200 100 L 400 100 L 520 320"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
        />

        {/* 关键点标注 */}
        {showAnnotation && (
          <>
            {/* 起点 */}
            <circle cx="80" cy="320" r="5" fill="#2563eb" />
            <text x="80" y="340" textAnchor="middle" fontSize="10" fill="#1e40af">O</text>

            {/* 最高点开始 */}
            <circle cx="200" cy="100" r="5" fill="#16a34a" />
            <text x="200" y="85" textAnchor="middle" fontSize="10" fill="#166534">A</text>
            <text x="200" y="125" textAnchor="middle" fontSize="9" fill="#166534">沉淀最大</text>

            {/* 最高点结束 */}
            <circle cx="400" cy="100" r="5" fill="#16a34a" />
            <text x="400" y="85" textAnchor="middle" fontSize="10" fill="#166534">B</text>
            <text x="400" y="125" textAnchor="middle" fontSize="9" fill="#166534">开始溶解</text>

            {/* 终点 */}
            <circle cx="520" cy="320" r="5" fill="#dc2626" />
            <text x="520" y="340" textAnchor="middle" fontSize="10" fill="#991b1b">C</text>
            <text x="520" y="300" textAnchor="middle" fontSize="9" fill="#991b1b">沉淀消失</text>

            {/* 阶段标注 */}
            <rect x="100" y="200" width="80" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
            <text x="140" y="218" textAnchor="middle" fontSize="9" fill="#166534">阶段I</text>
            <text x="140" y="232" textAnchor="middle" fontSize="8" fill="#14532d">沉淀增加</text>

            <rect x="260" y="135" width="80" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1" />
            <text x="300" y="153" textAnchor="middle" fontSize="9" fill="#1e40af">阶段II</text>
            <text x="300" y="167" textAnchor="middle" fontSize="8" fill="#1e3a8a">沉淀最大</text>

            <rect x="420" y="200" width="80" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
            <text x="460" y="218" textAnchor="middle" fontSize="9" fill="#991b1b">阶段III</text>
            <text x="460" y="232" textAnchor="middle" fontSize="8" fill="#7f1d1d">沉淀溶解</text>
          </>
        )}

        {/* 反应方程式说明 */}
        <g>
          <rect x="80" y="360" width="220" height="35" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
          <text x="190" y="375" textAnchor="middle" fontSize="9" fill="#166534">O→A: Al³⁺ + 3OH⁻ = Al(OH)₃↓</text>
          <text x="190" y="388" textAnchor="middle" fontSize="8" fill="#14532d">沉淀生成并增加</text>
        </g>

        <g>
          <rect x="310" y="360" width="230" height="35" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
          <text x="425" y="375" textAnchor="middle" fontSize="9" fill="#991b1b">B→C: Al(OH)₃ + OH⁻ = AlO₂⁻ + 2H₂O</text>
          <text x="425" y="388" textAnchor="middle" fontSize="8" fill="#7f1d1d">沉淀溶解至消失</text>
        </g>

        {/* 图例 */}
        <g>
          <rect x="450" y="60" width="180" height="80" rx="8" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" />
          <text x="540" y="80" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#374151">关键信息</text>
          <text x="540" y="98" textAnchor="middle" fontSize="9" fill="#4b5563">n(NaOH):n(AlCl₃)</text>
          <text x="540" y="112" textAnchor="middle" fontSize="9" fill="#16a34a">A点：3:1 沉淀最大</text>
          <text x="540" y="126" textAnchor="middle" fontSize="9" fill="#dc2626">C点：4:1 沉淀消失</text>
        </g>

        {/* 切换按钮 */}
        <g
          onClick={() => setShowAnnotation(!showAnnotation)}
          className="cursor-pointer"
        >
          <rect x="80" y="50" width="80" height="25" rx="4" fill={showAnnotation ? "#2563eb" : "#9ca3af"} />
          <text x="120" y="67" textAnchor="middle" fontSize="10" fill="white">
            {showAnnotation ? "隐藏标注" : "显示标注"}
          </text>
        </g>
      </svg>
    </div>
  )
}

export default AluminumIonGraph
