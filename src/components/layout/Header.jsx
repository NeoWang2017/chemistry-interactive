import { useState } from 'react'

function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 flex items-center px-4">
      {/* 菜单按钮 */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
        aria-label="切换侧边栏"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 标题 */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">⚗️</span>
        <div>
          <h1 className="text-lg font-bold text-gray-800">高一化学必修一完全指南</h1>
          <p className="text-xs text-gray-500">从原子结构出发，理解化学反应的本质</p>
        </div>
      </div>

      {/* 右侧工具栏 */}
      <div className="ml-auto flex items-center gap-2">
        <button
          className="px-3 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          onClick={() => window.print()}
        >
          打印
        </button>
      </div>
    </header>
  )
}

export default Header
