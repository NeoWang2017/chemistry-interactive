import { useState, useEffect } from 'react'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import './index.css'

const chapters = [
  { id: 'chapter1', title: '第一章：物质的分类', icon: '📦' },
  { id: 'chapter2', title: '第二章：化学计量基础', icon: '⚖️' },
  { id: 'chapter3', title: '第三章：离子反应', icon: '⚡' },
  { id: 'chapter4', title: '第四章：氧化还原反应', icon: '🔄' },
  { id: 'chapter5', title: '第五章：钠及其化合物', icon: '🧂' },
  { id: 'chapter6', title: '第六章：氯及其化合物', icon: '🟢' },
  { id: 'chapter7', title: '第七章：铁及其化合物', icon: '🔩' },
  { id: 'chapter8', title: '第八章：铝及其化合物', icon: '🥫' },
  { id: 'chapter9', title: '第九章：综合应用与练习', icon: '📝' },
]

function App() {
  const [activeChapter, setActiveChapter] = useState('chapter1')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // 滚动监听，更新当前章节
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToChapter = (chapterId) => {
    const element = document.getElementById(chapterId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1 pt-16">
        <Sidebar
          chapters={chapters}
          activeChapter={activeChapter}
          onSelectChapter={scrollToChapter}
          isOpen={sidebarOpen}
        />

        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <Content chapters={chapters} />
        </main>
      </div>
    </div>
  )
}

export default App
