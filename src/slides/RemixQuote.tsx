import { Quote } from '../theme/Quote';
import { CenteredSlide } from '../theme/Slide';

export const RemixQuote = () => {
  return (
    <CenteredSlide>
      <div className="w-1/2">
        <Quote source="https://remix.run">
          Remix is a full stack web framework that lets you{' '}
          <span className="text-yellow-400">focus on the user interface</span>{' '}
          and{' '}
          <span className="text-green-400">
            work back through web fundamentals
          </span>{' '}
          to deliver a{' '}
          <span className="text-blue-400">
            fast, slick, and resilient user experience
          </span>
          .
          <br />
          People are gonna love using your stuff.
        </Quote>
      </div>
    </CenteredSlide>
  );
};
