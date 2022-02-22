import { Heading } from 'spectacle';
import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';

export const FrontEnd = () => (
  <>
    <CenteredSlide>
      <Heading>Turn javascript on</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <div className="w-2/3">
        <Code language="tsx">{`// entry.client.tsx
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

hydrate(<RemixBrowser />, document);`}</Code>
      </div>
    </CenteredSlide>
  </>
);

// - UX fast
//     - browser routing
//     - Know which loader to call
//     - Link prefetch routes

// - modern UX
//     - Optimistic Ui woth use transition and Form
// - UX resilient
//     - Race conditions
//     - Fetch after post
