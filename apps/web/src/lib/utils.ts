import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function constructMetadata({
  title = 'Eva UI - Modern React + Tailwind CSS components & Templates',
  description = 'Eva UI is a curated collection of the best landing page components built using React + Tailwind CSS + Framer Motion',
  image = absoluteUrl('/api/og'),
  ...props
}: {
  title?: string
  description?: string
  image?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
    title,
    description,
    keywords: ['React', 'Tailwind CSS', 'Framer Motion', 'Landing Page', 'Components', 'Next.js'],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@dracor',
    },
    icons: '/favicon.ico',
    // metadataBase: new URL("https://magicui.design"),
    authors: [
      {
        name: 'evaui',
        url: 'https://twitter.com/evaui',
      },
    ],
    creator: 'dracor',
    // themeColor: [
    //   { media: "(prefers-color-scheme: light)", color: "white" },
    //   { media: "(prefers-color-scheme: dark)", color: "black" },
    // ],
    ...props,
  }
}
