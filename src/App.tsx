import { Deck } from 'spectacle';
import remixLogo from './images/remix-logo.svg';
import { End } from './slides/End';
import { RemixSummary } from './slides/RemixSummary';
import { Web } from './slides/Web';
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
      <Web />
      {/* <RemixQuote /> */}
      {/* <WhatIsIt /> */}
      {/* <History /> */}
      {/* <Myself />  */}
      {/* <RemixStartProject /> */}
      {/* <RemixProjectStructure /> */}
      {/* <RoutesAPI /> */}
      {/* <FrontEnd /> */}
      <RemixSummary />
      <End />
    </Deck>
  );
};
export default App;
