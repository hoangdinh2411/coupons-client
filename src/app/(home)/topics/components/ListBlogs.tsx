'use client'

import { useEffect, useState } from 'react'
import BlogCard from '@/components/card/BlogCard'
import { BlogData } from '@/types/blog.type'

interface ListBlogProps {
  blogs: BlogData[]
  type: 'grid' | 'vertical' | 'row' | 'auto'
}

export default function ListBlogs({ blogs, type }: ListBlogProps) {
  const [actualType, setActualType] = useState<'grid' | 'row' | 'vertical'>(
    type === 'auto' ? 'row' : type,
  )

  useEffect(() => {
    if (type !== 'auto') return

    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setActualType('grid')
      } else {
        setActualType('row')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [type])

  return (
    <div
      className={
        actualType === 'grid'
          ? 'mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          : 'flex flex-col gap-6'
      }
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} post_variant={actualType} />
      ))}
    </div>
  )
}
