import { Deck, FlexBox, Heading, OrderedList, Quote, Text } from 'spectacle';
import { Template } from './theme/Template';
import { theme } from './theme/config';
import { CenteredSlide, Slide } from './theme/Slide';
import remixLogo from './images/remix-logo.svg';
import { Myself } from './slides/Myself';
import { RemixQuote } from './slides/RemixQuote';
const App = () => {
  return (
    <Deck theme={theme} template={<Template />}>
      <CenteredSlide>
        <div>
          <img width="800" src={remixLogo} alt="remix logo" />
        </div>
        <Heading>Introduction</Heading>
      </CenteredSlide>
      <RemixQuote />
      <Myself />
      <Slide>
        <Heading color="yellow">What are we talking about ? </Heading>
        <OrderedList color="white">
          <li>What's Remix ?</li>
          <li>Remix philosophy</li>
          <li>How remix take care of User experience</li>
        </OrderedList>
      </Slide>
      <CenteredSlide>
        <Heading>Remix, what is it ?</Heading>
        {/* <ul>
          <li>A compiler</li>
          <li>A server side HTTP handler</li>
          <li>A server framework</li>
          <li>A browser framework</li>
        </ul> */}
      </CenteredSlide>
      <Slide>
        <Text>Routes API</Text> - Folder Routes - Name Conventions
      </Slide>
      <Slide>
        <Text>Route file</Text> - Loader - Action / Form - Other (meta, etc)
      </Slide>
      <Slide>
        <Text>Remix philosophy</Text>
        <ul>
          <li>Server client model</li>
          <li>Web standards, HTTP and HTML</li>
          <li>Progressive enhancement</li>
          <li>Don't over abstract</li>
        </ul>
      </Slide>
      <Slide>
        <Heading>Progressive enhancement</Heading>
      </Slide>
      <Slide>
        <Heading>what about UX ?</Heading>
        <Quote>
          Focused on web fundamentals and modern UX, you’re simply going to
          build better websites
        </Quote>
      </Slide>

      <Slide>
        <FlexBox justifyContent="center" alignItems="center" height="100%">
          <Quote>Get better at Remix, accidentally get better at the web</Quote>
        </FlexBox>
      </Slide>
    </Deck>
  );
};
export default App;
