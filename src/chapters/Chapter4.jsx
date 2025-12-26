import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Collapsible from '../components/common/Collapsible'
import { Formula, Equation } from '../components/common/Formula'
import ElectronTransfer from '../components/diagrams/ElectronTransfer'
import RedoxStrength from '../components/diagrams/RedoxStrength'
import SulfurValence from '../components/diagrams/SulfurValence'

function Chapter4() {
  return (
    <div>
      <h2 className="chapter-title">第四章：氧化还原反应</h2>

      {/* 4.1 核心概念 */}
      <section className="mb-8">
        <h3 className="section-title">4.1 核心概念</h3>
        <Card variant="highlight">
          氧化还原反应的本质是<strong>电子转移</strong>。
        </Card>

        <ElectronTransfer />

        <Table
          headers={['概念', '定义', '口诀']}
          rows={[
            ['氧化', '失去电子，化合价升高', '升失氧'],
            ['还原', '得到电子，化合价降低', '降得还'],
            ['氧化剂', '得电子的物质，本身被还原', '得还氧'],
            ['还原剂', '失电子的物质，本身被氧化', '失氧还'],
          ]}
        />

        <Card variant="highlight" className="mt-4">
          <strong>记忆口诀：</strong>升失氧，降得还；若说剂，反过来。
        </Card>
      </section>

      {/* 4.2 化合价与电子得失 */}
      <section className="mb-8">
        <h3 className="section-title">4.2 化合价规律</h3>
        <Table
          headers={['最外层电子数', '最高正价', '最低负价', '示例']}
          rows={[
            ['1', '+1', '-', 'Na、K'],
            ['2', '+2', '-', 'Mg、Ca'],
            ['3', '+3', '-', 'Al'],
            ['4', '+4', '-4', 'C、Si'],
            ['5', '+5', '-3', 'N、P'],
            ['6', '+6', '-2', 'O、S'],
            ['7', '+7', '-1', 'Cl、Br'],
          ]}
        />

        <Card variant="info" className="mt-4">
          <strong>核心公式：</strong>
          <ul className="list-disc list-inside mt-2">
            <li>最高正价 = 最外层电子数</li>
            <li>最低负价 = 最外层电子数 - 8</li>
          </ul>
        </Card>
      </section>

      {/* 4.3 价态与反应角色 */}
      <section className="mb-8">
        <h3 className="section-title">4.3 价态与反应角色</h3>
        <Table
          headers={['价态位置', '能往哪变', '反应角色']}
          rows={[
            ['最高价', '只能降', '只能做氧化剂'],
            ['最低价', '只能升', '只能做还原剂'],
            ['中间价', '能升能降', '既可氧化也可还原'],
          ]}
        />

        <SulfurValence />
      </section>

      {/* 4.4 氧化还原性强弱 */}
      <section className="mb-8">
        <h3 className="section-title">4.4 氧化还原性强弱</h3>

        <RedoxStrength />

        <Collapsible title="卤素活动性顺序" icon="🟢">
          <div className="p-4 bg-gray-100 rounded-lg font-mono text-center">
            F₂ {'>'} Cl₂ {'>'} Br₂ {'>'} I₂
          </div>
          <p className="text-center text-gray-600 text-sm mt-2">氧化性依次减弱 →</p>
        </Collapsible>

        <Card variant="highlight" className="mt-4">
          <strong>重要规律：</strong>强氧化剂 + 强还原剂 → 弱氧化剂 + 弱还原剂
        </Card>
      </section>

      {/* 4.5 特殊氧化还原反应 */}
      <section className="mb-8">
        <h3 className="section-title">4.5 特殊氧化还原反应</h3>

        <Collapsible title="歧化反应" icon="↗️↘️">
          <p className="mb-2">同一元素的同一价态，一部分升高，一部分降低。</p>
          <Equation>Cl2 + 2NaOH = NaCl + NaClO + H2O</Equation>
          <p className="text-sm text-gray-600 text-center">
            <Formula>Cl2</Formula>中的Cl（0价）→ Cl⁻（-1价）+ ClO⁻（+1价）
          </p>
        </Collapsible>

        <Collapsible title="归中反应" icon="↘️↗️">
          <p className="mb-2">同一元素的不同价态，向中间价态靠拢。</p>
          <Equation>2H2S + SO2 = 3S + 2H2O</Equation>
          <p className="text-sm text-gray-600 text-center">
            S（-2价）+ S（+4价）→ S（0价）
          </p>
        </Collapsible>
      </section>

      {/* 4.6 常见氧化剂与还原剂 */}
      <section className="mb-8">
        <h3 className="section-title">4.6 常见氧化剂与还原剂</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Collapsible title="常见氧化剂" defaultOpen={true} icon="⬇️">
            <Table
              headers={['物质', '还原产物']}
              rows={[
                [<Formula key="1">O2</Formula>, <Formula key="2">H2O、O2-</Formula>],
                [<Formula key="3">Cl2</Formula>, <Formula key="4">Cl-</Formula>],
                ['浓H₂SO₄', <Formula key="5">SO2</Formula>],
                ['HNO₃（稀）', 'NO'],
                ['HNO₃（浓）', <Formula key="6">NO2</Formula>],
                [<Formula key="7">Fe3+</Formula>, <Formula key="8">Fe2+</Formula>],
              ]}
            />
          </Collapsible>

          <Collapsible title="常见还原剂" defaultOpen={true} icon="⬆️">
            <Table
              headers={['物质', '氧化产物']}
              rows={[
                ['活泼金属', '金属离子'],
                [<Formula key="1">H2</Formula>, <Formula key="2">H2O</Formula>],
                ['C', <Formula key="3">CO2</Formula>],
                ['CO', <Formula key="4">CO2</Formula>],
                [<Formula key="5">Fe2+</Formula>, <Formula key="6">Fe3+</Formula>],
                [<Formula key="7">I-</Formula>, <Formula key="8">I2</Formula>],
              ]}
            />
          </Collapsible>
        </div>
      </section>
    </div>
  )
}

export default Chapter4
