import { useTrend } from '../../hooks';
import { BaseCard } from '../ui';

interface SmallStats3CardProps {
  number?: string | number;
  title?: string;
  percentage?: number;
}

export function SmallStats3Card({
  number = '0',
  title = 'Stat',
  percentage = 0,
}: SmallStats3CardProps) {
  const { trendColor, trendIcon, absValue } = useTrend(percentage);
  
  const trendTextColor = percentage > 0 ? 'text-green' : percentage < 0 ? 'text-red' : '';
  
  return (
    <BaseCard>
      <div className="card-body p-2 text-center">
        <div className={`text-end ${trendTextColor}`}>
          {trendIcon} {percentage !== 0 ? `${absValue}%` : ''}
        </div>
        <div className="h1 m-0">{number}</div>
        <div className="text-secondary mb-3">{title}</div>
      </div>
    </BaseCard>
  );
}
