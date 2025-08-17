'use client'
import React from 'react'
type BadgePropsType = {
  imageIcon?: string
  text?: string
  className?: string
}
function Badge({ text = '', className = '' }: BadgePropsType) {
  return (
    <div
      className={` ${className} flex items-center rounded-md border-1 border-gray-200 bg-white py-[2px] pr-2 text-xs md:text-base`}
    >
      <span className="font-bold">{text}</span>
    </div>
  )
}

export default Badge
