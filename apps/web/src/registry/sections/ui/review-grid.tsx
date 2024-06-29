'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = []

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts

    if (!result[index]) {
      result[index] = []
    }

    result[index].push(array[i])
  }

  return result
}

const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: { name: string; imageSrc: string; role: string; content: string }[]
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null)
  const [columnHeight, setColumnHeight] = useState<number>(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) return

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      // TODO: Add conditional hover
      className={cn('animate-marquee space-y-8 py-4 hover:[animation-play-state:paused]', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review key={reviewIndex} className={reviewClassName?.(reviewIndex % reviews.length)} review={review} />
      ))}
    </div>
  )
}

interface ReviewProps extends HTMLAttributes<HTMLElement> {
  review: { name: string; imageSrc: string; role: string; content: string }
}

function Review({ review, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
  const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)]

  return (
    <div
      className={cn(
        'animate-fade-in rounded-xl bg-white/10 backdrop-blur-xl min-h-[280px] border-slate-200/10 border-2 p-4 opacity-0 shadow-xl shadow-slate-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="z-50 overflow-hidden p-4">
        <div className="flex items-center">
          <img src={review.imageSrc} alt={review.name} className="size-14 rounded-full mb-4" />
          <div className="flex-col ml-4 mb-6">
            <div className="text-lg font-semibold">{review.name}</div>
            <div className="text-sm text-gray-400">{review.role}</div>
          </div>
        </div>
        <p className="mt-2 text-base">{review.content}</p>
      </div>
    </div>
  )
}

const ReviewGrid = ({ cards }: { cards: { name: string; imageSrc: string; role: string; content: string }[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })

  const columns = splitArray(cards, 3)

  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative -mx-4 mt-16 grid h-[49rem] max-h-[80vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
        {isInView && (
          <>
            <ReviewColumn
              reviews={[...column1, ...column3.flat(), ...column2]}
              reviewClassName={(reviewIndex) =>
                cn({
                  'md:hidden': reviewIndex >= column1.length + column3[0].length,
                  'lg:hidden': reviewIndex >= column1.length,
                })
              }
              msPerPixel={10}
            />

            <ReviewColumn
              reviews={[...column2, ...column3[1]]}
              className="hidden md:block"
              reviewClassName={(reviewIndex) => (reviewIndex >= column2.length ? 'lg:hidden' : '')}
              msPerPixel={15}
            />

            <ReviewColumn reviews={column3.flat()} className="hidden md:block" msPerPixel={10} />
          </>
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background" />
      </div>
    </div>
  )
}

export default ReviewGrid
