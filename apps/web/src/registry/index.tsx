import * as React from "react";
import { Registry } from "./schema";

const ui: Registry = {
  "animated-beam": {
    name: "animated-beam",
    type: "components:ui",
    files: ["registry/components/evaui/animated-beam.tsx"],
  },
};

const example: Registry = {
  "animated-beam-demo": {
    name: "animated-beam-demo",
    type: "components:example",
    files: ["registry/components/example/animated-beam-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/animated-beam-demo")
    ),
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
};
