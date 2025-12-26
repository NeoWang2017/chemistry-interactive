// 化学公式渲染组件
// 支持简单的化学式格式化，如 H2O -> H₂O, Fe3+ -> Fe³⁺

function Formula({ children, className = '', block = false }) {
  // 将数字转换为下标
  const formatFormula = (text) => {
    if (typeof text !== 'string') return text

    // 处理上标（离子电荷）：2+, 3-, +, - 等
    let formatted = text.replace(/(\d*)([\+\-])(?![>])/g, (match, num, sign) => {
      const superNum = num ? toSuperscript(num) : ''
      const superSign = sign === '+' ? '⁺' : '⁻'
      return superNum + superSign
    })

    // 处理下标（原子个数）
    formatted = formatted.replace(/([A-Za-z\)])(\d+)/g, (match, letter, num) => {
      return letter + toSubscript(num)
    })

    return formatted
  }

  // 数字转下标
  const toSubscript = (num) => {
    const subscripts = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' }
    return String(num).split('').map(d => subscripts[d] || d).join('')
  }

  // 数字转上标
  const toSuperscript = (num) => {
    const superscripts = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }
    return String(num).split('').map(d => superscripts[d] || d).join('')
  }

  const Tag = block ? 'div' : 'span'
  const blockStyles = block ? 'block text-center my-4 p-3 bg-gray-100 rounded-lg font-mono text-lg' : ''

  return (
    <Tag className={`font-mono ${blockStyles} ${className}`}>
      {formatFormula(children)}
    </Tag>
  )
}

// 化学方程式组件
function Equation({ children, className = '' }) {
  return (
    <div className={`my-4 p-4 bg-gray-100 rounded-lg text-center ${className}`}>
      <span className="font-mono text-lg">
        <Formula>{children}</Formula>
      </span>
    </div>
  )
}

// 反应箭头
function Arrow({ type = 'normal', condition = null }) {
  const arrows = {
    normal: '→',
    reversible: '⇌',
    equilibrium: '⇋',
  }

  return (
    <span className="mx-2 inline-flex flex-col items-center">
      {condition && <span className="text-xs text-gray-500">{condition}</span>}
      <span className="text-lg">{arrows[type]}</span>
    </span>
  )
}

export { Formula as default, Formula, Equation, Arrow }
