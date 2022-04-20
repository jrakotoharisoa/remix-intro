import { CenteredSlide } from '../theme/Slide';
import { Text, Heading } from 'spectacle';
import { twitter } from '../images/twitter';

export const End = () => (
  <CenteredSlide>
    <Heading>Merci !</Heading>
    <Text color="yellow" className="flex items-center">
      {twitter} @ J o h a 2 n
    </Text>
  </CenteredSlide>
);
