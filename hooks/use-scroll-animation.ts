import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll(
              '[class*="slide-in"], [class*="fade-in"]'
            )
            
            animatedElements.forEach((el, index) => {
              const htmlEl = el as HTMLElement
              const delay = index * 0.1
              
              htmlEl.style.animationDelay = `${delay}s`
              htmlEl.classList.add('animate-on-scroll')
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return ref
}
