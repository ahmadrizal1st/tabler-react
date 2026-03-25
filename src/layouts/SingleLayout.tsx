// src/layouts/SingleLayout.tsx
import { NavbarLogo } from '../components/layout/NavbarLogo'

interface SingleLayoutProps {
  children: React.ReactNode
  containerSize?: 'tight' | 'narrow' | 'sm' | 'md' | 'lg' | 'slim'
  hideLogo?: boolean
  centered?: boolean
}

export default function SingleLayout({
  children,
  containerSize = 'tight',
  hideLogo,
  centered = true,
}: SingleLayoutProps) {
  return (
    <div className={`page ${centered ? 'page-center' : ''}`}>
      <div className={`container container-${containerSize} py-4`}>
        {!hideLogo && (
          <div className="text-center mb-4">
            <NavbarLogo
              showTitle />
          </div>
        )}
        {children}
      </div>
    </div>
  )
}