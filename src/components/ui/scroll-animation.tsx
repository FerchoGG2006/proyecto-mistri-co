'use client'

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

const animationClasses = {
  fadeIn: "opacity-0 translate-y-4",
  slideUp: "opacity-0 translate-y-8",
  slideLeft: "opacity-0 translate-x-8",
  slideRight: "opacity-0 -translate-x-8",
  scale: "opacity-0 scale-95",
  rotate: "opacity-0 rotate-3"
}

const animationActiveClasses = {
  fadeIn: "opacity-100 translate-y-0",
  slideUp: "opacity-100 translate-y-0",
  slideLeft: "opacity-100 translate-x-0",
  slideRight: "opacity-100 translate-x-0",
  scale: "opacity-100 scale-100",
  rotate: "opacity-100 rotate-0"
}

export function ScrollAnimation({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className,
  once = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated) {
            setTimeout(() => {
              setIsVisible(true)
              if (once) {
                setHasAnimated(true)
              }
            }, delay)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, threshold, once, hasAnimated])

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all ease-out",
        isVisible ? animationActiveClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={elementRef}
      className={cn("relative", className)}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

interface StaggerAnimationProps {
  children: React.ReactNode[]
  staggerDelay?: number
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  className?: string
}

export function StaggerAnimation({
  children,
  staggerDelay = 100,
  animation = "fadeIn",
  className
}: StaggerAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}
