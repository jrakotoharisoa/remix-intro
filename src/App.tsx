import React from 'react';
import { Deck, FlexBox, Heading, Quote, Text } from 'spectacle';
import { Template } from './theme/Template';
import { theme } from './theme/config';
import { Slide } from './theme/Slide';
import remixLogo from './images/remix-logo.svg';
const App = () => {
  return (
    <Deck theme={theme} template={<Template />}>
      <Slide>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <div>
            <img width="800" src={remixLogo} alt="remix logo" />
          </div>
          <Heading>Introduction</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Text>Hello, I'm Johann</Text>
      </Slide>
      <Slide>
        <Text>What's Remix ?</Text>
        <ul>
          <li>A compiler</li>
          <li>A server side HTTP handler</li>
          <li>A server framework</li>
          <li>A browser framework</li>
        </ul>
      </Slide>
      <Slide>
        <Text>Routes API</Text> - Folder Routes - Name Conventions
      </Slide>
      <Slide>
        <Text>Route file</Text> - Loader - Action / Form - Other (meta, etc)
      </Slide>
      <Slide>
        <Text>Progressive enhancement</Text>
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
