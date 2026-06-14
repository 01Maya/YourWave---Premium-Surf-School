'use client'

import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Footer() {
  const sectionRef = useScrollAnimation()

  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        'Home',
        'Courses',
        'About Us',
        'Gallery',
        'Blog',
      ],
    },
    {
      title: 'Courses',
      links: [
        'Beginner Lessons',
        'Advanced Program',
        'Kids Classes',
        'Group Sessions',
      ],
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'Disclaimer',
      ],
    },
  ]

  const handleNavigation = (link: string) => {
    if (link === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    else if (link === 'Courses') {
      document
        .querySelector('#courses')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }

    else if (link === 'About Us') {
      document
        .querySelector('#about')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }

    else if (link === 'Gallery') {
      document
        .querySelector('#gallery')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }
  }

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-14">
          
          {/* BRAND */}
          <div className="slide-in-left">
            
            {/* LOGO */}
            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="group flex cursor-pointer items-center gap-3 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 shadow-lg transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-cyan-300">
                <span className="text-xl font-bold text-blue-700 transition-transform duration-500 group-hover:scale-125">
                  ∿
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-cyan-100">
                YourWave
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75 transition-colors duration-300 hover:text-white/90 md:text-base">
              Premium surfing school dedicated to helping
              you master the waves.
            </p>
          </div>

          {/* FOOTER SECTIONS */}
          {footerSections.map((section, idx) => (
            <div
              key={section.title}
              className="slide-in-up"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              
              {/* TITLE */}
              <h3 className="mb-5 text-xl font-bold text-white transition-all duration-300 hover:text-cyan-100">
                {section.title}
              </h3>

              {/* LINKS */}
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={link}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        handleNavigation(link)
                      }
                      className="group/link flex items-center gap-2 text-left text-sm text-white/75 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-cyan-200 md:text-base slide-in-left"
                      style={{
                        animationDuration: '0.7s',
                        animationDelay: `${200 + linkIdx * 100}ms`,
                      }}
                    >
                      <span>{link}</span>

                      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="mt-2 border-t border-white/15" />

        {/* BOTTOM FOOTER */}
        <div className="slide-in-up flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          
          {/* COPYRIGHT */}
          <p className="text-center text-sm text-white/70 transition-colors duration-300 hover:text-white/90 md:text-left">
            © {currentYear} YourWave. All rights reserved.
          </p>

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
            <button className="text-sm text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-200">
              Privacy Policy
            </button>

            <button className="text-sm text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-200">
              Terms & Conditions
            </button>

            <button className="text-sm text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-200">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}