import { Appear, Heading, Text } from 'spectacle';
import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';
import blank from '../images/blank.png';
import layout from '../images/layout.png';
import form from '../images/form.png';
export const RoutesAPI = () => (
  <>
    <CenteredSlide>
      <Heading class="yellow">ROUTES</Heading>
      <div className="w-2/3">
        <Appear>
          <Code language="shell" showLineNumbers={false}>
            {`/app/routes/rooms.tsx => /rooms
/app/routes/rooms/$roomId.tsx => /rooms/:roomId`}
          </Code>
        </Appear>
      </div>
    </CenteredSlide>
    {/* <CenteredSlide>
      <Heading color="yellow">ROUTER</Heading>
      <Appear>
        <Text textAlign="center">A file-system based router</Text>
      </Appear>
      <Appear>
        <Text textAlign="center">Built on top of React-router</Text>
      </Appear>
      <Appear>
        <Text textAlign="center">Nested routes with nested layout</Text>
      </Appear>
    </CenteredSlide> */}

    {/* <CenteredSlide>
      <div className="w-2/3">
        <Quote source="https://remix.run">Routes are their own API</Quote>
      </div>
    </CenteredSlide> */}
    <CenteredSlide>
      <Text>View</Text>
      <div className="w-2/3">{view}</div>
    </CenteredSlide>
    <CenteredSlide>
      <Text>https://comet-meetings.com/rooms/room-42</Text>
      <img src={blank} alt="blank" className="w-1/3" />
    </CenteredSlide>
    <CenteredSlide>
      <Text>
        https://comet-meetings.com<span className="text-green-400">/rooms</span>
        /room-42
      </Text>
      <Text color="green">app/routes/rooms.tsx</Text>
      <img src={layout} alt="layout" className="w-1/3" />
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
      <Text>Data loading</Text>
      {dataLoading}
    </CenteredSlide>
    {/* <CenteredSlide>
      <Heading color="white">
        📍Co-location of <br /> Data loading and view
      </Heading>
    </CenteredSlide> */}
    {/* <CenteredSlide>
      <Heading color="white">
        Parallel loaders execution <br /> = ⚡️ Faster loading
      </Heading>
    </CenteredSlide> */}
    {/* <CenteredSlide>
      <Text>Metadata</Text>
      {meta}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">SSR + Metadata = 🏆 SEO</Heading>
    </CenteredSlide> */}
    {/* <CenteredSlide>
      <Text>Styles per route</Text>
      {css}
    </CenteredSlide> */}

    {/* <CenteredSlide>
      <Text>Error handling</Text>
      {error}
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="white">💪 Resilient UI</Heading>
    </CenteredSlide> */}
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
    {`// app/routes/rooms.tsx
export default function () {
  return (
    <>
      <h1>Comet Rooms</h1>
      <div>
        <div>{/* Rooms list*/}</div>
        <div><Outlet /></div>
      </div>
    </>
  );
}
`}
  </Code>
);

const dataLoading = (
  <Code language="tsx" highlightRanges={[[5, 8], 11]}>
    {`// app/routes/rooms/$roomId.tsx
import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ request, params }) =>  {
  const room = await getRoom(params.roomId);
  return json({ room });
}

export default function() {
  const { room } = useLoaderData();
  return (
    <div>
      {/* display room */}
    </div>
  );
}`}
  </Code>
);

const dataWriting = (
  <Code
    language="tsx"
    highlightRanges={[
      [12, 15],
      [2, 9],
    ]}
  >
    {`// app/routes/rooms/$roomId/book.tsx 
export const action:Action = ({ request, params }) => {
  const form = await request.formData();
  await book({
    roomId: params.roomId,
    date: form.get("date"),
  });
  return redirect(\`/rooms/\${params.roomId}\`);
}

export default () => (
   <form method="post">
    <input type="date" name="date" />
    <button type="submit">Book</button>
   </form>
 );`}
  </Code>
);

// const css = (
//   <Code language="typescript">
//     {`// app/routes/rooms/index.tsx
// import styles from "~/styles/rooms.css";

// export const links = () => {
//   return [{ rel: "stylesheet", href: styles }];
// }
//     `}
//   </Code>
// );

// const error = (
//   <Code language="tsx">
//     {`// app/routes/rooms/$roomId.tsx
// export const ErrorBoundary = () => {
//   const { roomId } = useParams();
//   return (
//     <div className="error-container">
//       {\`Can't find \${roomId}. Sorry.\`}
//     </div>
//   );
// }>
//   `}
//   </Code>
// );
// const meta = (
//   <Code language="tsx">
//     {`// app/routes/rooms/$roomId/index.tsx
// import type { MetaFunction } from "remix";

// export const meta: MetaFunction = ({ data }: { data: LoaderData | undefined; }) => {
//   if(!data) {
//     return;
//   }

//   return {
//     title: \`Room \${data.room.name}\`,
//     description: \`Description of the \${data.room.name} room\`,
//   };
// };
//   `}
//   </Code>
// );
