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
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', selectedPage.toString())
    router.push(`${pathname}?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="mt-4 flex items-center space-x-2">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-light-green hover:border-light-green cursor-pointer rounded border px-2 py-2 text-xs font-bold text-[#6f7900] hover:text-[#6f7900] disabled:opacity-10 md:px-4 md:py-2 md:text-sm"
        aria-label="Previous page"
      >
        <span className="hidden sm:inline-block">« </span>
        Prev
      </button>

      {list.map((page) => (
        <button
          key={page}
          onClick={() => handleChangePage(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`border-light-green rounded border-2 px-2 py-1 font-bold md:px-4 md:py-2 ${
            page === currentPage
              ? 'text-olive-green bg-green'
              : 'hover:bg-light-green hover:text-olive-green cursor-pointer rounded font-bold disabled:opacity-50'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === list.length}
        className="border-light-green hover:border-light-green hover:text-olive-green hover:bg-light-green cursor-pointer rounded border px-2 py-2 text-xs font-bold text-[#6f7900] disabled:opacity-10 md:px-4 md:py-2 md:text-sm"
        aria-label="Next page"
      >
        Next
        <span className="hidden sm:inline-block">»</span>
      </button>
    </div>
  )
}
