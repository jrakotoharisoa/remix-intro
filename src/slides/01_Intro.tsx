import { CenteredSlide } from '../theme/Slide';
import remixLogo from '../images/remix-logo.svg';

export const Intro = () => (
  <CenteredSlide>
    <div>
      <img width="800" src={remixLogo} alt="remix logo" />
    </div>
  </CenteredSlide>
);
