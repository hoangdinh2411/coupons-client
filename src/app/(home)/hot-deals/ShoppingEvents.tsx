import { EVENTS } from '@/constant/hot-deals'
function ShoppingEvents() {
  return (
    <div className="mx-auto py-8 md:py-10">
      <h2 className="mb-6 text-[21px] font-bold">
        2025 Seasonal Shopping Events
      </h2>
      <div className="mx-2 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {EVENTS.map((col, colIndex) => (
          <ul key={colIndex} className="space-y-2">
            {col.map((event, index) => (
              <li
                className="cursor-pointer text-gray-600 hover:underline md:text-[20px]"
                key={index}
              >
                {event}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ShoppingEvents
