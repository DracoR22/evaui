'use client'

import { cn } from '@/lib/utils'
import { registry } from '../../registry'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import ComponentWrapper from './component-wrapper'
import { Button } from '../ui/button'
import { RotateCcwIcon } from 'lucide-react'
import { Icons } from '../icons/icons'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  align?: 'center' | 'start' | 'end'
}

export function ComponentPreview({ name, children, className, align = 'center', ...props }: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0) // State to trigger re-render of preview
  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[0] // first child

  const Preview = React.useMemo(() => {
    const Component = registry[name]?.component

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`)
      return (
        <p className="text-sm text-muted-foreground">
          Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code>{' '}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, key])

  return (
    <div className={cn('my-4 flex flex-col space-y-2 lg:max-w-[120ch]', className)} {...props}>
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className=" rounded-md" key={key}>
          <ComponentWrapper>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">{Code}</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
