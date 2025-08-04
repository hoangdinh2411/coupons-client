'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log('error', error)
  return (
    <html>
      <body className="error-page">
        <p>Something happen</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
