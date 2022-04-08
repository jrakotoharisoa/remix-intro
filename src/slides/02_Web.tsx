import { Appear, Box, FlexBox, Heading, Text } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';

export const Web = () => (
  <>
    <CenteredSlide>
      <FlexBox alignItems="flex-start">
        <Box>
          <Heading color="blue">Multi-Page app</Heading>
          <Appear>
            <Text textAlign="center">{'⚡️ Initial page load'}</Text>
            <Text textAlign="center">{'🔎 SEO'}</Text>
          </Appear>
        </Box>
        <Box>
          <Appear>
            <Heading color="green">Single-Page app</Heading>
          </Appear>
          <Appear>
            <Text textAlign="center">{'⚡️ Instant transition'}</Text>
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
      <Heading color="pink">Differences</Heading>
      <Appear>
        <Text>Seamless server and browser runtime</Text>
      </Appear>
      <Appear>
        <Text>Progressive enhancement</Text>
      </Appear>
      <Appear>
        <Text>Web fundamentals</Text>
      </Appear>
      <Appear>
        <Text>Run anywhere</Text>
      </Appear>
    </CenteredSlide>
  </>
);
