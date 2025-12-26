function Sidebar({ chapters, activeChapter, onSelectChapter, isOpen }) {
  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg overflow-y-auto transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* 导航标题 */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          目录
        </h2>
      </div>

      {/* 章节列表 */}
      <nav className="p-2">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-200 flex items-center gap-3 ${
              activeChapter === chapter.id
                ? 'bg-primary-100 text-primary-800 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{chapter.icon}</span>
            <span className="text-sm">{chapter.title}</span>
          </button>
        ))}
      </nav>

      {/* 底部信息 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-500 text-center">
          版本 2.0 · 高一化学必修一
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
