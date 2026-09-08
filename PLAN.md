# PLAN DERITO DIGITAL — Webs + Agentes de IA

> Plan de arranque para vender webs con agente, bots de WhatsApp, agentes dedicados y automatizaciones.

## 1. Propuesta de valor
"No te vendo una página: te vendo un **empleado digital 24/7** que atiende clientes, actualiza el catálogo y toma pedidos. Sin horarios, sin comisiones por venta."

## 2. Oferta (packaging)
| Producto | Armado | Mensualidad | Público |
|---|---|---|---|
| Bot vendedor WhatsApp | USD 300-400 | USD 30/mes | Locales, rotiserías, emprendimientos |
| Web + Agente administrador | USD 600-900 | USD 50/mes | Marcas que venden online |
| Agente dedicado llave en mano | USD 500+ | USD 50/mes | Negocios que quieren su bot propio |
| E-commerce completo + agente | USD 1.200-2.000+ | USD 60-80/mes | Negocios con catálogo grande |
| Web institucional simple | USD 250-400 | USD 15/mes | Profesionales, presencia |
| Automatización profesional | A cotizar | A cotizar | Contadores, abogados, coaches |

Reglas:
- **Nunca pago único y chau**: la mensualidad cubre mantenimiento, dominio, hosting y soporte. Es el ingreso recurrente (MRR).
- Objetivo mes 1: 3 clientes → ~USD 80-90/mes recurrentes. Mes 6: 10 clientes → USD 250-300/mes.
- Cobrar por adelantado el armado (50% seña + 50% entrega) o 100% si es de confianza.

## 3. Canales de contacto (cómo te encuentran)
1. **WhatsApp (principal)**: botón en la página → wa.me/5491138026712. Leads caen directo a tu chat.
2. **Email profesional (recomendado sumar)**: crear `deritodigital.ok@gmail.com` o similar (mismo método que kethsorpresa.ok) → aparece en la web y da seriedad.
3. **Instagram**: perfil de servicios + link a la página (IG es donde ya te muevés).
4. **Boca a boca**: Kender (Keth Sorpresa) y Giorenatto son tus casos de éxito vivos. Pediles que te recomienden.
5. (Futuro) **Bot capturador de leads**: cuando la página tenga visitas, un agente que recibe el primer mensaje y agenda la llamada. No antes del cliente 3.

## 4. Embudo de venta (qué pasa cuando te escriben)
1. **Mensaje entra por WhatsApp** (con el texto precargado del botón: "Quiero saber más sobre tus servicios").
2. **Vos (o tu agente) respondés** en < 1 h — la velocidad de respuesta vende sola.
3. **Chat de diagnóstico** (10 min): negocio, qué vende, dónde está el dolor. No hables de precio todavía.
4. **Propuesta escrita**: producto + precio + plazo. Máximo 1 día después.
5. **Cierre**: seña 50% → arrancás el armado.
6. **Entrega + capacitación** (15 min): que el cliente sepa pedir cambios por chat.
7. **Mensualidad**: facturar el día 1 de cada mes. Recordatorio amable 48 h antes.

## 5. Guion de primer mensaje (para leads)
"¡Hola [nombre]! 👋 Gracias por escribir. Contame: ¿qué vende tu negocio y qué es lo que más te molesta hoy (atender consultas todo el día, no tener página, perder pedidos)? Con eso te digo en 5 minutos qué te conviene y cuánto sale. Sin compromiso."

## 6. Casos de éxito para mostrar (sin datos privados)
- **Keth Sorpresa**: regalería online, web + agente administrador por chat (cambia precios/productos él mismo).
- **Giorenatto**: e-commerce con catálogo grande, backend y pagos (para mostrar escala).
Con permiso de cada cliente, captura de pantalla o demo de 30 s.

## 7. Plan de acción primeros 30 días
Semana 1:
- [ ] Decidir marca definitiva y email profesional
- [ ] Publicar la página en GitHub Pages (link para compartir)
- [ ] Crear IG de servicios + link en bio
- [ ] Avisar a Kender y a Giorenatto que arrancás (pedir recomendación)

Semana 2:
- [ ] 10 chats de diagnóstico con comercios conocidos (barrio, amigos, IG)
- [ ] Cobrar primer armado (objetivo: 1 cliente)

Semana 3-4:
- [ ] Entregar cliente 1 + cobrar mensualidad
- [ ] 2 clientes más en pipeline
- [ ] Pedir testimonio al cliente 1 para la página

## 8. Qué NO hacer
- No regalar el mantenimiento "para arrancar": es tu sueldo futuro.
- No prometer cosas que el agente no hace (ser honesto con los límites).
- No laburar gratis por un caso "para portfolio" si ya tenés 2 casos reales.
- No depender de un solo canal: WhatsApp + IG + boca a boca siempre activos.

## 9. Dominio .com.ar — checklist para el 2026-09-08

Objetivo: que la landing ande en un `.com.ar` propio (hoy vive en https://nicolasderito.github.io/derito-digital/). El mail a usar para todo: nicolasderito666@gmail.com.

- **Dominio**: `deritodigital.com.ar` estaba DISPONIBLE al 2026-09-07 (verificado en whois.nic.ar; también `derito-digital.com.ar` disponible).
- **Registro**: los `.com.ar` se registran en NIC Argentina a través de un agente de registro habilitado (ej. Dondominio y similares). Requiere CUIT/CUIL del titular. Registrar a nombre de Nicolás con el mail de arriba.
- **DNS hacia GitHub Pages** (el hosting no cambia, no hay que migrar nada):
  - Apex `deritodigital.com.ar` → 4 registros A: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - (alternativa con www: CNAME `www` → `nicolasderito.github.io`)
- **En el repo derito-digital** (lo hace el agente, no el usuario): GitHub → Settings → Pages → Custom domain `deritodigital.com.ar` + Enforce HTTPS. O agregar archivo `CNAME` en la raíz del repo con `deritodigital.com.ar`.
- ⚠️ No commitear el CNAME hasta que el dominio esté registrado y el DNS apunte: si no, la URL actual de GitHub Pages puede dejar de responder.
- **Verificación**: abrir https://deritodigital.com.ar y confirmar que carga igual que la landing.
- Plan B (post-lanzamiento): con dominio propio se puede crear mail con marca (deritodigital@deritodigital.com.ar) si se quiere dejar el gmail.
