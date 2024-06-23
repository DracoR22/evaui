import { Mdx } from '@/components/mdx/mdx-components'
import { badgeVariants } from '@/components/ui/badge'
import { getTableOfContents } from '@/lib/toc.'
import { cn } from '@/lib/utils'
import { allDocs } from 'contentlayer/generated'
import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
import '@/styles/mdx.css'

type DocsPageProps = {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocsPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return notFound()
  }

  return doc
}
const DocsPage = async ({ params }: DocsPageProps) => {
  const doc = await getDocFromParams({ params })

  if (!doc || !doc.published) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main
      className={cn(' py-6 lg:gap-10 lg:py-8 xl:grid ', {
        // TODO: Dunno here, maybe remove it at all
        'xl:grid-cols-[1fr_100px]': doc.toc,
      })}
    >
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
              >
                Docs
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
              >
                API Reference
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </main>
  )
}

export default DocsPage
