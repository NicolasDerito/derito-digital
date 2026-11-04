export const projects = [
  {name:'Giorenatto',category:'E-commerce infantil',description:'Tienda online con catálogo, pagos, envíos y WhatsApp.',url:'https://giorenatto.com.ar/',image:'/projects/giorenatto.webp',tags:['E-commerce','Pagos','WhatsApp']},
  {name:'Keth Sorpresa',category:'E-commerce personalizado',description:'Productos personalizados, cupones, entrega y pedido preparado por WhatsApp.',url:'https://kethsorpresa.com.ar/',image:'/projects/keth.webp',tags:['E-commerce','Personalización','Automatización']},
  {name:'MJG Rodamientos',category:'B2B industrial',description:'Catálogo técnico, búsqueda por código y consultas guiadas.',url:'https://mjgrodamientos.com.ar/',image:'/projects/mjg.webp',tags:['B2B','Catálogo técnico','Cotización']},
  {name:'Derit Plast',category:'Proyecto propio',description:'Web de fábrica: líneas de bolsas, medidas a pedido, inyección plástica y cotización por WhatsApp.',url:'https://deritplast.com.ar/',image:'/projects/deritplast.webp',tags:['Fábrica','Catálogo','Cotización']}
]
export const services = [
{id:'express',title:'Web Express',price:'Desde $ 390.000',monthly:'Soporte opcional desde $ 35.000/mes',description:'Tu negocio online en pocos días: una página clara, con WhatsApp y lista para compartir.',bullets:['Una página completa','Diseño adaptable a mobile','Contacto directo por WhatsApp','Entrega en 5 días hábiles']},
{id:'web',title:'Web institucional',price:'Desde $ 650.000',monthly:'Soporte opcional desde $ 45.000/mes',description:'Web profesional, responsive y orientada a generar confianza y consultas.',bullets:['Diseño a medida','Responsive','Formulario / WhatsApp','Hasta 5 secciones']},
{id:'ecommerce',title:'E-commerce',price:'Desde $ 990.000',monthly:'Soporte opcional desde $ 65.000/mes',description:'Tienda online con catálogo, carrito, pagos e integraciones según el negocio.',bullets:['Tienda online completa','Medios de pago','Gestión de productos','Integraciones']},
{id:'agent',title:'Agente de IA',price:'Desde $ 790.000',monthly:'+ desde $ 95.000/mes',description:'Atención, ventas, turnos, compras o automatización de tareas.',bullets:['Atención y ventas','WhatsApp y web','Integración con sistemas','Ajustes mensuales'],featured:true},
{id:'automation',title:'Automatización',price:'Desde $ 340.000',monthly:'Monitoreo opcional desde $ 50.000/mes',description:'Procesos repetitivos, integraciones, alertas y flujos internos.',bullets:['Procesos repetitivos','Integraciones','Flujos a medida','Menos trabajo manual']},
{id:'turnos',title:'Turnos y reservas',price:'Desde $ 790.000',monthly:'+ desde $ 95.000/mes',description:'Agente que muestra servicios, toma el turno, confirma y recuerda. Se sincroniza con tu calendario.',bullets:['Toma, confirma y reprograma turnos','Sincronizado con Google Calendar','Recordatorios automáticos','Menos ausencias y llamados']},
{id:'pedidos',title:'Pedidos por WhatsApp',price:'Desde $ 890.000',monthly:'+ desde $ 95.000/mes',description:'Tu carta o catálogo cargado en el agente: el cliente pide, se confirma el total y queda listo para despachar.',bullets:['Carta o catálogo cargado','Arma el pedido y calcula total','Confirmación automática','Aviso al local al instante']},
{id:'google',title:'Presencia en Google',price:'Desde $ 190.000',monthly:'Desde $ 55.000/mes',description:'Perfil de Google Business configurado, reseñas respondidas y publicaciones locales para aparecer cuando alguien busca cerca.',bullets:['Perfil verificado y completo','Respuesta a reseñas','Publicaciones locales','Informe mensual de búsquedas']},
{id:'crm',title:'CRM y seguimiento',price:'Desde $ 450.000',monthly:'Desde $ 60.000/mes',description:'Todos tus contactos y oportunidades en un solo lugar: qué se vendió, qué quedó pendiente y a quién hay que volver a llamar.',bullets:['Contactos y empresas','Todo tu embudo de ventas','Seguimiento y recordatorios','Copia de seguridad propia']},
{id:'facturacion',title:'Facturación y presupuestos',price:'Desde $ 390.000',monthly:'Desde $ 45.000/mes',description:'Presupuestos y facturas en PDF con tu marca, envío por mail o WhatsApp y recordatorio automático cuando vence el pago.',bullets:['Presupuestos y facturas en PDF','Envío por mail o WhatsApp','Recordatorio de vencimientos','Control de pagos pendientes']},
{id:'contenido',title:'Contenido mensual',price:'Desde $ 240.000/mes',monthly:'Sin costo de alta',description:'Placas, textos y calendario de publicaciones para que tu negocio se vea activo sin que tengas que pensarlo.',bullets:['Placas para redes','Textos y ganchos','Calendario mensual','Ajustes según tu rubro']},
{id:'apps',title:'App para tu negocio',price:'Desde $ 890.000',monthly:'Soporte opcional desde $ 55.000/mes',description:'Tu negocio instalado en el teléfono del cliente o del equipo. Sitio al inicio, sin pasar por las tiendas.',bullets:['Se instala como app en el teléfono','Funciona sin internet','Notificaciones y avisos','Panel para administrar contenido']},
{id:'phone',title:'Agente telefónico',price:'Desde $ 690.000',monthly:'+ costos de telefonía',description:'Evaluamos un agente de IA para atender consultas telefónicas, tomar pedidos o reservas y derivar a una persona, según el flujo y la cobertura acordados.',bullets:['Atención telefónica automatizada','Pedidos y reservas según alcance','Derivación a una persona','Cobertura y costos definidos antes de implementar']}
]
export type ServiceDemo = {
  steps: string[]
  demo: {title:string; lines:{from:'client'|'business';text:string}[]}
  deliverable: string
}

