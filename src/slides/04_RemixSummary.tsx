import { Appear, Heading, Text } from 'spectacle';
import { CenteredSlide, TopSlide } from '../theme/Slide';

type BadgeType = 'UI' | 'WEB' | 'UX';

const badgeConfigs: Record<BadgeType, { label: string; color: string }> = {
  UI: { label: 'Focus on user interface', color: 'bg-yellow-400' },
  WEB: { label: 'Based on Web fundamentals', color: 'bg-green-400' },
  UX: {
    label: 'Fast, slick, and resilient UX',
    color: 'bg-blue-400',
  },
};

export const Badge: React.FC<{
  className?: string;
  type: BadgeType;
}> = ({ className, type }) => {
  const badge = badgeConfigs[type];
  return (
    <div
      className={`nowrap m-5 inline-block rounded p-3 text-4xl font-bold uppercase text-black ${badge.color} ${className}`}
    >
      {badge.label}
    </div>
  );
};

export const RemixSummary = () => (
  <>
    <TopSlide>
      <Heading color="blue">Other cool stuff</Heading>
      <Text textAlign="center">Errors handling by route</Text>
      <Text textAlign="center">Race conditions handling</Text>
      <Text textAlign="center">Optimistic UI</Text>
      <Text textAlign="center">etc.</Text>
    </TopSlide>
    <CenteredSlide>
      <Heading textAlign="center">
        <a href="https://remix.run/docs">
        remix.run<span className="text-red-400">/docs</span>
        </a>
      </Heading>
      <Appear>
        <Heading textAlign="center">
          <a href="https://remix.run/blog/remix-stacks">
          remix.run/blog<span className="text-green-400">/remix-stacks</span>
          </a>
        </Heading>
      </Appear>
    </CenteredSlide>
  </>
);
