'use client'

import { memo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  variant?: 'default' | 'featured'
}

export const ServiceCard = memo(function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  variant = 'default'
}: ServiceCardProps) {
  const isFeatured = true || variant === 'featured'
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon

  return (
    <Card className={`card group ${
      isFeatured 
        ? 'border-mistri-blue-500 shadow-lg bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50' 
        : 'hover:border-mistri-blue-300'
    }`}>
      <CardHeader className="space-y-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isFeatured 
            ? 'bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white shadow-lg' 
            : 'bg-mistri-blue-100 text-mistri-blue-600 group-hover:bg-mistri-blue-500 group-hover:text-white'
        }`}>
          <IconComponent className="h-7 w-7" />
        </div>
        <div>
          <CardTitle className="text-card-title text-gray-900 group-hover:text-mistri-blue-600 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-body text-gray-600 mt-3">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-small text-gray-700">
              <div className="w-2 h-2 bg-mistri-lime-500 rounded-full mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
      </CardContent>
    </Card>
  )
})
