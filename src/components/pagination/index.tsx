'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  total: number
  limit: number
  currentPage: number
}

export default function Pagination({
  total,
  limit,
  currentPage,
}: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const list =
    total && total > limit
      ? [...Array(Math.ceil(total / limit))].map((_, i) => i + 1)
      : [1]

  const handleChangePage = (selectedPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.append('page', selectedPage.toString())
    router.push(`${pathname}?${newParams.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="mt-4 flex items-center space-x-2">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer rounded border border-[#0998d6] px-4 py-2 font-bold text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c] disabled:opacity-50"
        aria-label="Previous page"
      >
        « Prev
      </button>

      {list.map((page) => (
        <button
          key={page}
          onClick={() => handleChangePage(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`rounded px-4 py-2 font-bold ${
            page === currentPage
              ? 'border border-[#a7a7a7] text-[#a7a7a7]'
              : 'cursor-pointer border border-[#0998d6] text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c]'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === list.length}
        className="cursor-pointer rounded border border-[#0998d6] px-4 py-2 font-bold text-[#0988d6] hover:border-[#602d6c] hover:text-[#602d6c] disabled:opacity-50"
        aria-label="Next page"
      >
        Next »
      </button>
    </div>
  )
}
