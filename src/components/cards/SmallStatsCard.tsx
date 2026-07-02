// src/components/cards/SmallStatsCard.tsx
// Matches shared/includes/cards/small-stats.html exactly
import { clsx } from 'clsx'
import { Icon, BaseCard } from '../ui'

interface SmallStatsCardProps {
  icon?: string
  color?: string
  lt?: boolean
  title?: string
  description?: string
  className?: string
}

export function SmallStatsCard({
  icon,
  color = 'primary',
  lt = false,
  title = '1700',
  description = 'Users',
  className,
}: SmallStatsCardProps) {
  const avatarClass = clsx(
    icon && color && `bg-${color}${lt ? '-lt' : ' text-white'}`,
    'avatar avatar-square'
  )

  return (
    <BaseCard size="sm" className={className}>
      <div className="card-body">
        <div className="row align-items-center">
          {icon && (
            <div className="col-auto">
              <span className={avatarClass}>
                <Icon icon={icon} />
              </span>
            </div>
          )}
          <div className="col">
            <div className="fw-medium">{title}</div>
            <div className="text-secondary">{description}</div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
