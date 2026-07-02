// src/components/cards/UserCard.tsx
import { Avatar, BaseCard } from '../ui'
import { clsx } from 'clsx'

import type { Person } from '../../types'

interface UserCardProps {
  person?: Person
  right?: boolean
  className?: string
}

export function UserCard({ person, right, className }: UserCardProps) {
  if (!person) return null

  const avatarEl = (
    <div className="col-auto">
      <Avatar person={person} className="rounded" />
    </div>
  )

  const cardClasses = clsx('card-link', className)

  return (
    <a className="card-link" href="#">
      <BaseCard className={cardClasses}>
        <div className="card-body">
          <div className="row">
            {!right && avatarEl}
            <div className="col">
              <div className="fw-medium">{person.full_name}</div>
              <div className="text-secondary">{person.job_title}</div>
            </div>
            {right && avatarEl}
          </div>
        </div>
      </BaseCard>
    </a>
  )
}
