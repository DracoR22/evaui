import React from 'react'
import { Registry } from './schema'

const ui: Registry = {
  'bento-box': {
    name: 'bento-box',
    type: 'components:ui',
    files: ['src/registry/components/evaui/bento-box.tsx'],
  },
}

const example: Registry = {
  'bento-demo': {
    name: 'bento-demo',
    type: 'components:example',
    files: ['src/registry/components/example/bento-demo.tsx'],
    component: React.lazy(() => import('./components/example/bento-demo')),
  },
}

export const registry: Registry = {
  ...ui,
  ...example,
}
