import PageLayout from '@/components/layouts/PageLayout'
import Card from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about our mission and values"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead">
          This starter template is designed to help developers quickly bootstrap modern web applications
          with the best tools and practices in the React ecosystem.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p>
          To provide a solid foundation for building scalable, type-safe, and performant web applications
          while maintaining developer happiness and productivity.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card title="Developer Experience">
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Hot module replacement</li>
              <li>TypeScript auto-completion</li>
              <li>ESLint configuration</li>
              <li>Tailwind IntelliSense</li>
            </ul>
          </Card>
          
          <Card title="Production Ready">
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Optimized builds</li>
              <li>SEO friendly</li>
              <li>Performance focused</li>
              <li>Deployment ready</li>
            </ul>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
        <p>
          Built with the latest versions of industry-standard tools and frameworks,
          ensuring your application stays modern and maintainable.
        </p>
      </div>
    </PageLayout>
  )
}