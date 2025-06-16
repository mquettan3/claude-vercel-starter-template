import { PageLayoutProps } from '@/types'
import Navigation from '@/components/ui/Navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '#',
    children: [
      { label: 'Service 1', href: '/services/service-1' },
      { label: 'Service 2', href: '/services/service-2' },
    ]
  },
  { label: 'Contact', href: '/contact' },
]

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation items={navItems} />
      <main className="flex-grow">
        {(title || description) && (
          <div className="bg-muted/50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
              {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
              {description && <p className="text-lg text-muted-foreground">{description}</p>}
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <footer className="bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}