'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

type BentoBoxProps = {
  children: React.ReactNode
  className?: string | undefined
}

type BentoBoxItemProps = {
  className?: string | undefined
  icon?: React.ReactNode
  description: string
  header?: React.ReactNode
  title?: string | undefined
  glowColor?: string | undefined
}

const BentoBox = ({ children, className }: BentoBoxProps) => {
  return (
    <div className={cn('grid lg:auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  )
}

const BentoBoxItem = ({ icon, title, className, description, header, glowColor = '#fff' }: BentoBoxItemProps) => {
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
    '--glow-size': '25rem',
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
    transition: '400ms mask ease',
    willChange: 'mask',
  }
  return (
    <div ref={captureRef} className={cn('relative glow-capture', className)}>
      <div
        className={cn(
          'group/bento group bg-zinc-900/50 border-2 w-full h-full border-slate-200/10 rounded-2xl p-4 shadow-black/80 flex flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]',
        )}
      >
        <div className="h-full w-full">
          {header && <div className="h-[60%] w-full glow:text-glow/[0] glow:bg-glow/[0]">{header}</div>}
          <div className="mt-6">
            {icon && icon}
            <div className="font-sans glow:text-glow/[.0] font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans glow:text-glow/[.0] font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
        <div ref={overlayRef} className="glow-overlay" style={glowOverlayStyles}></div>
      </div>
    </div>
  )
}

export { BentoBox, BentoBoxItem }
