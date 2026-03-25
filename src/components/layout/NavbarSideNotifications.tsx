import { Icon } from '../ui/Icon'
import { NavbarNotifications } from '../cards/NavbarNotifications'
import notificationsData from '../../data/notifications.json'

export function NavbarSideNotifications() {
    const unreadCount = (notificationsData as any[]).filter(n => n.status === 'unread').length

    return (
        <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
                href="#"
                className="nav-link px-0"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                tabIndex={-1}
                aria-label="Show notifications"
            >
                <Icon icon="bell" />
                {unreadCount > 0 && (
                    <span className="badge badge-dot bg-red" />
                )}
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                <NavbarNotifications />
            </div>
        </div>
    )
}
