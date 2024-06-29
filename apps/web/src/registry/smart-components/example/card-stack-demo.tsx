import React from 'react'
import { CardStack } from '../ui/card-stack'

const CARD_DATA = [
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

const CardStackDemo = () => {
  return (
    <div>
      <div className="mt-[120px] -mb-[70px] mr-4">
        <CardStack items={CARD_DATA} />
      </div>
    </div>
  )
}

export default CardStackDemo
