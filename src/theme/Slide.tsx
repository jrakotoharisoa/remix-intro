import { Slide as SpectacleSlide } from 'spectacle';

export const Slide: React.FC = ({ children, ...props }) => (
  <SpectacleSlide backgroundColor="darkGray" {...props}>
    {children}
  </SpectacleSlide>
);
