'use client'

import { Select, SelectTrigger } from '@/components/ui/select'
import { SmartCard, SmartCardContent, SmartCardTitle } from '@/evaui/smart-card'
import { ChevronDownIcon } from 'lucide-react'

export default function SmartCardDemo() {
  return (
    <div>
      <SmartCard className="h-[600px]" glowSize={40} glowColor="#adacad">
        <SmartCardContent>
          <SmartCardTitle>The Corporate Life of a Honeybee</SmartCardTitle>
          <p className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
            Meet Buzz, the overworked and underpaid honeybee who dreams of early retirement.
          </p>

          <div className="absolute bottom-0 right-0 w-full h-[60%]">
            <div className="bg-white/5 backdrop-blur-sm rounded-md shadow-lg h-full ml-[20%] border-t border-l border-slate-200/10">
              <div className="border-b border-slate-200/10 w-full p-0 m-0">
                <h5 className="font-bold text-xl py-3 px-6">Daily Tasks</h5>
              </div>
              <div>
                <div className="flex justify-between px-10 gap-x-4 mt-3 items-center ">
                  <h6>Where</h6>
                  <Select>
                    <SelectTrigger className="bg-transparent">Volume</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">=</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">0</SelectTrigger>
                  </Select>
                </div>

                <div className="flex justify-between px-10 gap-x-4 mt-3 items-center">
                  <h6 className="flex items-center">
                    And <ChevronDownIcon className="size-4" />{' '}
                  </h6>
                  <Select>
                    <SelectTrigger className="bg-transparent">Volume</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">=</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">0</SelectTrigger>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 h-[30%] w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-md shadow-lg h-full border-t border-l border-slate-200/10">
              <h6 className="py-3 px-6 font-medium text-lg">And</h6>

              <div>
                <div className="flex justify-between px-10 gap-x-4 mt-3 items-center">
                  <h6>Where</h6>
                  <Select>
                    <SelectTrigger className="bg-transparent">Volume</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">=</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">0</SelectTrigger>
                  </Select>
                </div>

                <div className="flex justify-between px-10 gap-x-4 mt-3 items-center">
                  <h6 className="flex items-center">
                    And <ChevronDownIcon className="size-4" />{' '}
                  </h6>
                  <Select>
                    <SelectTrigger className="bg-transparent">Volume</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">=</SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-transparent">0</SelectTrigger>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </SmartCardContent>
      </SmartCard>
    </div>
  )
}
