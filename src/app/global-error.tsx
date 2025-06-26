'use client'

export default function GlobalError(
  { error, reset } = { error: '', reset: () => {} },
) {
  return (
    <html>
      <body className="error-page">
        <p>{error}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
