export default function CommentForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-olive-green text-xl font-semibold capitalize">
          Write a Comment
        </span>
      </div>
      <div className="border-green h-[1px] w-full border-b border-dashed" />

      <form className="space-y-6">
        <div>
          <label className="text-olive-green mb-2 block text-lg font-semibold">
            Comment
          </label>
          <textarea
            className="focus:border-green focus:ring-green/20 w-full rounded-lg border border-gray-400 bg-white p-4 transition-all duration-200 focus:ring-2"
            rows={4}
            placeholder="Write your comment here..."
            name="comment_content"
            required
          />
        </div>
        <button className="bg-green hover:bg-green/80 mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-full px-7 py-2 text-lg text-white transition-colors duration-300 ease-out">
          Submit Comment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}
