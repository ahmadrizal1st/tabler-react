import { type ReactNode } from 'react'
import { clsx } from 'clsx'
import { Navbar } from '../components/layout/Navbar'
import { Sidebar } from '../components/layout/Sidebar'
import { PageHeader } from '../components/layout/PageHeader'
import { Footer } from '../components/layout/Footer'

interface BaseLayoutProps {
  children: ReactNode
  sidebar?: boolean
  sidebarDark?: boolean
  sidebarEnd?: boolean
  hideTopbar?: boolean
  navbarCondensed?: boolean
  navbarOverlap?: boolean
  navbarDark?: boolean
  navbarSticky?: boolean
  navbarTransparent?: boolean
  navbarHideBrand?: boolean
  navbarHideMenu?: boolean
  navbarClass?: string
  wrapperFull?: boolean
  noContainer?: boolean
  containerCentered?: boolean
  containerClass?: string
  pageTitle?: string
  pagePretitle?: React.ReactNode
  pageDescription?: string
  pageActions?: ReactNode
  bodyClass?: string
  dir?: 'ltr' | 'rtl'
}

export default function BaseLayout({
  children,
  sidebar = false,
  sidebarDark,
  sidebarEnd,
  hideTopbar,
  navbarCondensed,
  navbarOverlap,
  navbarDark,
  navbarSticky,
  navbarTransparent,
  navbarHideBrand,
  navbarClass,
  wrapperFull,
  noContainer,
  containerCentered,
  containerClass,
  pageTitle,
  pagePretitle,
  pageDescription,
  pageActions,
  dir,
}: BaseLayoutProps) {
  const containerClasses = clsx(
    'container-xl',
    containerCentered && 'my-auto',
    containerClass
  )

  return (
    <div className="page" dir={dir}>
      {sidebar && (
        <Sidebar dark={sidebarDark} end={sidebarEnd} />
      )}

      {!hideTopbar && (
        <Navbar
          condensed={navbarCondensed || sidebar}
          overlap={navbarOverlap}
          dark={navbarDark}
          sticky={navbarSticky}
          transparent={navbarTransparent}
          hideBrand={navbarHideBrand || sidebar}
          className={navbarClass}
        />
      )}

      <div className={clsx('page-wrapper', wrapperFull && 'page-wrapper-full')}>
        <PageHeader
          title={pageTitle}
          pretitle={pagePretitle}
          description={pageDescription}
          actions={pageActions}
          className={clsx((navbarOverlap && navbarDark) && 'text-white')}
        />

        <main id="content" className="page-body">
          {wrapperFull || noContainer ? (
            children
          ) : (
            <div className={containerClasses}>
              {children}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}