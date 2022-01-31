import { Slide as SpectacleSlide } from 'spectacle';
export const Slide: React.FC = ({ children, ...props }) => (
  <SpectacleSlide backgroundColor="darkGray" {...props}>
    {children}
  </SpectacleSlide>
);

export const CenteredSlide: React.FC = ({ children, ...props }) => (
  <Slide {...props}>
    <div className="flex h-full flex-col items-center justify-center">
      {children}
    </div>
  </Slide>
);
