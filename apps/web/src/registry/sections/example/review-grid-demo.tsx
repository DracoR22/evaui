import ReviewGrid from '../ui/review-grid'

const CARDS = [
  {
    name: 'Alex Johnson',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: 'Frontend Developer',
    content:
      "Who knew my prayers would be answered in the form of a Next.js component library? These pre-built components are so good, I almost forgot what it's like to code. ",
  },
  {
    name: 'Jane Smith',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: ' UI/UX Designer',
    content:
      "As a designer, I've finally found a library that gets me. The components look so good, I almost took credit for designing them myself. It's like having a personal stylist for your website",
  },
  {
    name: 'Sam Taylor',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: 'Product Manager',
    content:
      "Our team's productivity has soared to new heights, mostly because we spend less time arguing over UI components and more time binge-watching the latest series.",
  },
  {
    name: 'Casey Morgan',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: 'Full Stack Developer',
    content:
      "This component library is a lifesaver! It's like the creators knew I was one bug away from a mental breakdown. Now, building complex UIs is as simple as copy-pasting code and pretending I did all the work.",
  },
  {
    name: 'Jordan Lee',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: 'Tech Lead',
    content:
      'Managing a team of developers has never been this painless. Thanks to this library, I spend less time fixing their mistakes and more time perfecting my coffee-making skills.',
  },
  {
    name: 'Taylor Green',
    imageSrc: 'https://avatar.vercel.sh/jack',
    role: 'Software Engineer',
    content:
      "I was skeptical at first, but this library has won me over. The components are so robust and performant that I've started questioning my own job security. The documentation is so good, I almost cried tears of joy.",
  },
]

const ReviewGridDemo = () => {
  return (
    <div>
      <ReviewGrid cards={CARDS} />
    </div>
  )
}

export default ReviewGridDemo
