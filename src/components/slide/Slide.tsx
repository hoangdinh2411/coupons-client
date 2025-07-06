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

interface ElementSliderProps {
  children: React.ReactNode[]
  visibleCount?: ResponsiveVisibleCount
  className?: string
  peekPercent?: number
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

export default function ElementSlider({
  children,
  visibleCount = 1,
  className = '',
  peekPercent = 20,
}: ElementSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(
    typeof visibleCount === 'number' ? visibleCount : 1,
  )

  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)

  const totalItems = children.length
  const maxIndex = Math.ceil(totalItems - itemsPerView)

  // Responsive setup
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

  // Navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1))
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1))
  }

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

  const peek = peekPercent
  const baseWidth = 100 / itemsPerView
  const itemWidth = baseWidth + peek / itemsPerView

  return (
    <div className={`group relative w-full ${className}`}>
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex cursor-grab transition-transform duration-500 ease-in-out"
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
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 shadow group-hover:block"
      >
        <MdNavigateBefore size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 shadow group-hover:block"
      >
        <MdNavigateNext size={24} />
      </button>
    </div>
  )
}
