/** Número comercial público verificado en la web existente. */
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '5491138026712').replace(/\D/g, '')
export const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
