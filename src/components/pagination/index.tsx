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
  const totalPages = Math.ceil(total / limit)

  const handleChangePage = (selectedPage: number) => {
    if (selectedPage < 1 || selectedPage > totalPages) return
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', selectedPage.toString())
    router.push(`${pathname}?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      // if less than 7 pages, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }

    // show 2 first pages
    if (currentPage > 2) {
      pages.push(1)
    } else {
      pages.push(1, 2)
    }

    // if currentPage > 4 => add “...”
    if (currentPage > 4) pages.push('...')

    const start = Math.max(3, currentPage - 1)
    const end = Math.min(totalPages - 2, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)

    // if currentPage < totalPages - 3 => add “...”
    if (currentPage < totalPages - 3) pages.push('...')

    // show 2 last pages
    if (currentPage < totalPages - 2) {
      pages.push(totalPages - 1, totalPages)
    } else {
      pages.push(totalPages - 1)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="mt-4 flex items-center space-x-1 md:space-x-2">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-light-green hover:border-light-green flex cursor-pointer gap-1 rounded border px-2 py-2 text-xs font-bold text-[#6f7900] hover:text-[#6f7900] disabled:opacity-10 md:px-4 md:py-2 md:text-sm"
        aria-label="Previous page"
      >
        <span className="hidden sm:inline-block">« </span>
        Prev
      </button>

      {visiblePages.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className="px-1 text-gray-500 md:px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handleChangePage(page as number)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`border-light-green rounded border-2 px-2 py-1 font-bold md:px-4 md:py-2 ${
              page === currentPage
                ? 'text-olive-green bg-green'
                : 'hover:bg-light-green hover:text-olive-green cursor-pointer'
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-light-green hover:border-light-green hover:text-olive-green hover:bg-light-green flex cursor-pointer gap-1 rounded border px-2 py-2 text-xs font-bold text-[#6f7900] disabled:opacity-10 md:px-4 md:py-2 md:text-sm"
        aria-label="Next page"
      >
        Next
        <span className="hidden sm:inline-block">»</span>
      </button>
    </div>
  )
}
