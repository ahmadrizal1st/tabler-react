import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface DropdownProps {
  children?: ReactNode
  className?: string
  mainBtn?: string
  options?: string[]
}

interface DropdownToggleProps {
  children: ReactNode
  className?: string
  element?: 'button' | 'a'
  href?: string
  onClick?: () => void
  disabled?: boolean
}

interface DropdownMenuProps {
  children: ReactNode
  className?: string
  align?: 'start' | 'end'
  dark?: boolean
}

interface DropdownItemProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  active?: boolean
  disabled?: boolean
}

export function Dropdown({ children, className, mainBtn, options }: DropdownProps) {
  if (mainBtn && options) {
    return (
      <div className={clsx('dropdown', className)}>
        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
          {mainBtn}
        </button>
        <div className="dropdown-menu">
          {options.map((option, i) => (
            <a key={i} href="#" className="dropdown-item">
              {option}
            </a>
          ))}
        </div>
      </div>
    )
  }
  return <div className={clsx('dropdown', className)}>{children}</div>
}

Dropdown.Toggle = function DropdownToggle({
  children,
  className,
  element: Element = 'button',
  href = '#',
  onClick,
  disabled,
}: DropdownToggleProps) {
  const classes = clsx('btn', 'dropdown-toggle', className)

  if (Element === 'a') {
    return (
      <a
        href={href}
        className={classes}
        data-bs-toggle="dropdown"
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      data-bs-toggle="dropdown"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Dropdown.Menu = function DropdownMenu({
  children,
  className,
  align = 'start',
  dark,
}: DropdownMenuProps) {
  const classes = clsx(
    'dropdown-menu',
    align !== 'start' && 'dropdown-menu-end',
    className
  )
  return (
    <div
      className={classes}
      {...(dark ? { 'data-bs-theme': 'dark' } : {})}
    >
      {children}
    </div>
  )
}

Dropdown.Item = function DropdownItem({
  children,
  href,
  onClick,
  className,
  active,
  disabled,
}: DropdownItemProps) {
  const classes = clsx('dropdown-item', active && 'active', className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Dropdown.Divider = function DropdownDivider() {
  return <div className="dropdown-divider" />
}

Dropdown.Header = function DropdownHeader({ children }: { children: ReactNode }) {
  return <h6 className="dropdown-header">{children}</h6>
}
