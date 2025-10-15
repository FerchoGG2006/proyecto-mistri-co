'use client'

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactNode, useState, useRef } from "react"

interface HoverCardProps {
  children: ReactNode
  hoverContent?: ReactNode
  className?: string
  hoverClassName?: string
  direction?: "top" | "bottom" | "left" | "right"
  delay?: number
}

export function HoverCard({
  children,
  hoverContent,
  className,
  hoverClassName,
  direction = "top",
  delay = 200
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setTimeout(() => setShowContent(true), delay)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setShowContent(false)
  }

  const directionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && hoverContent && (
        <div
          className={cn(
            "absolute z-50 transition-all duration-300",
            directionClasses[direction],
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-95",
            hoverClassName
          )}
        >
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4">
              {hoverContent}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className, intensity = 0.1 }: TiltCardProps) {
  const [transform, setTransform] = useState("")

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) * intensity
    const rotateY = (centerX - x) * intensity

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
  }

  return (
    <div
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  intensity?: number
  onClick?: () => void
}

export function MagneticButton({ 
  children, 
  className, 
  intensity = 0.3,
  onClick 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({ x: x * intensity, y: y * intensity })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={buttonRef}
    className={cn(
        "transition-transform duration-200 ease-out",
      className
    )}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
}