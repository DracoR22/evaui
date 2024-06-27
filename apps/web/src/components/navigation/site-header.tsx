import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MainNav } from './main-nav'
import { buttonVariants } from '../ui/button'
import { siteConfig } from '@evaui/config'
import { Icons } from '../icons/icons'

interface SiteHeaderProps {
  user?: any // TODO: Replace for acutal Nextauth user
}

export async function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg',
      )}
    >
      <div className="container flex h-16 items-center">
        <MainNav />
        {/* <MobileNav/> */}
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <Link
            className={cn(
              buttonVariants(),
              'hidden max-w-52 gap-2 overflow-hidden whitespace-pre md:flex',
              'group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 bg-green-500/30 border border-green-500 text-white',
            )}
            target="_blank"
            href={siteConfig.links.github}
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <Icons.gitHub className="h- w-4" />
              <span className="ml-1">Go to Shop</span>{' '}
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              {/* <StarIcon className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
              <NumberTicker
                value={stars}
                className="font-display font-medium text-white dark:text-black"
              /> */}
            </div>
          </Link>

          <div className="w-full flex-1 md:w-auto md:flex-none">{/* <CommandMenu/> */}</div>
          <nav className="flex items-center gap-1">
            <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.discord className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </div>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.instagram className="h-4 w-4 fill-current" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            {/* <ModeToggle/> */}
          </nav>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  )
}
