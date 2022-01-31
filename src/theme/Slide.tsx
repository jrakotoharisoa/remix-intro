import { Slide as SpectacleSlide, SlideTransition } from 'spectacle';
type SlideProps = { transition?: SlideTransition };
export const Slide: React.FC<SlideProps> = ({ children, ...props }) => (
  <SpectacleSlide backgroundColor="darkGray" {...props}>
    {children}
  </SpectacleSlide>
);

export const CenteredSlide: React.FC<SlideProps> = ({ children, ...props }) => (
  <Slide {...props}>
    <div className="flex h-full flex-col items-center justify-center">
      {children}
    </div>
  </Slide>
);
