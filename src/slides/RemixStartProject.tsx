import { Appear, FlexBox, Heading, Text } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';
import remixPlatforms from '../images/remix-platforms.png';
import { Code } from '../theme/CodePane';
import { Badge } from './RemixSummary';

export const RemixStartProject = () => {
  return (
    <>
      <CenteredSlide>
        <div className="w-2/3">
          <Code language="typescript" className="mb-3" showLineNumbers={false}>
            $ npx create-remix@latest
          </Code>
        </div>
      </CenteredSlide>
      <CenteredSlide>
        <div className="w-2/3">
          <img src={remixPlatforms} alt="screenshot remix platform" />
          <FlexBox alignItems="center" flexDirection="column">
            <Appear>
              <Text textAlign="center">
                Just a server HTTP Handler <br />
                built on top of{' '}
                <span className="text-green-400">Web Fetch API</span>
                <br /> instead of Node.js{' '}
              </Text>
            </Appear>
          </FlexBox>
        </div>
      </CenteredSlide>
    </>
  );
};
