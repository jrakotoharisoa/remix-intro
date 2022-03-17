import { Code } from '../theme/CodePane';
import { Slide } from '../theme/Slide';
import me from '../images/me.jpeg';

export const Myself = () => (
  <Slide>
    <div className="m-auto w-1/2 space-y-12 overflow-hidden text-center">
      <img className="m-auto w-48 rounded-full" src={me} alt="me" />
      <Code language="typescript" showLineNumbers>
        {`
      const me = {
        name: 'Johann Rakotoharisoa',
        job: 'Software engineer',
        company: 'Comet Meetings'
        twitter: '@Joha2n',
        github: 'https://github.com/jrakotoharisoa'
      };
      `}
      </Code>
    </div>
  </Slide>
);
