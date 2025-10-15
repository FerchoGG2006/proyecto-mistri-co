import { Badge } from '@/components/ui/badge'

interface SectionHeaderProps {
  badge?: string
  title: string
  description: string
  badgeVariant?: 'primary' | 'secondary' | 'outline'
  textColor?: string
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  badgeVariant = 'primary',
  textColor,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 animate-fade-in ${className}`}>
      {badge && (
        <Badge className={`badge-${badgeVariant} mb-6`}>
          {badge}
        </Badge>
      )}
      <h2 className={`text-section-title ${textColor || 'text-gray-900'} mb-6`}>
        {title}
      </h2>
      <p className={`text-body ${textColor || 'text-gray-600'} max-w-2xl mx-auto`}>
        {description}
      </p>
    </div>
  )
}

