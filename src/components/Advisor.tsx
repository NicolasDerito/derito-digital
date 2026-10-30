import { useMemo, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const goals = [
  ['web', 'Tener una web profesional', 'Página web profesional', 'Una primera presencia digital clara, adaptable y fácil de encontrar.'],
  ['tienda', 'Vender online', 'Tienda online', 'Un catálogo con una experiencia de compra diseñada para tu negocio.'],
  ['ia', 'Responder consultas con IA', 'Agente IA para consultas', 'Orientación inicial según tus procesos, canales y objetivos.'],
  ['auto', 'Automatizar tareas', 'Automatización de procesos', 'Identifiquemos qué tareas repetitivas conviene conectar o simplificar.']
] as const
const stages = [['inicial','Estoy empezando'],['mejora','Ya tengo un negocio'],['medida','Necesito algo a medida']] as const

export function Advisor() {
  const [goal,setGoal]=useState<string>('web')
  const [stage,setStage]=useState<string>('inicial')
  const selected=goals.find(g=>g[0]===goal) ?? goals[0]
  const stageName=stages.find(s=>s[0]===stage)?.[1] ?? stages[0][1]
  const href=useMemo(()=>{
    const n=(import.meta.env.VITE_WHATSAPP_NUMBER||'').replace(/\D/g,'')
    if(!n) return ''
    const msg=`Hola, vengo desde Derito Digital. Quiero consultar por ${selected[2]}. ${stageName}. ¿Me pueden orientar con una propuesta?`
    return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`
  },[selected,stageName])
  return <section className="section advisor" id="asesor" aria-labelledby="advisor-title">
    <div className="section-heading"><div><span className="eyebrow">EMPEZAR ES FÁCIL</span><h2 id="advisor-title">¿Qué necesitás resolver hoy?</h2></div><p>Respondé dos preguntas y te mostramos por dónde conviene empezar. Es una orientación inicial, no un presupuesto.</p></div>
    <div className="advisor-card liquid-surface">
      <fieldset><legend>01 — ¿Qué querés mejorar?</legend><div className="advisor-options">{goals.map(([id,label])=><button type="button" key={id} aria-pressed={goal===id} className={goal===id?'selected':''} onClick={()=>setGoal(id)}>{goal===id&&<Check size={16}/>} {label}</button>)}</div></fieldset>
      <fieldset><legend>02 — ¿En qué etapa estás?</legend><div className="advisor-options">{stages.map(([id,label])=><button type="button" key={id} aria-pressed={stage===id} className={stage===id?'selected':''} onClick={()=>setStage(id)}>{stage===id&&<Check size={16}/>} {label}</button>)}</div></fieldset>
      <div className="advisor-recommendation" aria-live="polite"><span className="eyebrow">SOLUCIÓN A EXPLORAR</span><h3>{selected[2]}</h3><p>{selected[3]}</p><small>Orientación inicial, no presupuesto definitivo.</small>{href?<a className="btn btn-primary" target="_blank" rel="noreferrer" href={href}>Pedir propuesta <ArrowUpRight size={17}/></a>:<p className="advisor-no-wa">Para generar el mensaje personalizado, configurá el número de WhatsApp en el entorno local.</p>}</div>
    </div>
  </section>
}
