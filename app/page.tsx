import PageLayout from '@/components/layouts/PageLayout'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <PageLayout>
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Welcome to Your Next.js App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern starter template with TypeScript, Tailwind CSS, and best practices built-in.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card
            title="TypeScript First"
            description="Built with TypeScript for type safety and better developer experience."
          >
            <p className="text-sm text-muted-foreground">
              Enjoy full type safety across your entire application with comprehensive TypeScript support.
            </p>
          </Card>

          <Card
            title="Tailwind CSS 4"
            description="Styled with the latest version of Tailwind CSS for rapid UI development."
          >
            <p className="text-sm text-muted-foreground">
              Utility-first CSS framework with a custom design system for consistent styling.
            </p>
          </Card>

          <Card
            title="Production Ready"
            description="Optimized for performance and ready for deployment to Vercel."
          >
            <p className="text-sm text-muted-foreground">
              SEO optimized, fast loading, and following Next.js best practices out of the box.
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Built with Modern Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">N</span>
              </div>
              <span className="text-sm font-medium">Next.js 15</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">R</span>
              </div>
              <span className="text-sm font-medium">React 19</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">T</span>
              </div>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">T</span>
              </div>
              <span className="text-sm font-medium">Tailwind</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}