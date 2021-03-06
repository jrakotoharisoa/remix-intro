import { CenteredSlide } from '../theme/Slide';
import remixLogo from '../images/remix-logo.svg';
import { Text } from 'spectacle';

export const Intro = () => (
  <CenteredSlide>
    <div>
      <img width="500" src={remixLogo} alt="remix logo" />
      <Text textAlign="center">
        Introduction <br />
        <span className="inline-flex items-center text-3xl">@ J o h a 2 n</span>
      </Text>
    </div>
  </CenteredSlide>
);

// <svg width="510" height="160" viewBox="220 180 730 260" fill="none" xmlns="http://www.w3.org/2000/svg">
