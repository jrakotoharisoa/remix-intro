import { Heading } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';

export const Demo: React.FC = () => {
  return (
    <CenteredSlide>
      <Heading>
        Remix Routes
        <br />
       
        <a
          className="hover:text-blue-400"
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
        >
          💿 Demo
        </a>
      </Heading>
    </CenteredSlide>
  );
};
