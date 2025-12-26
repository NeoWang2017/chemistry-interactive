import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import MoleRelationships from '../components/diagrams/MoleRelationships'

function Chapter2() {
  return (
    <div>
      <h2 className="chapter-title">第二章：化学计量基础</h2>

      {/* 2.1 物质的量 */}
      <section className="mb-8">
        <h3 className="section-title">2.1 物质的量</h3>
        <Card variant="info">
          <strong>为什么需要"物质的量"？</strong>
          <p className="mt-2">原子、分子太小，无法直接称量。我们需要一个桥梁，把微观粒子数和宏观质量联系起来。</p>
        </Card>
        <Card variant="highlight">
          <strong>物质的量（n）</strong>：表示含有一定数目粒子的集合体，单位是<strong>摩尔（mol）</strong>。
        </Card>
      </section>

      {/* 2.2 阿伏加德罗常数 */}
      <section className="mb-8">
        <h3 className="section-title">2.2 阿伏加德罗常数</h3>
        <p className="text-gray-700 mb-4">
          <strong>定义：</strong>1 mol 任何粒子所含的粒子数，约为 <strong>6.02×10²³</strong> 个，用 Nₐ 表示。
        </p>
        <Equation>n = N / Nₐ</Equation>
        <p className="text-gray-600 text-sm text-center">其中：n 是物质的量（mol），N 是粒子数，Nₐ 是阿伏加德罗常数</p>

        <Collapsible title="例题：1 mol H₂O 含有多少个分子和原子？" icon="📝">
          <div className="space-y-2">
            <p>• 分子数 = 1 × Nₐ = <strong>6.02×10²³</strong> 个</p>
            <p>• 原子数 = 1 × 3 × Nₐ = <strong>1.806×10²⁴</strong> 个（每个 <Formula>H2O</Formula> 含 3 个原子）</p>
          </div>
        </Collapsible>
      </section>

      {/* 2.3 摩尔质量 */}
      <section className="mb-8">
        <h3 className="section-title">2.3 摩尔质量</h3>
        <p className="text-gray-700 mb-4">
          <strong>定义：</strong>1 mol 物质的质量，数值上等于该物质的相对分子质量，单位是 <strong>g/mol</strong>。
        </p>
        <Equation>n = m / M</Equation>

        <Table
          headers={['物质', '相对分子质量', '摩尔质量']}
          rows={[
            [<Formula key="1">H2O</Formula>, '18', '18 g/mol'],
            [<Formula key="2">NaCl</Formula>, '58.5', '58.5 g/mol'],
            [<Formula key="3">H2SO4</Formula>, '98', '98 g/mol'],
          ]}
        />
      </section>

      {/* 2.4 气体摩尔体积 */}
      <section className="mb-8">
        <h3 className="section-title">2.4 气体摩尔体积</h3>
        <p className="text-gray-700 mb-4">
          <strong>定义：</strong>1 mol 气体所占的体积，用 Vₘ 表示。
        </p>
        <Card variant="highlight">
          <strong>标准状况（STP）</strong>：0°C，101 kPa 时，Vₘ = <strong>22.4 L/mol</strong>
        </Card>
        <Equation>n = V / Vₘ</Equation>

        <Card variant="warning">
          <strong>注意事项：</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>只适用于<strong>气体</strong></li>
            <li>必须指明<strong>温度和压强</strong>条件</li>
            <li>标准状况下，任何气体的 Vₘ 都约为 22.4 L/mol</li>
          </ul>
        </Card>
      </section>

      {/* 2.5 物质的量浓度 */}
      <section className="mb-8">
        <h3 className="section-title">2.5 物质的量浓度</h3>
        <p className="text-gray-700 mb-4">
          <strong>定义：</strong>单位体积溶液中所含溶质的物质的量，用 c 表示，单位是 <strong>mol/L</strong>。
        </p>
        <Equation>c = n / V</Equation>

        <Collapsible title="配制溶液的步骤" icon="🧪">
          <ol className="list-decimal list-inside space-y-2">
            <li>计算所需溶质的质量或体积</li>
            <li>称量或量取溶质</li>
            <li>溶解（在烧杯中）</li>
            <li>转移到容量瓶（洗涤烧杯2-3次）</li>
            <li>定容（加水至刻度线）</li>
            <li>摇匀</li>
          </ol>
        </Collapsible>
      </section>

      {/* 2.6 计量公式总结 */}
      <section className="mb-8">
        <h3 className="section-title">2.6 计量公式总结</h3>
        <MoleRelationships />

        <Table
          headers={['转换', '公式']}
          rows={[
            ['物质的量 ↔ 粒子数', 'n = N/Nₐ'],
            ['物质的量 ↔ 质量', 'n = m/M'],
            ['物质的量 ↔ 气体体积', 'n = V/Vₘ'],
            ['物质的量 ↔ 溶液体积', 'n = cV'],
          ]}
        />
      </section>
    </div>
  )
}

export default Chapter2
