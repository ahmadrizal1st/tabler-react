import { clsx } from 'clsx'
import { Icon } from './Icon'

interface TrendingProps {
  value?: number
  className?: string
}

export function Trending({ value = 0, className }: TrendingProps) {
  const isPositive = value > 0
  const isZero = value === 0
  const color = isPositive ? 'green' : isZero ? 'muted' : 'red'
  const icon = isPositive ? 'arrow-up' : isZero ? 'minus' : 'arrow-down'

  const classes = clsx(
    `text-${color}`,
    'd-inline-flex',
    'align-items-center',
    'lh-1',
    className
  )

  return (
    <span className={classes}>
      {value}% <Icon icon={icon} className="ms-0" size="sm" />
    </span>
  )
}