import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUp, Minus, MessageCircle, X } from 'lucide-react'

type Intent = 'web' | 'ecommerce' | 'agent' | 'automation' | 'apps' | 'phone' | 'projects' | 'pricing' | 'custom'
type ChatMessage = { role: 'user' | 'assistant'; content: string }
type AgentSource = 'ai' | 'offline' | 'limit' | 'unknown'
const API = 'https://chat.deritodigital.com.ar/api/chat'
const CHAT_HISTORY_STORAGE = 'derito-agent-history'
const initialGreeting: ChatMessage = { role: 'assistant', content: '¡Hola! Soy el asistente virtual de Derito Digital. Contame qué querés mejorar en tu negocio y te oriento.' }
const OFFLINE_REPLY = 'El asistente IA no está disponible ahora. Puedo derivarte a WhatsApp; contame brevemente qué necesitás.'
const MAX_TURNS = 8
const MAX_MESSAGE = 1200
const MAX_OUTPUT = 1800
const intentText: Record<Intent, string> = {
  web: 'Quiero una web para mi negocio.', ecommerce: 'Quiero vender online: necesito una tienda.',
  agent: 'Quiero consultar por un agente de IA para mi negocio.', automation: 'Quiero automatizar tareas repetitivas de mi negocio.',
  apps: 'Quiero consultar por una aplicación móvil para mi negocio.', phone: 'Quiero evaluar un agente para atender el teléfono de mi negocio.',
  projects: 'Quiero conocer más sobre sus proyectos.', pricing: 'Quiero consultar precios y combos.',
  custom: 'Quiero contarles qué necesito mejorar en mi negocio y conocer los próximos pasos.'
}
function loadHistory(): ChatMessage[] {
  try {
    const saved = JSON.parse(sessionStorage.getItem(CHAT_HISTORY_STORAGE) || '[]')
    if (Array.isArray(saved)) return saved.filter((m): m is ChatMessage => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string').slice(-MAX_TURNS * 2)
  } catch { /* Storage unavailable or invalid: begin fresh. */ }
  return []
}
function saveHistory(messages: ChatMessage[]) {
  try { sessionStorage.setItem(CHAT_HISTORY_STORAGE, JSON.stringify(messages.slice(-MAX_TURNS * 2))) } catch { /* Keep the active in-memory conversation. */ }
}
function sessionId() {
  try {
    let id = sessionStorage.getItem('derito-agent-sid')
    if (!id) { id = crypto.randomUUID(); sessionStorage.setItem('derito-agent-sid', id) }
    return id
  } catch { return 'ephemeral' }
}
export function AgentWidget() {
  const [open, setOpen] = useState(false)
  const [min, setMin] = useState(false)
  const [intent, setIntent] = useState<Intent>('custom')
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = loadHistory()
    return saved.length ? saved : [initialGreeting]
  })
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [source, setSource] = useState<AgentSource>('unknown')
  const [handoff, setHandoff] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const wa = useMemo(() => {
    const number = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
    if (!number) return ''
    const defaultMessage = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Hola, vengo desde la web de Derito Digital.'
    const summary = messages.filter(m => m.role === 'user').slice(-5).map(m => m.content).join(' | ').slice(0, 700)
    return `https://wa.me/${number}?text=${encodeURIComponent(`${defaultMessage} ${intentText[intent]}${summary ? ` Resumen: ${summary}` : ''}`)}`
  }, [intent, messages])

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ intent?: Intent }>).detail
      setIntent(detail?.intent && intentText[detail.intent] ? detail.intent : 'custom')
      setOpen(true); setMin(false)
    }
    addEventListener('derito:agent-open', handler)
    return () => removeEventListener('derito:agent-open', handler)
  }, [])
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }) }, [messages, busy])
  useEffect(() => () => abortRef.current?.abort(), [])

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault()
    const text = draft.trim().slice(0, MAX_MESSAGE)
    if (!text || busy || messages.filter(m => m.role === 'user').length >= MAX_TURNS) return
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(next); saveHistory(next); setDraft(''); setBusy(true); setHandoff(false)
    const controller = new AbortController(); abortRef.current = controller
    const timeout = window.setTimeout(() => controller.abort(), 12000)
    try {
      const response = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ session: sessionId(), message: text }), signal: controller.signal })
      const data = await response.json().catch(() => ({})) as { reply?: unknown; source?: unknown }
      if (!response.ok || typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('service unavailable')
      const replyText = data.reply.trim()
      const actualSource: AgentSource = data.source === 'ai' || data.source === 'offline' || data.source === 'limit' ? data.source : 'unknown'
      setSource(actualSource)
      setMessages(current => {
        const updated: ChatMessage[] = [...current, { role: 'assistant', content: replyText.slice(0, MAX_OUTPUT) }]
        saveHistory(updated)
        return updated
      })
      setHandoff(actualSource === 'limit')
    } catch {
      setSource('offline'); setHandoff(true)
      setMessages(current => {
        const updated: ChatMessage[] = [...current, { role: 'assistant', content: OFFLINE_REPLY }]
        saveHistory(updated)
        return updated
      })
    } finally { window.clearTimeout(timeout); setBusy(false); abortRef.current = null }
  }

  return <>
    {open && !min && <aside className="agent-panel liquid-surface" aria-label="Asesor comercial" data-testid="agent-panel">
      <div className="agent-head"><img src="/avatar-derito.svg" className="agent-avatar-small" alt="Derito Digital" />
        <div><strong>Asesor comercial</strong><span><i /> Asistente virtual</span></div>
        <button className="agent-icon-btn" onClick={() => setMin(true)} aria-label="Minimizar"><Minus size={17} /></button>
        <button className="agent-icon-btn" onClick={() => setOpen(false)} aria-label="Cerrar"><X size={17} /></button>
      </div>
      <div className="agent-body">
        <div role="status" aria-live="polite" className="agent-status">{source === 'ai' ? 'IA real verificada' : source === 'limit' ? 'Límite alcanzado · respaldo offline' : source === 'offline' ? 'Respaldo offline' : 'Origen de respuesta no confirmado'}</div>
        <div className="agent-messages" ref={scrollRef} aria-live="polite">
          {messages.map((m, i) => <div key={i} className={`agent-message ${m.role === 'user' ? 'user' : 'agent'}`}>{m.content}</div>)}
          {busy && <div className="agent-message typing" role="status">Preparando respuesta…</div>}
        </div>
        {(handoff || messages.filter(m => m.role === 'user').length >= MAX_TURNS) && wa && <a className="agent-whatsapp" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Continuar por WhatsApp con resumen</a>}
        {!wa && <div role="status" className="agent-unavailable">El contacto por WhatsApp no está configurado.</div>}
        <form className="agent-input" onSubmit={sendMessage}>
          <input aria-label="Escribí tu consulta" value={draft} maxLength={MAX_MESSAGE} onChange={e => setDraft(e.target.value)} placeholder="Escribí tu consulta…" disabled={busy || messages.filter(m => m.role === 'user').length >= MAX_TURNS} />
          <button type="submit" aria-label="Enviar consulta" disabled={busy || !draft.trim() || messages.filter(m => m.role === 'user').length >= MAX_TURNS}><ArrowUp size={17} /></button>
        </form>
        <small className="agent-disclaimer">No compartas información sensible</small>
      </div>
    </aside>}
    <button className="agent-trigger" type="button" onClick={() => { setOpen(true); setMin(false) }} aria-label="Abrir asesor comercial">
      <img src="/avatar-derito.svg" alt="" /><span className="status-dot status-dot-contact" />
    </button>
  </>
}
