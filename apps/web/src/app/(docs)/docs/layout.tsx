import { DocsSidebarNav } from '@/components/navigation/sidebar-nav'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PropsWithChildren } from 'react'
import { docsConfig } from '@evaui/config'

const DocLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}

export default DocLayout
