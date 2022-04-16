import { CenteredSlide } from '../theme/Slide';
import { Appear, Heading } from 'spectacle';
import twitterQrCode from '../images/twitter-qr-code.jpeg';
export const End = () => (
  <CenteredSlide>
    <Heading>Merci !</Heading>
    <Appear>
      <img
        src={twitterQrCode}
        alt="profil"
        className="aspect-square"
        width={300}
      />
    </Appear>
  </CenteredSlide>
);
