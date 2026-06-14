'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function TipsBanner() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/20 to-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out group h-64 md:h-80 lg:h-96 slide-in-up">
          {/* Background Image */}
          <Image
            src="/beach-scene.jpg"
            alt="Top 10 tips - aerial surfing"
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700 ease-in-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/85 via-blue-600/70 to-transparent group-hover:via-blue-600/75 transition-all duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-4 md:p-8 lg:p-12 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-center overflow-hidden">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 text-balance slide-in-left">
                Top 10 tips
              </h2>
              <p className="text-white/95 text-xs md:text-sm lg:text-base max-w-lg slide-in-left">
                Our certified coaches share proven methods to help you progress faster
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4 overflow-hidden">
              {['Teaching', 'Safety', 'Mindset'].map((tag, idx) => (
                <span
                  key={tag}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 text-white text-xs md:text-sm font-semibold backdrop-blur-sm hover:bg-white/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out slide-in-up cursor-pointer"
                  style={{ animationDuration: '0.6s', animationDelay: `${400 + idx * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-fit bg-white text-blue-600 hover:bg-blue-50 font-semibold text-xs md:text-sm lg:text-base rounded-lg md:rounded-xl shadow-md hover:shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-300 ease-in-out h-8 md:h-10 lg:h-11 px-3 md:px-6 lg:px-8 inline-flex items-center gap-2 slide-in-up">
              View all tips
              <ArrowRight className="h-3 md:h-3.5 lg:h-4 w-3 md:w-3.5 lg:w-4 group-hover:translate-x-2 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
