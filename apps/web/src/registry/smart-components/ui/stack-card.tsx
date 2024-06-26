'use client'

import React, { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CardDataType = {
  imageUrl: string
  title: string
  description: string
}

const CardTemplate = ({ imageUrl, title, description }: CardDataType) => {
  return (
    <div className="bg-background shadow-xl rounded-lg p-6 w-96 border border-slate-200/20">
      <div className="flex items-center">
        <img src={imageUrl} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  )
}

const CARD_DATA: CardDataType[] = [
  {
    imageUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1714420184/1698251861492_e4wiyn.jpg',
    title: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1714420184/1698251861492_e4wiyn.jpg',
    title: 'Jane Smith',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1716530846/Kazuhiro_Suda2square_lypqty.jpg',
    title: 'Alice Johnson',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1714420184/1698251861492_e4wiyn.jpg',
    title: 'Bernard Hashler',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const CARD_OFFSET = 20
const SCALE_FACTOR = 0.05

const StackCard = () => {
  const [cards, setCards] = React.useState<CardDataType[]>(CARD_DATA)

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
    <div className="relative flex items-center justify-center h-96">
      <ul className="relative w-full h-full">
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
                <CardTemplate imageUrl={card.imageUrl} title={card.title} description={card.description} />
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

export { StackCard }
