'use client'
import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  slug: string
}

export default function Pagination({ totalPages, slug }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const offset = parseInt(searchParams.get('page') || '1', 10) || 1

  const getPages = () => {
    const pages: (number | string)[] = []
    const delta = 1

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const left = Math.max(2, offset - delta)
      const right = Math.min(offset + delta, totalPages - 1)

      pages.push(1)
      if (left > 2) pages.push('...')

      for (let i = left; i <= right; i++) {
        pages.push(i)
      }

      if (right < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const pages = useMemo(getPages, [offset, totalPages])

  const navigateToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('page', page.toString())
      router.push(`/topics/${slug}?${newParams.toString()}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="mt-4 flex items-center space-x-2">
      <button
        onClick={() => navigateToPage(offset - 1)}
        disabled={offset === 1}
        className="cursor-pointer rounded border border-[#0998d6] px-4 py-2 font-bold text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c] disabled:opacity-50"
        aria-label="Previous page"
      >
        « Prev
      </button>

      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => page !== offset && navigateToPage(page)}
            aria-current={page === offset ? 'page' : undefined}
            className={`rounded px-4 py-2 font-bold ${
              page === offset
                ? 'border border-[#a7a7a7] text-[#a7a7a7]'
                : 'cursor-pointer border border-[#0998d6] text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c]'
            }`}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            className="rounded border border-[#a7a7a7] px-4 py-2 font-bold text-[#a7a7a7]"
          >
            {page}
          </span>
        ),
      )}

      <button
        onClick={() => navigateToPage(offset + 1)}
        disabled={offset === totalPages}
        className="cursor-pointer rounded border border-[#0998d6] px-4 py-2 font-bold text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c] disabled:opacity-50"
        aria-label="Next page"
      >
        Next »
      </button>
    </div>
  )
}
