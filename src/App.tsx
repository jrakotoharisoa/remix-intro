import { Deck } from 'spectacle';
import { Intro } from './slides/01_Intro';
import { Demo } from './slides/03_Demo';
import { End } from './slides/05_End';
import { RemixSummary } from './slides/04_RemixSummary';
import { Web } from './slides/02_Web';
import { theme } from './theme/config';
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
      <Intro />
      <Web />
      <Demo />
      <RemixSummary />
      <End />
    </Deck>
  );
};
export default App;
