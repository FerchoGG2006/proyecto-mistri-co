'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SimpleChartProps {
  title?: string
  data: {
    label: string
    value: number
    color?: string
  }[]
  type?: 'bar' | 'line' | 'pie'
  className?: string
  showValues?: boolean
  maxValue?: number
}

export function SimpleChart({
  title,
  data,
  type = 'bar',
  className,
  showValues = true,
  maxValue
}: SimpleChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value))
  const colors = [
    '#2196F3', '#CDDC39', '#FF9800', '#4CAF50', '#F44336',
    '#9C27B0', '#00BCD4', '#795548', '#607D8B', '#E91E63'
  ]

  const renderBarChart = () => (
    <div className="space-y-3">
      {data.map((item, index) => {
        const percentage = (item.value / max) * 100
        const color = item.color || colors[index % colors.length]
        
        return (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
              {showValues && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: color
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderLineChart = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - (item.value / max) * 100
      return `${x},${y}`
    }).join(' ')

    return (
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#2196F3"
            strokeWidth="0.5"
            points={points}
            className="transition-all duration-500"
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100
            const y = 100 - (item.value / max) * 100
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="1"
                fill="#2196F3"
                className="transition-all duration-500"
              />
            )
          })}
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400">
          {data.map((item, index) => (
            <span key={index} className="text-center">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const renderPieChart = () => {
    let cumulativePercentage = 0
    
    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {data.map((item, index) => {
            const percentage = (item.value / data.reduce((sum, d) => sum + d.value, 0)) * 100
            const startAngle = (cumulativePercentage / 100) * 360
            const endAngle = ((cumulativePercentage + percentage) / 100) * 360
            
            const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180)
            const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180)
            const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180)
            const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180)
            
            const largeArcFlag = percentage > 50 ? 1 : 0
            
            const pathData = [
              `M 50 50`,
              `L ${x1} ${y1}`,
              `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ')
            
            cumulativePercentage += percentage
            
            return (
              <path
                key={index}
                d={pathData}
                fill={item.color || colors[index % colors.length]}
                className="transition-all duration-500"
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {data.reduce((sum, d) => sum + d.value, 0).toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
          </div>
        </div>
      </div>
    )
  }

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart()
      case 'pie':
        return renderPieChart()
      default:
        return renderBarChart()
    }
  }

  return (
    <Card className={cn('', className)}>
      {title && (
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(title ? 'pt-0' : 'pt-6')}>
        {renderChart()}
      </CardContent>
    </Card>
  )
}

interface MiniChartProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

export function MiniChart({
  data,
  color = '#2196F3',
  height = 40,
  className
}: MiniChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = range > 0 ? 100 - ((value - min) / range) * 100 : 50
    return `${x},${y}`
  }).join(' ')

  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="1"
          points={points}
          className="transition-all duration-500"
        />
      </svg>
    </div>
  )
}
