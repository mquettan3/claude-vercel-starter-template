import { CardProps } from '@/types'

export default function Card({ 
  title, 
  description, 
  children, 
  className = '',
  footer 
}: CardProps) {
  return (
    <div className={`rounded-lg border bg-background shadow-sm ${className}`}>
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
      {footer && (
        <div className="border-t bg-muted/50 px-6 py-3">
          {footer}
        </div>
      )}
    </div>
  )
}