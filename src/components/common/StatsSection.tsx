'use client'

import { Award, Users, Target, TrendingUp, BookOpen, Star, Briefcase } from 'lucide-react'
import * as Icons from 'lucide-react'

interface StatItem {
  icon: string
  value: string
  label: string
}

interface StatsSectionProps {
  stats: StatItem[]
  variant?: 'default' | 'academy' | 'contact'
  className?: string
}

const iconMap: Record<string, any> = {
  Award,
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Star,
  Briefcase,
}

export function StatsSection({ stats, variant = 'default', className = '' }: StatsSectionProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'academy':
        return {
          container: 'bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50',
          card: 'bg-white border-mistri-blue-200 hover:border-mistri-blue-300',
          icon: 'text-mistri-blue-600',
          value: 'text-mistri-blue-900',
          label: 'text-mistri-blue-700'
        }
      case 'contact':
        return {
          container: 'bg-gray-50',
          card: 'bg-white border-gray-200 hover:border-gray-300',
          icon: 'text-primary',
          value: 'text-gray-900',
          label: 'text-gray-600'
        }
      default:
        return {
          container: 'bg-white',
          card: 'bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50 border-mistri-blue-200 hover:border-mistri-blue-300',
          icon: 'text-primary',
          value: 'text-mistri-blue-900',
          label: 'text-mistri-blue-700'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <section className={`py-16 ${styles.container} ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Award
            return (
              <div
                key={index}
                className={`rounded-lg border-2 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${styles.card}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10`}>
                  <IconComponent className={`h-6 w-6 ${styles.icon}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${styles.value}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${styles.label}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
