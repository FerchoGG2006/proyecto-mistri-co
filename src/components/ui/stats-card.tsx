'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { CounterAnimation } from './animated-section'

interface StatsCardProps {
  title: string
  value: number
  change?: {
    value: number
    type: 'increase' | 'decrease'
    period?: string
  }
  icon?: LucideIcon
  iconColor?: string
  className?: string
  prefix?: string
  suffix?: string
  format?: 'number' | 'percentage' | 'currency'
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'text-mistri-blue-500',
  className,
  prefix = '',
  suffix = '',
  format = 'number'
}: StatsCardProps) {
  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS'
        }).format(val)
      case 'percentage':
        return `${val}%`
      default:
        return val.toLocaleString()
    }
  }

  return (
    <Card className={cn('hover:shadow-lg transition-all duration-300', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            <div className="flex items-baseline space-x-2 mt-2">
              <CounterAnimation
                end={value}
                className="text-2xl font-bold text-gray-900 dark:text-white"
                prefix={prefix}
                suffix={suffix}
              />
              {change && (
                <span
                  className={cn(
                    'text-sm font-medium',
                    change.type === 'increase'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  )}
                >
                  {change.type === 'increase' ? '+' : '-'}
                  {formatValue(Math.abs(change.value))}
                  {change.period && ` ${change.period}`}
                </span>
              )}
            </div>
          </div>
          {Icon && (
            <div className={cn('p-3 rounded-lg bg-gray-50 dark:bg-gray-800', iconColor)}>
              <Icon className="h-6 w-6" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface ProgressStatsProps {
  label: string
  value: number
  max: number
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple'
  showPercentage?: boolean
  className?: string
}

export function ProgressStats({
  label,
  value,
  max,
  color = 'blue',
  showPercentage = true,
  className
}: ProgressStatsProps) {
  const percentage = (value / max) * 100

  const colorClasses = {
    blue: 'bg-mistri-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500'
  }

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={cn('h-2 rounded-full transition-all duration-500', colorClasses[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{value.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
  }
  icon?: LucideIcon
  className?: string
}

export function MetricCard({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  className
}: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend?.direction) {
      case 'up':
        return 'text-green-600 dark:text-green-400'
      case 'down':
        return 'text-red-600 dark:text-red-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getTrendIcon = () => {
    switch (trend?.direction) {
      case 'up':
        return '↗'
      case 'down':
        return '↘'
      default:
        return '→'
    }
  }

  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
          {trend && (
            <div className={cn('flex items-center space-x-1 mt-2', getTrendColor())}>
              <span className="text-sm font-medium">
                {getTrendIcon()} {Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
            <Icon className="h-6 w-6 text-mistri-blue-500" />
          </div>
        )}
      </div>
    </Card>
  )
}

interface ComparisonCardProps {
  title: string
  current: {
    value: number
    label: string
  }
  previous: {
    value: number
    label: string
  }
  format?: 'number' | 'percentage' | 'currency'
  className?: string
}

export function ComparisonCard({
  title,
  current,
  previous,
  format = 'number',
  className
}: ComparisonCardProps) {
  const change = ((current.value - previous.value) / previous.value) * 100
  const isIncrease = change > 0

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS'
        }).format(val)
      case 'percentage':
        return `${val}%`
      default:
        return val.toLocaleString()
    }
  }

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {current.label}
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {formatValue(current.value)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {previous.label}
          </span>
          <span className="text-lg text-gray-700 dark:text-gray-300">
            {formatValue(previous.value)}
          </span>
        </div>
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Cambio
            </span>
            <span
              className={cn(
                'text-sm font-medium',
                isIncrease
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              )}
            >
              {isIncrease ? '+' : ''}{change.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
