const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const widget = fs.readFileSync(path.join(__dirname, '..', 'src/components/AgentWidget.tsx'), 'utf8')

test('agent integration preserves original Worker endpoint, session key and exact payload contract', () => {
  assert.match(widget, /https:\/\/chat\.deritodigital\.com\.ar\/api\/chat/)
  assert.match(widget, /sessionStorage\.getItem\('derito-agent-sid'\)/)
  assert.match(widget, /sessionStorage\.setItem\('derito-agent-sid', id\)/)
  assert.match(widget, /JSON\.stringify\(\{ session: sessionId\(\), message: text \}\)/)
  assert.doesNotMatch(widget.match(/body: JSON\.stringify\(\{[^}]+\}\)/)?.[0] || '', /history|sessionId\s*:/)
  assert.match(widget, /data\.reply/)
})

test('agent widget keeps local conversation, error fallback and WhatsApp handoff', () => {
  assert.match(widget, /CHAT_HISTORY_STORAGE = 'derito-agent-history'/)
  assert.match(widget, /loadHistory\(\)/)
  assert.match(widget, /saveHistory\(updated\)/)
  assert.match(widget, /catch \{\s*setSource\('offline'\); setHandoff\(true\)/)
  assert.match(widget, /Continuar por WhatsApp con resumen/)
  assert.match(widget, /setOpen\(true\); setMin\(false\)/)
})
