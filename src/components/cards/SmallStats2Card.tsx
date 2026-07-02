import { clsx } from 'clsx';
import { useTrend } from '../../hooks';
import { Icon, BaseCard } from '../ui';

interface SmallStats2CardProps {
  title?: string;
  count?: string;
  growth?: number;
  description?: string;
  icon?: string;
  color?: string;
  light?: boolean;
}

export function SmallStats2Card({
  title = 'Customers',
  count = '1,850',
  growth = 0,
  description = 'Since last month',
  icon = 'users',
  color,
  light,
}: SmallStats2CardProps) {
  const { trendColor, trendIcon, absValue } = useTrend(growth);
  
  const avatarClass = clsx(
    'float-end avatar',
    color && `bg-${color}${light ? '-lt' : ' text-white'}`
  );
  
  return (
    <BaseCard>
      <div className="card-body">
        <span className={avatarClass}>
          <Icon icon={icon} />
        </span>
        <div className="text-secondary fw-normal mt-0">{title}</div>
        <h3 className="h2 mt-2 mb-3">{count}</h3>
        <p className="mb-0 text-secondary">
          <span className={`text-${trendColor} me-1`}>
            {trendIcon} {growth !== 0 ? `${absValue}%` : ''}
          </span>
          <span className="text-nowrap">{description}</span>
        </p>
      </div>
    </BaseCard>
  );
}
