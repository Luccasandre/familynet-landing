export const WHATSAPP_NUMBER = '5581996020075'
export const WHATSAPP_DISPLAY = '(81) 99602-0075'
export const INSTAGRAM_URL = 'https://www.instagram.com/familynet_/'
export const INSTAGRAM_HANDLE = '@familynet_'

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const MESSAGES = {
  p150: 'Olá! Conheci a FamilyNet pelo Instagram e gostaria de contratar o plano de 150 MEGA por R$ 55,00.',
  p200: 'Olá! Tenho interesse no plano de 200 MEGA da FamilyNet.',
  p300: 'Olá! Tenho interesse no plano de 300 MEGA da FamilyNet.',
  p400: 'Olá! Tenho interesse no plano de 400 MEGA da FamilyNet.',
  iptv: 'Olá! Conheci o IPTV da FamilyNet pelo Instagram e gostaria de mais informações.',
  general: 'Olá! Conheci a FamilyNet pelo site e gostaria de conhecer os planos disponíveis.',
  coverage: 'Olá! Conheci a FamilyNet pelo site e gostaria de consultar a disponibilidade de internet no meu bairro.',
}

// Monta a mensagem do pré-cadastro (todos os campos já validados e limpos).
export const buildRegistrationMessage = ({ nome, whatsapp, bairro, rua, numero, referencia, plano }) =>
  [
    '*NOVO CADASTRO — FAMILYNET*',
    '',
    'Olá! Tenho interesse em contratar a internet da FamilyNet.',
    '',
    '*DADOS DO CLIENTE:*',
    '',
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Bairro: ${bairro}`,
    `Rua: ${rua}`,
    `Número: ${numero}`,
    `Referência: ${referencia}`,
    `Plano de interesse: ${plano}`,
    '',
    'Gostaria de receber mais informações sobre disponibilidade e instalação.',
  ].join('\n')
