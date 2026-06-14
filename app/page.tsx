import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { TipsBanner } from '@/components/tips-banner'
import { WhoFor } from '@/components/who-for'
import { Gallery } from '@/components/gallery'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackgroundBlobs } from '@/components/background-blobs'
import { ScrollEffects } from '@/components/scroll-effects'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundBlobs />
      <ScrollEffects />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <TipsBanner />
        <WhoFor />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
