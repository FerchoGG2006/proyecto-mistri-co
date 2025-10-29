'use client'

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SimpleAnimatedSectionProps {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  delay?: number
  className?: string
}

export function SimpleAnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  className
}: SimpleAnimatedSectionProps) {
  const animationClasses = {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up", 
    slideLeft: "animate-slide-in-left",
    slideRight: "animate-slide-in-right",
    scale: "animate-bounce-in"
  }

  return (
    <div 
      className={cn(animationClasses[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function SimpleStaggeredAnimation({
  children,
  animation = "slideUp",
  staggerDelay = 150,
  className
}: {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  staggerDelay?: number
  className?: string
}) {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <SimpleAnimatedSection
              key={index}
              animation={animation}
              delay={index * staggerDelay}
            >
              {child}
            </SimpleAnimatedSection>
          ))
        : children
      }
    </div>
  )
}
