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
        className="cursor-pointer rounded border border-[#6f7900] px-4 py-2 font-bold text-[#6f7900] hover:border-[#6f7900] hover:text-[#6f7900] disabled:opacity-10"
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
          className={`rounded px-4 py-2 font-bold ${
            page === currentPage
              ? 'border border-[#a7a7a7] text-[#a7a7a7]'
              : 'cursor-pointer rounded border border-[#6f7900] px-4 py-2 font-bold hover:border-[#6f7900] hover:text-[#6f7900] disabled:opacity-50'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === list.length}
        className="cursor-pointer rounded border border-[#6f7900] px-3 py-2 font-bold text-gray-900 hover:border-[#6f7900] hover:text-[#6f7900] disabled:opacity-50"
        aria-label="Next page"
      >
        Next
        <span className="hidden sm:inline-block">»</span>
      </button>
    </div>
  )
}
