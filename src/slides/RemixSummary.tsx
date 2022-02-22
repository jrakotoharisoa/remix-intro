import { CenteredSlide } from '../theme/Slide';

type BadgeType = 'UI' | 'WEB' | 'UX';

const badgeConfigs: Record<
  BadgeType,
  { label: string; color: 'yellow' | 'green' | 'blue' }
> = {
  UI: { label: 'Focus on user interface', color: 'yellow' },
  WEB: { label: 'Web fundamentals', color: 'green' },
  UX: { label: 'Fast, slick, and resilient UX', color: 'blue' },
};

export const Badge: React.FC<{
  className?: string;
  type: BadgeType;
}> = ({ className, type }) => {
  const badge = badgeConfigs[type];
  return (
    <div
      className={`nowrap m-5 inline-block rounded p-3 text-xl font-bold uppercase text-white bg-${badge.color}-400 ${className}`}
    >
      {badge.label}
    </div>
  );
};

export const RemixSummary: React.FC = () => (
  <CenteredSlide>
    <Badge type="UI" />
    <Badge type="WEB" />
    <Badge type="UX" />
  </CenteredSlide>
);
