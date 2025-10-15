import { cn } from "@/lib/utils"
import { LoadingSpinner } from "./loading-spinner"

interface ProgressBarProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
  showLabel?: boolean
  label?: string
  className?: string
}

const sizeClasses = {
  sm: "h-2",
  md: "h-3", 
  lg: "h-4"
}

const variantClasses = {
  default: "bg-gray-200",
  primary: "bg-mistri-blue-100",
  secondary: "bg-mistri-lime-100",
  success: "bg-green-100",
  warning: "bg-orange-100", 
  error: "bg-red-100"
}

const fillVariantClasses = {
  default: "bg-gray-600",
  primary: "bg-mistri-blue-500",
  secondary: "bg-mistri-lime-500",
  success: "bg-green-500",
  warning: "bg-orange-500",
  error: "bg-red-500"
}

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  label,
  className
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || `${Math.round(percentage)}%`}
          </span>
          <span className="text-sm text-gray-500">
            {value}/{max}
          </span>
        </div>
      )}
      <div className={cn(
        "w-full rounded-full overflow-hidden",
        sizeClasses[size],
        variantClasses[variant]
      )}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            fillVariantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

interface LoadingProgressProps {
  message?: string
  variant?: "default" | "primary" | "secondary"
  className?: string
}

export function LoadingProgress({ 
  message = "Cargando...", 
  variant = "default",
  className 
}: LoadingProgressProps) {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <LoadingSpinner size="lg" variant={variant} />
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700">{message}</p>
        <ProgressBar 
          value={0} 
          variant={variant} 
          size="sm" 
          className="mt-2 w-32"
        />
      </div>
    </div>
  )
}

interface StepProgressProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function StepProgress({ steps, currentStep, className }: StepProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          const isUpcoming = index > currentStep

          return (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                    isCompleted && "bg-mistri-blue-500 text-white",
                    isCurrent && "bg-mistri-lime-500 text-gray-900",
                    isUpcoming && "bg-gray-200 text-gray-500"
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={cn(
                  "mt-2 text-xs font-medium text-center",
                  isCompleted && "text-mistri-blue-500",
                  isCurrent && "text-mistri-lime-500",
                  isUpcoming && "text-gray-500"
                )}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-0.5 mx-4 transition-all duration-300",
                  isCompleted ? "bg-mistri-blue-500" : "bg-gray-200"
                )} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
