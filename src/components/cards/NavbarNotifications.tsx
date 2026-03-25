// src/components/cards/NavbarNotifications.tsx
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'
import notificationsData from '../../data/notifications.json'

interface Notification {
  id: string
  title: string
  description: string
  status?: string
  priority?: string
  icon?: string
  color?: string
  action_url?: string
  is_important?: boolean
  timestamp?: string
}

interface NavbarNotificationsProps {
  notifications?: Notification[]
  limit?: number
}

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

function dotColor(notification: Notification): string {
  if (notification.priority === 'critical') return 'bg-red status-dot-animated'
  if (notification.priority === 'high') return 'bg-orange status-dot-animated'
  if (notification.color === 'success') return 'bg-green'
  if (notification.color === 'danger') return 'bg-red'
  if (notification.color === 'warning') return 'bg-yellow'
  if (notification.status === 'unread') return 'bg-blue status-dot-animated'
  return ''
}

export function NavbarNotifications({
  notifications = notificationsData as Notification[],
  limit = 5,
}: NavbarNotificationsProps) {
  const items = notifications.slice(0, limit)
  const unreadCount = notifications.filter(n => n.status === 'unread').length

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <h3 className="card-title">
          Notifications
          {unreadCount > 0 && (
            <span className="badge bg-red text-red-fg ms-2">{unreadCount}</span>
          )}
        </h3>
        <div className="btn-close ms-auto" data-bs-dismiss="dropdown" />
      </div>

      <div className="list-group list-group-flush list-group-hoverable">
        {items.map((n) => (
          <div key={n.id} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <span className={`status-dot d-block ${dotColor(n)}`} />
              </div>
              <div className="col text-truncate">
                <a href={n.action_url || '#'} className="text-body d-block fw-medium">
                  {n.title}
                </a>
                <div className="d-block text-secondary text-truncate mt-n1">
                  {n.description}
                </div>
              </div>
              <div className="col-auto text-secondary small">
                {n.timestamp ? timeAgo(n.timestamp) : ''}
              </div>
              {n.is_important && (
                <div className="col-auto">
                  <a href="#" className="list-group-item-actions show">
                    <Icon icon="star" color="yellow" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="col">
            <Button block text="Archive all" />
          </div>
          <div className="col">
            <Button block text="Mark all as read" />
          </div>
        </div>
      </div>
    </div>
  )
}