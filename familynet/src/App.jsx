import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import IPTV from './components/IPTV'
import Coverage from './components/Coverage'
import CustomerRegistration from './components/CustomerRegistration'
import Conversion from './components/Conversion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <IPTV />
        <Coverage />
        <CustomerRegistration />
        <Conversion />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}
