'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2 } from 'lucide-react'
import { AdvancedModal } from './advanced-modal'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
    thumbnail?: string
  }[]
  columns?: 2 | 3 | 4
  showThumbnails?: boolean
  showCaptions?: boolean
  className?: string
}

export function ImageGallery({
  images,
  columns = 3,
  showThumbnails = true,
  showCaptions = true,
  className
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  return (
    <>
      <div className={cn('grid gap-4', columnClasses[columns], className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.thumbnail || image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
            </div>
            {showCaptions && image.caption && (
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isLightboxOpen && selectedImage !== null && (
        <LightboxModal
          images={images}
          currentIndex={selectedImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          onIndexChange={setSelectedImage}
        />
      )}
    </>
  )
}

interface LightboxModalProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onIndexChange: (index: number) => void
}

function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onIndexChange
}: LightboxModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setImageError(false)
  }, [currentIndex])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Main Image */}
        <div className="relative max-w-full max-h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full" />
            </div>
          )}
          
          {imageError ? (
            <div className="flex items-center justify-center w-96 h-96 bg-gray-800 rounded-lg">
              <p className="text-white">Error al cargar la imagen</p>
            </div>
          ) : (
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false)
                setImageError(true)
              }}
            />
          )}
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
            <p className="text-sm">{currentImage.caption}</p>
          </div>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 left-4 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

interface MasonryGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
    height?: number
  }[]
  columns?: 2 | 3 | 4
  gap?: number
  className?: string
}

export function MasonryGallery({
  images,
  columns = 3,
  gap = 16,
  className
}: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div
        className={cn('grid gap-4', className)}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
            style={{ height: image.height || 'auto' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={image.height || 300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="h-8 w-8 text-white" />
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <LightboxModal
          images={images}
          currentIndex={selectedImage}
          onClose={closeLightbox}
          onNext={() => setSelectedImage((selectedImage + 1) % images.length)}
          onPrev={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
          onIndexChange={setSelectedImage}
        />
      )}
    </>
  )
}
