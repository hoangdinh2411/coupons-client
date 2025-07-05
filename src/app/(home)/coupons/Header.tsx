import React, { useEffect, useRef } from 'react'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import { IoChevronBackOutline } from 'react-icons/io5'

function Header() {
  const glideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let glide: Glide | null = null
    if (glideRef.current) {
      glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
      })
      glide.mount()
    }
    return () => {
      if (glide) {
        glide.destroy()
      }
    }
  }, [])
  return (
    <div>
      {/** Gslide */}
      <div className="glide" ref={glideRef}>
        <div
          className="glide__arrows flex justify-between items-center w-full absolute top-1/2 left-0 -translate-y-1/2 z-10 pointer-events-none"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left pointer-events-auto bg-white border border-gray-300 rounded-full w-10 h-10 font-bold text-gray-700 shadow hover:bg-gray-100"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right pointer-events-auto bg-white border border-gray-300 rounded-full w-10 h-10 font-bold text-gray-700 shadow hover:bg-gray-100"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            <li className="glide__slide" data-glide-dir="=0">
              <div className="inline-block">
                <a
                  href="/"
                  className="mr-1 font-extrabold underline lg:font-bold"
                  draggable="true"
                >
                  Personalized Offers
                </a>
                Just For You
              </div>
            </li>
            <li className="glide__slide" data-glide-dir="=1">
              Automatically apply the best codes and cash back offers to your
              cart
              <a href="/" className="ml-2 font-bold underline" draggable="true">
                Add to your browser! It&apos;s free
              </a>
            </li>
            <li className="glide__slide" data-glide-dir="=2"></li>
          </ul>
        </div>
      </div>
      {/**Banner */}

      {/** Navbar */}
    </div>
  )
}

export default Header
