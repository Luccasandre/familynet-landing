import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, ShieldCheck, Home, Building2 } from 'lucide-react'
import { Reveal, WhatsAppIcon } from './ui'
import { PLANS } from './Plans'
import { BUSINESS_PLANS } from './BusinessPlans'
import { AREAS } from '../lib/areas'
import { IP_FIXO_PRICE, buildRegistrationMessage, whatsappLink } from '../lib/whatsapp'
import { OTHER_AREA, cleanText, maskPhone, validateAll, validateField } from '../lib/registration'

const NO_PLAN = 'Ainda não sei, quero receber uma recomendação'
// Residencial e empresarial são categorias independentes.
const PLAN_OPTIONS = {
  residencial: [...PLANS.map((p) => `Plano ${p.mega} MEGA — R$ ${p.price}`), NO_PLAN],
  empresarial: BUSINESS_PLANS.map((p) => `Plano Empresarial ${p.mega} MEGA — R$ ${p.price}`),
}

const INITIAL = { nome: '', whatsapp: '', tipo: 'residencial', ipFixo: false, bairro: '', bairroOutro: '', rua: '', numero: '', referencia: '', plano: '', consentimento: false }

function Field({ id, label, error, valid, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-white/90">{label}</label>
      <div className="relative">
        {children}
        {valid && !error && <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-fn-neon" aria-hidden="true" />}
      </div>
      {hint && !error && <p className="mt-1.5 text-xs text-white/55">{hint}</p>}
      {error && (
        <p id={`${id}-erro`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

export default function CustomerRegistration() {
  const [form, setForm] = useState(INITIAL)
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(null) // { link } depois do envio

  const errors = validateAll(form)
  const showError = (name) => (touched[name] ? errors[name] : '')
  const isValid = (name) => touched[name] && !errors[name] && (name === 'consentimento' ? form[name] : String(form[name]).trim() !== '')

  const update = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    setSent(null)
  }
  const changeTipo = (tipo) => {
    // Trocar de categoria limpa o plano e o IP fixo para não misturar os dois.
    setForm((f) => ({ ...f, tipo, plano: '', ipFixo: false }))
    setTouched((t) => ({ ...t, plano: false }))
    setSent(null)
  }
  const blur = (name) => setTouched((t) => ({ ...t, [name]: true }))

  const inputProps = (name, extra = {}) => ({
    id: name,
    name,
    value: form[name],
    onChange: (e) => update(name, e.target.value),
    onBlur: () => blur(name),
    'aria-invalid': showError(name) ? 'true' : 'false',
    'aria-describedby': showError(name) ? `${name}-erro` : undefined,
    className: `field-input ${isValid(name) ? 'is-valid pr-11' : ''}`,
    ...extra,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(INITIAL).map((k) => [k, true]))
    setTouched(allTouched)
    const current = validateAll(form)
    const firstError = Object.keys(current)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }
    const bairro = form.bairro === OTHER_AREA ? `Outro bairro: ${cleanText(form.bairroOutro)} (consultar disponibilidade)` : form.bairro
    const empresarial = form.tipo === 'empresarial'
    const message = buildRegistrationMessage({
      nome: cleanText(form.nome),
      whatsapp: form.whatsapp,
      tipo: empresarial ? 'Empresarial' : 'Residencial',
      ipFixo: empresarial && form.ipFixo,
      bairro,
      rua: cleanText(form.rua),
      numero: cleanText(form.numero),
      referencia: cleanText(form.referencia),
      plano: form.plano,
    })
    const link = whatsappLink(message)
    const win = window.open(link, '_blank')
    if (win) win.opener = null
    setSent({ link })
  }

  return (
    <section id="cadastro" className="relative isolate overflow-hidden bg-gradient-to-b from-fn-black via-fn-dark to-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="section-title">Seja um cliente FamilyNet!</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            Está interessado em contratar nossa internet? Preencha seus dados e nossa equipe entrará em contato com você.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-fn-neon/30 bg-fn-deep/60 p-5 shadow-neon backdrop-blur sm:p-8" aria-label="Cadastro de novo cliente">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field id="nome" label="Nome completo" error={showError('nome')} valid={isValid('nome')}>
                  <input {...inputProps('nome')} type="text" autoComplete="name" placeholder="Seu nome e sobrenome" />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field id="whatsapp" label="Número de WhatsApp" error={showError('whatsapp')} valid={isValid('whatsapp')} hint="Com DDD. Nossa equipe responderá por este número.">
                  <input
                    {...inputProps('whatsapp', { onChange: (e) => update('whatsapp', maskPhone(e.target.value)) })}
                    type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="(81) 99999-9999" maxLength={15}
                  />
                </Field>
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="mb-1.5 text-sm font-semibold text-white/90">Tipo de contratação</legend>
                <div className="grid grid-cols-2 gap-3">
                  {[['residencial', 'Residencial', Home], ['empresarial', 'Empresarial', Building2]].map(([value, label, Icon]) => (
                    <label key={value} className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-bold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-fn-neon ${form.tipo === value ? 'border-fn-neon bg-fn-neon/15 text-fn-neon shadow-neon' : 'border-fn-neon/25 bg-fn-black/70 text-white/80 hover:border-fn-neon/60'}`}>
                      <input type="radio" name="tipo" value={value} checked={form.tipo === value} onChange={() => changeTipo(value)} className="sr-only" />
                      <Icon className="h-5 w-5" aria-hidden="true" /> {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <Field id="bairro" label="Bairro ou localidade" error={showError('bairro')} valid={isValid('bairro')}>
                  <select {...inputProps('bairro')} className={`field-input [&>option]:bg-fn-black ${isValid('bairro') ? 'is-valid pr-11' : ''}`}>
                    <option value="">Selecione sua região</option>
                    {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                    <option value={OTHER_AREA}>Outro bairro — consultar disponibilidade</option>
                  </select>
                </Field>
              </div>

              {form.bairro === OTHER_AREA && (
                <div className="sm:col-span-2">
                  <Field id="bairroOutro" label="Qual é o seu bairro ou localidade?" error={showError('bairroOutro')} valid={isValid('bairroOutro')} hint="Vamos verificar se já temos cobertura na sua região.">
                    <input {...inputProps('bairroOutro')} type="text" autoComplete="off" placeholder="Nome do bairro ou localidade" />
                  </Field>
                </div>
              )}

              <Field id="rua" label="Rua" error={showError('rua')} valid={isValid('rua')}>
                <input {...inputProps('rua')} type="text" autoComplete="address-line1" placeholder="Nome da rua" />
              </Field>

              <Field id="numero" label="Número da residência" error={showError('numero')} valid={isValid('numero')}>
                <input {...inputProps('numero')} type="text" autoComplete="off" placeholder="Ex.: 123 ou S/N" maxLength={12} />
              </Field>

              <div className="sm:col-span-2">
                <Field id="referencia" label="Ponto de referência" error={showError('referencia')} valid={isValid('referencia')}>
                  <input {...inputProps('referencia')} type="text" autoComplete="off" placeholder="Ex.: próximo à praça, ao lado da padaria" />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field id="plano" label="Plano de interesse" error={showError('plano')} valid={isValid('plano')}>
                  <select {...inputProps('plano')} className={`field-input [&>option]:bg-fn-black ${isValid('plano') ? 'is-valid pr-11' : ''}`}>
                    <option value="">Escolha uma opção</option>
                    {PLAN_OPTIONS[form.tipo].map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
              </div>

              {form.tipo === 'empresarial' && (
                <div className="sm:col-span-2">
                  <label htmlFor="ipFixo" className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl bg-white/5 p-4">
                    <input id="ipFixo" name="ipFixo" type="checkbox" checked={form.ipFixo} onChange={(e) => update('ipFixo', e.target.checked)} className="h-6 w-6 shrink-0 cursor-pointer accent-[#39ff14]" />
                    <span className="text-sm text-white/85">Tenho interesse em IP fixo adicional — R$ {IP_FIXO_PRICE}</span>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="consentimento" className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/5 p-4">
                <input
                  id="consentimento" name="consentimento" type="checkbox" checked={form.consentimento}
                  onChange={(e) => update('consentimento', e.target.checked)} onBlur={() => blur('consentimento')}
                  aria-invalid={showError('consentimento') ? 'true' : 'false'} aria-describedby={showError('consentimento') ? 'consentimento-erro' : undefined}
                  className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer accent-[#39ff14]"
                />
                <span className="text-sm leading-relaxed text-white/85">
                  Autorizo o uso dos meus dados para que a equipe da FamilyNet entre em contato sobre minha solicitação.
                </span>
              </label>
              {showError('consentimento') && (
                <p id="consentimento-erro" role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-red-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {errors.consentimento}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              <WhatsAppIcon /> Enviar meu cadastro
            </button>
            <p className="mt-3 flex items-start justify-center gap-2 text-center text-xs text-white/60">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-fn-emerald" aria-hidden="true" />
              Ao clicar, o WhatsApp abrirá com seus dados já preenchidos. Para concluir, confirme o envio da mensagem no aplicativo.
            </p>

            <AnimatePresence>
              {sent && (
                <motion.div
                  role="status" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="mt-5 overflow-hidden rounded-xl border border-fn-neon/50 bg-fn-neon/10"
                >
                  <div className="p-4 text-center">
                    <p className="font-bold text-fn-neon">Quase lá! Falta só um passo.</p>
                    <p className="mt-1 text-sm text-white/85">
                      Abrimos o WhatsApp com seu cadastro. <strong>Toque em enviar</strong> no aplicativo para que a equipe da FamilyNet receba seus dados.
                    </p>
                    <a href={sent.link} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-3 !min-h-[44px] w-full sm:w-auto">
                      O WhatsApp não abriu? Toque aqui
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
