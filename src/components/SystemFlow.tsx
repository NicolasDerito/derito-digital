import { Bot, Database, Globe2, MessageCircle, ShoppingCart, Workflow } from 'lucide-react'

const nodes = [
  { icon: Globe2, label: 'Web / E-commerce' },
  { icon: MessageCircle, label: 'Consulta' },
  { icon: Bot, label: 'Agente IA' },
  { icon: Database, label: 'Datos / Sistema' },
  { icon: Workflow, label: 'Automatización' },
  { icon: ShoppingCart, label: 'Acción / Venta' },
]

export function SystemFlow() {
  return (
    <section className="system-section">
      <div className="system-inner">
        <div className="system-copy">
          <span className="eyebrow">UN SISTEMA, NO PIEZAS SUELTAS</span>
          <h2>La experiencia empieza en la web y termina en una acción.</h2>
          <p>Una consulta puede transformarse en una venta, un turno, una comparación de proveedores o una tarea ejecutada. Ese es el tipo de conexión que buscamos.</p>
        </div>

        <div className="system-flow" aria-label="Flujo de sistema digital">
          {nodes.map(({icon: Icon, label}, index) => (
            <div className="system-node-wrap" key={label}>
              <div className="system-node">
                <Icon size={22}/>
                <span>{label}</span>
              </div>
              {index < nodes.length - 1 && <div className="system-connector"><i/></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
