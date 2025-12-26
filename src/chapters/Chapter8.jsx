import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import AluminumNetwork from '../components/diagrams/AluminumNetwork'
import AluminumIonGraph from '../components/diagrams/AluminumIonGraph'

function Chapter8() {
  return (
    <div>
      <h2 className="chapter-title">第八章：铝及其化合物</h2>

      {/* 8.1 铝的性质 */}
      <section className="mb-8">
        <h3 className="section-title">8.1 铝的性质</h3>

        <AluminumNetwork />

        <Collapsible title="物理性质" defaultOpen={true} icon="🔍">
          <ul className="list-disc list-inside space-y-1">
            <li>银白色金属，有金属光泽</li>
            <li>密度小（2.7 g/cm³），是轻金属</li>
            <li>延展性好，导电、导热性好</li>
            <li>熔点较低（660°C）</li>
          </ul>
        </Collapsible>

        <Collapsible title="与非金属反应" icon="🔥">
          <div className="space-y-2">
            <Equation>4Al + 3O2 = 2Al2O3（点燃）</Equation>
            <Equation>2Al + 3Cl2 = 2AlCl3（点燃）</Equation>
          </div>
        </Collapsible>

        <Collapsible title="与酸反应" icon="🧪">
          <div className="space-y-2">
            <Equation>2Al + 6HCl = 2AlCl3 + 3H2↑</Equation>
            <Equation>2Al + 3H2SO4(稀) = Al2(SO4)3 + 3H2↑</Equation>
          </div>
          <Card variant="warning" className="mt-4">
            <strong>注意：</strong>Al 在冷的浓 H₂SO₄ 和浓 HNO₃ 中<strong>钝化</strong>
          </Card>
        </Collapsible>

        <Collapsible title="与碱反应（重要！）" defaultOpen={true} icon="⭐">
          <Equation>2Al + 2NaOH + 2H2O = 2NaAlO2 + 3H2↑</Equation>
          <Card variant="highlight" className="mt-4">
            这是 Al 最独特的性质——<strong>既能与酸反应，又能与碱反应！</strong>
          </Card>
        </Collapsible>

        <Collapsible title="铝热反应" icon="🔥">
          <Equation>2Al + Fe2O3 = 2Fe + Al2O3（高温）</Equation>
          <Card variant="info" className="mt-4">
            <ul className="list-disc list-inside">
              <li>反应剧烈，放出大量热</li>
              <li><strong>应用：</strong>野外焊接钢轨</li>
            </ul>
          </Card>
        </Collapsible>
      </section>

      {/* 8.2 氧化铝 */}
      <section className="mb-8">
        <h3 className="section-title">8.2 氧化铝</h3>

        <Card variant="info">
          <strong>物理性质：</strong>
          <ul className="list-disc list-inside mt-2">
            <li>白色固体，硬度大</li>
            <li>熔点很高（2050°C）</li>
          </ul>
        </Card>

        <Card variant="highlight" className="mt-4">
          <strong>化学性质——两性氧化物：</strong>
          <div className="space-y-2 mt-2">
            <Equation>Al2O3 + 6HCl = 2AlCl3 + 3H2O</Equation>
            <Equation>Al2O3 + 2NaOH = 2NaAlO2 + H2O</Equation>
          </div>
        </Card>

        <p className="text-gray-700 mt-4">
          <strong>应用：</strong>刚玉、红宝石、蓝宝石的主要成分
        </p>
      </section>

      {/* 8.3 氢氧化铝 */}
      <section className="mb-8">
        <h3 className="section-title">8.3 氢氧化铝</h3>

        <Card variant="info">
          <strong>物理性质：</strong>白色胶状沉淀，不溶于水
        </Card>

        <Card variant="highlight" className="mt-4">
          <strong>化学性质——两性氢氧化物：</strong>
          <div className="space-y-2 mt-2">
            <Equation>Al(OH)3 + 3HCl = AlCl3 + 3H2O</Equation>
            <Equation>Al(OH)3 + NaOH = NaAlO2 + 2H2O</Equation>
          </div>
        </Card>

        <Collapsible title="Al(OH)₃ 的制备" defaultOpen={true} icon="⚗️" className="mt-4">
          <div className="space-y-4">
            <div>
              <p className="font-medium">方法1：Al³⁺ + NH₃·H₂O（最佳方法）</p>
              <Equation>Al3+ + 3NH3·H2O = Al(OH)3↓ + 3NH4+</Equation>
            </div>
            <div>
              <p className="font-medium">方法2：AlO₂⁻ + CO₂</p>
              <Equation>AlO2- + CO2 + 2H2O = Al(OH)3↓ + HCO3-</Equation>
            </div>
          </div>
          <Card variant="info" className="mt-4">
            <strong>为什么用 NH₃·H₂O 而不用 NaOH？</strong>
            <p className="mt-2">因为 NaOH 过量会溶解 Al(OH)₃，而 NH₃·H₂O 是弱碱，不会溶解 Al(OH)₃。</p>
          </Card>
        </Collapsible>
      </section>

      {/* 8.4 Al³⁺与AlO₂⁻的转化 */}
      <section className="mb-8">
        <h3 className="section-title">8.4 Al³⁺ 与 AlO₂⁻ 的转化</h3>

        <AluminumIonGraph />

        <Collapsible title="向 AlCl₃ 溶液中逐滴加入 NaOH" defaultOpen={true} icon="📈">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>开始：</strong>
              <Equation>Al3+ + 3OH- = Al(OH)3↓（沉淀增加）</Equation>
            </li>
            <li>
              <strong>过量：</strong>
              <Equation>Al(OH)3 + OH- = AlO2- + 2H2O（沉淀溶解）</Equation>
            </li>
          </ol>
        </Collapsible>

        <Collapsible title="向 NaAlO₂ 溶液中逐滴加入 HCl" icon="📉">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>开始：</strong>
              <Equation>AlO2- + H+ + H2O = Al(OH)3↓（沉淀增加）</Equation>
            </li>
            <li>
              <strong>过量：</strong>
              <Equation>Al(OH)3 + 3H+ = Al3+ + 3H2O（沉淀溶解）</Equation>
            </li>
          </ol>
        </Collapsible>

        {/* 简化版图像说明 */}
        <Card variant="highlight" className="mt-4">
          <strong>图像特点：</strong>
          <p className="mt-2">沉淀量先增加后减少，呈现"先上升后下降"的三角形曲线</p>
        </Card>
      </section>

      {/* 8.5 两性物质总结 */}
      <section className="mb-8">
        <h3 className="section-title">8.5 两性物质总结</h3>
        <Table
          headers={['物质', '与酸反应', '与碱反应']}
          rows={[
            ['Al', <span key="1">生成 <Formula>AlCl3</Formula> + H₂</span>, <span key="2">生成 <Formula>NaAlO2</Formula> + H₂</span>],
            [<Formula key="3">Al2O3</Formula>, <span key="4">生成 <Formula>AlCl3</Formula> + H₂O</span>, <span key="5">生成 <Formula>NaAlO2</Formula> + H₂O</span>],
            [<Formula key="6">Al(OH)3</Formula>, <span key="7">生成 <Formula>AlCl3</Formula> + H₂O</span>, <span key="8">生成 <Formula>NaAlO2</Formula> + H₂O</span>],
          ]}
        />
      </section>
    </div>
  )
}

export default Chapter8
