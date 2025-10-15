'use client'

import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LazySection({ children, fallback }: LazySectionProps) {
  return (
    <Suspense fallback={fallback || <SectionSkeleton />}>
      {children}
    </Suspense>
  )
}

function SectionSkeleton() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto mb-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="p-4">
              <CardContent className="p-0">
                <Skeleton className="h-16 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
