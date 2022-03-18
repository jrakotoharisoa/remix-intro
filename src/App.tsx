import { Deck, Heading } from 'spectacle';
import remixLogo from './images/remix-logo.svg';
import { End } from './slides/End';
import { FrontEnd } from './slides/FrontEnd';
import { Myself } from './slides/Myself';
import { History } from './slides/RemixPresentation';
import { RemixQuote } from './slides/RemixQuote';
import { RemixSummary } from './slides/RemixSummary';
import { RoutesAPI } from './slides/RouteAPI';
import { theme } from './theme/config';
import { CenteredSlide } from './theme/Slide';
import { Template } from './theme/Template';

const App = () => {
  return (
    <Deck
      theme={theme}
      template={Template}
      transition={{
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
      }}
    >
      <CenteredSlide>
        <div>
          <img width="800" src={remixLogo} alt="remix logo" />
        </div>
      </CenteredSlide>
      <RemixQuote />
      {/* <WhatIsIt /> */}
      <History />
      <Myself /> {/* TODO: talk about comet */}
      {/* <RemixStartProject /> */}
      {/* <RemixProjectStructure /> */}
      <RoutesAPI />
      <FrontEnd />
      <RemixSummary />
      <End />
    </Deck>
  );
};
export default App;
