'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ChartProps {
  data: Array<{ label: string; value: number; color?: string }>
  type?: 'bar' | 'line' | 'pie'
  title?: string
  className?: string
}

export function Chart({ data, type = 'bar', title, className }: ChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <div className="animate-pulse text-gray-500">Cargando gráfico...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const maxValue = Math.max(...data.map(d => d.value))
  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']

  const renderBarChart = () => (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={item.label} className="flex items-center space-x-3">
          <div className="w-20 text-sm text-gray-600 truncate">
            {item.label}
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div
              className="h-6 rounded-full flex items-center justify-end pr-2"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || colors[index % colors.length]
              }}
            >
              <span className="text-xs text-white font-medium">
                {item.value}
              </span>
            </div>
          </div>
        </div>
      ))}
      </div>
  )

  const renderLineChart = () => (
    <div className="h-64 relative">
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line
            key={i}
            x1="40"
            y1={40 + i * 32}
            x2="360"
            y2={40 + i * 32}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        ))}
        
        {/* Data line */}
        <polyline
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          points={data.map((item, index) => 
            `${40 + (index * 320) / (data.length - 1)},${200 - 40 - (item.value / maxValue) * 120}`
          ).join(' ')}
        />
        
        {/* Area under curve */}
        <polygon
          fill="url(#gradient)"
          points={`40,200-40 ${data.map((item, index) => 
            `${40 + (index * 320) / (data.length - 1)},${200 - 40 - (item.value / maxValue) * 120}`
          ).join(' ')} 360,200-40`}
        />
        
        {/* Data points */}
        {data.map((item, index) => (
          <circle
            key={index}
            cx={40 + (index * 320) / (data.length - 1)}
            cy={200 - 40 - (item.value / maxValue) * 120}
            r="4"
            fill="#3B82F6"
          />
        ))}
        
        {/* Labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={40 + (index * 320) / (data.length - 1)}
            y="195"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            {item.label}
          </text>
        ))}
      </svg>
    </div>
  )

  const renderPieChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let currentAngle = 0

        return (
      <div className="h-64 flex items-center justify-center">
        <svg className="w-48 h-48" viewBox="0 0 200 200">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const angle = (item.value / total) * 360
            const startAngle = currentAngle
            const endAngle = currentAngle + angle
            
            const startAngleRad = (startAngle * Math.PI) / 180
            const endAngleRad = (endAngle * Math.PI) / 180
            
            const x1 = 100 + 80 * Math.cos(startAngleRad)
            const y1 = 100 + 80 * Math.sin(startAngleRad)
            const x2 = 100 + 80 * Math.cos(endAngleRad)
            const y2 = 100 + 80 * Math.sin(endAngleRad)
            
            const largeArcFlag = angle > 180 ? 1 : 0
            
            const pathData = [
              `M 100 100`,
              `L ${x1} ${y1}`,
              `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ')
            
            currentAngle += angle

            return (
              <path
                key={item.label}
                d={pathData}
                fill={item.color || colors[index % colors.length]}
                stroke="white"
                strokeWidth="2"
              />
            )
          })}
        </svg>
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
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  )
}