import React from 'react';
import { Deck, FlexBox, Heading, Quote } from 'spectacle';
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
        <FlexBox justifyContent="center" alignItems="center" height="100%">
          <Quote>Get better at Remix, accidentally get better at the web</Quote>
        </FlexBox>
      </Slide>
    </Deck>
  );
};
export default App;
