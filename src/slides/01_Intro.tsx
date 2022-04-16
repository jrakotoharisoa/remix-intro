import { CenteredSlide } from '../theme/Slide';
import remixLogo from '../images/remix-logo.svg';
import { Text } from 'spectacle';
import twitter from '../images/twitter.svg';

export const Intro = () => (
  <CenteredSlide>
    <div>
      <img width="500" src={remixLogo} alt="remix logo" />
      <Text textAlign="center">
        Devoxx France 2022 <br />
        <img
          src={twitter}
          className="inline"
          alt="logo"
          style={{ height: '50px' }}
        />{' '}
        @ J o h a 2 n
      </Text>
    </div>
  </CenteredSlide>
);

// <svg width="510" height="160" viewBox="220 180 730 260" fill="none" xmlns="http://www.w3.org/2000/svg">
