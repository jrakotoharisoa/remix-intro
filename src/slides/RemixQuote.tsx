import { Quote } from '../theme/Quote';
import { CenteredSlide } from '../theme/Slide';

const transition = {
  from: {
    opacity: 0,
    transform: 'rotate(45deg)',
  },
  enter: {
    opacity: 1,
    transform: 'rotate(0)',
  },
  leave: {
    opacity: 0,
    transform: 'rotate(315deg)',
  },
};
export const RemixQuote = () => {
  return (
    <CenteredSlide transition={transition}>
      <Quote source="https://remix.run">
        Remix is a{' '}
        <span className="text-blue-400">full stack web framework</span> that
        lets you{' '}
        <span className="text-yellow-400">focus on the user interface</span> and{' '}
        <span className="text-green-400">
          work back through web fundamentals
        </span>{' '}
        to deliver a fast, slick, and resilient user experience.
        <br />
        <span className="text-red-400">
          People are gonna love using your stuff.
        </span>
      </Quote>
    </CenteredSlide>
  );
};
