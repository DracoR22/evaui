import React from 'react'
import { Registry } from './schema'

const ui: Registry = {
  'bento-box': {
    name: 'bento-box',
    type: 'components:ui',
    files: ['src/registry/sections/ui/bento-box.tsx'],
  },
  'smart-card': {
    name: 'smart-card',
    type: 'components:ui',
    files: ['src/registry/smart-components/ui/smart-card.tsx'],
  },
}

const example: Registry = {
  'bento-demo': {
    name: 'bento-demo',
    type: 'components:example',
    files: ['src/registry/sections/example/bento-demo.tsx'],
    component: React.lazy(() => import('@/registry/sections/example/bento-demo')),
  },
  'smart-card-demo': {
    name: 'smart-card-demo',
    type: 'components:example',
    files: ['src/registry/smart-components/example/smart-card-demo.tsx'],
    component: React.lazy(() => import('@/registry/smart-components/example/smart-card-demo')),
  },
}

export const registry: Registry = {
  ...ui,
  ...example,
}
