import { FlexBox, Slide as SpectacleSlide } from 'spectacle';
export const Slide: React.FC = ({ children, ...props }) => (
  <SpectacleSlide backgroundColor="darkGray" {...props}>
    {children}
  </SpectacleSlide>
);

export const CenteredSlide: React.FC = ({ children, ...props }) => (
  <Slide {...props}>
    <FlexBox
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      height="100%"
    >
      {children}
    </FlexBox>
  </Slide>
);

export const TopSlide: React.FC = ({ children, ...props }) => (
  <Slide {...props}>
    <FlexBox
      alignItems="center"
      flexDirection="column"
      justifyContent="flex-start"
      height="100%"
    >
      {children}
    </FlexBox>
  </Slide>
);
