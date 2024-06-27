'use client'

import React, { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Card = {
  imageUrl: string
  title: string
  description: string
}

const CardStack = ({ items, offset, scaleFactor }: { items: Card[]; offset?: number; scaleFactor?: number }) => {
  const CARD_OFFSET = offset || 20
  const SCALE_FACTOR = scaleFactor || 0.05

  const [cards, setCards] = React.useState<Card[]>(items)

  const move = <T,>(array: T[], from: number, to: number): T[] => {
    const newArray = [...array]
    const item = newArray.splice(from, 1)[0]
    newArray.splice(to, 0, item)
    return newArray
  }

  const moveToEnd = (from: number) => {
    setCards((prevCards) => move(prevCards, from, prevCards.length - 1))
  }

  return (
    <div className="relative h-96">
      <ul className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {cards.map((card, index) => {
            const canDrag = index === 0

            return (
              <motion.li
                className="rounded-2xl"
                key={card.title}
                style={{
                  ...cardStyle,
                  cursor: canDrag ? 'grab' : 'auto',
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: cards.length - index,
                }}
                initial={{
                  top: 0,
                  scale: 1,
                  zIndex: cards.length,
                }}
                exit={{
                  top: 0,
                  scale: 1,
                  zIndex: 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                drag={canDrag ? 'y' : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                onDragEnd={() => moveToEnd(index)}
              >
                <div className="bg-background shadow-xl rounded-lg p-6 w-96 border border-slate-200/20">
                  <div className="flex items-center">
                    <img src={card.imageUrl} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold">{card.title}</h2>
                    </div>
                  </div>
                  <p className="mt-4">{card.description}</p>
                </div>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </div>
  )
}

const cardStyle: CSSProperties = {
  position: 'absolute',
  width: '350px',
  height: '220px',
  transformOrigin: 'top center',
  listStyle: 'none',
}

export { CardStack }
