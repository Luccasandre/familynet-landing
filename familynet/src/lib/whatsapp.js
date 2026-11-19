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
  businessProposal: 'Olá! Conheci a FamilyNet pelo site e gostaria de solicitar uma proposta de internet para minha empresa.',
  coverage: 'Olá! Conheci a FamilyNet pelo site e gostaria de consultar a disponibilidade de internet no meu bairro.',
}

export const IP_FIXO_PRICE = '29,99'

// Contratação direta de um plano empresarial, com ou sem IP fixo.
export const buildBusinessMessage = ({ mega, price }, ipFixo) =>
  [
    `Olá! Tenho interesse no Plano Empresarial ${mega} MEGA (R$ ${price} mensais) da FamilyNet.`,
    ipFixo ? `Gostaria de adicionar o IP fixo (R$ ${IP_FIXO_PRICE}).` : 'Não preciso de IP fixo adicional.',
    'Gostaria de receber mais informações sobre disponibilidade e instalação.',
  ].join('\n')

// Monta a mensagem do pré-cadastro (todos os campos já validados e limpos).
export const buildRegistrationMessage = ({ nome, whatsapp, tipo, bairro, rua, numero, referencia, plano, ipFixo }) =>
  [
    '*NOVO CADASTRO — FAMILYNET*',
    '',
    'Olá! Tenho interesse em contratar os serviços da FamilyNet.',
    '',
    '*DADOS DO CLIENTE:*',
    '',
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Tipo de contratação: ${tipo}`,
    `Bairro: ${bairro}`,
    `Rua: ${rua}`,
    `Número: ${numero}`,
    `Ponto de referência: ${referencia}`,
    `Plano escolhido: ${plano}`,
    `IP fixo adicional: ${ipFixo ? 'Sim' : 'Não'}`,
    '',
    'Gostaria de receber mais informações sobre disponibilidade e instalação.',
  ].join('\n')
