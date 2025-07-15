'use client'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

function TextAccordion({
  content,
  summary,
  className = '',
}: {
  content: React.ReactElement
  summary: string
  className?: string
}) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className={`${className}`}>
      <div className="TextAccordion w-full">
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`TextAccordion_summary focus-within:border-green w-full cursor-pointer focus-within:border-2 ${
            !active && 'border-b-1 border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <summary className="mt-2 mb-[10px] w-4/5 list-none text-left font-medium lg:my-5">
              {summary}
            </summary>
            <div className="icon text-xl text-gray-500 transition-transform duration-300">
              <div
                className={`transform transition-transform duration-300 ${
                  active ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                } absolute`}
              >
                <FiPlus size={16} />
              </div>
              <div
                className={`transform transition-transform duration-300 ${
                  active ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`}
              >
                <FiMinus />
              </div>
            </div>
          </div>
        </button>
        <div
          className={`${
            active
              ? 'prose max-h-auto block w-4/5 border-b-1 border-gray-200 px-1 pb-4 text-sm text-gray-700'
              : 'hidden max-h-0'
          } h-full`}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

export default TextAccordion
