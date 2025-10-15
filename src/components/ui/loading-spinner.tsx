import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "primary" | "secondary" | "white"
  className?: string
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6", 
  lg: "h-8 w-8",
  xl: "h-12 w-12"
}

const variantClasses = {
  default: "border-gray-300",
  primary: "border-mistri-blue-500",
  secondary: "border-mistri-lime-500", 
  white: "border-white"
}

export function LoadingSpinner({ 
  size = "md", 
  variant = "default", 
  className 
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-t-transparent",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    />
  )
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-2 w-2 bg-mistri-blue-500 rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

export function LoadingPulse() {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-2 w-2 bg-mistri-blue-500 rounded-full animate-pulse" />
      <div className="h-2 w-2 bg-mistri-lime-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="h-2 w-2 bg-mistri-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  )
}

export function LoadingWave() {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-4 w-1 bg-gradient-to-t from-mistri-blue-500 to-mistri-lime-500 rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1.2s'
          }}
        />
      ))}
    </div>
  )
}
