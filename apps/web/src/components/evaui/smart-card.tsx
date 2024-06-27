'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useRef } from 'react'

type CardProps = {
  glowColor?: string | undefined
  glowSize?: number | undefined
  children: ReactNode
  className?: string | undefined
}

const SmartCard = ({ glowColor = '#fff', glowSize = 25, children, className }: CardProps) => {
  const captureRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const capture = captureRef.current
    const overlay = overlayRef.current

    if (capture && overlay) {
      const clonedChild = capture.children[0].cloneNode(true)
      overlay.appendChild(clonedChild)

      const handleMouseMove = (event: MouseEvent) => {
        const x = event.pageX - capture.offsetLeft
        const y = event.pageY - capture.offsetTop

        overlay.style.setProperty('--glow-x', `${x}px`)
        overlay.style.setProperty('--glow-y', `${y}px`)
        overlay.style.setProperty('--glow-opacity', '1')
      }

      const handleMouseLeave = () => {
        overlay.style.setProperty('--glow-opacity', '0')
      }

      capture.addEventListener('mousemove', handleMouseMove)
      capture.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        capture.removeEventListener('mousemove', handleMouseMove)
        capture.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const glowOverlayStyles: React.CSSProperties = {
    // @ts-expect-error
    '--glow-color': glowColor,
    '--glow-size': `${glowSize}rem`,
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: 'var(--glow-opacity, 0)',
    mask: `radial-gradient(
      var(--glow-size) var(--glow-size) at var(--glow-x) var(--glow-y),
      var(--glow-color) 1%,
      transparent 50%
    )`,
    transition: '1000ms mask ease',
    duration: '1000ms',
    willChange: 'mask',
  }

  return (
    <div ref={captureRef} className={cn('relative glow-capture', className)}>
      <div
        className={cn(
          'bg-background border w-full h-full border-slate-200/20 rounded-2xl p-4 shadow-black/80 flex flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]',
        )}
      >
        <div className="flex-1 md:order-1 order-2 glow:text-glow/[0]">{children}</div>
      </div>
      <div ref={overlayRef} className="glow-overlay" style={glowOverlayStyles}></div>
    </div>
  )
}

const SmartCardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn('font-bold text-4xl tracking-tighter mb-3', className)} {...props} />
}

const SmartCardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}

export { SmartCard, SmartCardTitle, SmartCardContent }
