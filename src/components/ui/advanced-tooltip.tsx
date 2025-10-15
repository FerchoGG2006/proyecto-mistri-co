'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Info, HelpCircle, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { ReactNode } from "react"

interface AdvancedTooltipProps {
  children: ReactNode
  content: ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  variant?: "default" | "info" | "success" | "warning" | "error"
  delayDuration?: number
  className?: string
  disabled?: boolean
}

const variantClasses = {
  default: "bg-gray-900 text-white",
  info: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-orange-600 text-white",
  error: "bg-red-600 text-white"
}

const variantIcons = {
  default: null,
  info: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle
}

export function AdvancedTooltip({
  children,
  content,
  side = "top",
  align = "center",
  variant = "default",
  delayDuration = 300,
  className,
  disabled = false
}: AdvancedTooltipProps) {
  if (disabled) return <>{children}</>

  const Icon = variantIcons[variant]

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(
            "max-w-xs p-3 text-sm",
            variantClasses[variant],
            className
          )}
        >
          <div className="flex items-start space-x-2">
            {Icon && <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" />}
            <div className="flex-1">{content}</div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface HelpTooltipProps {
  content: string
  className?: string
}

export function HelpTooltip({ content, className }: HelpTooltipProps) {
  return (
    <AdvancedTooltip
      content={content}
      variant="info"
      className={className}
    >
      <HelpCircle className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
    </AdvancedTooltip>
  )
}

interface InfoTooltipProps {
  children: ReactNode
  title: string
  description?: string
  variant?: "default" | "info" | "success" | "warning" | "error"
  className?: string
}

export function InfoTooltip({
  children,
  title,
  description,
  variant = "info",
  className
}: InfoTooltipProps) {
  return (
    <AdvancedTooltip
      content={
        <div className="space-y-1">
          <div className="font-medium">{title}</div>
          {description && (
            <div className="text-sm opacity-90">{description}</div>
          )}
        </div>
      }
      variant={variant}
      className={className}
    >
      {children}
    </AdvancedTooltip>
  )
}

interface InteractiveTooltipProps {
  children: ReactNode
  content: ReactNode
  trigger?: "hover" | "click"
  side?: "top" | "right" | "bottom" | "left"
  className?: string
}

export function InteractiveTooltip({
  children,
  content,
  trigger = "hover",
  side = "top",
  className
}: InteractiveTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className={cn(
            "max-w-sm p-4 bg-white border shadow-lg",
            className
          )}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface FormFieldTooltipProps {
  fieldName: string
  description: string
  requirements?: string[]
  examples?: string[]
  className?: string
}

export function FormFieldTooltip({
  fieldName,
  description,
  requirements,
  examples,
  className
}: FormFieldTooltipProps) {
  return (
    <AdvancedTooltip
      content={
        <div className="space-y-3">
          <div>
            <div className="font-medium text-sm">{fieldName}</div>
            <div className="text-xs opacity-90 mt-1">{description}</div>
          </div>
          
          {requirements && requirements.length > 0 && (
            <div>
              <div className="text-xs font-medium mb-1">Requisitos:</div>
              <ul className="text-xs space-y-1">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-1">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {examples && examples.length > 0 && (
            <div>
              <div className="text-xs font-medium mb-1">Ejemplos:</div>
              <ul className="text-xs space-y-1">
                {examples.map((example, index) => (
                  <li key={index} className="flex items-start space-x-1">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span className="font-mono bg-black/20 px-1 rounded">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      }
      variant="info"
      className={cn("max-w-xs", className)}
    >
      <Info className="h-4 w-4 text-mistri-blue-500 cursor-help" />
    </AdvancedTooltip>
  )
}
