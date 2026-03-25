import { clsx } from 'clsx'
import { NavbarSideTheme } from './NavbarSideTheme'
import { NavbarSideNotifications } from './NavbarSideNotifications'
import { NavbarSideApps } from './NavbarSideApps'
import { NavbarSideLanguage } from './NavbarSideLanguage'
import { NavbarSideUser } from './NavbarSideUser'
import { Icon } from '../ui/Icon'

interface NavbarSideProps {
  breakpoint?: string
  condensed?: boolean
  personId?: number
  hideUsername?: boolean
  dark?: boolean
  showTheme?: boolean
  showNotifications?: boolean
  showApps?: boolean
  showLanguage?: boolean
  showUser?: boolean
  showSponsor?: boolean
  className?: string
}

export function NavbarSide({
  breakpoint = 'md',
  condensed,
  personId = 1,
  hideUsername,
  dark,
  showTheme = true,
  showNotifications = true,
  showApps = true,
  showLanguage = true,
  showUser = true,
  showSponsor,
  className,
}: NavbarSideProps) {
  const classes = clsx('navbar-nav', 'flex-row', className)

  const sponsorClasses = clsx(
    'nav-item',
    `d-none d-${breakpoint}-flex`,
    'me-3'
  )

  const toolsClasses = clsx(
    `d-none d-${breakpoint}-flex`,
    'me-3'
  )

  return (
    <div className={classes}>
      {(showSponsor || !condensed) && (
        <div className={sponsorClasses}>
          <div className="btn-list">
            <a href="https://github.com/sponsors/codecalm" className="btn btn-outline-white" target="_blank" rel="noreferrer">
              <Icon icon="heart" className="text-pink me-2" /> Sponsor
            </a>
          </div>
        </div>
      )}

      {(showTheme || showNotifications || showApps || showLanguage) && (
        <div className={toolsClasses}>
          {showTheme && <NavbarSideTheme />}
          {showNotifications && <NavbarSideNotifications />}
          {showApps && <NavbarSideApps />}
          {showLanguage && <NavbarSideLanguage />}
        </div>
      )}

      {showUser && (
        <NavbarSideUser
          personId={personId}
          hideUsername={hideUsername}
          dark={dark}
        />
      )}
    </div>
  )
}
