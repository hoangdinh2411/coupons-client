'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronUp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const SCROLL_THRESHOLD = 300
const EXCLUDE_ROUTES = ['/me']

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleVisibility = () => {
    if (window.pageYOffset > SCROLL_THRESHOLD) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const shouldShowButton = !EXCLUDE_ROUTES.includes(pathname)
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && shouldShowButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          onClick={scrollToTop}
          className="bg-green focus:ring-olive-green fixed right-8 bottom-8 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r text-white shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none lg:h-10 lg:w-10"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
