import Chapter1 from '../../chapters/Chapter1'
import Chapter2 from '../../chapters/Chapter2'
import Chapter3 from '../../chapters/Chapter3'
import Chapter4 from '../../chapters/Chapter4'
import Chapter5 from '../../chapters/Chapter5'
import Chapter6 from '../../chapters/Chapter6'
import Chapter7 from '../../chapters/Chapter7'
import Chapter8 from '../../chapters/Chapter8'
import Chapter9 from '../../chapters/Chapter9'

const chapterComponents = {
  chapter1: Chapter1,
  chapter2: Chapter2,
  chapter3: Chapter3,
  chapter4: Chapter4,
  chapter5: Chapter5,
  chapter6: Chapter6,
  chapter7: Chapter7,
  chapter8: Chapter8,
  chapter9: Chapter9,
}

function Content({ chapters }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {chapters.map((chapter) => {
        const ChapterComponent = chapterComponents[chapter.id]
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className="mb-16 scroll-mt-20"
          >
            <ChapterComponent />
          </section>
        )
      })}

      {/* 页脚 */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>高一化学必修一完全指南 · 版本 2.0</p>
        <p className="mt-2">适用范围：高一化学必修一期末复习</p>
      </footer>
    </div>
  )
}

export default Content
