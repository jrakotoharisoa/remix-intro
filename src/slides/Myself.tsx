import { Code } from '../theme/CodePane';
import { Slide } from '../theme/Slide';
import me from '../images/me.jpeg';
import cometLieu from '../images/comet-lieu.jpg';

export const Myself = () => (
  <Slide>
    <img
      className="absolute h-full w-full"
      style={{ zIndex: -1 }}
      src={cometLieu}
      alt="comet"
    />
    <div className="z-0 flex w-2/3 space-x-12 overflow-hidden p-5 text-center">
      <img className="m-auto w-48 rounded-full" src={me} alt="me" />
      <Code language="typescript" showLineNumbers={false}>
        {`
const me = {
  name: 'Johann Rakotoharisoa',
  job: 'Software engineer',
  company: 'Comet Meetings',
  twitter: '@Joha2n',
  github: 'https://github.com/jrakotoharisoa'
};
      `}
      </Code>
    </div>
  </Slide>
);
