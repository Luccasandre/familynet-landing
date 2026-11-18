import { motion } from 'framer-motion'

export const WhatsAppIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.5 1.34 5.02L2 22l5.05-1.32a10 10 0 0 0 4.99 1.27h.01c5.54 0 10.04-4.5 10.04-10.04C22.09 6.5 17.58 2 12.04 2z" />
  </svg>
)

export function Reveal({ children, delay = 0, className = '', y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`, top: `${(i * 37 + 11) % 100}%`, delay: `${(i % 6) * 0.7}s`, size: 2 + (i % 3),
}))

export function FiberBackground({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(16,185,129,.28),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(57,255,20,.14),transparent_50%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="none" fill="none">
        {[
          'M-20 420 C 200 300, 380 560, 820 200',
          'M-20 520 C 260 380, 440 600, 820 340',
          'M-20 300 C 180 180, 420 420, 820 80',
        ].map((d, i) => (
          <g key={d}>
            <path d={d} stroke="rgba(16,185,129,.25)" strokeWidth="1.2" />
            <path d={d} stroke="#39ff14" strokeWidth="2.2" className="fiber-line" style={{ animationDelay: `${i * -2}s` }} />
          </g>
        ))}
      </svg>
      {PARTICLES.map((p, i) => (
        <span key={i} className="twinkle absolute rounded-full bg-fn-neon shadow-neon" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }} />
      ))}
    </div>
  )
}
