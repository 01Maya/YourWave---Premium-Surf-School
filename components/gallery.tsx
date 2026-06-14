'use client'

import { Play } from 'lucide-react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Gallery() {
  const sectionRef = useScrollAnimation()
  const images = [
    {
      src: '/img1.png',
      alt: 'Surfer riding wave',
    },
    {
      src: '/surf-lesson-2.jpg',
      alt: 'Ocean action',
    },
    {
      src: '/surf-lesson-3.jpg',
      alt: 'Sunset surfing',
    },
  ]

  const handleImageClick = (src: string) => {
    window.open(src, '_blank')
  }

  return (
    <section id="gallery" className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 md:mb-8 lg:mb-12 slide-in-left overflow-hidden text-slide-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-4 max-w-3xl leading-tight">
            <span className="text-blue-600 text-5xl md:text-6xl lg:text-7xl">◦</span> Photo & video gallery
          </h2>
          <p className="text-gray-700 font-semibold text-sm md:text-base max-w-lg mt-2 md:mt-4 fade-in-up">
            Check out photos and videos from our lessons. The images exemplify the achievements of our students.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 animate-in fade-in duration-1000 delay-200">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-4 aspect-square cursor-pointer slide-in-up transform"
              style={{ animationDuration: '0.8s', animationDelay: `${300 + idx * 100}ms` }}
              onClick={() => handleImageClick(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 ease-in-out flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-75 group-hover:scale-100">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border-2 border-white/50 hover:bg-white/50 hover:border-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
                    <Play className="h-5 md:h-6 w-5 md:w-6 text-white fill-white animate-glow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
