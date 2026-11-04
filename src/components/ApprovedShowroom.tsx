import { useState } from 'react'
import { ArrowUpRight, Bot, Workflow, Globe2, Database, ClipboardCheck } from 'lucide-react'
import { projects } from '../data/content'

const scenes=[
 {id:'web',label:'Web & e-commerce',eyebrow:'01 / DESIGN & DEVELOPMENT',title:'Una presencia digital con carácter.',description:'Diseño real. Experiencias que podés visitar.'},
 {id:'ia',label:'Experiencia IA',eyebrow:'02 / ARTIFICIAL INTELLIGENCE',title:'La conversación también es diseño.',description:'Ejemplo ilustrativo, sin backend conectado.'},
 {id:'flow',label:'Automatización',eyebrow:'03 / SYSTEMS & WORKFLOWS',title:'Cuando las piezas se conectan.',description:'Un recorrido visual de una consulta.'}
]
export function ApprovedShowroom(){
 const [active,setActive]=useState('web'),[next,setNext]=useState(false)
 const scene=scenes.find(x=>x.id===active)!
 const project=projects[0]
 return <div className="approved-showcase" aria-label="Showroom interactivo de Derito Digital">
  <div className="showcase-glow" aria-hidden="true"/>
  <div className="showcase-head"><span><i className="pulse"/> DERITO / LIVE SHOWROOM</span><span>EST. 2026</span></div>
  <div className="showcase-switch" role="tablist" aria-label="Vistas del showroom">{scenes.map(s=><button key={s.id} role="tab" aria-selected={active===s.id} className={active===s.id?'is-active':''} onClick={()=>{setActive(s.id);setNext(false)}}>{s.label}</button>)}</div>
  <div className="showcase-body">
   {active==='web'&&<div className="showcase-scene"><a className="showcase-browser" href={project.url} target="_blank" rel="noreferrer"><div className="showcase-browser-top"><span className="dots"><i/><i/><i/></span><span>giorenatto.com.ar</span><span>↗</span></div><img src={project.image} alt="Captura real de la tienda Giorenatto"/></a><div className="glass float-card float-left"><span className="float-icon"><Globe2 size={18}/></span><span><strong>Una web con identidad.</strong><small>Diseño + desarrollo</small></span></div><div className="glass float-card float-right"><span className="float-icon blue"><ArrowUpRight size={17} aria-hidden="true"/></span><span><strong>De la idea al detalle.</strong><small>Experiencias a medida</small></span></div></div>}
   {active==='ia'&&<div className="showcase-scene"><div className="showcase-ai glass"><div className="ai-heading"><span className="ai-avatar"><Bot size={18}/></span><span><strong>Agente · Ejemplo</strong><small>Conversación ilustrativa, sin backend</small></span></div><div className="chat-bubble">Hola, ¿en qué puedo ayudarte?</div><div className="chat-bubble right">Quiero mejorar la atención de mi tienda.</div><div className="chat-bubble">{next?'El primer paso es conocer qué consultas recibís y qué herramientas usás.':'Podemos diseñar un flujo para preguntas frecuentes y derivaciones a tu equipo.'}</div><button className="showcase-next" onClick={()=>setNext(v=>!v)}>{next?'Reiniciar ejemplo':'Ver siguiente respuesta'} <ArrowUpRight size={15}/></button></div></div>}
   {active==='flow'&&<div className="showcase-scene showcase-flow"><Workflow size={32}/><div className="showcase-flow-track">{['Consulta','Clasificar','Registro','Seguimiento'].map((x,i)=><div key={x}><small>0{i+1}</small><b>{[<Globe2 size={20} key="web"/>,<Bot size={20} key="bot"/>,<Database size={20} key="data"/>,<ClipboardCheck size={20} key="check"/>][i]}</b><strong>{x}</strong></div>)}</div><p>Flujo ilustrativo. Las integraciones reales se definen según cada proyecto.</p></div>}
  </div>
  <div className="showcase-caption"><div><span>{scene.eyebrow}</span><strong>{scene.title}</strong><small>{scene.description}</small></div><a href={active==='web'?project.url:'#laboratorio'} target={active==='web'?'_blank':undefined} rel={active==='web'?'noreferrer':undefined} aria-label={active==='web'?'Abrir proyecto Giorenatto':'Explorar la experiencia'}><ArrowUpRight/></a></div>
 </div>
}
