import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn, constructMetadata } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/next-themes-provider'

import '@/styles/globals.css'

import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = constructMetadata({
  title: 'Eva UI',
  description: 'TODO: ',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
