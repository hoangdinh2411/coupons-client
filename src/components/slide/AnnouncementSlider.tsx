'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

type ResponsiveVisibleCount =
  | number
  | {
      base?: number
      sm?: number
      md?: number
      lg?: number
      xl?: number
    }

interface AnnouncementSliderProps {
  children: React.ReactNode[]
  visibleCount?: ResponsiveVisibleCount
  className?: string
  peekPercent?: number
  autoSlideDelay?: number // milliseconds
}

const getResponsiveCount = (
  config: ResponsiveVisibleCount,
  width: number,
): number => {
  if (typeof config === 'number') return config
  if (width >= 1280 && config.xl) return config.xl
  if (width >= 1024 && config.lg) return config.lg
  if (width >= 768 && config.md) return config.md
  if (width >= 640 && config.sm) return config.sm
  return config.base || 1
}

export default function AnnouncementSlider({
  children,
  visibleCount = 1,
  className = '',
  peekPercent = 0,
  autoSlideDelay = 5000,
}: AnnouncementSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(
    typeof visibleCount === 'number' ? visibleCount : 1,
  )

  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalItems = children.length
  const maxIndex = Math.ceil(totalItems - itemsPerView)

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const count = getResponsiveCount(visibleCount, width)
      setItemsPerView(count)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [visibleCount])

  // Slide handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto Slide
  useEffect(() => {
    if (autoSlideDelay > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, autoSlideDelay)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoSlideDelay, maxIndex])

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.clientX
    if (sliderRef.current) sliderRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return
    const deltaX = e.clientX - startX.current
    if (deltaX > 50) {
      prevSlide()
      isDragging.current = false
    } else if (deltaX < -50) {
      nextSlide()
      isDragging.current = false
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (sliderRef.current) sliderRef.current.style.cursor = 'grab'
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [currentIndex])

  // Layout calculation
  const peek = peekPercent
  const baseWidth = 100 / itemsPerView
  const itemWidth = baseWidth + peek / itemsPerView

  return (
    <div className={`group relative w-full ${className}`}>
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex cursor-grab transition-transform duration-700 ease-in-out"
          onMouseDown={handleMouseDown}
          style={{
            transform: `translateX(-${baseWidth * currentIndex}%)`,
            width: `${itemWidth * totalItems}%`,
          }}
        >
          {children.map((child, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / totalItems}%`,
              }}
            >
              <div className="flex h-full w-full items-center justify-center">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation inside slide */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-transparent p-1 text-xl"
        >
          <MdNavigateBefore size={20} className="size-[20px]" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-transparent p-1 text-xl"
        >
          <MdNavigateNext size={20} className="size-[20px]" />
        </button>
      </div>
    </div>
  )
}
