import { Appear, Box, FlexBox, Grid, Heading, Text } from 'spectacle';
import { CenteredSlide } from '../theme/Slide';

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
    <CenteredSlide>
      <Heading color="blue">Other cool stuff</Heading>
      <Grid gridTemplateColumns="1fr 1fr">
        <Text textAlign="center">Error handling by route</Text>
        <Text textAlign="center">Metadata by route</Text>
        <Text textAlign="center">Optimistic UI</Text>
        <Text textAlign="center">User sessions</Text>
      </Grid>
      <Text textAlign="center">etc.</Text>
    </CenteredSlide>
    <CenteredSlide>
      <FlexBox>
        <Box>
          <Heading color="red">Docs</Heading>
          <Text textAlign="center">
            <a href="https://remix.run/docs">https://remix.run/docs</a>
          </Text>
        </Box>
        <Box>
          <Appear>
            <Heading color="green">Remix Stacks</Heading>
            <Text textAlign="center">
              <a href="https://remix.run/blog/remix-stacks">
                https://remix.run/blog/remix-stacks
              </a>
            </Text>
          </Appear>
        </Box>
      </FlexBox>
    </CenteredSlide>
  </>
);
