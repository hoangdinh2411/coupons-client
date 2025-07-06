import Image from 'next/image'
import React from 'react'
type BadgePropsType = {
  imageIcon?: string
  text?: string
  className?: string
}
function Badge({ imageIcon, text = '', className = '' }: BadgePropsType) {
  return (
    <div
      className={` ${className} flex rounded-md border-1 border-gray-200 bg-white py-[2px] pr-2 text-base`}
    >
      <Image src={`${imageIcon}`} alt="" width={20} height={20} />
      <span className="font-bold">{text}</span>
    </div>
  )
}

export default Badge
