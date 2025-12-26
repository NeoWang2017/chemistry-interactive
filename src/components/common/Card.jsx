function Card({ children, className = '', variant = 'default', title = null }) {
  const variants = {
    default: 'bg-white',
    highlight: 'bg-yellow-50 border-l-4 border-yellow-400',
    warning: 'bg-red-50 border-l-4 border-red-400',
    info: 'bg-blue-50 border-l-4 border-blue-400',
    success: 'bg-green-50 border-l-4 border-green-400',
  }

  return (
    <div className={`rounded-lg shadow-md p-4 mb-4 ${variants[variant]} ${className}`}>
      {title && (
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      )}
      {children}
    </div>
  )
}

export default Card
