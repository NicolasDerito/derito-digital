import { serviceDemos } from '../data/content'
import { useState } from 'react'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'

const whatsapp = (text: string) => {
  const n = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(text)}` : ''
}

export function ServiceDetail({ id }: { id: string }) {
  const demo = serviceDemos[id]
  const [probe, setProbe] = useState(0)
  if (!demo) return null
  const href = whatsapp('Hola, vengo desde la web de Derito Digital y quiero ver una demo de este servicio.')
  return (
    <div className="svc-detail" id={`detalle-${id}`}>
      <div className="svc-col">
        <span className="eyebrow">CÓMO FUNCIONA</span>
        <ol className="svc-steps">
          {demo.steps.map((s, i) => (
            <li key={s}><b>{i + 1}</b><span>{s}</span></li>
          ))}
        </ol>
        <div className="svc-deliver"><Check size={15} aria-hidden="true"/> <span>{demo.deliverable}</span></div>
      </div>
      <div className="svc-col">
        <span className="eyebrow">DEMO</span>
        <div className="svc-demo" onClick={() => setProbe(p => Math.min(p + 1, demo.demo.lines.length - 1))} role="button" tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setProbe(p => Math.min(p + 1, demo.demo.lines.length - 1))}>
          <strong>{demo.demo.title}</strong>
          <div className="svc-chat">
            {demo.demo.lines.slice(0, probe + 1).map((l, i) => (
              <div key={i} className={`svc-msg ${l.from}`}>{l.text}</div>
            ))}
          </div>
          {probe < demo.demo.lines.length - 1
            ? <span className="svc-more">Tocá para seguir <ArrowRight size={13}/></span>
            : <span className="svc-more">Fin de la demo · pedí la tuya con tus datos</span>}
        </div>
        {href && <a className="svc-cta" href={href} target="_blank" rel="noreferrer">Pedir demo con mis datos <ArrowUpRight size={15}/></a>}
      </div>
    </div>
  )
}
