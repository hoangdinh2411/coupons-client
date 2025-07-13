import { MdOutlineArrowRightAlt } from 'react-icons/md'

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
        <button className="bg-green hover:bg-green/80 mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-2 text-lg text-white transition-colors duration-300 ease-out md:w-fit md:justify-start">
          Submit Comment
          <MdOutlineArrowRightAlt />
        </button>
      </form>
    </div>
  )
}
