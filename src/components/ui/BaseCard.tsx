// src/components/ui/BaseCard.tsx
import { clsx, type ClassValue } from 'clsx';
import type { ReactNode } from 'react';

export interface BaseCardProps {
  children: ReactNode;
  className?: ClassValue;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * BaseCard - A reusable base component for all Tabler cards
 * Provides consistent card structure with size variants
 */
export function BaseCard({ children, className, size = 'md' }: BaseCardProps) {
  const cardClasses = clsx('card', {
    'card-sm': size === 'sm',
    'card-lg': size === 'lg',
  }, className);
  
  return <div className={cardClasses}>{children}</div>;
}
