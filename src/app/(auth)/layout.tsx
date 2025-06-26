import { ReactNode } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return <>{children} </>
}
