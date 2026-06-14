'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Features() {
  const sectionRef = useScrollAnimation()

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <div className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            <span className="mr-2 text-5xl text-cyan-500 md:text-6xl lg:text-7xl">
              ◦
            </span>
            Our approach that helps you achieve your goals
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          
          {/* LEFT LARGE IMAGE CARD */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-xl md:row-span-2">
            <div className="relative h-[500px] min-h-[540px] overflow-hidden md:h-full">
              
              <Image
                src="/surf-instructor.jpg"
                alt="Trainer teaching"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="translate-y-4 transition-all duration-500 ease-in-out group-hover:translate-y-0">
                  
                  <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    Trainers &
                    <br />
                    instructors
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 md:text-base">
                    Top-level instructors with years of experience helping you improve confidently.
                  </p>

                  <button
                    onClick={() =>
                      document
                        .querySelector('#contact')
                        ?.scrollIntoView({
                          behavior: 'smooth',
                        })
                    }
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:px-6"
                  >
                    Learn more

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col gap-5">
            
            {/* TOP CENTER IMAGE CARD */}
            <div className="group relative h-[260px] overflow-hidden rounded-[32px] shadow-xl md:h-[300px]">
              
              <Image
                src="/surf-lesson-2.jpg"
                alt="Personalized programs"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="w-full">
                  
                  <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                    Personalized
                    <br />
                    programs
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 md:text-base">
                    Programs tailored to your skill level and learning goals.
                  </p>
                </div>
              </div>
            </div>

            {/* SIMPLE INFO CARD */}
            <div className="rounded-[28px] bg-white p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-full flex-col justify-between">
                
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-500">
                    Why choose us
                  </span>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                    Learn surfing with confidence
                  </h3>

                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-500" />

                  <p className="text-sm font-medium text-slate-700">
                    Beginner friendly programs
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-400" />

                  <p className="text-sm font-medium text-slate-700">
                    Professional instructors
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-500" />

                  <p className="text-sm font-medium text-slate-700">
                    Safe and fun environment
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM IMAGE CARD */}
            <div className="group relative overflow-hidden rounded-[32px] shadow-xl">
              <div className="relative h-[280px] overflow-hidden md:h-[320px]">
                
                <Image
                  src="/surf-lesson-3.jpg"
                  alt="Support and safety"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="translate-y-2 transition-all duration-500 ease-in-out group-hover:translate-y-0">
                    
                    <h3 className="text-3xl font-bold text-white">
                      Support & safety
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/90 md:text-base">
                      Always ensuring safe lessons and professional guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE TEXT CARDS */}
          <div className="flex flex-col gap-5">
            
            {/* TRUST CARD */}
            <div
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="group cursor-pointer rounded-[28px] bg-white p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-500">
                    Trust & safety
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    We ensure your safety during every lesson.
                  </p>
                </div>

                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cyan-50 transition-all duration-300 ease-in-out group-hover:bg-cyan-500">
                  <ArrowRight className="h-5 w-5 text-cyan-500 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* TEAM SPIRIT */}
            <div
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="group cursor-pointer rounded-[28px] bg-white p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-500">
                    Team spirit
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    Build friendships and surf with a great community.
                  </p>
                </div>

                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cyan-50 transition-all duration-300 ease-in-out group-hover:bg-cyan-500">
                  <ArrowRight className="h-5 w-5 text-cyan-500 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* PERSONAL APPROACH */}
            <div
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="group cursor-pointer rounded-[28px] bg-white p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-500">
                    Personal approach
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    Individual coaching focused on your progress.
                  </p>
                </div>

                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cyan-50 transition-all duration-300 ease-in-out group-hover:bg-cyan-500">
                  <ArrowRight className="h-5 w-5 text-cyan-500 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* EXTRA INFO CARD */}
            <div className="rounded-[28px] bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              
              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-100">
                Surf Camp
              </span>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                Experience the ocean like never before
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                From beginner lessons to advanced coaching, our camp
                delivers unforgettable surf adventures with premium
                guidance and tropical vibes.
              </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                    Our surf camp combines expert coaching,
                    premium locations, and unforgettable experiences.
                  </p>
              <button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    })
                }
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600"
              >
                Join now

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12 max-w-2xl">
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            We believe surfing is more than a sport. It is the perfect balance
            of adventure, confidence, and unforgettable ocean experiences.
          </p>
        </div>
      </div>
    </section>
  )
}