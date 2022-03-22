import { Appear, Box, FlexBox, Heading, Text } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';

export const Web = () => (
  <>
    <CenteredSlide>
      <FlexBox>
        <Box>
          <Heading color="blue">Multi-page app</Heading>
          <Text textAlign="center">Sever side rendering</Text>
          <Text textAlign="center">{'=> SEO + Fast page load'}</Text>
        </Box>
        <Box>
          <Appear>
            <Heading color="green">Single-Page app</Heading>
            <Text textAlign="center">Instant page transition</Text>
            <Text textAlign="center">Dynamic page</Text>
          </Appear>
        </Box>
      </FlexBox>
      <Appear>
        <Heading color="yellow">✨ Transitional app</Heading>
      </Appear>
    </CenteredSlide>
    {/* <CenteredSlide>
      <FlexBox justifyContent="space-evenly" width="100%">
        <img src={nextjs} width="300px" alt="nextjs" />
        <img src={svelte} width="300px" alt="svelte" />
        <img src={nuxtjs} width="300px" alt="nuxt" />
      </FlexBox>
    </CenteredSlide> */}
    <CenteredSlide>
      <Heading color="pink">Difference</Heading>
      <Appear>
        <Text>Seamless server and browser runtime</Text>
      </Appear>
      <Appear>
        <Text>Progressive enhancement</Text>
      </Appear>
      <Appear>
        <Text>Work with web fundamentals</Text>
      </Appear>
      <Appear>
        <Text>Run anywhere</Text>
      </Appear>
    </CenteredSlide>
  </>
);
