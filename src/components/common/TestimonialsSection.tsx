'use client'

import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Testimonial {
  name: string
  company: string
  content: string
  rating: number
  website?: string
}

interface TestimonialsSectionProps {
  title: string
  description: string
  badge?: string
  testimonials: Testimonial[]
  variant?: 'default' | 'academy'
  className?: string
}

export function TestimonialsSection({ 
  title, 
  description, 
  badge,
  testimonials, 
  variant = 'default', 
  className = '' 
}: TestimonialsSectionProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'academy':
        return {
          container: 'bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50',
          card: 'bg-white border-mistri-blue-200 hover:border-mistri-blue-300',
          star: 'text-mistri-lime-500',
          content: 'text-mistri-blue-900',
          name: 'text-mistri-blue-900',
          company: 'text-mistri-blue-600'
        }
      default:
        return {
          container: 'bg-white',
          card: 'bg-white border-gray-200 hover:border-gray-300',
          star: 'text-mistri-lime-500',
          content: 'text-gray-700',
          name: 'text-gray-900',
          company: 'text-gray-600'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <section className={`py-20 ${styles.container} ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          {badge && (
            <Badge className="badge-outline mb-6">{badge}</Badge>
          )}
          <h2 className="text-section-title text-gray-900 mb-6">{title}</h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const TestimonialCard = (
              <div 
                key={index} 
                className={`rounded-lg border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${styles.card}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${styles.star} fill-current`} />
                    ))}
                  </div>
                  
                  <blockquote className={`text-base leading-relaxed mb-6 ${styles.content}`}>
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${styles.name}`}>
                        {testimonial.name}
                      </div>
                      <div className={`text-xs ${styles.company}`}>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )

            return testimonial.website ? (
              <a
                key={index}
                href={testimonial.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {TestimonialCard}
              </a>
            ) : (
              TestimonialCard
            )
          })}
        </div>
      </div>
    </section>
  )
}
