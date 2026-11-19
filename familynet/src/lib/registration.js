// Funções puras do formulário de cadastro (máscara, validação).

export const onlyDigits = (v) => v.replace(/\D/g, '')

// (81) 99999-9999
export function maskPhone(value) {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export const cleanText = (v) => v.replace(/\s+/g, ' ').trim()

// Celular brasileiro: DDD (11–99) + 9 + 8 dígitos
export function isValidWhatsApp(value) {
  const d = onlyDigits(value)
  return d.length === 11 && Number(d.slice(0, 2)) >= 11 && d[2] === '9'
}

export const OTHER_AREA = '__outro__'

// Retorna a mensagem de erro do campo, ou '' se estiver válido.
export function validateField(name, value, form = {}) {
  const v = typeof value === 'string' ? cleanText(value) : value
  switch (name) {
    case 'nome':
      if (!v) return 'Informe seu nome completo.'
      if (v.split(' ').length < 2 || v.length < 5) return 'Digite nome e sobrenome.'
      return ''
    case 'whatsapp':
      if (!onlyDigits(value)) return 'Informe seu número de WhatsApp.'
      if (!isValidWhatsApp(value)) return 'Digite um celular válido com DDD. Ex.: (81) 99999-9999.'
      return ''
    case 'tipo':
      return v === 'residencial' || v === 'empresarial' ? '' : 'Escolha o tipo de contratação.'
    case 'bairro':
      return v ? '' : 'Selecione seu bairro ou localidade.'
    case 'bairroOutro':
      if (form.bairro !== OTHER_AREA) return ''
      return v.length >= 3 ? '' : 'Informe o nome do seu bairro ou localidade.'
    case 'rua':
      return v.length >= 3 ? '' : 'Informe o nome da sua rua.'
    case 'numero':
      return v ? '' : 'Informe o número da residência (ou S/N).'
    case 'referencia':
      return v.length >= 3 ? '' : 'Informe um ponto de referência para facilitar a localização.'
    case 'plano':
      return v ? '' : 'Escolha um plano de interesse.'
    case 'consentimento':
      return value ? '' : 'É necessário autorizar o uso dos dados para enviar o cadastro.'
    default:
      return ''
  }
}

export const FIELDS = ['nome', 'whatsapp', 'tipo', 'bairro', 'bairroOutro', 'rua', 'numero', 'referencia', 'plano', 'consentimento']

export function validateAll(form) {
  const errors = {}
  FIELDS.forEach((f) => {
    const e = validateField(f, form[f], form)
    if (e) errors[f] = e
  })
  return errors
}
