'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, useRef } from "react"

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  rippleColor?: string
  children: React.ReactNode
  asChild?: boolean
}

export function RippleButton({
  variant = "default",
  size = "default",
  rippleColor = "rgba(255, 255, 255, 0.6)",
  className,
  children,
  onClick,
  asChild = false,
  ...props
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${rippleColor};
      transform: scale(0);
      animation: ripple 600ms linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `

    button.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <Button
        ref={buttonRef}
        variant={variant}
        size={size}
        className={cn("relative overflow-hidden", className)}
        onClick={createRipple}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    </>
  )
}
