import { Appear, Grid, Heading, Text } from 'spectacle';
import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';

export const FrontEnd = () => (
  <>
    <CenteredSlide>
      <Heading>💡 Enable Javascript now</Heading>
    </CenteredSlide>
    {/* <CenteredSlide>
      <div className="w-2/3">
        <Code language="tsx">{`// entry.client.tsx
import ReactDOM from "react-dom";
import Remix from "@remix-run/react/browser";

ReactDOM.hydrate(<Remix />, document);`}</Code>
      </div>
    </CenteredSlide> */}
    <CenteredSlide>
      <Heading color="blue">{'<Link />'}</Heading>
      <div className="w-2/3">
        <Code language="tsx">
          {`
<>
  <Link /> // defaults to "none"
  <Link prefetch="none" to="..." />
  <Link prefetch="intent" to="..."/>
  <Link prefetch="render" to="..."/>
</>
// <a rel="prefetch" href="...">...</link>
`}
        </Code>
      </div>
      <Appear>
        <Heading>Prefetch + browser routing = ⚡️</Heading>
      </Appear>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="green">{'<Form />'}</Heading>
      <Appear>
        <Heading>{`≈ <form /> behaviour`}</Heading>
      </Appear>
      <Appear>
        <Heading>{`with better UX`}</Heading>
      </Appear>
    </CenteredSlide>
    <CenteredSlide>
      <Heading>No page reload on submit</Heading>
      <Heading color="green">Remix call loader and update UI</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="yellow">Other cool stuff</Heading>
      <Grid gridTemplateColumns="1fr 1fr">
        <Text textAlign="center">Error handling by route</Text>
        <Text textAlign="center">Metadata by route</Text>
        <Text textAlign="center">Optimistic UI</Text>
        <Text textAlign="center">User sessions</Text>
      </Grid>
      <Text textAlign="center">etc.</Text>
    </CenteredSlide>
    {/* <CenteredSlide>
      <Heading>
        Modern UX with <span className="text-blue-400">useTransition()</span>
      </Heading>
      <div className="w-2/3">
        <Code language="tsx" highlightRanges={[[7], [5]]}>
          {`import { useTransition } from "remix";

function RoomEdit() {
  const transition = useTransition();
  transition.state; // 'idle' | 'submitting' | 'loading'
  transition.type;
  transition.submission; // Submitted form data
  transition.location;
}
`}
        </Code>
      </div>
    </CenteredSlide>
    <CenteredSlide>
      <Heading>Normal navigation</Heading>
      <div className="w-2/3">
        <Code language="tsx" showLineNumbers={false}>
          {` idle → loading → idle`}
        </Code>
      </div>
    </CenteredSlide>
    <CenteredSlide>
      <Heading>
        Form <span className="text-green-400">GET</span>
      </Heading>
      <div className="w-2/3">
        <Code language="tsx" showLineNumbers={false}>
          {` idle → submitting → idle`}
        </Code>
      </div>
    </CenteredSlide>
    <CenteredSlide>
      <Heading>
        Form <span className="text-yellow-400">POST, PUT, PATCH, DELETE</span>
      </Heading>
      <div className="mb-10 w-2/3">
        <Code language="tsx" showLineNumbers={false}>
          {` idle → submitting → loading → idle`}
        </Code>
      </div>

      <Appear>
        <Heading color="red" fontSize="40px">
          Handled race conditions on resubmission 🏎
        </Heading>
      </Appear>
    </CenteredSlide> */}
  </>
);
