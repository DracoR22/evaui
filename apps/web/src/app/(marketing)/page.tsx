import BentoDemo from '@/registry/sections/example/bento-demo'
import SmartCardDemo from '@/registry/smart-components/example/smart-card-demo'
import { SmartCard, SmartCardTitle } from '@/registry/smart-components/ui/smart-card'
import { CardStack } from '@/registry/smart-components/ui/card-stack'
import React from 'react'
import CardStackDemo from '@/registry/smart-components/example/card-stack-demo'
import { BrandSlider } from '@/registry/sections/ui/brand-slider'
import BrandSliderDemo from '@/registry/sections/example/brand-slider-demo'

const HomePage = () => {
  return (
    <div className="m-[100px]">
      <div className="h-[500px] mt-10">
        <BrandSliderDemo />
      </div>
      <div className="h-[500px] flex justify-center w-full">
        <CardStackDemo />
      </div>
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
