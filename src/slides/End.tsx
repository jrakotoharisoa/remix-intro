import { CenteredSlide } from '../theme/Slide';
import end from '../images/question-kent.gif';
import { Appear, Heading } from 'spectacle';
export const End = () => (
  <CenteredSlide>
    <Heading>Merci !</Heading>
    <Appear>
      <img src={end} alt="question" />
    </Appear>
  </CenteredSlide>
);
