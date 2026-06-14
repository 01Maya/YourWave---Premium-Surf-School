'use client'

import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Hero() {
  const sectionRef = useScrollAnimation()

  const handleStartLearning = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden pt-20" ref={sectionRef}>
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 102, 161, 0.65) 0%, rgba(0, 74, 122, 0.65) 100%), url('/surf hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <div className="space-y-4 overflow-hidden">
              <p className="text-white text-sm md:text-lg max-w-md font-semibold slide-in-left">
                We help you master surfing with the best instructors and proven methods
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance slide-in-left">
                Leading surfing school in Russia
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleStartLearning}
                className="slide-in-up bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm sm:text-base h-11 sm:h-13 rounded-xl group shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-in-out px-6 sm:px-8 flex items-center justify-center gap-2"
              >
                <span className="group-hover:scale-105 transition-all duration-300">Start Learning</span>
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
              </button>
              <button
                onClick={handleWatchVideo}
                className="slide-in-up bg-white/25 backdrop-blur-md border-2 border-white text-white hover:bg-white/35 font-semibold text-sm sm:text-base h-11 sm:h-13 rounded-xl group shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-in-out px-6 sm:px-8 flex items-center justify-center gap-2"
              >
                <Play className="h-4 sm:h-5 w-4 sm:w-5 fill-white" />
                <span className="group-hover:scale-105 transition-all duration-300">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Simple Image */}
          <div className="hidden lg:flex justify-end slide-in-right">
            <div className="relative w-full max-w-xs rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-in-out group slide-in-up">
              <Image
                src="/surf-lesson-1.jpg"
                alt="Professional surfer lesson"
                width={400}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
