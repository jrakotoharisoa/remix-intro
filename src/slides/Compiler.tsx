import { Appear, Heading } from 'spectacle';
import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';

export const Compiler = () => {
  return (
    <CenteredSlide>
      <div className="w-2/3">
        <Heading>A compiler</Heading>
        <Code language="typescript" className="mb-3" showLineNumbers={false}>
          $ remix build
        </Code>
        <Appear>
          <Code
            key="value"
            language="shell"
            showLineNumbers={false}
            highlightRanges={[[3, 4], [7, 13], [10]]}
          >
            {`
remix-devoxx2022
├── app
├── build
│   └── index.js
├── public
│   ├── build
│   │   ├── _shared
│   │   │   └── chunk-some-hash.js
│   │   ├── entry.client-some-hash.js
│   │   ├── manifest-some-hash.js
│   │   ├── root-some-hash.js
│   │   └── routes
│   │       └── index-some-hash.js

`}
          </Code>
        </Appear>
      </div>
    </CenteredSlide>
  );
};
