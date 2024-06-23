'use client'

import { BentoBox, BentoBoxItem } from '../evaui/bento-box'
import { Skeleton } from '@/components/ui/skeleton'

const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.nication in our lives.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton className="w-full h-full rounded-xl" />,
  },
]

export default function BentoDemo() {
  return (
    <div>
      <BentoBox>
        {items.map((item, i) => (
          <BentoBoxItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoBox>
    </div>
  )
}
