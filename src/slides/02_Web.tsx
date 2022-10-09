import { Appear, FlexBox, Heading, Text } from 'spectacle';
import { TopSlide } from '../theme/Slide';
import mpa from '../images/schema-mp-app.svg';
import spa from '../images/schema-sp-app.svg';
import transitionalApp from '../images/schema-transitional-app.svg';
export const Web = () => (
  <>
    <TopSlide>
      <Heading color="blue">Multi-Page app</Heading>
      <img className="h-1/2" src={mpa} alt="multi page application schema" />
      <Appear>
        <FlexBox>
          <Text textAlign="center">{'⚡️ Initial page load'}</Text>
          <Text textAlign="center">{'🤭 Work without JS'}</Text>
          <Text textAlign="center">{'🔎 SEO'}</Text>
        </FlexBox>
      </Appear>
    </TopSlide>
    <TopSlide>
      <Heading color="green">Single-Page app</Heading>
      <img className="h-1/2" src={spa} alt="single page application schema" />
      <Appear>
        <Text textAlign="center">{'⚡️ Smooth transition'}</Text>
      </Appear>
    </TopSlide>
    <TopSlide>
      <Heading color="yellow">✨ Transitional app</Heading>
      <img
        className="h-1/2"
        src={transitionalApp}
        alt="transitional application schema"
      />
      <Appear>
        <Text textAlign="center">{'👋 Hi Remix !'}</Text>
      </Appear>
    </TopSlide>
    {/* <CenteredSlide>
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
    </CenteredSlide> */}
    {/* <CenteredSlide>
      <FlexBox justifyContent="space-evenly" width="100%">
        <img src={nextjs} width="300px" alt="nextjs" />
        <img src={svelte} width="300px" alt="svelte" />
        <img src={nuxtjs} width="300px" alt="nuxt" />
      </FlexBox>
    </CenteredSlide> */}
    <TopSlide>
      <Heading color="pink">Differences</Heading>
      {/* <Grid gridTemplateColumns="1fr 1fr"> */}
        <Appear>
          <Text textAlign="center">
            Seamless 
            server and browser runtime
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="center">
            Progressive enhancement
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="center">Web fundamentals</Text>
        </Appear>
      {/* </Grid> */}
    </TopSlide>
  </>
);
