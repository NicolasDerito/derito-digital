import { WHATSAPP_NUMBER, whatsappLink } from './lib/contact'
import { ArrowRight, Bot, ExternalLink, MessageCircle, Menu, Monitor, Phone, ShoppingBag, Smartphone, Workflow, X, Zap } from 'lucide-react'
import { AgentWidget } from './components/AgentWidget'
import { DeritoFlow } from './components/DeritoFlow'
import { HeroDemo } from './components/HeroDemo'
import { Pricing } from './components/Pricing'
import { BeforeAfter } from './components/BeforeAfter'
import { SystemFlow } from './components/SystemFlow'
import { Advisor } from './components/Advisor'
import { V10Experience } from './components/V10Experience'
import { projects } from './data/content'
import { useState } from 'react'
import { ApprovedShowroom } from './components/ApprovedShowroom'

const openAgent = (intent:string='custom') =>
  window.dispatchEvent(new CustomEvent('derito:agent-open',{detail:{intent}}))

const whatsappHref = (intent:string='custom') => {
  const number = WHATSAPP_NUMBER
  if (!number) return ''
  const messages: Record<string,string> = {
    web: 'Hola, vengo desde la web de Derito Digital y quiero consultar por una web institucional.',
    ecommerce: 'Hola, vengo desde la web de Derito Digital y quiero consultar por una tienda online.',
    agent: 'Hola, vengo desde la web de Derito Digital y quiero consultar por un agente de IA.',
    automation: 'Hola, vengo desde la web de Derito Digital y quiero consultar por una automatización.',
    apps: 'Hola, vengo desde la web de Derito Digital y quiero consultar por una app móvil.',
    phone: 'Hola, vengo desde la web de Derito Digital y quiero consultar por un agente telefónico.',
    flow: 'Hola, quiero consultar por Derito Flow como propuesta de soluciones a medida.',
    custom: 'Hola, vengo desde la web de Derito Digital. Quiero hacer una consulta sobre sus servicios.'
  }
  return whatsappLink(messages[intent] || messages.custom)
}

