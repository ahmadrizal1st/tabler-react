import { clsx } from 'clsx'
import { Icon } from './Icon'
import type { ReactNode } from 'react'

const defaultIcons: Record<string, string> = {
  success: 'check',
  warning: 'alert-triangle',
  danger: 'alert-circle',
  info: 'info-circle',
}

export interface AlertProps {
  type?: 'success' | 'warning' | 'danger' | 'info'
  icon?: string
  title?: string
  important?: boolean
  minor?: boolean
  showClose?: boolean
  avatar?: boolean
  className?: string
  onClose?: () => void
  children?: ReactNode
  description?: string
  list?: string[]
  action?: string
  link?: { text: string; href: string }
  buttons?: ReactNode
}

export function Alert({
  type = 'success',
  icon,
  title,
  important,
  minor,
  showClose,
  avatar,
  className,
  onClose,
  children,
  description,
  list,
  action,
  link,
  buttons,
}: AlertProps) {
  const resolvedIcon = icon || defaultIcons[type]

  const classes = clsx(
    'alert',
    important ? 'alert-important' : minor && 'alert-minor',
    `alert-${type}`,
    showClose && 'alert-dismissible',
    avatar && 'alert-avatar',
    className
  )

  return (
    <div className={classes} role="alert">
      {resolvedIcon && (
        <div className="alert-icon">
          <Icon icon={resolvedIcon} className="alert-icon" />
        </div>
      )}

      <div>
        {title && <h4 className="alert-heading">{title}</h4>}
        {description && <div className="alert-description">{description}</div>}
        {list && (
          <ul className="alert-list">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {action && (
          <a href="#" className="alert-action">
            {action}
          </a>
        )}
        {link && (
          <a href={link.href} className="alert-link">
            {link.text}
          </a>
        )}
        {children}
        {buttons && <div className="btn-list">{buttons}</div>}
      </div>

      {showClose && (
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="close"
        />
      )}
    </div>
  )
}

export function AlertAction({
  children,
  href,
  onClick,
  className,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}) {
  const classes = clsx('alert-action', className)

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export function AlertLink({
  children,
  href,
  className,
}: {
  children: ReactNode
  href: string
  className?: string
}) {
  return (
    <a href={href} className={clsx('alert-link', className)}>
      {children}
    </a>
  )
}

export function AlertList({ children }: { children: ReactNode }) {
  return <ul className="alert-list">{children}</ul>
}

export function AlertListItem({ children }: { children: ReactNode }) {
  return <li>{children}</li>
}

export function AlertButtons({ children }: { children: ReactNode }) {
  return <div className="btn-list">{children}</div>
}
