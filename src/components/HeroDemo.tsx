import { AnimatePresence, motion } from 'framer-motion'
import { Bot, CalendarDays, ShoppingCart, Workflow, Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const modes = [
  {
    id: 'ventas',
    label: 'Ventas',
    icon: ShoppingCart,
    customer: 'Hola, ¿tenés disponible este producto?',
    steps: ['Consulta recibida', 'Información consultada', 'Opción recomendada', 'Pedido preparado'],
    result: 'Pedido preparado para revisar'
  },
  {
    id: 'turnos',
    label: 'Turnos',
    icon: CalendarDays,
    customer: '¿Qué horarios tienen disponibles mañana?',
    steps: ['Consulta recibida', 'Agenda consultada', 'Horario elegido', 'Confirmación enviada'],
    result: 'Horario sugerido para confirmar'
  },
  {
    id: 'compras',
    label: 'Compras',
    icon: Workflow,
    customer: 'Compará estas cotizaciones y resumime las diferencias.',
    steps: ['Archivos recibidos', 'Datos extraídos', 'Precios comparados', 'Resumen preparado'],
    result: 'Resumen preparado para revisar'
  },
  {
    id: 'atencion',
    label: 'Atención',
    icon: Bot,
    customer: 'Necesito saber cómo funciona el servicio.',
    steps: ['Pregunta entendida', 'Contexto identificado', 'Respuesta preparada', 'Siguiente paso sugerido'],
    result: 'Respuesta propuesta para revisar'
  }
]

export function HeroDemo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [step, setStep] = useState(0)
  const active = modes[activeIndex]

  useEffect(() => {
    setStep(0)
    const stepTimer = window.setInterval(() => {
      setStep(current => {
        if (current >= active.steps.length - 1) return current
        return current + 1
      })
    }, 1050)
    const modeTimer = window.setTimeout(() => {
      setActiveIndex(current => (current + 1) % modes.length)
    }, 5600)
    return () => {
      window.clearInterval(stepTimer)
      window.clearTimeout(modeTimer)
    }
  }, [activeIndex, active.steps.length])

  const selectMode = (index: number) => {
    setActiveIndex(index)
    setStep(0)
  }

  return (
    <motion.div
      className="hero-demo"
      initial={{ opacity: 0, y: 28, scale: .985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: .7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="hero-demo-grid" />
      <div className="hero-demo-orb" />
      <div className="hero-live"><i/> SIMULACIÓN INTERACTIVA</div>
      <p className="demo-qualifier">Escenarios ilustrativos: no consultan sistemas ni ejecutan acciones reales.</p>

      <div className="hero-tabs" role="group" aria-label="Elegir escenario de simulación">
        {modes.map((mode, index) => {
          const Icon = mode.icon
          return (
            <button key={mode.id} className={activeIndex === index ? 'active' : ''} aria-pressed={activeIndex === index} onClick={() => selectMode(index)}>
              <Icon size={16}/>{mode.label}
            </button>
          )
        })}
      </div>

      <div className="phone" aria-label={`Vista de ejemplo: ${active.label}`}>
        <div className="phone-notch"/>
        <div className="phone-top"><span>Vista de ejemplo · {active.label}</span><i/></div>
        <p className="phone-qualifier">SIMULACIÓN</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .25 }}
          >
            <div className="phone-message agent-bubble">Hola, ¿en qué te puedo ayudar hoy?</div>
            <div className="phone-message user-bubble">{active.customer}</div>
          </motion.div>
        </AnimatePresence>

        <div className="phone-steps">
          {active.steps.map((label, index) => (
            <div className={`phone-step ${index <= step ? 'done' : ''}`} key={label}>
              <i>{index < step ? <Check size={13}/> : index + 1}</i>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.id}-${step}`}
            className="phone-result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: step === active.steps.length - 1 ? 1 : .5, y: 0 }}
          >
            <strong>{step === active.steps.length - 1 ? active.result : 'Procesando…'}</strong>
            <span>{step === active.steps.length - 1 ? 'Acción preparada' : `${step + 1} de ${active.steps.length}`}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div className="flow-card flow-a" animate={{ y: [0,-5,0] }} transition={{ duration: 4, repeat: Infinity }}>
        <span>01</span> Consulta entendida
      </motion.div>
      <motion.div className="flow-card flow-b" animate={{ y: [0,6,0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <span>02</span> Datos conectados
      </motion.div>
      <motion.div className="flow-card flow-c" animate={{ y: [0,-4,0] }} transition={{ duration: 4.4, repeat: Infinity }}>
        <span>03</span> Acción ejecutable
      </motion.div>
    </motion.div>
  )
}
