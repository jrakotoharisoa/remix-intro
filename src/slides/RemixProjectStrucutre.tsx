import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';

const steps = [11, [2, 7], 3, 4, 5, [6, 7]];
export const RemixProjectStructure = () => (
  <CenteredSlide>
    <div className="w-2/3">
      <Code
        key="value"
        language="shell"
        showLineNumbers={false}
        highlightRanges={steps}
      >
        {`
my-remix-app
├── app
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── root.tsx
│   └── routes
│       └── index.tsx
├── package.json
├── public
│   └── favicon.ico
├── remix.config.js
├── remix.env.d.ts
└── tsconfig.json
            `}
      </Code>
    </div>
  </CenteredSlide>
);
