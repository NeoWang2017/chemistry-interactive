import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'

function Chapter9() {
  return (
    <div>
      <h2 className="chapter-title">第九章：综合应用与练习</h2>

      {/* 9.1 物质的鉴别与检验 */}
      <section className="mb-8">
        <h3 className="section-title">9.1 常见离子的检验方法</h3>
        <Table
          headers={['离子', '检验方法', '现象']}
          rows={[
            ['Cl⁻', '加AgNO₃，再加稀HNO₃', '白色沉淀，不溶解'],
            ['SO₄²⁻', '先加稀HCl，再加BaCl₂', '白色沉淀'],
            ['CO₃²⁻', '加稀酸', '产生能使澄清石灰水变浑浊的气体'],
            ['NH₄⁺', '加NaOH，加热', '产生使湿润红色石蕊试纸变蓝的气体'],
            ['Fe³⁺', '加KSCN', '血红色'],
            ['Fe²⁺', '先加KSCN（无色），再加Cl₂水', '变血红色'],
          ]}
        />
      </section>

      {/* 9.2 综合反应判断 */}
      <section className="mb-8">
        <h3 className="section-title">9.2 反应类型判断</h3>
        <Collapsible title="判断步骤" defaultOpen={true} icon="📋">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>看价态变化</strong> → 有变化则为氧化还原反应</li>
            <li><strong>若是氧化还原</strong> → 判断是化合/分解/置换</li>
            <li><strong>若是非氧化还原</strong> → 判断是中和/沉淀/其他复分解</li>
          </ol>
        </Collapsible>

        <Collapsible title="练习判断" icon="📝" className="mt-4">
          <Table
            headers={['反应', '价态变化？', '反应类型']}
            rows={[
              [<span key="1"><Formula>2Na + 2H2O = 2NaOH + H2↑</Formula></span>, 'Na: 0→+1, H: +1→0', '氧化还原（置换）'],
              [<span key="2"><Formula>Na2O + H2O = 2NaOH</Formula></span>, '无', '非氧化还原（化合）'],
              [<span key="3"><Formula>2Na2O2 + 2H2O = 4NaOH + O2↑</Formula></span>, 'O: -1→-2和0', '氧化还原（歧化）'],
              [<span key="4"><Formula>Cl2 + 2NaOH = NaCl + NaClO + H2O</Formula></span>, 'Cl: 0→-1和+1', '氧化还原（歧化）'],
            ]}
          />
        </Collapsible>
      </section>

      {/* 9.3 反应优先级 */}
      <section className="mb-8">
        <h3 className="section-title">9.3 反应优先级问题</h3>
        <Card variant="highlight">
          <strong>当溶液中有多种物质时，反应遵循：</strong>
          <ul className="list-disc list-inside mt-2">
            <li><strong>原则一：</strong>氧化还原反应通常优先于复分解反应</li>
            <li><strong>原则二：</strong>强还原剂先被氧化</li>
          </ul>
        </Card>

        <Collapsible title="例题：向 FeBr₂ 溶液中通入 Cl₂" icon="💡" className="mt-4">
          <div className="space-y-4">
            <p><strong>分析：</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>溶液中有 Fe²⁺ 和 Br⁻ 两种还原剂</li>
              <li>还原性：Br⁻ {'>'} Fe²⁺</li>
              <li>反应顺序：Cl₂ 先氧化 Br⁻ → Br₂，有剩余才氧化 Fe²⁺ → Fe³⁺</li>
            </ul>
            <div className="mt-2">
              <p><strong>少量 Cl₂：</strong></p>
              <Equation>Cl2 + 2Br- = 2Cl- + Br2</Equation>
            </div>
            <div>
              <p><strong>过量 Cl₂：</strong></p>
              <Equation>Cl2 + 2Br- = 2Cl- + Br2</Equation>
              <p className="text-sm text-gray-600">然后</p>
              <Equation>Cl2 + 2Fe2+ = 2Cl- + 2Fe3+</Equation>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* 附录：必背内容速查 */}
      <section className="mb-8">
        <h3 className="section-title">附录：必背内容速查</h3>

        <Collapsible title="A. 常见沉淀颜色" defaultOpen={true} icon="🎨">
          <Table
            headers={['沉淀', '颜色', '沉淀', '颜色']}
            rows={[
              ['AgCl', '白色', <Formula key="1">BaSO4</Formula>, '白色'],
              ['AgBr', '淡黄色', <Formula key="2">CaCO3</Formula>, '白色'],
              ['AgI', '黄色', <Formula key="3">Mg(OH)2</Formula>, '白色'],
              [<Formula key="4">Fe(OH)2</Formula>, '白色→灰绿→红褐', <Formula key="5">Fe(OH)3</Formula>, '红褐色'],
              [<Formula key="6">Cu(OH)2</Formula>, '蓝色', <Formula key="7">Al(OH)3</Formula>, '白色胶状'],
            ]}
          />
        </Collapsible>

        <Collapsible title="B. 常见离子颜色" icon="🌈">
          <Table
            headers={['离子', '颜色', '离子', '颜色']}
            rows={[
              ['Cu²⁺', '蓝色', 'Fe³⁺', '黄色'],
              ['Fe²⁺', '浅绿色', 'MnO₄⁻', '紫色'],
            ]}
          />
        </Collapsible>

        <Collapsible title="C. 特殊反应条件下的产物" icon="⚗️">
          <Table
            headers={['反应物', '条件', '产物']}
            rows={[
              [<span key="1">Na + O₂</span>, '常温', <Formula key="2">Na2O</Formula>],
              [<span key="3">Na + O₂</span>, '点燃', <Formula key="4">Na2O2</Formula>],
              [<span key="5">Fe + O₂</span>, '点燃', <Formula key="6">Fe3O4</Formula>],
              [<span key="7">Fe + Cl₂</span>, '点燃', <Formula key="8">FeCl3</Formula>],
              [<span key="9">Fe + S</span>, '加热', 'FeS'],
              [<span key="10">Fe + HCl</span>, '-', <span key="11"><Formula>FeCl2</Formula> + H₂</span>],
              [<span key="12">Fe + HNO₃(稀)</span>, '-', <span key="13"><Formula>Fe(NO3)3</Formula> + NO</span>],
            ]}
          />
        </Collapsible>
      </section>

      {/* 结语 */}
      <section className="mb-8">
        <h3 className="section-title">知识框架总结</h3>
        <Card variant="info">
          <p className="mb-4">高一化学必修一的核心内容包括：</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>物质分类</strong>：建立系统的分类观念</li>
            <li><strong>离子反应</strong>：理解电解质和离子方程式</li>
            <li><strong>氧化还原</strong>：掌握电子转移的本质</li>
            <li><strong>元素化合物</strong>：Na、Cl、Fe、Al的性质和转化</li>
          </ol>
        </Card>

        <Card variant="highlight" className="mt-4">
          <strong>掌握这些内容的关键是：</strong>
          <ul className="list-disc list-inside mt-2">
            <li>理解原理，而不是死记硬背</li>
            <li>多画转化网络图，建立知识体系</li>
            <li>通过练习巩固，在应用中加深理解</li>
          </ul>
        </Card>
      </section>
    </div>
  )
}

export default Chapter9
