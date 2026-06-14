'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function FAQ() {
  const sectionRef = useScrollAnimation()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need prior experience?',
      answer:
        'No, our program is designed for all skill levels from complete beginners to advanced surfers. Our instructors will tailor the lessons to your experience level.',
    },
    {
      question: 'What should I bring?',
      answer:
        'Bring swimwear, a towel, and sunscreen. We provide surfboards and wetsuits. If you have your own equipment, feel free to bring it.',
    },
    {
      question: 'How long does it take to learn surfing?',
      answer:
        'Most beginners can stand up and ride waves in their first lesson. To develop proper technique and style takes consistent practice over several weeks.',
    },
    {
      question: 'Can I surf all year round?',
      answer:
        'Yes! Water conditions and waves vary throughout the year, making different seasons ideal for different skill levels. We offer lessons year-round.',
    },
    {
      question: 'Where are the lessons held?',
      answer:
        'Our main location is at Sochi, Russia. We choose beach breaks based on current conditions to match your skill level.',
    },
    {
      question: 'Do you provide equipment?',
      answer:
        'Yes, we provide surfboards, wetsuits, and all necessary safety equipment. Everything is included in your lesson price.',
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:gap-12 items-start animate-in fade-in duration-1000 delay-200">
          {/* Left - Title Card */}
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 md:p-8 lg:p-12 text-white flex flex-col justify-between h-full min-h-80 md:min-h-96 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out group slide-in-left transform hover:-translate-y-4">
            <div className="overflow-hidden">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 slide-in-down">
                <span className="opacity-80 text-white">◦</span> Frequently asked questions
              </h2>
              <p className="text-white/90 text-sm md:text-base fade-in-up">Find answers to the most common questions about our surfing lessons.</p>
            </div>
            <div className="w-20 md:w-24 h-20 md:h-24 relative opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-glow">
                <path
                  d="M30 50 Q50 30 70 50 T70 90"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="50" r="3" fill="white" />
              </svg>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl md:rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-lg transition-all duration-500 ease-in-out group slide-in-right transform hover:-translate-y-3"
                style={{ animationDuration: '0.8s', animationDelay: `${300 + idx * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-4 md:p-5 lg:p-6 flex items-center justify-between hover:bg-blue-50 transition-all duration-300 ease-in-out text-left group/btn active:scale-95"
                >
                  <span className="font-semibold md:font-bold text-gray-900 text-sm md:text-base lg:text-lg group-hover/btn:text-blue-600 group-hover/btn:scale-105 transition-all duration-300">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 md:h-5 w-4 md:w-5 text-blue-600 transition-all duration-500 ease-in-out flex-shrink-0 group-hover:scale-125 ${
                      openIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIdx === idx && (
                  <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 border-t border-gray-200 animate-in fade-in slide-in-up duration-300">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
