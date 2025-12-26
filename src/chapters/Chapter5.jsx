import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import SodiumNetwork from '../components/diagrams/SodiumNetwork'

function Chapter5() {
  return (
    <div>
      <h2 className="chapter-title">第五章：钠及其化合物</h2>

      {/* 5.1 钠的性质 */}
      <section className="mb-8">
        <h3 className="section-title">5.1 钠的性质</h3>

        <Collapsible title="物理性质" defaultOpen={true} icon="🔍">
          <ul className="list-disc list-inside space-y-1">
            <li>银白色金属，质软（可用刀切割）</li>
            <li>密度比水小（0.97 g/cm³），比煤油大</li>
            <li>熔点低（97.8°C）</li>
            <li>保存在煤油中（防止与空气、水反应）</li>
          </ul>
        </Collapsible>

        <Collapsible title="与非金属反应" icon="🔥">
          <div className="space-y-2">
            <Equation>4Na + O2 = 2Na2O（常温，白色）</Equation>
            <Equation>2Na + O2 = Na2O2（点燃，淡黄色）</Equation>
            <Equation>2Na + Cl2 = 2NaCl（点燃）</Equation>
          </div>
        </Collapsible>

        <Collapsible title="与水反应" defaultOpen={true} icon="💧">
          <Equation>2Na + 2H2O = 2NaOH + H2↑</Equation>
          <Card variant="highlight" className="mt-4">
            <strong>现象（记忆口诀：浮熔游响红）：</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>浮</strong>：钠浮在水面上（密度比水小）</li>
              <li><strong>熔</strong>：钠熔成闪亮小球（反应放热，钠熔点低）</li>
              <li><strong>游</strong>：小球四处游动（H₂推动）</li>
              <li><strong>响</strong>：发出嘶嘶声（H₂逸出）</li>
              <li><strong>红</strong>：滴酚酞变红（生成NaOH）</li>
            </ul>
          </Card>
        </Collapsible>

        <Collapsible title="与盐溶液反应" icon="🧪">
          <p className="mb-2">钠与盐溶液反应时，<strong>先与水反应</strong>，生成的NaOH再与盐反应。</p>
          <Card variant="info">
            <strong>例：Na投入CuSO₄溶液</strong>
            <Equation>2Na + 2H2O = 2NaOH + H2↑</Equation>
            <Equation>2NaOH + CuSO4 = Cu(OH)2↓ + Na2SO4</Equation>
            <p className="text-sm text-gray-600 mt-2">现象：产生气泡，生成蓝色沉淀</p>
          </Card>
        </Collapsible>
      </section>

      {/* 5.2 氧化钠与过氧化钠 */}
      <section className="mb-8">
        <h3 className="section-title">5.2 氧化钠与过氧化钠</h3>
        <Table
          headers={['性质', <Formula key="1">Na2O</Formula>, <Formula key="2">Na2O2</Formula>]}
          rows={[
            ['颜色', '白色', '淡黄色'],
            ['氧的价态', '-2', '-1'],
            ['类型', '碱性氧化物', '过氧化物'],
            ['与水反应', <span key="3"><Formula>Na2O + H2O = 2NaOH</Formula></span>, <span key="4"><Formula>2Na2O2 + 2H2O = 4NaOH + O2↑</Formula></span>],
            ['与CO₂反应', <span key="5"><Formula>Na2O + CO2 = Na2CO3</Formula></span>, <span key="6"><Formula>2Na2O2 + 2CO2 = 2Na2CO3 + O2</Formula></span>],
          ]}
        />

        <Card variant="highlight" className="mt-4">
          <strong>Na₂O₂ 的重要性质：</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>强氧化性</strong>：能漂白某些有色物质</li>
            <li>与水和 CO₂ 反应都能放出 O₂</li>
            <li><strong>应用</strong>：潜水艇、呼吸面具中的供氧剂</li>
          </ul>
        </Card>
      </section>

      {/* 5.3 碳酸钠与碳酸氢钠 */}
      <section className="mb-8">
        <h3 className="section-title">5.3 碳酸钠与碳酸氢钠</h3>
        <Table
          headers={['性质', <Formula key="1">Na2CO3</Formula>, <Formula key="2">NaHCO3</Formula>]}
          rows={[
            ['俗名', '纯碱、苏打', '小苏打'],
            ['溶解性', '易溶', '能溶（比Na₂CO₃小）'],
            ['热稳定性', '稳定', '不稳定，受热分解'],
            ['碱性', '较强', '较弱'],
            ['与酸反应', '较慢', '较快'],
          ]}
        />

        <Collapsible title="重要反应" defaultOpen={true} icon="⚗️">
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">与酸反应（都产生CO₂）：</p>
              <Equation>Na2CO3 + 2HCl = 2NaCl + H2O + CO2↑</Equation>
              <Equation>NaHCO3 + HCl = NaCl + H2O + CO2↑</Equation>
              <p className="text-sm text-gray-600">NaHCO₃与酸反应<strong>更剧烈</strong>（用于泡沫灭火器）</p>
            </div>
            <div>
              <p className="font-medium mb-2">NaHCO₃受热分解：</p>
              <Equation>2NaHCO3 = Na2CO3 + H2O + CO2↑（加热）</Equation>
              <p className="text-sm text-gray-600">Na₂CO₃受热<strong>不分解</strong></p>
            </div>
          </div>
        </Collapsible>
      </section>

      {/* 5.4 转化网络 */}
      <section className="mb-8">
        <h3 className="section-title">5.4 钠及其化合物转化网络</h3>
        <SodiumNetwork />
      </section>
    </div>
  )
}

export default Chapter5
