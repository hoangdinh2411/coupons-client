import React from 'react'

interface DescriptionStorePropsType {
  description?: string
  className?: string
}
function DescriptionStore({ description }: DescriptionStorePropsType) {
  return (
    <div className="mb-10">
      <div dangerouslySetInnerHTML={{ __html: description || '' }} />
    </div>
  )
}

export default DescriptionStore
