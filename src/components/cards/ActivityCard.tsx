// src/components/cards/ActivityCard.tsx
import { ActivityFeed } from '../parts/ActivityFeed'
import type { Person, ActivityItem } from '../../types'

interface ActivityCardProps {
  activity?: ActivityItem[]
  people?: Person[]
  limit?: number
}

export function ActivityCard({
  activity = [],
  people = [],
  limit = 40,
}: ActivityCardProps) {
  return (
    <div className="card" style={{ height: '28rem' }}>
      <div className="card-body card-body-scrollable card-body-scrollable-shadow">
        <ActivityFeed activity={activity} people={people} limit={limit} />
      </div>
    </div>
  )
}
