export default function SpinnerLoading({
  className = '',
}: {
  className?: string
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`border-green animate-spin rounded-full border-4 border-t-transparent ${className}`}
      />
    </div>
  )
}
