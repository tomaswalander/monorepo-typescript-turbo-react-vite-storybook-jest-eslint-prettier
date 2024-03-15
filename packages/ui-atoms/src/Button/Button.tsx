import { type FC } from 'react'

interface Props {
  primary?: boolean
  size?: 'small' | 'large'
  label?: string
  onClick?: () => void
}

export const Button: FC<Props> = ({
  primary = false,
  label = 'Boop',
  size = 'small',
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: primary ? 'red' : 'blue',
        fontSize: size === 'large' ? '24px' : '14px',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
