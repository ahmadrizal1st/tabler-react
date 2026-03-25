import { Icon } from './Icon'

interface AvatarUploadProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

export function AvatarUpload({
  size,
  className,
}: AvatarUploadProps) {
  const classes = [
    'avatar',
    'avatar-upload',
    size ? `avatar-${size}` : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <a href="#" className={classes}>
      <Icon icon="plus" />
    </a>
  )
}
