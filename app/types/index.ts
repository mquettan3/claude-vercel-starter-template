export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  footer?: React.ReactNode
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface NavigationProps {
  items: NavItem[]
  className?: string
}

export interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}