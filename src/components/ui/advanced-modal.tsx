'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X, Maximize2, Minimize2 } from "lucide-react"
import { useState, useEffect } from "react"

interface AdvancedModalProps {
  children: React.ReactNode
  trigger?: React.ReactNode
  title?: string
  description?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  variant?: "default" | "centered" | "sidebar" | "drawer"
  showCloseButton?: boolean
  showMaximizeButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full h-full"
}

const variantClasses = {
  default: "mx-4 my-8",
  centered: "mx-4 my-auto",
  sidebar: "ml-auto mr-0 my-0 h-full max-w-md",
  drawer: "mx-0 my-auto max-w-full h-full"
}

export function AdvancedModal({
  children,
  trigger,
  title,
  description,
  size = "md",
  variant = "default",
  showCloseButton = true,
  showMaximizeButton = false,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  isOpen: externalIsOpen,
  onOpenChange
}: AdvancedModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const [isMaximized, setIsMaximized] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(open)
    }
    onOpenChange?.(open)
  }

  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleOpenChange(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape])

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={cn(
          "p-0 overflow-hidden",
          sizeClasses[size],
          variantClasses[variant],
          isMaximized && "max-w-full h-full",
          className
        )}
        onPointerDownOutside={(e) => {
          if (!closeOnOverlayClick) {
            e.preventDefault()
          }
        }}
      >
        {(title || showCloseButton || showMaximizeButton) && (
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {title && (
                  <DialogTitle className="text-xl font-semibold text-gray-900">
                    {title}
                  </DialogTitle>
                )}
                {description && (
                  <p className="text-sm text-gray-600 mt-1">{description}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {showMaximizeButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="h-8 w-8 p-0"
                  >
                    {isMaximized ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                )}
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenChange(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </DialogHeader>
        )}
        <div className="p-6 pt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: "default" | "danger" | "warning"
  loading?: boolean
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "default",
  loading = false
}: ConfirmationModalProps) {
  const variantClasses = {
    default: {
      button: "bg-mistri-blue-500 hover:bg-mistri-blue-600",
      icon: "text-mistri-blue-500"
    },
    danger: {
      button: "bg-red-500 hover:bg-red-600",
      icon: "text-red-500"
    },
    warning: {
      button: "bg-orange-500 hover:bg-orange-600",
      icon: "text-orange-500"
    }
  }

  return (
    <AdvancedModal
      isOpen={isOpen}
      onOpenChange={onClose}
      title={title}
      size="sm"
      showMaximizeButton={false}
    >
      <div className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-end space-x-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            disabled={loading}
            className={variantClasses[variant].button}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                <span>Procesando...</span>
              </div>
            ) : (
              confirmText
            )}
          </Button>
        </div>
      </div>
    </AdvancedModal>
  )
}

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onIndexChange: (index: number) => void
  title?: string
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title
}: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  const nextImage = () => {
    onIndexChange((currentIndex + 1) % images.length)
  }

  const prevImage = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    setIsLoading(true)
  }, [currentIndex])

  return (
    <AdvancedModal
      isOpen={isOpen}
      onOpenChange={onClose}
      title={title}
      size="full"
      variant="centered"
      showMaximizeButton={false}
    >
      <div className="relative h-full flex items-center justify-center">
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            >
              ←
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            >
              →
            </Button>
          </>
        )}
        
        <div className="relative max-w-full max-h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin h-8 w-8 border-2 border-mistri-blue-500 border-t-transparent rounded-full" />
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={title || `Imagen ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex ? "bg-mistri-blue-500" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </AdvancedModal>
  )
}
