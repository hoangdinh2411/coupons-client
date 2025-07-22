'use client'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

function CardAccordion({
  content,
  className = '',
}: {
  className?: string
  content: React.ReactElement
}) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className={`${className} CardAccordion w-full border-t-1 border-slate-200`}
    >
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`CardAccordion_summary focus-within:border-green w-full cursor-pointer focus-within:border-2`}
      >
        <div className="icon flex items-center justify-end gap-2 text-[10px] font-[600] transition-transform duration-300 lg:text-sm">
          <span>{active ? 'Hide Details' : 'Show Details'}</span>
          <div
            className={`transform transition-transform duration-300 ${
              active ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            } absolute`}
          >
            <FiPlus />
          </div>
          <div
            className={`transform transition-transform duration-300 ${
              active ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
            }`}
          >
            <FiMinus />
          </div>
        </div>
      </button>
      <div
        className={`${active ? 'block' : 'hidden max-h-0'} h-full max-w-md font-semibold`}
      >
        {content}
      </div>
    </div>
  )
}

export default CardAccordion
