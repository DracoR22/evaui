'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from '../icons/icons'
import { Badge } from '../ui/badge'
import { docsConfig, siteConfig } from '@evaui/config'
import { cn } from '@/lib/utils'
import { ExternalLinkIcon, StarIcon } from '@radix-ui/react-icons'
import { Button, buttonVariants } from '../ui/button'
import { ShoppingBagIcon, ShoppingBasketIcon } from 'lucide-react'
import NumberTicker from '../global/number-ticker'

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
        {/* {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            target={item.external ? '_blank' : undefined}
            className={cn(
              'flex items-center justify-center transition-colors hover:text-foreground/80',
              pathname?.startsWith(item.href!) ? 'text-foreground' : 'text-foreground/60',
              item.external && ''
            )}
          >
            {item.title}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))} */}
        <Link
          className={cn(
            buttonVariants(),
            'hidden max-w-52 gap-2 overflow-hidden whitespace-pre md:flex',
            'group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2',
          )}
          target="_blank"
          href={siteConfig.links.github}
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
          <div className="flex items-center">
            <ShoppingBasketIcon className="size-5 mr-1" />
            <span className="ml-1">Premium Shop</span>{' '}
          </div>
          <div className="ml-2 flex items-center text-sm md:flex">
            {/* <StarIcon className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" /> */}
            {/* <NumberTicker value={60} className="font-display font-medium text-white dark:text-black" />
            <span>% off</span> */}
          </div>
        </Link>
      </nav>
    </div>
  )
}
