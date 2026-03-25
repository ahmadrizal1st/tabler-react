// src/components/cards/ActivityCard.tsx
import { ActivityFeed } from '../parts/ActivityFeed'

interface ActivityItem {
  text: string
}

interface Person {
  id?: number | string
  full_name?: string
  photo?: string
  company?: string
}

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