const WhatsAppButton = ({intent='custom',children,className}:{intent?:string;children:React.ReactNode;className?:string}) => {
  const href=whatsappHref(intent)
  return href ? <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a> : <button className={className} onClick={()=>openAgent(intent)}>{children}</button>
}

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <header className="site-header liquid-nav">
        <a href="#inicio" className="brand"><img src="/logo-derito.svg" alt="Derito Digital" width="160" height="38"/></a>
        <nav className={menuOpen?'nav-open':''}>
          <a href="#proyectos" onClick={()=>setMenuOpen(false)}>Proyectos</a>
          <a href="#catalogo" onClick={()=>setMenuOpen(false)}>Servicios</a>
          <a href="#servicios" onClick={()=>setMenuOpen(false)}>Soluciones</a>
          <a href="#precios" onClick={()=>setMenuOpen(false)}>Precios</a>
          <a href="#proceso" onClick={()=>setMenuOpen(false)}>Proceso</a>
          <a href="#contacto" onClick={()=>setMenuOpen(false)}>Contacto</a>
        </nav>
        <button className="mobile-menu-toggle" aria-label={menuOpen?'Cerrar menú':'Abrir menú'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={19}/>:<Menu size={19}/>}</button>
        <WhatsAppButton className="header-cta">Hablemos <ArrowRight size={16}/></WhatsAppButton>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-chip"><Zap size={13}/> ESTUDIO DIGITAL INDEPENDIENTE · ARGENTINA</div>
          <h1>Que te vean.<br/>Que te elijan.<br/><span>Que funcione.</span></h1>
          <p>Tu web desde USD 290, entrega en 5 días. Incluye dominio, WhatsApp y diseño propio.</p>
          <div className="hero-offer"><span>WEB EXPRESS</span><strong>Desde USD 290</strong><em>· 5 días hábiles · precio de lanzamiento</em></div>
          <div className="hero-actions">
            <WhatsAppButton className="btn btn-primary">Hablemos de tu proyecto <ArrowRight size={17}/></WhatsAppButton>
            <a className="btn btn-secondary" href="#proyectos">Explorar nuestro trabajo <ArrowRight size={17}/></a>
          </div>
          <div className="hero-proofline"><span><i/> Proyectos reales publicados</span><span><i/> Propuestas con alcance claro</span></div>
        </div>
        <ApprovedShowroom/>
        </div>
        <div className="hero-bottom"><span>WEB / E-COMMERCE / IA / AUTOMATIZACIÓN</span><a href="#laboratorio">DESLIZÁ PARA DESCUBRIR ↓</a></div>
      </section>

      <section className="trust-strip">
        <strong>Primero, entendemos tu operación.</strong>
        <span>Te proponemos el siguiente paso según el problema, el alcance y los costos que acordemos.</span>
      </section>

      <SystemFlow/>

      <section className="section projects-premium" id="proyectos" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROYECTOS REALES</span>
            <h2 id="projects-title">Menos promesas.<br/>Más cosas funcionando.</h2>
          </div>
          <p>Ejemplos de trabajos publicados. Visitá cada sitio para ver su experiencia real; cada implementación responde a un alcance particular.</p>
        </div>
        <button className="showreel-trigger" onClick={()=>setShowreelOpen(true)}>▶ Ver showreel · 12 s</button>

        <div className="project-feature-list">
          {projects.map((p,index)=>(
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={`project-feature project-${index+1}`}>
              <div className="project-feature-preview">
                <div className="project-browser-bar">
                  <span><i/><i/><i/></span>
                  <em>{new URL(p.url).hostname}</em>
                </div>
                <div className="project-stage has-shot">
                  <img className="project-stage-shot" src={p.image} alt={"Captura de " + p.name} loading="lazy"/>
                </div>
              </div>
              <div className="project-feature-copy">
                <span className="project-index" aria-hidden="true">0{index+1}</span>
                <span className="eyebrow">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
                <strong>Ver proyecto en vivo <ExternalLink size={16}/></strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      {showreelOpen && <div className="showreel-backdrop" role="presentation" onClick={()=>setShowreelOpen(false)}><section className="showreel-dialog" role="dialog" aria-modal="true" aria-label="Showreel de proyectos" onKeyDown={e=>e.key==='Escape'&&setShowreelOpen(false)} onClick={e=>e.stopPropagation()}><header><strong>DERITO / PROJECT SHOWREEL</strong><button aria-label="Cerrar showreel" onClick={()=>setShowreelOpen(false)}>×</button></header><video controls autoPlay playsInline preload="metadata" poster="/projects/giorenatto.webp"><source src="/assets/media/derito-showreel.mp4" type="video/mp4"/>Tu navegador no admite video.</video><p>Montaje de capturas de proyectos publicados. No es una grabación de interacción real ni representa resultados comerciales.</p></section></div>}

      <BeforeAfter/>

      <V10Experience/>
      <Advisor/>

      <DeritoFlow whatsappHref={whatsappHref}/>

      <section className="section solutions" id="servicios" aria-labelledby="solutions-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ELEGÍ EL PROBLEMA</span>
            <h2 id="solutions-title">¿Qué querés mejorar primero?</h2>
          </div>
          <p>No necesitás elegir la tecnología. Elegí el problema que querés resolver y lo conversamos: alcance y presupuesto se definen para cada caso.</p>
        </div>
        <div className="solutions-grid">
          <WhatsAppButton intent="web" className="solution-link"><Monitor/><strong>Necesito una web</strong><span>Presencia, confianza y consultas.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
          <WhatsAppButton intent="ecommerce" className="solution-link"><ShoppingBag/><strong>Quiero vender online</strong><span>Tienda, pagos y procesos claros.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
          <WhatsAppButton intent="agent" className="solution-link"><Bot/><strong>Quiero atender mejor</strong><span>Agentes para responder y convertir.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
          <WhatsAppButton intent="automation" className="solution-link"><Workflow/><strong>Quiero automatizar</strong><span>Menos tareas manuales y más orden.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
          <WhatsAppButton intent="apps" className="solution-link"><Smartphone/><strong>Quiero una app</strong><span>Aplicación móvil para clientes o equipo.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
          <WhatsAppButton intent="phone" className="solution-link"><Phone/><strong>Quiero atender el teléfono</strong><span>Evaluemos automatización y derivación de llamadas.</span><ArrowRight className="solution-arrow" size={17}/></WhatsAppButton>
        </div>
      </section>

      <section className="statement-band">
        <span>WEB</span><i>→</i><span>IA</span><i>→</i><span>AUTOMATIZACIÓN</span><i>→</i><strong>ACCIÓN</strong>
      </section>

      <Pricing/>

      <section className="section plans" id="elegir-plan" aria-labelledby="plans-title">
        <div className="section-heading"><div><span className="eyebrow">UNA SOLUCIÓN PARA CADA ETAPA</span><h2 id="plans-title">Empezá con lo que necesitás. Crecé cuando tenga sentido.</h2></div><p>El alcance y los costos se confirman antes de empezar, sin sorpresas.</p></div>
        <div className="plans-grid">
          <article className="liquid-surface"><span className="eyebrow">01 / EXPRESS</span><h3>Tu negocio online esta semana</h3><p>Para quien necesita estar online ya, con una página clara y contacto directo por WhatsApp.</p><ul><li>Una página completa y adaptable</li><li>Información comercial bien organizada</li><li>Contacto directo por WhatsApp</li><li>Entrega en 5 días hábiles</li></ul><strong>Web Express desde USD 290 · soporte opcional desde USD 25/mes</strong><WhatsAppButton intent="express" className="btn btn-secondary">Consultar express <ArrowRight size={16}/></WhatsAppButton></article>
          <article className="liquid-surface"><span className="eyebrow">02 / PROFESIONAL</span><h3>Una experiencia para vender mejor</h3><p>Para negocios que necesitan presentarse con claridad, mostrar servicios y recibir consultas.</p><ul><li>Diseño adaptado a la marca</li><li>Web institucional completa</li><li>Experiencia optimizada para móvil</li><li>Presupuesto y alcance acordados</li></ul><strong>Web institucional desde USD 490 · soporte opcional desde USD 35/mes</strong><WhatsAppButton intent="web" className="btn btn-secondary">Consultar profesional <ArrowRight size={16}/></WhatsAppButton></article>
          <article className="liquid-surface"><span className="eyebrow">03 / TIENDA</span><h3>Un canal de ventas propio</h3><p>Para marcas que requieren catálogo, compra online o una experiencia digital más desarrollada.</p><ul><li>Tienda online con medios de pago</li><li>Catálogo y gestión de productos</li><li>Experiencia optimizada para móvil</li><li>Integraciones presupuestadas por separado</li></ul><strong>Tienda online desde USD 790 · soporte opcional desde USD 50/mes</strong><WhatsAppButton intent="ecommerce" className="btn btn-secondary">Consultar tienda <ArrowRight size={16}/></WhatsAppButton></article>
          <article className="liquid-surface"><span className="eyebrow">03 / A MEDIDA</span><h3>Tu negocio, conectado</h3><p>Para operaciones que necesitan integrar sistemas, automatizaciones o agentes de IA.</p><ul><li>Relevamiento del proceso actual</li><li>Desarrollo de funciones específicas</li><li>Plan de integración y pruebas</li><li>Consumos y mantenimiento definidos</li></ul><strong>Proyecto a medida · alcance acordado</strong><WhatsAppButton intent="custom" className="btn btn-secondary">Hablar del proyecto <ArrowRight size={16}/></WhatsAppButton></article>
        </div><p className="disclaimer">Referencias públicas sujetas a confirmación. Dominio, hosting, licencias, integraciones y consumos de terceros pueden cotizarse aparte.</p>
      </section>

      <section className="ownership-section" aria-labelledby="ownership-title">
        <div className="ownership-index" aria-hidden="true">DD / 01</div>
        <div className="ownership-copy">
          <span className="eyebrow">SIN ATADURAS A UNA PLATAFORMA</span>
          <h2 id="ownership-title">Tu web y su código <em>quedan en tus manos.</em></h2>
          <p>Al finalizar el proyecto, te entregamos el código y los archivos de tu sitio para que los conserves.</p>
        </div>
        <div className="ownership-details">
          <div><strong>El soporte queda definido por servicio</strong><p>Si cancelás un plan mensual, terminan el soporte y los cambios incluidos en ese plan.</p></div>
          <div><strong>Los servicios externos van aparte</strong><p>Dominio, hosting y herramientas conectadas pueden tener costos propios. La continuidad del sitio depende de que sigan activos.</p></div>
        </div>
      </section>

      <section className="section v10-clarity" id="informacion"><div className="section-heading"><div><span className="eyebrow">INFORMACIÓN IMPORTANTE</span><h2>Alcance claro antes de empezar.</h2></div><p>La propuesta define entregables, soporte, costos externos y criterios de aceptación.</p></div><div className="clarity-grid"><article><h3>¿Los precios son definitivos?</h3><p>No. Son valores de referencia desde; el precio final depende del alcance acordado.</p></article><article><h3>¿Qué pasa después de publicar?</h3><p>El soporte y los cambios quedan definidos por servicio. Si termina un plan, finalizan sus tareas incluidas.</p></article><article><h3>¿Hay costos de terceros?</h3><p>Dominio, hosting, APIs, licencias, modelos y consumos externos pueden cotizarse aparte.</p></article><article><h3>¿Se pueden combinar servicios?</h3><p>Sí. Los combos son referencias; entregables y mensualidad se confirman por escrito.</p></article><article><h3>¿Hacen apps y agentes telefónicos?</h3><p>Sí, se cotizan según alcance, cobertura, integraciones y requisitos de publicación.</p></article><article><h3>¿Puedo consultar sin saber qué necesito?</h3><p>Sí. El asesor ayuda a ordenar el problema; la recomendación no reemplaza un presupuesto.</p></article></div></section>

      <section className="section process" id="proceso" aria-labelledby="process-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CÓMO TRABAJAMOS</span>
            <h2 id="process-title">Simple para vos.<br/>Bien pensado por detrás.</h2>
          </div>
          <p>Antes de empezar acordamos entregables, tiempos estimados, costos externos, criterios de aceptación y qué soporte incluye el servicio.</p>
        </div>
        <div className="process-grid">
          {[
            ['01','Entendemos','Qué querés mejorar, cómo trabajás hoy y qué tiene sentido automatizar.'],
            ['02','Diseñamos','La experiencia, el flujo y las integraciones necesarias.'],
            ['03','Implementamos','Construimos, conectamos, probamos y ponemos online.'],
            ['04','Evolucionamos','Medimos, ajustamos y sumamos capacidades cuando haga falta.']
          ].map(([n,t,d])=><article key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></article>)}
        </div>
      </section>

      <section className="final-cta" id="contacto">
        <div>
          <span className="eyebrow">EMPEZÁ POR EL PROBLEMA</span>
          <h2>¿Qué parte de tu negocio querés dejar de hacer manualmente?</h2>
          <p>Contanos cómo trabajás hoy y qué querés mejorar. Revisamos opciones, alcance y próximos pasos sin compromiso de implementación.</p>
        </div>
        <WhatsAppButton className="final-cta-button">Iniciar consulta <MessageCircle size={18}/></WhatsAppButton>
      </section>

      <footer>
        <img src="/logo-derito.svg" alt="Derito Digital" width="170" height="40"/>
        <span>Webs · E-commerce · Agentes de IA · Apps móviles · Automatizaciones</span>
        <span>© {new Date().getFullYear()} Derito Digital</span>
      </footer>

      <AgentWidget/>
    </main>
  )
}
