"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export const slideUp = {
  initial: {
    y: "100%",
  },
  enter: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
}

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}

export function Transition({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline()

      timeline
        .from(overlay.current, {
          xPercent: -100,
          duration: 1.3,
          ease: "power4.inOut",
        })
        .from(
          wrapper.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4",
        )
    })

    return () => context.revert()
  }, [])

  return (
    <div className="relative">
      <div ref={overlay} className="fixed top-0 left-0 w-full h-screen bg-primary origin-left z-50" />
      <div ref={wrapper} className="relative">
        {children}
      </div>
    </div>
  )
}

