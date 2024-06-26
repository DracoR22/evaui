import { SiteHeader } from '@/components/navigation/site-header'
import { PropsWithChildren } from 'react'

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </>
  )
}

export default DocsLayout
