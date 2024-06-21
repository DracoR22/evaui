import { PropsWithChildren } from 'react'

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="flex-1">{children}</main>
    </>
  )
}

export default DocsLayout
