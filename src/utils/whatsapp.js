const BASE = 'https://wa.me/919652705557'

export const whatsappMessages = {
  hire: 'Hello Sksamin, I am interested in working with you. I would like to discuss my project and get a quote.',
  graphic:
    'Hello Sksamin, I am interested in your Graphic Design service. I would like to discuss my project and get a quote.',
  web: 'Hello Sksamin, I am interested in your Web Development service. I would like to discuss my website project and pricing.',
  ugc: 'Hello Sksamin, I am interested in your UGC Video Creation service. I would like to discuss my content requirements and get a quote.',
}

export const createWhatsAppLink = (message) => `${BASE}?text=${encodeURIComponent(message)}`
