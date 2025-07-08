'use client'

export default function GlobalError(
  { error, reset } = {
    error: {
      message: 'Something wrong',
    },
    reset: () => {},
  },
) {
  return (
    <html>
      <body className="error-page">
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
