import { FlexBox, Heading, Stepper, Text } from 'spectacle';
import helloKent from '../images/hello-kent.gif';
import MJ from '../images/michael_jackson.jpeg';
import nextLogo from '../images/nextjs-logo.svg';
import ossc from '../images/ossc.png';
import RF from '../images/ryan_florence.jpeg';
import svelteKit from '../images/svelte-kit-logo.svg';
import { Quote } from '../theme/Quote';
import { CenteredSlide } from '../theme/Slide';
export const RemixAlternatives = () => (
  <CenteredSlide>
    <div className="flex space-x-10">
      <img src={nextLogo} alt="nextjs" width="300px" />
      <img src={svelteKit} alt="svelteKit" width="300px" />
    </div>
  </CenteredSlide>
);

export const RemixPresentation = () => {
  return (
    <>
      <TransitionalApp />
      <History />
    </>
  );
};

const TransitionalApp = () => (
  <>
    <CenteredSlide>
      <div className="flex space-x-10">
        <img src={nextLogo} alt="nextjs" width="300px" />
        <img src={svelteKit} alt="svelteKit" width="300px" />
      </div>
    </CenteredSlide>
    <CenteredSlide>
      <Quote source="https://kit.svelte.dev/">
        All the <span className="text-blue-400">SEO</span> and{' '}
        <span className="text-blue-400">progressive enhancement</span> of a{' '}
        <span className="text-blue-400">server-rendered app</span>, with the{' '}
        <span className="text-green-400">slick navigation</span> of an{' '}
        <span className="text-green-400">SPA</span>
      </Quote>
    </CenteredSlide>
  </>
);

const History = () => (
  <>
    <CenteredSlide>
      <Heading color="yellow">The beginning...</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Heading>
        <span className="text-green-400">2020</span> Start working on Remix
      </Heading>
      <FlexBox>
        <div>
          <img className="m-auto w-48 rounded-full" src={RF} alt="RF" />
          <Text>Ryan Florence</Text>
        </div>
        <div>
          <img className="m-auto w-48 rounded-full" src={MJ} alt="MJ" />
          <Text>Michael Jackson</Text>
        </div>
      </FlexBox>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="yellow">October 2020</Heading>
      <Heading>Launch of "supporter preview"</Heading>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="green">End of 2021</Heading>
      <Stepper
        alwaysVisible
        values={[
          <>
            <Heading>Seed funding: $3M </Heading>
            <img src={ossc} alt="ossc" className="m-auto w-1/3" />
          </>,
          <img src={helloKent} alt="hello kent" />,
          <>
            <Heading>🎉 REMIX V1</Heading>
            <Text textAlign="center">MIT LICENCE</Text>
          </>,
        ]}
      >
        {(value: any) => value}
      </Stepper>
    </CenteredSlide>
  </>
);
