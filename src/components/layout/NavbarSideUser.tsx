import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { Icon } from '../ui/Icon'
import { Avatar } from '../ui/Avatar'
import peopleData from '../../data/people.json'

import type { Person } from '../../types'

interface NavbarSideUserProps {
  personId?: number
  hideUsername?: boolean
  dark?: boolean
}

export function NavbarSideUser({
  personId = 1,
  hideUsername,
  dark,
}: NavbarSideUserProps) {
  const people = peopleData as Person[]
  const person = people[personId - 1] ?? people[0]

  return (
    <div className="nav-item dropdown">
      <a
        href="#"
        className="nav-link d-flex lh-1 text-reset p-0"
        data-bs-toggle="dropdown"
        aria-label="Open user menu"
      >
        <Avatar person={person} size="sm" />
        {!hideUsername && (
          <div className="d-none d-xl-block ps-2">
            <div>{person.full_name}</div>
            <div className="mt-1 small text-secondary">{person.job_title}</div>
          </div>
        )}
      </a>
      <div
        className={clsx('dropdown-menu', 'dropdown-menu-end', 'dropdown-menu-arrow')}
        {...(dark ? { 'data-bs-theme': 'light' } : {})}
      >
        <Link to="/profile" className="dropdown-item">
          <Icon icon="user" className="dropdown-item-icon" /> Profile
        </Link>
        <Link to="#" className="dropdown-item">
          <Icon icon="chart-pie" className="dropdown-item-icon" /> Analytics
        </Link>
        <div className="dropdown-divider" />
        <Link to="/settings" className="dropdown-item">
          Settings & Privacy
        </Link>
        <Link to="#" className="dropdown-item">
          Help
        </Link>
        <Link to="/sign-in" className="dropdown-item">
          Sign out
        </Link>
      </div>
    </div>
  )
}
