'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Courses',
      href: '#courses',
    },
    {
      name: 'About Us',
      href: '#about',
    },
    {
      name: 'Gallery',
      href: '#gallery',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ]

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const href = e.currentTarget.getAttribute('href')

    if (href?.startsWith('#')) {
      e.preventDefault()

      const element = document.querySelector(href)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    setMobileMenuOpen(false)
  }

  const handleCTAClick = () => {
    const contactSection =
      document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* NAVBAR CONTAINER */}
          <div className="flex h-16 items-center justify-between md:h-20">
            
            {/* LOGO */}
            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="group flex cursor-pointer items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-2xl md:h-12 md:w-12">
                <span className="text-2xl font-bold text-blue-600">
                  ∿
                </span>
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg font-bold tracking-wide text-white md:text-xl">
                  YourWave
                </h1>

                <p className="text-xs text-blue-100">
                  Surf & Beach Camp
                </p>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex lg:gap-12">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleScroll}
                  className="group relative text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:text-blue-100 lg:text-base"
                  style={{
                    animationName: 'slideInLeft',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease',
                    animationFillMode: 'forwards',
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              
              {/* PHONE */}
              <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md lg:flex">
                <Phone className="h-4 w-4 text-white" />

                <span className="text-sm font-medium text-white">
                  +7 (999) 123-45-67
                </span>
              </div>

              {/* CTA BUTTON */}
              <Button
                onClick={handleCTAClick}
                className="hidden h-11 rounded-xl bg-white px-5 text-sm font-semibold text-blue-600 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-50 hover:shadow-2xl sm:flex"
              >
                Book Lesson
              </Button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 ease-in-out hover:bg-white/20 active:scale-95 md:hidden"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
              mobileMenuOpen
                ? 'max-h-[500px] opacity-100 pb-5'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              
              {/* MOBILE LINKS */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleScroll}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white/10 hover:pl-6"
                    style={{
                      animationName: mobileMenuOpen
                        ? 'slideDown'
                        : 'none',
                      animationDuration: '0.5s',
                      animationTimingFunction: 'ease',
                      animationFillMode: 'forwards',
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* MOBILE CONTACT */}
              <div className="mt-4 rounded-xl bg-white/10 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-blue-100">
                      Call Us
                    </p>

                    <p className="font-semibold text-white">
                      +7 (999) 123-45-67
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleCTAClick}
                  className="h-11 w-full rounded-xl bg-white text-sm font-semibold text-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50"
                >
                  Book Lesson
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}