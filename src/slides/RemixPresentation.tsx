import { Appear, FlexBox, Grid, Heading, Text } from 'spectacle';
import helloKent from '../images/hello-kent.gif';
import MJ from '../images/michael_jackson.jpeg';
import RF from '../images/ryan_florence.jpeg';
import { Code } from '../theme/CodePane';
import { CenteredSlide } from '../theme/Slide';

export const History = () => (
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

export const WhatIsIt: React.FC = () => (
  <>
    <CenteredSlide>
      <Heading>What is Remix ?</Heading>
    </CenteredSlide>

    <CenteredSlide>
      <Heading color="blue">Compiler</Heading>
      <Text>Server HTTP Handler</Text>
      <Text>Browser build</Text>
      <Text>{'An asset manifest representing dependency graph'}</Text>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="green">Server HTTP Handler</Heading>
      <Text textAlign="center">
        Built on top of <span className="text-green-400">Web Fetch API</span>
      </Text>
      <Text>Run on non-Node.js server like Cloudflare workers</Text>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="pink">Server Framework</Heading>
      <Text>Route = view + controller</Text>
      <Text>Focus on UI not on model</Text>
      <Text>Server side rendering</Text>
    </CenteredSlide>
    <CenteredSlide>
      <Heading color="yellow">Browser Framework</Heading>
      <Text>Page hydratation with browser build</Text>
      <Text>Benefit of SPA</Text>
    </CenteredSlide>
  </>
);
