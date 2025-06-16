import PageLayout from '@/components/layouts/PageLayout'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function Service2Page() {
  return (
    <PageLayout 
      title="Service 2" 
      description="Advanced features for growing businesses"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Transform Your Business</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our advanced service suite provides everything you need to scale your operations
            and stay ahead of the competition.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Real-time analytics and reporting</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Advanced automation capabilities</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Enterprise-grade security</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 dedicated support</span>
            </li>
          </ul>
          <div className="flex gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </div>
        </div>
        <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
            alt="Service illustration"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of businesses that trust our platform to power their growth.
        </p>
        <Button size="lg">Get Started Today</Button>
      </div>
    </PageLayout>
  )
}