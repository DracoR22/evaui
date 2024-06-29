import React from 'react'
import { Registry } from './schema'

const ui: Registry = {
  'bento-box': {
    name: 'bento-box',
    type: 'components:ui',
    files: ['src/registry/sections/ui/bento-box.tsx'],
  },
  'brand-slider': {
    name: 'brand-slider',
    type: 'components:ui',
    files: ['src/registry/sections/ui/brand-slider.tsx'],
  },
  'review-grid': {
    name: 'review-grid',
    type: 'components:ui',
    files: ['src/registry/sections/ui/review-grid.tsx'],
  },
  'smart-card': {
    name: 'smart-card',
    type: 'components:ui',
    files: ['src/registry/smart-components/ui/smart-card.tsx'],
  },
  'card-stack': {
    name: 'card-stack',
    type: 'components:ui',
    files: ['src/registry/smart-components/ui/card-stack.tsx'],
  },
}

const example: Registry = {
  'bento-demo': {
    name: 'bento-demo',
    type: 'components:example',
    files: ['src/registry/sections/example/bento-demo.tsx'],
    component: React.lazy(() => import('@/registry/sections/example/bento-demo')),
  },
  'brand-slider-demo': {
    name: 'brand-slider-demo',
    type: 'components:example',
    files: ['src/registry/sections/example/brand-slider-demo.tsx'],
    component: React.lazy(() => import('@/registry/sections/example/brand-slider-demo')),
  },
  'review-grid-demo': {
    name: 'review-grid-demo',
    type: 'components:example',
    files: ['src/registry/sections/example/review-grid-demo.tsx'],
    component: React.lazy(() => import('@/registry/sections/example/review-grid-demo')),
  },
  'smart-card-demo': {
    name: 'smart-card-demo',
    type: 'components:example',
    files: ['src/registry/smart-components/example/smart-card-demo.tsx'],
    component: React.lazy(() => import('@/registry/smart-components/example/smart-card-demo')),
  },
  'card-stack-demo': {
    name: 'card-stack-demo',
    type: 'components:example',
    files: ['src/registry/smart-components/example/card-stack-demo.tsx'],
    component: React.lazy(() => import('@/registry/smart-components/example/card-stack-demo')),
  },
}

export const registry: Registry = {
  ...ui,
  ...example,
}
