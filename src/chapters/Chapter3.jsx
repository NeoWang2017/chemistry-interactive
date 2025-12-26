import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import ElectrolyteClass from '../components/diagrams/ElectrolyteClass'

function Chapter3() {
  return (
    <div>
      <h2 className="chapter-title">第三章：离子反应</h2>

      {/* 3.1 电解质与非电解质 */}
      <section className="mb-8">
        <h3 className="section-title">3.1 电解质与非电解质</h3>
        <ElectrolyteClass />
        <Table
          headers={['类型', '定义', '示例']}
          rows={[
            ['电解质', '在水溶液中或熔融状态下能导电的化合物', <Formula key="1">NaCl、HCl、NaOH</Formula>],
            ['非电解质', '在水溶液中和熔融状态下都不能导电的化合物', '蔗糖、酒精、CO₂'],
          ]}
        />
        <Card variant="warning" className="mt-4">
          <strong>重要澄清：</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>电解质和非电解质都是<strong>化合物</strong>，单质和混合物不属于此分类</li>
            <li>电解质本身不一定导电（如固态NaCl），但溶于水或熔融后能导电</li>
            <li><Formula>CO2</Formula>溶于水能导电，但导电的是生成的<Formula>H2CO3</Formula>，所以<Formula>CO2</Formula>是非电解质</li>
          </ul>
        </Card>
      </section>

      {/* 3.2 强电解质与弱电解质 */}
      <section className="mb-8">
        <h3 className="section-title">3.2 强电解质与弱电解质</h3>
        <Table
          headers={['类型', '电离程度', '电离方程式特点', '示例']}
          rows={[
            ['强电解质', '完全电离', '用 "="', <Formula key="1">HCl、NaOH、NaCl</Formula>],
            ['弱电解质', '部分电离', '用 "⇌"', <Formula key="2">CH3COOH、NH3·H2O</Formula>],
          ]}
        />

        <Collapsible title="必须记住的分类" defaultOpen={true} icon="📋">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="强电解质">
              <ul className="space-y-1 text-sm">
                <li><strong>强酸：</strong><Formula>HCl、H2SO4、HNO3、HBr、HI、HClO4</Formula></li>
                <li><strong>强碱：</strong><Formula>NaOH、KOH、Ca(OH)2、Ba(OH)2</Formula></li>
                <li><strong>大多数盐：</strong><Formula>NaCl、Na2SO4、BaSO4</Formula></li>
              </ul>
            </Card>
            <Card title="弱电解质">
              <ul className="space-y-1 text-sm">
                <li><strong>弱酸：</strong><Formula>CH3COOH、H2CO3、H2S、HF、HClO</Formula></li>
                <li><strong>弱碱：</strong><Formula>NH3·H2O、Fe(OH)3、Cu(OH)2</Formula></li>
                <li><strong>水：</strong><Formula>H2O</Formula></li>
              </ul>
            </Card>
          </div>
        </Collapsible>
      </section>

      {/* 3.3 离子方程式 */}
      <section className="mb-8">
        <h3 className="section-title">3.3 离子方程式</h3>
        <Card variant="info">
          <strong>什么是离子方程式？</strong>
          <p className="mt-2">用实际参加反应的离子符号表示化学反应的式子。</p>
        </Card>

        <Collapsible title="书写步骤" defaultOpen={true} icon="✏️">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>写</strong>：写出化学方程式</li>
            <li><strong>拆</strong>：把易溶、易电离的物质拆成离子</li>
            <li><strong>删</strong>：删去两边相同的离子</li>
            <li><strong>查</strong>：检查原子守恒、电荷守恒</li>
          </ol>
        </Collapsible>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Card variant="success" title="要拆的物质">
            <ul className="list-disc list-inside">
              <li>强酸</li>
              <li>强碱</li>
              <li>可溶性盐</li>
            </ul>
          </Card>
          <Card variant="warning" title="不拆的物质">
            <ul className="list-disc list-inside">
              <li>弱酸、弱碱</li>
              <li>难溶性盐</li>
              <li>氧化物、单质、气体、水</li>
            </ul>
          </Card>
        </div>

        <Collapsible title="例题：NaOH + HCl 的离子方程式" icon="📝" className="mt-4">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>写：</strong>NaOH + HCl = NaCl + H₂O</li>
            <li><strong>拆：</strong>Na⁺ + OH⁻ + H⁺ + Cl⁻ = Na⁺ + Cl⁻ + H₂O</li>
            <li><strong>删：</strong><span className="font-mono bg-yellow-100 px-2 py-1 rounded">OH⁻ + H⁺ = H₂O</span></li>
            <li><strong>查：</strong>氧1=1，氢2=2，电荷(-1)+(+1)=0 ✓</li>
          </ol>
        </Collapsible>
      </section>

      {/* 3.4 离子共存问题 */}
      <section className="mb-8">
        <h3 className="section-title">3.4 离子共存问题</h3>
        <Card variant="highlight">
          <strong>不能共存的离子组合（会发生反应）</strong>
        </Card>

        <Collapsible title="1. 生成沉淀" defaultOpen={true} icon="⬇️">
          <Table
            headers={['沉淀', '不共存离子组合', '颜色']}
            rows={[
              [<Formula key="1">BaSO4</Formula>, <span key="2">Ba²⁺ 与 SO₄²⁻</span>, '白色'],
              [<Formula key="3">AgCl</Formula>, <span key="4">Ag⁺ 与 Cl⁻</span>, '白色'],
              [<Formula key="5">CaCO3</Formula>, <span key="6">Ca²⁺ 与 CO₃²⁻</span>, '白色'],
              [<Formula key="7">Fe(OH)3</Formula>, <span key="8">Fe³⁺ 与 OH⁻</span>, '红褐色'],
              [<Formula key="9">Cu(OH)2</Formula>, <span key="10">Cu²⁺ 与 OH⁻</span>, '蓝色'],
            ]}
          />
        </Collapsible>

        <Collapsible title="2. 生成气体" icon="💨">
          <ul className="space-y-2">
            <li><Formula>CO2</Formula>：CO₃²⁻/HCO₃⁻ 与 H⁺</li>
            <li><Formula>SO2</Formula>：SO₃²⁻/HSO₃⁻ 与 H⁺</li>
            <li><Formula>H2S</Formula>：S²⁻ 与 H⁺</li>
            <li><Formula>NH3</Formula>：NH₄⁺ 与 OH⁻</li>
          </ul>
        </Collapsible>

        <Collapsible title="3. 生成弱电解质" icon="💧">
          <p>H⁺ 与 OH⁻ 不共存（生成水）</p>
        </Collapsible>

        <Collapsible title="4. 发生氧化还原" icon="🔄">
          <ul className="space-y-2">
            <li>Fe³⁺ 与 I⁻、S²⁻ 不共存（Fe³⁺会氧化它们）</li>
            <li>MnO₄⁻（H⁺条件）与还原性离子不共存</li>
          </ul>
        </Collapsible>
      </section>
    </div>
  )
}

export default Chapter3
