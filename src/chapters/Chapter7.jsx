import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import IronIonConversion from '../components/diagrams/IronIonConversion'
import IronNetwork from '../components/diagrams/IronNetwork'
import IronIonTests from '../components/diagrams/IronIonTests'

function Chapter7() {
  return (
    <div>
      <h2 className="chapter-title">第七章：铁及其化合物</h2>

      {/* 7.1 铁的性质 */}
      <section className="mb-8">
        <h3 className="section-title">7.1 铁的性质</h3>

        <IronNetwork />

        <Collapsible title="物理性质" defaultOpen={true} icon="🔍">
          <ul className="list-disc list-inside space-y-1">
            <li>银白色金属，有金属光泽</li>
            <li>能被磁铁吸引</li>
            <li>密度 7.86 g/cm³，熔点 1535°C</li>
          </ul>
        </Collapsible>

        <Collapsible title="与非金属反应" icon="🔥">
          <div className="space-y-2">
            <Equation>3Fe + 2O2 = Fe3O4（点燃，黑色）</Equation>
            <Equation>2Fe + 3Cl2 = 2FeCl3（点燃，+3价）</Equation>
            <Equation>Fe + S = FeS（加热，+2价）</Equation>
          </div>
          <Card variant="highlight" className="mt-4">
            <strong>规律：</strong>与强氧化剂反应生成+3价，与弱氧化剂反应生成+2价
          </Card>
        </Collapsible>

        <Collapsible title="与酸反应" icon="🧪">
          <div className="space-y-4">
            <div>
              <p className="font-medium">与非氧化性酸：</p>
              <Equation>Fe + 2HCl = FeCl2 + H2↑（生成+2价）</Equation>
            </div>
            <div>
              <p className="font-medium">与氧化性酸：</p>
              <Equation>Fe + 4HNO3(稀) = Fe(NO3)3 + NO↑ + 2H2O（生成+3价）</Equation>
            </div>
          </div>
          <Card variant="warning" className="mt-4">
            <strong>注意：</strong>Fe在冷的浓 H₂SO₄ 和浓 HNO₃ 中<strong>钝化</strong>
          </Card>
        </Collapsible>
      </section>

      {/* 7.2 铁的氧化物 */}
      <section className="mb-8">
        <h3 className="section-title">7.2 铁的氧化物</h3>
        <Table
          headers={['氧化物', '化学式', '铁的价态', '颜色', '俗名']}
          rows={[
            ['氧化亚铁', 'FeO', '+2', '黑色', '-'],
            ['氧化铁', <Formula key="1">Fe2O3</Formula>, '+3', '红棕色', '铁红'],
            ['四氧化三铁', <Formula key="2">Fe3O4</Formula>, '+2和+3', '黑色', '磁性氧化铁'],
          ]}
        />
        <Card variant="info" className="mt-4">
          <strong>注意：</strong>FeO不稳定，易被氧化成 <Formula>Fe2O3</Formula>
        </Card>
      </section>

      {/* 7.3 Fe²⁺与Fe³⁺的转化 */}
      <section className="mb-8">
        <h3 className="section-title">7.3 Fe²⁺ 与 Fe³⁺ 的转化</h3>
        <Card variant="highlight">
          这是高考<strong>最重要</strong>的内容之一！
        </Card>

        <IronIonConversion />

        <Collapsible title="Fe²⁺ → Fe³⁺（氧化）" defaultOpen={true} icon="⬆️">
          <div className="space-y-1">
            <Equation>2Fe2+ + Cl2 = 2Fe3+ + 2Cl-</Equation>
            <Equation>2Fe2+ + Br2 = 2Fe3+ + 2Br-</Equation>
            <Equation>2Fe2+ + H2O2 + 2H+ = 2Fe3+ + 2H2O</Equation>
          </div>
        </Collapsible>

        <Collapsible title="Fe³⁺ → Fe²⁺（还原）" defaultOpen={true} icon="⬇️">
          <div className="space-y-1">
            <Equation>2Fe3+ + Fe = 3Fe2+</Equation>
            <Equation>2Fe3+ + Cu = 2Fe2+ + Cu2+</Equation>
            <Equation>2Fe3+ + 2I- = 2Fe2+ + I2</Equation>
            <Equation>2Fe3+ + H2S = 2Fe2+ + S↓ + 2H+</Equation>
          </div>
        </Collapsible>
      </section>

      {/* 7.4 Fe²⁺与Fe³⁺的检验 */}
      <section className="mb-8">
        <h3 className="section-title">7.4 Fe²⁺ 与 Fe³⁺ 的检验</h3>

        <IronIonTests />

        <Collapsible title="Fe³⁺ 的检验" defaultOpen={true} icon="🔬">
          <div className="space-y-4">
            <div>
              <p className="font-medium">方法1：加 KSCN 溶液</p>
              <Equation>Fe3+ + 3SCN- = Fe(SCN)3</Equation>
              <p className="text-red-600 font-medium">现象：血红色</p>
            </div>
            <div>
              <p className="font-medium">方法2：加 NaOH 溶液</p>
              <Equation>Fe3+ + 3OH- = Fe(OH)3↓</Equation>
              <p className="text-amber-700 font-medium">现象：红褐色沉淀</p>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Fe²⁺ 的检验" defaultOpen={true} icon="🔬">
          <div className="space-y-4">
            <div>
              <p className="font-medium">方法1：先加 KSCN（无明显现象），再加氯水（变血红色）</p>
              <p className="text-gray-600 text-sm">说明原来有 Fe²⁺，被氧化成 Fe³⁺</p>
            </div>
            <div>
              <p className="font-medium">方法2：加 NaOH 溶液，观察沉淀颜色变化</p>
              <Equation>Fe2+ + 2OH- = Fe(OH)2↓</Equation>
              <p className="text-gray-700">白色 → 灰绿色 → 红褐色（被空气氧化）</p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* 7.5 铁的氢氧化物 */}
      <section className="mb-8">
        <h3 className="section-title">7.5 铁的氢氧化物</h3>
        <Table
          headers={['性质', <Formula key="1">Fe(OH)2</Formula>, <Formula key="2">Fe(OH)3</Formula>]}
          rows={[
            ['颜色', '白色', '红褐色'],
            ['稳定性', '不稳定，易被氧化', '稳定'],
            ['碱性', '弱碱', '弱碱'],
          ]}
        />

        <Card variant="highlight" className="mt-4">
          <strong>Fe(OH)₂ 的氧化现象（重要！）：</strong>
          <p className="mt-2">白色沉淀 → 迅速变成灰绿色 → 最终变成红褐色</p>
          <Equation>4Fe(OH)2 + O2 + 2H2O = 4Fe(OH)3</Equation>
        </Card>

        <Collapsible title="如何得到纯白色 Fe(OH)₂？" icon="💡">
          <ol className="list-decimal list-inside space-y-2">
            <li>煮沸 NaOH 溶液（除去溶解的 O₂）</li>
            <li>在液面上加一层油（隔绝空气）</li>
            <li>将滴管伸入液面下加入 FeSO₄ 溶液</li>
          </ol>
        </Collapsible>
      </section>
    </div>
  )
}

export default Chapter7
