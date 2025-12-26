import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import MatterClassification from '../components/diagrams/MatterClassification'
import OxideClassification from '../components/diagrams/OxideClassification'

function Chapter1() {
  return (
    <div>
      <h2 className="chapter-title">第一章：物质的分类</h2>

      {/* 1.1 分类的意义 */}
      <section className="mb-8">
        <h3 className="section-title">1.1 分类的意义</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          化学研究的对象是物质，而物质种类繁多。要系统地学习化学，首先需要对物质进行科学分类。
        </p>
        <Card variant="highlight">
          <strong>分类的核心思想：</strong>按照物质的组成和性质，将物质分门别类。
        </Card>
      </section>

      {/* 1.2 物质分类体系 */}
      <section className="mb-8">
        <h3 className="section-title">1.2 物质分类体系</h3>

        {/* 交互式图表 */}
        <MatterClassification />

        <Collapsible title="第一层：混合物与纯净物" defaultOpen={true} icon="📊">
          <Table
            headers={['类型', '定义', '特点', '示例']}
            rows={[
              ['纯净物', '由一种物质组成', '有固定的组成和性质', <Formula key="1">H2O、NaCl、O2</Formula>],
              ['混合物', '由两种或多种物质组成', '无固定组成，各成分保持原有性质', '空气、溶液、合金'],
            ]}
          />
        </Collapsible>

        <Collapsible title="第二层：单质与化合物" defaultOpen={true} icon="🔬">
          <Table
            headers={['类型', '定义', '示例']}
            rows={[
              ['单质', '由同种元素组成的纯净物', <Formula key="1">O2、Fe、C、S</Formula>],
              ['化合物', '由不同种元素组成的纯净物', <Formula key="2">H2O、NaCl、H2SO4</Formula>],
            ]}
          />

          <Card variant="warning" className="mt-4">
            <strong>注意区分：</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>同素异形体：同种元素形成的不同单质（如 <Formula>O2</Formula> 和 <Formula>O3</Formula>、金刚石和石墨）</li>
              <li>它们是<strong>不同的纯净物</strong>，混合在一起是<strong>混合物</strong></li>
            </ul>
          </Card>
        </Collapsible>
      </section>

      {/* 1.3 化合物的分类 */}
      <section className="mb-8">
        <h3 className="section-title">1.3 化合物的分类</h3>
        <p className="text-gray-700 mb-4">化合物可以按照不同标准进行分类：</p>

        <Collapsible title="按组成分类" defaultOpen={true} icon="📋">
          <Table
            headers={['类型', '定义', '通式', '示例']}
            rows={[
              ['氧化物', '由两种元素组成，其中一种是氧', '-', <Formula key="1">H2O、CaO、CO2、SO2</Formula>],
              ['酸', '电离出的阳离子全部是H⁺', 'HₙA', <Formula key="2">HCl、H2SO4、HNO3</Formula>],
              ['碱', '电离出的阴离子全部是OH⁻', 'M(OH)ₙ', <Formula key="3">NaOH、Ca(OH)2、Fe(OH)3</Formula>],
              ['盐', '由金属离子（或NH₄⁺）和酸根离子组成', 'MₘAₙ', <Formula key="4">NaCl、CaCO3、NH4NO3</Formula>],
            ]}
          />
        </Collapsible>

        <Collapsible title="氧化物的进一步分类" defaultOpen={false} icon="🧪">
          <OxideClassification />
          <Table
            headers={['类型', '定义', '示例']}
            rows={[
              ['酸性氧化物', '与碱反应生成盐和水', <Formula key="1">CO2、SO2、SO3</Formula>],
              ['碱性氧化物', '与酸反应生成盐和水', <Formula key="2">Na2O、CaO、Fe2O3</Formula>],
              ['两性氧化物', '既能与酸又能与碱反应', <Formula key="3">Al2O3</Formula>],
              ['不成盐氧化物', '不能与酸碱反应生成盐', <Formula key="4">CO、NO</Formula>],
            ]}
          />

          <Card variant="info" className="mt-4">
            <strong>判断技巧：</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>金属氧化物<strong>通常</strong>是碱性氧化物（<Formula>Al2O3</Formula>例外）</li>
              <li>非金属氧化物<strong>通常</strong>是酸性氧化物（CO、NO例外）</li>
            </ul>
          </Card>
        </Collapsible>
      </section>

      {/* 1.4 分散系与胶体 */}
      <section className="mb-8">
        <h3 className="section-title">1.4 分散系与胶体</h3>
        <p className="text-gray-700 mb-4">
          <strong>分散系</strong>是一种物质（分散质）分散到另一种物质（分散剂）中形成的混合物。
        </p>

        <Table
          headers={['类型', '分散质粒子直径', '特点', '示例']}
          rows={[
            ['溶液', '< 1 nm', '均一、稳定、透明', '糖水、盐水'],
            ['胶体', '1-100 nm', '丁达尔效应', <span key="1">豆浆、墨水、<Formula>Fe(OH)3</Formula>胶体</span>],
            ['浊液', '> 100 nm', '不稳定，会分层', '泥水'],
          ]}
        />

        <Collapsible title="胶体的重要性质" defaultOpen={false} icon="✨">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>丁达尔效应</strong>：光束通过胶体时，可以看到一条光亮的通路
              <span className="text-gray-500 text-sm ml-2">（用于区分胶体和溶液）</span>
            </li>
            <li>
              <strong>电泳</strong>：胶体粒子在电场中定向移动
              <span className="text-gray-500 text-sm ml-2">（说明胶体粒子带电）</span>
            </li>
            <li>
              <strong>聚沉</strong>：加入电解质可使胶体聚集沉淀
            </li>
          </ol>
        </Collapsible>
      </section>
    </div>
  )
}

export default Chapter1
