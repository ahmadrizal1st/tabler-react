// src/components/cards/SignUpCard.tsx
import { Icon } from '../ui/Icon'

interface SignUpCardProps {
  title?: string
  onSubmit?: (e: React.FormEvent) => void
}

export function SignUpCard({
  title = 'Create new account',
  onSubmit,
}: SignUpCardProps) {
  return (
    <div className="card card-md">
      <div className="card-body">
        <h2 className="h2 text-center mb-4">{title}</h2>

        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group input-group-flat">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="off"
              />
              <span className="input-group-text">
                <a href="#" className="link-secondary" title="Show password">
                  <Icon icon="eye" />
                </a>
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-check">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label">
                Agree to the{' '}
                <a href="#" tabIndex={-1}>terms and policy</a>.
              </span>
            </label>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary w-100">
              Create new account
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-secondary mt-3">
        Already have an account?{' '}
        <a href="/sign-in" tabIndex={-1}>Sign in</a>
      </div>
    </div>
  )
}