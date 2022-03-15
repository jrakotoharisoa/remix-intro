import { FlexBox, Heading, Stepper, Text } from 'spectacle';
import helloKent from '../images/hello-kent.gif';
import MJ from '../images/michael_jackson.jpeg';
import ossc from '../images/ossc.png';
import RF from '../images/ryan_florence.jpeg';
import { CenteredSlide } from '../theme/Slide';

export const RemixPresentation = () => {
  return (
    <>
      {/* <TransitionalApp /> */}
      <History />
    </>
  );
};

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
      <img src={helloKent} alt="hello kent" />
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="green">End of 2021</Heading>
      <Heading>🎉 REMIX V1</Heading>
      <Text textAlign="center">MIT LICENSE</Text>
    </CenteredSlide>
  </>
);
