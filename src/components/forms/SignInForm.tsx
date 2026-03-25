import React from 'react';
import { Icon } from '../ui/Icon';

interface SignInFormProps {
  onSubmit?: (e: React.FormEvent) => void;
  forgotPasswordHref?: string;
}

export function SignInForm({
  onSubmit,
  forgotPasswordHref = '/forgot-password'
}: SignInFormProps) {
  return (
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="your@email.com"
          autoComplete="off"
        />
      </div>

      <div className="mb-2">
        <label className="form-label">
          Password
          <span className="form-label-description">
            <a href={forgotPasswordHref}>I forgot password</a>
          </span>
        </label>
        <div className="input-group input-group-flat">
          <input
            type="password"
            className="form-control"
            placeholder="Your password"
            autoComplete="off"
          />
          <span className="input-group-text">
            <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
              <Icon icon="eye" />
            </a>
          </span>
        </div>
      </div>

      <div className="mb-2">
        <label className="form-check">
          <input type="checkbox" className="form-check-input" />
          <span className="form-check-label">
            Remember me on this device
          </span>
        </label>
      </div>

      <div className="form-footer">
        <button type="submit" className="btn btn-primary w-100">
          Sign in
        </button>
      </div>
    </form>
  );
}
