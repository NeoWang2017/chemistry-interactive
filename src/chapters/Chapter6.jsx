import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import ChlorineReactions from '../components/diagrams/ChlorineReactions'
import HalogenTrends from '../components/diagrams/HalogenTrends'

function Chapter6() {
  return (
    <div>
      <h2 className="chapter-title">第六章：氯及其化合物</h2>

      {/* 6.1 氯气的性质 */}
      <section className="mb-8">
        <h3 className="section-title">6.1 氯气的性质</h3>

        <ChlorineReactions />

        <Collapsible title="物理性质" defaultOpen={true} icon="🔍">
          <ul className="list-disc list-inside space-y-1">
            <li>黄绿色气体，有刺激性气味</li>
            <li>密度比空气大</li>
            <li>能溶于水（1:2）</li>
            <li><strong className="text-red-600">有毒</strong></li>
          </ul>
        </Collapsible>

        <Collapsible title="与金属反应" icon="🔩">
          <div className="space-y-2">
            <Equation>2Na + Cl2 = 2NaCl（点燃，白烟）</Equation>
            <Equation>2Fe + 3Cl2 = 2FeCl3（点燃，棕色烟）</Equation>
            <p className="text-sm text-gray-600 ml-4">注意：生成的是 +3 价的 FeCl₃</p>
            <Equation>Cu + Cl2 = CuCl2（点燃，棕黄色烟）</Equation>
          </div>
        </Collapsible>

        <Collapsible title="与非金属反应" icon="🔥">
          <Equation>H2 + Cl2 = 2HCl（点燃或光照）</Equation>
          <Card variant="info" className="mt-2">
            <ul className="list-disc list-inside">
              <li>点燃：安静燃烧，苍白色火焰</li>
              <li>光照：<strong className="text-red-600">爆炸</strong></li>
            </ul>
          </Card>
        </Collapsible>

        <Collapsible title="与水反应" defaultOpen={true} icon="💧">
          <Equation>Cl2 + H2O ⇌ HCl + HClO</Equation>
          <p className="text-sm text-gray-600 mt-2">
            这是一个<strong>可逆反应</strong>，也是<strong>歧化反应</strong>（Cl: 0 → -1 和 +1）
          </p>
        </Collapsible>

        <Collapsible title="与碱反应" icon="🧪">
          <Equation>Cl2 + 2NaOH = NaCl + NaClO + H2O（常温）</Equation>
          <Equation>3Cl2 + 6NaOH = 5NaCl + NaClO3 + 3H2O（加热）</Equation>
        </Collapsible>
      </section>

      {/* 6.2 氯水的成分 */}
      <section className="mb-8">
        <h3 className="section-title">6.2 氯水的成分</h3>
        <p className="text-gray-700 mb-4">新制氯水是 Cl₂ 的水溶液，成分复杂：</p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card title="分子">
            <Formula>Cl2、H2O、HClO</Formula>
          </Card>
          <Card title="离子">
            <span>H⁺、Cl⁻、ClO⁻、OH⁻</span>
          </Card>
        </div>

        <Table
          className="mt-4"
          headers={['性质', '起作用的成分']}
          rows={[
            ['黄绿色', <Formula key="1">Cl2</Formula>],
            ['刺激性气味', <Formula key="2">Cl2</Formula>],
            ['酸性', 'HCl、HClO'],
            ['漂白性', 'HClO'],
            ['氧化性', <span key="3"><Formula>Cl2</Formula>、HClO</span>],
          ]}
        />

        <Card variant="warning" className="mt-4">
          <strong>重要：氯水久置后变成稀盐酸</strong>
          <Equation>2HClO = 2HCl + O2↑（光照）</Equation>
        </Card>
      </section>

      {/* 6.3 次氯酸与漂白 */}
      <section className="mb-8">
        <h3 className="section-title">6.3 次氯酸与漂白</h3>

        <Card variant="info">
          <strong>HClO的性质：</strong>
          <ul className="list-disc list-inside mt-2">
            <li>弱酸（比 H₂CO₃ 还弱）</li>
            <li>强氧化性</li>
            <li>不稳定，见光分解</li>
            <li>漂白性（氧化性漂白，不可逆）</li>
          </ul>
        </Card>

        <Collapsible title="HClO漂白与SO₂漂白的区别" icon="🎨" className="mt-4">
          <Table
            headers={['项目', 'HClO漂白', 'SO₂漂白']}
            rows={[
              ['原理', '氧化性', '与有色物质结合'],
              ['可逆性', '不可逆', '可逆（加热恢复）'],
              ['范围', '广泛', '有限（不能漂白酸碱指示剂）'],
            ]}
          />
        </Collapsible>

        <Collapsible title="漂白粉" icon="🧴">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>成分：</strong>CaCl₂ 和 Ca(ClO)₂ 的混合物</li>
            <li><strong>有效成分：</strong>Ca(ClO)₂</li>
            <li><strong>制备：</strong><Equation>2Cl2 + 2Ca(OH)2 = CaCl2 + Ca(ClO)2 + 2H2O</Equation></li>
            <li><strong>漂白原理：</strong><Equation>Ca(ClO)2 + CO2 + H2O = CaCO3↓ + 2HClO</Equation></li>
          </ul>
        </Collapsible>
      </section>

      {/* 6.4 氯离子的检验 */}
      <section className="mb-8">
        <h3 className="section-title">6.4 氯离子的检验</h3>
        <Card variant="highlight">
          <strong>方法：</strong>加入 AgNO₃ 溶液，再加稀 HNO₃
          <Equation>Ag+ + Cl- = AgCl↓（白色沉淀）</Equation>
          <p className="mt-2">加稀 HNO₃ 后，沉淀不溶解 → 确认是 Cl⁻</p>
        </Card>

        <Card variant="info" className="mt-4">
          <strong>为什么加稀 HNO₃？</strong>
          <p>排除 CO₃²⁻、SO₃²⁻ 等离子的干扰（它们与 Ag⁺ 生成的沉淀会被酸溶解）</p>
        </Card>

        <Collapsible title="卤素离子的鉴别" icon="🔬">
          <Table
            headers={['离子', 'AgNO₃沉淀颜色']}
            rows={[
              ['Cl⁻', 'AgCl 白色'],
              ['Br⁻', 'AgBr 淡黄色'],
              ['I⁻', 'AgI 黄色'],
            ]}
          />
        </Collapsible>
      </section>

      {/* 6.5 卤素单质的性质递变 */}
      <section className="mb-8">
        <h3 className="section-title">6.5 卤素性质递变</h3>
        <HalogenTrends />
        <Table
          headers={['性质', <Formula key="1">F2</Formula>, <Formula key="2">Cl2</Formula>, <Formula key="3">Br2</Formula>, <Formula key="4">I2</Formula>]}
          rows={[
            ['颜色', '淡黄绿', '黄绿', '深红棕', '紫黑'],
            ['状态', '气', '气', '液', '固'],
            ['氧化性', '最强', '强', '较强', '较弱'],
            ['与H₂反应', '冷暗处爆炸', '点燃或光照', '加热', '持续加热，可逆'],
          ]}
        />

        <Card variant="highlight" className="mt-4">
          <strong>置换反应验证氧化性强弱：</strong>
          <div className="space-y-1 mt-2">
            <Equation>Cl2 + 2Br- = 2Cl- + Br2（溶液变橙色）</Equation>
            <Equation>Cl2 + 2I- = 2Cl- + I2（溶液变褐色）</Equation>
            <p className="text-center text-gray-600">氧化性：Cl₂ {'>'} Br₂ {'>'} I₂</p>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Chapter6
