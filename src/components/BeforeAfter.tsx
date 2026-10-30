import { ArrowRight, Bot, Check, Clock3, Layers3, MessageSquareMore, Sparkles, Workflow } from 'lucide-react'

const before = [
  { icon: MessageSquareMore, text: 'Consultas que dependen de que alguien responda' },
  { icon: Clock3, text: 'Tareas repetitivas que consumen tiempo todos los días' },
  { icon: Layers3, text: 'Herramientas sueltas que no se hablan entre sí' },
  { icon: Workflow, text: 'Seguimientos manuales y procesos difíciles de ordenar' },
]

const after = [
  { icon: Bot, text: 'Atención asistida según el flujo definido' },
  { icon: Sparkles, text: 'Procesos conectados cuando la integración lo permite' },
  { icon: Check, text: 'Información reunida para facilitar el seguimiento' },
  { icon: Workflow, text: 'Una base que se puede ampliar por etapas' },
]

export function BeforeAfter() {
  return (
    <section className="section transformation" id="transformacion">
      <div className="section-heading transformation-heading">
        <div>
          <span className="eyebrow">ANTES / DESPUÉS</span>
          <h2>No agregamos tecnología.<br/>Sacamos fricción.</h2>
        </div>
        <p>La diferencia no está en tener más herramientas. Está en que las herramientas trabajen juntas y resuelvan algo concreto.</p>
      </div>

      <div className="transformation-grid">
        <article className="transformation-card transformation-before">
          <div className="transformation-label">ANTES</div>
          <h3>El negocio depende demasiado de lo manual.</h3>
          <div className="transformation-list">
            {before.map(({icon: Icon, text}) => (
              <div key={text}><Icon size={18}/><span>{text}</span></div>
            ))}
          </div>
        </article>

        <div className="transformation-arrow" aria-hidden="true">
          <ArrowRight size={22}/>
        </div>

        <article className="transformation-card transformation-after">
          <div className="transformation-label">DESPUÉS</div>
          <h3>La operación puede quedar más clara y ordenada.</h3>
          <div className="transformation-list">
            {after.map(({icon: Icon, text}) => (
              <div key={text}><Icon size={18}/><span>{text}</span></div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
