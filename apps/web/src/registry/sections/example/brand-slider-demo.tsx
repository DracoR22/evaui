'use client'

import { BrandSlider } from '@/components/evaui/brand-slider'

// I recommend having at least 8 logos so there are not empty spots in the slider

const DARK_MODE_LOGOS: string[] = [
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507622/evaui/brands/netflix-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507582/evaui/brands/amazon-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507600/evaui/brands/google-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507647/evaui/brands/uber-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507631/evaui/brands/openai-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507588/evaui/brands/chase-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507642/evaui/brands/tesla-logo-dark.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719507638/evaui/brands/paypal-logo-dark.svg',
]

const LIGHT_MODE_LOGOS: string[] = [
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516329/evaui/brands/netflix-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516063/evaui/brands/amazon-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516090/evaui/brands/google-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516123/evaui/brands/uber-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516099/evaui/brands/openai-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516073/evaui/brands/chase-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516115/evaui/brands/tesla-logo-light.svg',
  'https://res.cloudinary.com/dylgxqpuv/image/upload/v1719516108/evaui/brands/paypal-logo-light.svg',
]

const BrandSliderDemo = () => {
  return (
    <div className="w-full h-[100px] flex items-center mt-4">
      {/* DARK MODE */}
      <BrandSlider logos={DARK_MODE_LOGOS} color="black" className="hidden dark:flex" />

      {/* LIGHT MODE */}
      <BrandSlider logos={LIGHT_MODE_LOGOS} color="white" className="dark dark:hidden" />
    </div>
  )
}

export default BrandSliderDemo
