import { Box, FlexBox, Progress } from 'spectacle';

export const Template = () => (
  <FlexBox justifyContent="center" position="absolute" bottom={0} width={1}>
    <Box>
      <Progress />
    </Box>
  </FlexBox>
);
