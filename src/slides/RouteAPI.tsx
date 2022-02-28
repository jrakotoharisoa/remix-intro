import { Appear, Heading, Text } from 'spectacle';
import { Code } from '../theme/CodePane';
import { Quote } from '../theme/Quote';
import { CenteredSlide } from '../theme/Slide';
import blank from '../images/blank.png';
import index from '../images/index.png';
import list from '../images/list.png';
import form from '../images/form.png';

export const RoutesAPI = () => (
  <>
    <CenteredSlide>
      <Heading class="yellow">ROUTES</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="yellow">ROUTER</Heading>
      <Appear>
        <Text textAlign="center">A file-system based router</Text>
      </Appear>
      <Appear>
        <Text textAlign="center">Built on top of React-router</Text>
      </Appear>
      <Appear>
        <Text textAlign="center">Nested routes</Text>
      </Appear>
    </CenteredSlide>
    <CenteredSlide>
      <Text>https://comet-meetings.com/rooms/room-42</Text>
      <img src={blank} alt="blank" className="w-1/3" />
    </CenteredSlide>
    <CenteredSlide>
      <Text>
        <span className="text-blue-400">https://comet-meetings.com</span>
        /rooms/room-42
      </Text>
      <Text color="blue">app/routes/root.tsx</Text>
      <img src={index} alt="index" className="w-1/3" />
    </CenteredSlide>
    <CenteredSlide>
      <Text>
        https://comet-meetings.com<span className="text-green-400">/rooms</span>
        /room-42
      </Text>
      <Text color="green">app/routes/rooms.tsx</Text>
      <img src={list} alt="list" className="w-1/3" />
    </CenteredSlide>
    <CenteredSlide>
      <Text>
        https://comet-meetings.com/rooms
        <span className="text-yellow-400">/room-42</span>
      </Text>
      <Text color="yellow">app/routes/rooms/$roomId.tsx</Text>
      <img src={form} alt="form" className="w-1/3" />
    </CenteredSlide>
    <CenteredSlide>
      <div className="w-2/3">
        <Quote source="https://remix.run">Routes are their own API</Quote>
      </div>
    </CenteredSlide>
    <CenteredSlide>
      <Text>View</Text>
      <div className="w-2/3">{view}</div>
    </CenteredSlide>
    <CenteredSlide>
      <Text>Meta per route</Text>
      {meta}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">🏆 SEO</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Text>Styles per route</Text>
      {css}
    </CenteredSlide>
    <CenteredSlide>
      <Text>Data loading</Text>
      {dataLoading}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">⚡️ Faster loading</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Text>Error handling per route</Text>
      {error}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">💪 Resilient</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Text>Data writing</Text>
      {dataWriting}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">↗️ Progressive enhancement</Heading>
    </CenteredSlide>
  </>
);

const view = (
  <Code language="tsx">
    {`// app/index.tsx 
export default function() { 
  return <h1>Hello Devoxx !</h1>;
}`}
  </Code>
);

const dataLoading = (
  <Code language="tsx" highlightRanges={[[2, 5], 8]}>
    {`// app/routes/rooms/index.tsx
export const loader: LoaderFunction = async ({ request }) =>  {
  const rooms = await getRooms();
  return { rooms };
}

export default function() {
  const { rooms } = useLoaderData();
  return (
    <ul>
      {/* display some rooms */}
    </ul>
  );
}`}
  </Code>
);

const dataWriting = (
  <Code language="tsx" highlightRanges={[[13, 16], 3, [4, 8], 8]}>
    {`// app/routes/rooms/$roomId/book.tsx 
export const action:Action = ({ request, params }) => {
  const form = await request.formData();
  await book({
    roomId: params.roomId,
    date: form.get("date"),
  });
  return redirect("/rooms");
}

export default function() {
 return (
   <form method="post">
    <input type="date" name="date" />
    <button type="submit">Book</button>
   </form>
 );
}`}
  </Code>
);

const css = (
  <Code language="typescript">
    {` // app/routes/rooms/index.tsx
import styles from "~/styles/rooms.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
}
    `}
  </Code>
);

const error = (
  <Code language="tsx">
    {`// app/routes/rooms/$roomId/index.tsx
export function ErrorBoundary() {
  const { roomId } = useParams();
  return (
    <div className="error-container">
      {\`Can't find \${roomId}. Sorry.\`}
    </div>
  );
}>
  `}
  </Code>
);
const meta = (
  <Code language="tsx">
    {`// app/routes/rooms/$roomId/index.tsx
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
   const { roomId } = useParams();
  return {
    title: \`Room \${roomId}\`,
    description: \`Description of the \${roomId} room\`,
  };
};
  `}
  </Code>
);
