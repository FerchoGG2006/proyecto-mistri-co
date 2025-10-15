'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

interface FormFieldProps {
  label: string
  name: string
  type?: "text" | "email" | "password" | "tel" | "textarea" | "select"
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  validation?: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: string) => string | null
  }
  options?: { value: string; label: string }[]
  className?: string
  disabled?: boolean
}

type ValidationState = "idle" | "valid" | "invalid" | "validating"

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  validation,
  options = [],
  className,
  disabled = false
}: FormFieldProps) {
  const [validationState, setValidationState] = useState<ValidationState>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [isTouched, setIsTouched] = useState(false)

  const validateField = (val: string): string | null => {
    if (!validation) return null

    if (validation.required && !val.trim()) {
      return "Este campo es requerido"
    }

    if (validation.minLength && val.length < validation.minLength) {
      return `Mínimo ${validation.minLength} caracteres`
    }

    if (validation.maxLength && val.length > validation.maxLength) {
      return `Máximo ${validation.maxLength} caracteres`
    }

    if (validation.pattern && !validation.pattern.test(val)) {
      return "Formato inválido"
    }

    if (validation.custom) {
      return validation.custom(val)
    }

    return null
  }

  const handleChange = (newValue: string) => {
    onChange(newValue)
    
    if (isTouched) {
      setValidationState("validating")
      setTimeout(() => {
        const error = validateField(newValue)
        setValidationState(error ? "invalid" : "valid")
        setErrorMessage(error || "")
      }, 300)
    }
  }

  const handleBlur = () => {
    setIsTouched(true)
    setValidationState("validating")
    
    setTimeout(() => {
      const error = validateField(value)
      setValidationState(error ? "invalid" : "valid")
      setErrorMessage(error || "")
    }, 300)

    if (onBlur) onBlur()
  }

  const getValidationIcon = () => {
    if (validationState === "validating") {
      return <div className="animate-spin h-4 w-4 border-2 border-mistri-blue-500 border-t-transparent rounded-full" />
    }
    if (validationState === "valid") {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    if (validationState === "invalid") {
      return <XCircle className="h-4 w-4 text-red-500" />
    }
    return null
  }

  const getInputClassName = () => {
    return cn(
      "transition-all duration-200",
      validationState === "invalid" && "border-red-500 focus:border-red-500 focus:ring-red-500",
      validationState === "valid" && "border-green-500 focus:border-green-500 focus:ring-green-500",
      validationState === "validating" && "border-mistri-blue-500 focus:border-mistri-blue-500 focus:ring-mistri-blue-500"
    )
  }

  const renderInput = () => {
    const commonProps = {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e.target.value),
      onBlur: handleBlur,
      placeholder,
      disabled,
      className: getInputClassName()
    }

    switch (type) {
      case "textarea":
        return <Textarea {...commonProps} />
      case "select":
        return (
          <Select value={value} onValueChange={handleChange}>
            <SelectTrigger className={getInputClassName()}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      default:
        return <Input type={type} {...commonProps} />
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {validation?.required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      
      <div className="relative">
        {renderInput()}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {getValidationIcon()}
        </div>
      </div>

      {validationState === "invalid" && errorMessage && (
        <div className="flex items-center space-x-1 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{errorMessage}</span>
        </div>
      )}

      {validationState === "valid" && (
        <div className="flex items-center space-x-1 text-sm text-green-600">
          <CheckCircle className="h-4 w-4" />
          <span>Campo válido</span>
        </div>
      )}
    </div>
  )
}

interface FormProgressProps {
  totalFields: number
  completedFields: number
  className?: string
}

export function FormProgress({ totalFields, completedFields, className }: FormProgressProps) {
  const percentage = (completedFields / totalFields) * 100

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Progreso del formulario</span>
        <span>{completedFields}/{totalFields}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-mistri-blue-500 to-mistri-lime-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
