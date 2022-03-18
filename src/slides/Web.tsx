import { Appear, Box, FlexBox, Heading, Text } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';
import nextjs from '../images/nextjs-logo.svg';
import nuxtjs from '../images/nuxtjs-logo.svg';
import svelte from '../images/svelte-kit-logo.svg';
export const Web = () => (
  <>
    <CenteredSlide>
      <FlexBox>
        <Box>
          <Heading color="blue">Multi-page application</Heading>
          <Text textAlign="center">Sever side rendering</Text>
          <Text textAlign="center">{'=> SEO + Fast page load'}</Text>
        </Box>
        <Box>
          <Appear>
            <Heading color="green">Single-Page application</Heading>
            <Text textAlign="center">Instant page transition</Text>
            <Text textAlign="center">Dynamic page</Text>
          </Appear>
        </Box>
      </FlexBox>
      <Appear>
        <Heading color="yellow">Transitional application</Heading>
      </Appear>
    </CenteredSlide>
    <CenteredSlide>
      <FlexBox justifyContent="space-evenly" width="100%">
        <img src={nextjs} width="300px" alt="nextjs" />
        <img src={svelte} width="300px" alt="svelte" />
        <img src={nuxtjs} width="300px" alt="nuxt" />
      </FlexBox>
    </CenteredSlide>
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
        <Text>Can run anywhere</Text>
      </Appear>
    </CenteredSlide>
  </>
);