export const serviceDemos: Record<string, ServiceDemo> = {
  express: {
    steps: ['Elegís el diseño y me pasás textos y fotos.','Armo la página, la reviso en el celular y te la muestro.','Ajustamos lo que haga falta y publico con tu dominio.'],
    demo: {title:'Cómo se ve una Web Express', lines:[
      {from:'business',text:'Portada con tu nombre, foto del local y horario'},
      {from:'business',text:'Servicios o productos con precios claros'},
      {from:'client',text:'Toca el botón de WhatsApp y te escribe directo'},
    ]},
    deliverable:'Una página publicada en tu dominio, con WhatsApp activo y los textos cargados.'
  },
  web: {
    steps: ['Relevamos qué necesita ver tu cliente para confiar.','Diseñamos secciones, textos e imágenes con tu marca.','Publicamos, medimos consultas y ajustamos.'],
    demo: {title:'Cómo funciona una web institucional', lines:[
      {from:'client',text:'Entra desde el celular y ve qué hacés en 5 segundos'},
      {from:'client',text:'Recorre servicios, casos y datos de contacto'},
      {from:'client',text:'Consulta por formulario o WhatsApp'},
    ]},
    deliverable:'Sitio de hasta 5 secciones, responsive, con formulario y WhatsApp conectado.'
  },
  ecommerce: {
    steps: ['Cargamos catálogo, precios y fotos.','Configuramos pagos, envíos y stock.','Probamos una compra completa antes de publicar.'],
    demo: {title:'Cómo funciona la tienda', lines:[
      {from:'client',text:'Busca un producto y lo agrega al carrito'},
      {from:'client',text:'Elige envío y paga online'},
      {from:'business',text:'Recibís el pedido con datos y comprobante'},
    ]},
    deliverable:'Tienda con catálogo, carrito, medios de pago y panel para cargar productos.'
  },
  agent: {
    steps: ['Cargamos tu información: servicios, precios, horarios, preguntas frecuentes.','Definimos qué responde solo y cuándo deriva a una persona.','Probamos juntos y ajustamos las respuestas.'],
    demo: {title:'Cómo contesta el agente', lines:[
      {from:'client',text:'Hola, ¿cuánto sale el servicio?'},
      {from:'business',text:'Depende del caso. Te paso las opciones y precios desde…'},
      {from:'client',text:'Quiero coordinar, ¿están abiertos mañana?'},
      {from:'business',text:'Sí, de 9 a 18. Te derivo con Nicolás para cerrar.'},
    ]},
    deliverable:'Agente entrenado con tu información, publicado en WhatsApp o web, con derivación a persona.'
  },
  automation: {
    steps: ['Mapeamos la tarea repetitiva y quién la hace hoy.','Construimos el flujo con los sistemas que ya usás.','Corre solo, con aviso si algo falla.'],
    demo: {title:'Cómo funciona una automatización', lines:[
      {from:'business',text:'Entra un pedido nuevo al formulario'},
      {from:'business',text:'Se registra solo en la planilla y avisa por WhatsApp'},
      {from:'business',text:'Si no hay respuesta en 24 h, recuerda automáticamente'},
    ]},
    deliverable:'Flujo funcionando sobre tus sistemas, con registro de cada ejecución y alerta de error.'
  },
  turnos: {
    steps: ['Cargamos servicios, duración y disponibilidad.','Conectamos tu calendario real.','El agente toma el turno y avisa antes del día.'],
    demo: {title:'Cómo se toma un turno', lines:[
      {from:'client',text:'Hola, ¿tenés turno para corte el sábado?'},
      {from:'business',text:'Sí: 10:00, 11:30 o 16:00. ¿Cuál te sirve?'},
      {from:'client',text:'11:30'},
      {from:'business',text:'Listo, quedó agendado. Te aviso el viernes.'},
    ]},
    deliverable:'Turnos sincronizados con tu calendario, confirmación automática y recordatorio previo.'
  },
  pedidos: {
    steps: ['Cargamos carta o catálogo con precios.','Definimos zonas, horarios y medios de pago.','El pedido llega armado y con el total calculado.'],
    demo: {title:'Cómo se toma un pedido', lines:[
      {from:'client',text:'Quiero 2 milanesas con papas y una gaseosa'},
      {from:'business',text:'Total 18.400. ¿Lo retirás o lo enviamos?'},
      {from:'client',text:'Envío a Caballito'},
      {from:'business',text:'Confirmado, llega en 40 minutos.'},
    ]},
    deliverable:'Carta cargada, pedido armado con total y aviso al local en el momento.'
  },
  google: {
    steps: ['Revisamos y completamos tu perfil de Google.','Cargamos fotos, horarios y servicios.','Respondemos reseñas y publicamos novedades cada mes.'],
    demo: {title:'Cómo funciona la presencia local', lines:[
      {from:'client',text:'Busca "veterinaria cerca de mí" en el mapa'},
      {from:'business',text:'Aparece tu ficha con horario, fotos y reseñas respondidas'},
      {from:'client',text:'Toca el botón de llamar o de WhatsApp'},
    ]},
    deliverable:'Perfil verificado y completo, reseñas atendidas e informe mensual de búsquedas.'
  },
  crm: {
    steps: ['Cargamos tus contactos y clientes actuales.','Definimos las etapas de tu venta.','Cada consulta queda registrada con próximo paso.'],
    demo: {title:'Cómo funciona el seguimiento', lines:[
      {from:'business',text:'Entra una consulta y se crea el contacto'},
      {from:'business',text:'Se marca etapa: consultó, presupuestado, negociando'},
      {from:'business',text:'Al que quedó en visto, te recuerda volver a escribir'},
    ]},
    deliverable:'CRM con contactos, embudo y recordatorios, con copia de seguridad tuya.'
  },
  facturacion: {
    steps: ['Cargamos tus datos y tu logo.','Armamos presupuesto desde un formulario simple.','Se envía y el sistema recuerda el vencimiento.'],
    demo: {title:'Cómo funciona la facturación', lines:[
      {from:'business',text:'Cargás 3 ítems y el total se calcula solo'},
      {from:'client',text:'Recibe el PDF por mail o WhatsApp'},
      {from:'business',text:'A los 7 días, si no pagó, le llega un recordatorio'},
    ]},
    deliverable:'Presupuestos y facturas en PDF con tu marca, envío automático y control de pagos.'
  },
  contenido: {
    steps: ['Definimos qué mostrar cada mes según tu rubro.','Armamos placas y textos con tu identidad.','Se publica según calendario y se ajusta con tu feedback.'],
    demo: {title:'Qué recibís cada mes', lines:[
      {from:'business',text:'Placas verticales listas para Instagram y estados'},
      {from:'business',text:'Textos y ganchos para cada publicación'},
      {from:'business',text:'Calendario con qué publicar cada día'},
    ]},
    deliverable:'Calendario mensual, placas y textos listos para publicar o programar.'
  },
  apps: {
    steps: ['Definimos qué necesita hacer el usuario dentro de la app.','Construimos la versión instalable y la probamos en tu teléfono.','La publicamos como link y la agregás al inicio.'],
    demo: {title:'Cómo funciona la app instalable', lines:[
      {from:'client',text:'Abre el link y toca "Agregar a inicio"'},
      {from:'client',text:'Le queda el ícono con tu marca, sin pasar por la tienda'},
      {from:'client',text:'Consulta, pide o reserva aunque no tenga señal'},
    ]},
    deliverable:'App instalable con tu marca, funcionando sin conexión y con panel para actualizar contenido.'
  },
  phone: {
    steps: ['Definimos qué debe responder y qué debe derivar.','Grabamos las respuestas y probamos llamadas reales.','Revisamos costos de telefonía antes de cotizar.'],
    demo: {title:'Cómo atiende una llamada', lines:[
      {from:'client',text:'Llama a las 21:30 y nadie atiende en el local'},
      {from:'business',text:'El agente contesta, toma el pedido y confirma el horario'},
      {from:'business',text:'Si es una urgencia, deriva a la persona de guardia'},
    ]},
    deliverable:'Agente telefónico con guion aprobado, derivación a persona y costos definidos antes de empezar.'
  }
}

export const combos = [
{id:'combo-express-agent',title:'Web Express + Agente IA',price:'Desde $ 1.040.000',monthly:'+ desde $ 95.000/mes',bullets:['Web Express','Agente Derito']},
{id:'combo-web-agent',title:'Web + Agente IA',price:'Desde $ 1.290.000',monthly:'+ desde $ 95.000/mes',bullets:['Web institucional','Agente Derito']},
{id:'combo-business',title:'Negocio Automatizado',price:'Desde $ 1.480.000',monthly:'+ desde $ 125.000/mes',bullets:['Web profesional','Agente IA','Automatización inicial'],featured:true},
{id:'combo-ecommerce-agent',title:'E-commerce + Agente IA',price:'Desde $ 1.590.000',monthly:'+ desde $ 110.000/mes',bullets:['Tienda online','Agente para consultas y ventas']}
]
