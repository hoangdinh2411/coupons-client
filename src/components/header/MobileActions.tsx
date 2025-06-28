import React from 'react'
import { IoIosMenu } from 'react-icons/io'

export default function MobileActions() {
  return (
    <div className="block lg:hidden">
      <IoIosMenu size={32} color="white" className="cursor-pointer" />
    </div>
  )
}
