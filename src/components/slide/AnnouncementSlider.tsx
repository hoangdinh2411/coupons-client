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
  const [itemsPerView, setItemsPerView] = useState(
    typeof visibleCount === 'number' ? visibleCount : 1,
  )

  const [index, setIndex] = useState(1) // bắt đầu ở phần tử thật
  const sliderRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalItems = children.length
  const peek = peekPercent
  const baseWidth = 100 / itemsPerView
  const itemWidth = baseWidth + peek / itemsPerView

  // Clone đầu + cuối để loop mượt
  const loopedChildren = [children[totalItems - 1], ...children, children[0]]

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

  const nextSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = 'transform 0.6s ease'
    setIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = 'transform 0.6s ease'
    setIndex((prev) => prev - 1)
  }

  // Reset index khi đến clone
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleTransitionEnd = () => {
      slider.style.transition = 'none'
      if (index === 0) {
        setIndex(totalItems)
        slider.style.transform = `translateX(-${baseWidth * totalItems}%)`
      } else if (index === totalItems + 1) {
        setIndex(1)
        slider.style.transform = `translateX(-${baseWidth}%)`
      }
    }

    slider.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [index, totalItems, baseWidth])

  // Update transform mỗi khi index thay đổi
  useEffect(() => {
    if (!sliderRef.current) return
    sliderRef.current.style.transform = `translateX(-${baseWidth * index}%)`
  }, [index, baseWidth])

  // Auto slide
  useEffect(() => {
    if (autoSlideDelay > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoSlideDelay)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoSlideDelay])

  return (
    <div className={`group relative w-full overflow-hidden ${className}`}>
      <div
        ref={sliderRef}
        className="flex"
        style={{
          width: `${itemWidth * loopedChildren.length}%`,
        }}
      >
        {loopedChildren.map((child, idx) => (
          <div
            key={idx}
            className="px-2"
            style={{
              width: `${100 / loopedChildren.length}%`,
              flexShrink: 0,
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              {child}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-transparent p-1 text-xl"
        >
          <MdNavigateBefore size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-transparent p-1 text-xl"
        >
          <MdNavigateNext size={20} />
        </button>
      </div>
    </div>
  )
}
