import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
    icon?: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  backgroundColor?: string
  textColor?: string
  className?: string
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = "bg-[#83e935]",
  textColor = "text-gray-900",
  className = ""
}: CTASectionProps) {
  return (
    <section className={`section-padding ${backgroundColor} relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      <div className="relative max-w-4xl mx-auto container-custom text-center">
        <h2 className={`text-section-title ${textColor} mb-6 animate-fade-in`}>
          {title}
        </h2>
        <p className={`text-body ${textColor === 'text-gray-900' ? 'text-gray-700' : 'text-white/90'} mb-8 animate-fade-in`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600"
          >
            <Link href={primaryButton.href}>
              {primaryButton.icon && (
                (() => {
                  const IconComponent = Icons[primaryButton.icon as keyof typeof Icons] as LucideIcon
                  return IconComponent ? <IconComponent className="mr-2 h-5 w-5 text-gray-600" /> : null
                })()
              )}
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {secondaryButton && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect"
            >
              <Link href={secondaryButton.href}>
                {secondaryButton.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

