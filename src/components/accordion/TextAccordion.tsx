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
        <details
          onClick={() => setActive((prev) => !prev)}
          className={`TextAccordion_summary } w-full cursor-pointer border-b-1 border-solid border-gray-300`}
        >
          <summary className="focus-within:outline-green my-4 mb-[10px] flex w-full list-none items-center justify-between text-left font-medium outline-0 outline-offset-4 focus-within:outline-2 lg:my-5">
            <p className="my-2 lg:my-4">{summary}</p>
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
          </summary>
          <div
            className={`${
              active
                ? 'prose max-h-auto block w-4/5 border-b-1 border-gray-200 px-1 pb-4 text-sm text-gray-700'
                : 'hidden max-h-0'
            } h-full`}
          >
            {content}
          </div>
        </details>
      </div>
    </div>
  )
}

export default TextAccordion
