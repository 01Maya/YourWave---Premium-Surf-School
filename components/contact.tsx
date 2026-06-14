'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', question: '' })
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-cyan-500" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:gap-12 animate-in fade-in duration-1000 delay-200">
          {/* Left - Form */}
          <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 slide-in-left">
            <div className="overflow-hidden">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 slide-in-down">Still have questions?</h2>
              <p className="text-white/90 text-sm md:text-base fade-in-up">Fill out the form and we&apos;ll get in touch!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6 slide-in-up">
              <div className="transform group hover:scale-105 transition-all duration-300">
                <label className="block text-xs md:text-sm font-semibold mb-2 group-hover:text-blue-100 transition-colors duration-300">Your name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/25 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 focus:scale-105 text-sm md:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  minLength={2}
                />
              </div>

              <div className="transform group hover:scale-105 transition-all duration-300">
                <label className="block text-xs md:text-sm font-semibold mb-2 group-hover:text-blue-100 transition-colors duration-300">Phone number</label>
                <input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/25 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 focus:scale-105 text-sm md:text-base"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  minLength={10}
                />
              </div>

              <div className="transform group hover:scale-105 transition-all duration-300">
                <label className="block text-xs md:text-sm font-semibold mb-2 group-hover:text-blue-100 transition-colors duration-300">Your question</label>
                <textarea
                  placeholder="Tell us what you&apos;d like to know..."
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/25 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 focus:scale-105 min-h-24 md:min-h-28 resize-none text-sm md:text-base"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  required
                  minLength={5}
                />
              </div>

              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm md:text-base rounded-lg md:rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-300 ease-in-out h-10 md:h-12 px-4 md:px-6 w-fit"
              >
                Send
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 slide-in-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 fade-in-down">Contacts</h3>

              {/* Phone */}
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4 lg:mb-6 group cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out transform hover:-translate-x-1" onClick={() => window.location.href = 'tel:+79991234567'}>
                <Phone className="h-4 md:h-5 w-4 md:w-5 flex-shrink-0 mt-0.5 md:mt-1 text-white group-hover:scale-150 group-hover:text-blue-100 transition-all duration-300" />
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-blue-100 transition-colors duration-300">Phone</p>
                  <p className="text-sm md:text-lg font-semibold group-hover:text-blue-50 transition-all duration-300">+7 (999) 123-45-67</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4 lg:mb-6 group cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out transform hover:-translate-x-1" onClick={() => window.location.href = 'mailto:info@yourwave.com'}>
                <Mail className="h-4 md:h-5 w-4 md:w-5 flex-shrink-0 mt-0.5 md:mt-1 text-white group-hover:scale-150 group-hover:text-blue-100 transition-all duration-300" />
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-blue-100 transition-colors duration-300">Email</p>
                  <p className="text-sm md:text-lg font-semibold group-hover:text-blue-50 transition-all duration-300">info@yourwave.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 md:gap-4 group cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out transform hover:-translate-x-1" onClick={() => window.open('https://maps.google.com/?q=Sochi,Russia,BlackSea', '_blank')}>
                <MapPin className="h-4 md:h-5 w-4 md:w-5 flex-shrink-0 mt-0.5 md:mt-1 text-white group-hover:scale-150 group-hover:text-blue-100 transition-all duration-300" />
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white/80 group-hover:text-blue-100 transition-colors duration-300">Address</p>
                  <p className="text-sm md:text-lg font-semibold group-hover:text-blue-50 transition-all duration-300">Sochi, Russia, Black Sea</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-lg md:rounded-2xl overflow-hidden h-48 md:h-56 lg:h-64 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 hover:border-white/40 transition-all duration-300 ease-in-out animate-in fade-in zoom-in duration-700 delay-300 group cursor-pointer hover:scale-105 transform" onClick={() => window.open('https://maps.google.com/?q=Sochi,Russia,BlackSea', '_blank')}>
              <div className="text-center group-hover:scale-125 transition-all duration-300 ease-in-out">
                <MapPin className="h-6 md:h-7 lg:h-8 w-6 md:w-7 lg:w-8 mx-auto mb-2 text-white group-hover:animate-bounce transition-all duration-300" />
                <p className="text-xs md:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Click to view map location</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="slide-in-up">
              <p className="text-xs md:text-sm font-semibold text-white/80 mb-3">Follow us</p>
              <div className="flex gap-3 md:gap-4">
                {[
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Facebook', url: 'https://facebook.com' },
                  { name: 'TikTok', url: 'https://tiktok.com' }
                ].map((social) => (
                  <button
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    className="text-xs md:text-sm font-semibold text-white/80 hover:text-blue-100 hover:scale-125 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-in-out"
                  >
                    {social.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
