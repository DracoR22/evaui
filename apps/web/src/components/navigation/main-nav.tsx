'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from '../icons/icons'
import { Badge } from '../ui/badge'
import { docsConfig, siteConfig } from '@evaui/config'
import { cn } from '@/lib/utils'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="relative mr-6 flex items-center space-x-2">
        <Icons.logo className="size-10 border border-muted-neutral-800 rounded-xl" />
        <span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
        <Badge variant="secondary">Beta</Badge>
      </Link>
      <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            target={item.external ? '_blank' : undefined}
            className={cn(
              'flex items-center justify-center transition-colors hover:text-foreground/80',
              pathname?.startsWith(item.href!) ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            {item.title}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav>
    </div>
  )
}
