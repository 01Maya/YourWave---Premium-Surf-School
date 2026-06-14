'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function WhoFor() {
  const sectionRef = useScrollAnimation()
  const groups = [
    {
      title: 'Beginner surfers',
      description: "We'll teach you the basics and help you feel confident in the water from your first lessons",
      side: 'left' as const,
    },
    {
      title: 'Advanced surfers',
      description: "If you already surf, we'll help you refine your technique, learn new maneuvers and boost your confidence",
      side: 'left' as const,
    },
    {
      title: 'Kids & teens',
      description: 'Surfing is a great way to develop coordination, confidence and love for an active lifestyle',
      side: 'right' as const,
    },
    {
      title: 'Groups & companies',
      description: 'We offer special programs for friends, corporate groups and team-building events',
      side: 'right' as const,
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 bg-background section-bg-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12 max-w-3xl leading-tight slide-in-left overflow-hidden text-slide-in">
          <span className="text-blue-600 text-5xl md:text-6xl lg:text-7xl">◦</span> Who is our school for?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center animate-in fade-in duration-1000 delay-200">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            {groups
              .filter((g) => g.side === 'left')
              .map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl md:rounded-3xl bg-white p-4 md:p-6 lg:p-8 shadow-md hover:shadow-2xl group cursor-pointer hover:bg-blue-50 slide-in-left transform hover:-translate-y-4 transition-all duration-500 ease-in-out"
                  style={{ animationDuration: '0.8s', animationDelay: `${300 + idx * 100}ms` }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">{group.title}</h3>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{group.description}</p>
                </div>
              ))}
          </div>

          {/* Center - Illustration */}
          <div className="flex justify-center lg:py-8 my-6 lg:my-0 animate-in fade-in zoom-in duration-1000 delay-300 hover:scale-110 transition-transform duration-500 ease-in-out">
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 animate-float">
              <svg className="w-full h-full drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" viewBox="0 0 200 200" fill="none">
                {/* Outer circles */}
                <circle cx="100" cy="100" r="95" stroke="#0FA3B1" strokeWidth="2" opacity="0.3" className="hover:opacity-50 transition-all duration-500" />
                <circle cx="100" cy="100" r="80" stroke="#005F73" strokeWidth="2" opacity="0.5" className="hover:opacity-70 transition-all duration-500" />
                <circle cx="100" cy="100" r="65" stroke="#0FA3B1" strokeWidth="2" className="hover:stroke-blue-600 transition-colors duration-500" />

                {/* Surfer silhouette */}
                <g transform="translate(100, 100)">
                  {/* Head */}
                  <circle cx="0" cy="-30" r="8" fill="#005F73" className="hover:fill-blue-600 transition-colors duration-500" />

                  {/* Body */}
                  <ellipse cx="0" cy="-12" rx="6" ry="12" fill="#005F73" className="hover:fill-blue-600 transition-colors duration-500" />

                  {/* Board */}
                  <ellipse cx="0" cy="15" rx="18" ry="6" fill="#0FA3B1" className="hover:fill-blue-600 transition-colors duration-500" />

                  {/* Legs */}
                  <line x1="0" y1="0" x2="-5" y2="8" stroke="#005F73" strokeWidth="2" className="hover:stroke-blue-600 transition-colors duration-500" />
                  <line x1="0" y1="0" x2="8" y2="6" stroke="#005F73" strokeWidth="2" className="hover:stroke-blue-600 transition-colors duration-500" />

                  {/* Arms */}
                  <line x1="0" y1="-12" x2="-12" y2="-8" stroke="#005F73" strokeWidth="2" className="hover:stroke-blue-600 transition-colors duration-500" />
                  <line x1="0" y1="-12" x2="12" y2="-10" stroke="#005F73" strokeWidth="2" className="hover:stroke-blue-600 transition-colors duration-500" />
                </g>

                {/* Floating animation effect */}
                <circle cx="100" cy="100" r="100" stroke="#0FA3B1" strokeWidth="1" opacity="0.2" className="hover:opacity-40 transition-all duration-500" />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {groups
              .filter((g) => g.side === 'right')
              .map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl md:rounded-3xl bg-white p-4 md:p-6 lg:p-8 shadow-md hover:shadow-2xl group cursor-pointer hover:bg-blue-50 slide-in-right transform hover:-translate-y-4 transition-all duration-500 ease-in-out"
                  style={{ animationDuration: '0.8s', animationDelay: `${300 + idx * 100}ms` }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">{group.title}</h3>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{group.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 md:mt-8 max-w-2xl text-foreground/70 text-xs md:text-sm slide-in-up">
          <p className="group-hover:text-foreground/90 transition-colors duration-300">
            Our programs are designed for different age groups and levels. We&apos;ll help you take your first steps or improve your skills and reach a new level.
          </p>
        </div>
      </div>
    </section>
  )
}
