import React from 'react'
import { Registry } from './schema'

const ui: Registry = {
  'bento-box': {
    name: 'bento-box',
    type: 'components:ui',
    files: ['registry/components/evaui/bento-box.tsx'],
  },
}

const example: Registry = {
  'bento-demo': {
    name: 'bento-demo',
    type: 'components:example',
    files: ['registry/components/example/bento-demo.tsx'],
    component: React.lazy(() => import('@/registry/components/example/bento-demo')),
  },
}

export const registry: Registry = {
  ...ui,
  ...example,
}
