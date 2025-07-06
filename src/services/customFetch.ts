import { IResponse } from '@/types/share.type'

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5173/api/v1'

export default function customFetch<T>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {},
  // This function is async, it will return a Promise:
): Promise<IResponse<T>> {
  // Inside, we call the `fetch` function with
  // a URL and config given:

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), 60000)

  return (
    fetch(BASE_URL + url, {
      ...config,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      credentials: 'include',
    })
      // When got a response call a `json` method on it
      .then((response) => {
        clearTimeout(id)
        return response.json()
      })
      // and return the result data.
      .then((data) => {
        return data as T
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return {
            success: false,
            message: 'Request timeout, please try again later',
            status: 408,
          }
        }
        return error
      })
  )

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}
