import { useMemo, useState } from 'react'
import { ArrowRight, Bot, CalendarDays, ChartNoAxesCombined, Headphones, Mail, PhoneCall, ShoppingCart, Workflow, Globe2, UsersRound } from 'lucide-react'

const groups = [
  { title: 'Atención y turnos', items: [
    { id: 'whatsapp', title: 'Asistentes de WhatsApp con IA', text: 'Respuestas frecuentes, consultas de productos y derivación a vendedores.', icon: Bot },
    { id: 'recepcion', title: 'Recepcionistas virtuales', text: 'Gestión de turnos, confirmaciones y recordatorios.', icon: CalendarDays },
    { id: 'telefono', title: 'Agentes telefónicos de IA', text: 'Recepción de llamadas, consultas y derivación a operadores.', icon: PhoneCall },
  ]},
  { title: 'Ventas y clientes', items: [
    { id: 'ventas', title: 'Vendedores digitales', text: 'Recomendaciones, atención comercial y asistencia para tiendas online.', icon: ShoppingCart },
    { id: 'crm', title: 'CRM inteligente', text: 'Seguimiento de clientes, oportunidades y recordatorios comerciales.', icon: UsersRound },
  ]},
  { title: 'Operaciones e información', items: [
    { id: 'compras', title: 'Automatización de compras', text: 'Lectura de cotizaciones, comparación de proveedores e informes de precios.', icon: Workflow },
    { id: 'correos', title: 'Gestión inteligente de correos', text: 'Clasificación, extracción de información y preparación de respuestas.', icon: Mail },
    { id: 'reportes', title: 'Reportes empresariales automáticos', text: 'Ventas, stock, gastos e indicadores enviados por Telegram o email.', icon: ChartNoAxesCombined },
    { id: 'monitoreo', title: 'Monitoreo inteligente de sitios web', text: 'Disponibilidad, errores y enlaces rotos con alertas.', icon: Globe2 },
    { id: 'integraciones', title: 'Automatizaciones empresariales', text: 'Conexión de formularios, sistemas, inventarios y procesos administrativos.', icon: Workflow },
  ]},
]
const modules = [
  { id: 'atencion', label: 'Atención', icon: Headphones }, { id: 'ventas', label: 'Ventas', icon: ShoppingCart },
  { id: 'turnos', label: 'Turnos', icon: CalendarDays }, { id: 'reportes', label: 'Reportes', icon: ChartNoAxesCombined },
  { id: 'compras', label: 'Compras', icon: Workflow }, { id: 'automatizacion', label: 'Automatización', icon: Bot },
]
const needs = [
  { id: 'atencion', title: 'No llego a responder las consultas', solution: 'Derito Flow Atención', detail: 'Preguntas frecuentes, registro de consultas y derivación humana.', suggested: ['atencion'] },
  { id: 'ventas', title: 'Quiero vender y hacer seguimiento', solution: 'Derito Flow Ventas', detail: 'Captura de oportunidades y seguimiento comercial.', suggested: ['ventas', 'atencion'] },
  { id: 'operaciones', title: 'Pierdo tiempo en tareas repetitivas', solution: 'Derito Flow Operaciones', detail: 'Automatizaciones, alertas y reportes definidos para tu proceso.', suggested: ['automatizacion', 'reportes'] },
  { id: 'turnos', title: 'Necesito organizar turnos', solution: 'Derito Flow Turnos', detail: 'Solicitudes, confirmaciones y recordatorios según tu sistema.', suggested: ['turnos', 'atencion'] },
]
export function DeritoFlow({ whatsappHref }: { whatsappHref: (intent?: string) => string }) {
  const [selected, setSelected] = useState<string[]>(['atencion'])
  const [need, setNeed] = useState('atencion')
  const activeNeed = needs.find(n => n.id === need) || needs[0]
  const buildLink = (message: string) => {
    const base = whatsappHref('flow')
    if (!base) return ''
    const url = new URL(base)
    url.searchParams.set('text', message)
    return url.toString()
  }
  const href = useMemo(() => buildLink(`Hola, quiero consultar por Derito Flow como solución a medida. Mi necesidad es: ${activeNeed.title}. Me interesan estos módulos: ${selected.map(id => modules.find(m => m.id === id)?.label).join(', ') || 'necesito asesoramiento para elegir'}.`), [selected, need, whatsappHref])
  const fallbackConsult = (description: string) => window.dispatchEvent(new CustomEvent('derito:agent-open',{detail:{intent:'custom', context:description}}))
  return <section className="section catalog-section" id="catalogo" aria-labelledby="catalog-title">
    <div className="section-heading"><div><span className="eyebrow">SOLUCIONES PARA TU OPERACIÓN</span><h2 id="catalog-title">Automatizaciones que encajan con tu negocio.</h2></div><p>Empezá por el problema. Te ayudamos a definir la herramienta, el alcance y los costos antes de implementar.</p></div>
    <div className="need-picker liquid-surface" aria-labelledby="need-title">
      <div><span className="eyebrow">ENCONTRÁ TU SOLUCIÓN</span><h3 id="need-title">¿Qué necesitás resolver primero?</h3><p>Elegí una situación y te mostramos por dónde empezar.</p></div>
      <div className="need-options" role="group" aria-label="Necesidad del negocio">{needs.map(n => <button type="button" key={n.id} aria-pressed={need===n.id} className={need===n.id?'need-option active':'need-option'} onClick={()=>{setNeed(n.id);setSelected(n.suggested)}}>{n.title}<ArrowRight size={16}/></button>)}</div>
      <div className="need-result" aria-live="polite"><span>PROPUESTA ORIENTATIVA</span><strong>{activeNeed.solution}</strong><p>{activeNeed.detail} La implementación se presupuesta según el negocio.</p>{href ? <a className="need-cta" href={href} target="_blank" rel="noopener noreferrer">Consultar esta solución <ArrowRight size={16}/></a> : <button className="need-cta" type="button" onClick={()=>fallbackConsult(activeNeed.solution)}>Consultar esta solución <ArrowRight size={16}/></button>}</div>
    </div>
    <nav className="catalog-quick-links" aria-label="Categorías de servicios">{groups.map((group,i)=><a key={group.title} href={`#catalog-group-${i}`}>{group.title}<ArrowRight size={14}/></a>)}</nav>
    {groups.map((group,i) => <div className="catalog-group" id={`catalog-group-${i}`} key={group.title}><h3>{group.title}</h3><div className="catalog-grid">{group.items.map(item => { const Icon = item.icon; const msg = `Hola, quiero consultar por el servicio de ${item.title} de Derito Digital. ¿Podemos conversar sobre el alcance para mi negocio?`; const link=buildLink(msg); return <article className="catalog-card liquid-surface" key={item.id}><span className="catalog-icon"><Icon size={20}/></span><h4>{item.title}</h4><p>{item.text}</p>{link ? <a className="catalog-cta" href={link} target="_blank" rel="noopener noreferrer">Consultar este servicio <ArrowRight size={15}/></a> : <button type="button" className="catalog-cta" onClick={()=>fallbackConsult(item.title)}>Consultar este servicio <ArrowRight size={15}/></button>}</article> })}</div></div>)}
    <section className="flow-feature" id="derito-flow" aria-labelledby="flow-title"><div className="flow-copy"><span className="eyebrow">SOLUCIÓN DESTACADA · DERITO FLOW</span><h3 id="flow-title">Un proceso. Los módulos que necesitás.</h3><p>Derito Flow es una propuesta comercial de soluciones modulares implementadas a medida. No es una plataforma SaaS disponible: diseñamos e integramos cada flujo según tu operación.</p><div className="flow-module-grid">{modules.map(module => { const Icon = module.icon; const active = selected.includes(module.id); return <button key={module.id} type="button" className={active ? 'flow-module selected' : 'flow-module'} aria-pressed={active} onClick={() => setSelected(current => active ? current.filter(id => id !== module.id) : [...current, module.id])}><Icon size={17}/>{module.label}</button> })}</div><p className="flow-selection" aria-live="polite">{selected.length ? `Seleccionados: ${selected.map(id => modules.find(m => m.id === id)?.label).join(' · ')}` : 'Todavía no elegiste módulos.'}</p>{href ? <a className="btn btn-primary flow-cta" href={href} target="_blank" rel="noopener noreferrer">Consultar esta combinación <ArrowRight size={17}/></a> : <button className="btn btn-primary flow-cta" onClick={() => fallbackConsult('Derito Flow')}>Consultar esta combinación <ArrowRight size={17}/></button>}</div><div className="flow-visual" aria-hidden="true"><div className="flow-orbit orbit-one"/><div className="flow-orbit orbit-two"/><div className="flow-core"><Workflow size={30}/><strong>DERITO<br/>FLOW</strong><small>IMPLEMENTACIÓN A MEDIDA</small></div><span className="flow-node node-a">Atención</span><span className="flow-node node-b">Datos</span><span className="flow-node node-c">Acción</span></div></section>
  </section>
}
