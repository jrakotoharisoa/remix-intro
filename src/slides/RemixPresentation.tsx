import { FlexBox, Heading, Text } from 'spectacle';
import helloKent from '../images/hello-kent.gif';
import MJ from '../images/michael_jackson.jpeg';
import RF from '../images/ryan_florence.jpeg';
import { Quote } from '../theme/Quote';
import { CenteredSlide } from '../theme/Slide';

export const RemixPresentation = () => {
  return (
    <>
      <TransitionalApp />
      <History />
    </>
  );
};

const History = () => (
  <>
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
      <Heading color="green">End of 2021</Heading>
      <img src={helloKent} alt="hello kent" />
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="green">End of 2021</Heading>
      <Heading>🎉 REMIX V1</Heading>
      <Text textAlign="center">MIT LICENSE</Text>
    </CenteredSlide>
  </>
);

const TransitionalApp = () => (
  <>
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
