'use client'

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { ReactNode, useState, useEffect } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  triggerOnce?: boolean
}

const animationClasses = {
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100"
  },
  slideUp: {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0"
  },
  slideLeft: {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0"
  },
  slideRight: {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0"
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100"
  },
  rotate: {
    initial: "opacity-0 rotate-3",
    animate: "opacity-100 rotate-0"
  }
}

export function AnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className,
  triggerOnce = true
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay
  })

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all ease-out",
        isVisible ? animationClasses[animation].animate : animationClasses[animation].initial,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

interface StaggeredAnimationProps {
  children: ReactNode[]
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  staggerDelay?: number
  delay?: number
  className?: string
}

export function StaggeredAnimation({
  children,
  animation = "fadeIn",
  staggerDelay = 100,
  delay = 0,
  className
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={delay + (index * staggerDelay)}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}

interface CounterAnimationProps {
  end: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function CounterAnimation({
  end,
  duration = 2000,
  delay = 0,
  className,
  prefix = "",
  suffix = ""
}: CounterAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

interface TypewriterAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterAnimation({
  text,
  speed = 50,
  delay = 0,
  className,
  onComplete
}: TypewriterAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay })
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isVisible || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete()
      }
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex])
      setCurrentIndex(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [isVisible, currentIndex, text, speed, onComplete])

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
