import { BentoBox, BentoBoxItem } from '../../registry/components/evaui/bento-box'
import BentoDemo from '../../registry/components/example/bento-demo'
import { User2Icon } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className="m-[100px]">
      <div className="max-w-xl relative">
        <BentoDemo />
      </div>
    </div>
  )
}

export default HomePage
