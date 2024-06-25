import BentoDemo from '@/registry/sections/example/bento-demo'
import SmartCardDemo from '@/registry/smart-components/example/smart-card-demo'
import { SmartCard, SmartCardTitle } from '@/registry/smart-components/ui/smart-card'
import React from 'react'

const HomePage = () => {
  return (
    <div className="m-[100px]">
      <div>
        <SmartCardDemo />
      </div>

      <div className="mt-[100px]">
        <BentoDemo />
      </div>
    </div>
  )
}

export default HomePage
