import { clsx } from 'clsx'
import { Icon } from '../ui/Icon'

interface FooterProps {
  version?: string
  docsUrl?: string
  githubUrl?: string
  githubSponsorsUrl?: string
  siteTitle?: string
  className?: string
}

export function Footer({
  version,
  docsUrl = 'https://tabler.io/docs',
  githubUrl = 'https://github.com/tabler/tabler',
  githubSponsorsUrl = 'https://github.com/sponsors/codecalm',
  siteTitle = 'Tabler',
  className,
}: FooterProps) {
  return (
    <footer className={clsx('footer', 'footer-transparent', 'd-print-none', className)}>
      <div className="container-xl">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto">
            <nav aria-label="Footer">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  <a href={docsUrl} target="_blank" className="link-secondary" rel="noopener">
                    Documentation
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/license" className="link-secondary">License</a>
                </li>
                <li className="list-inline-item">
                  <a href={githubUrl} target="_blank" className="link-secondary" rel="noopener">
                    Source code
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={githubSponsorsUrl} target="_blank" className="link-secondary" rel="noopener">
                    <Icon icon="heart" inline filled color="pink" />
                    {' '}Sponsor
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright &copy; {new Date().getFullYear()}{' '}
                <a href="/" className="link-secondary">{siteTitle}</a>.
                All rights reserved.
              </li>
              {version && (
                <li className="list-inline-item">
                  <a href="/changelog" className="link-secondary" rel="noopener">
                    v{version}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}