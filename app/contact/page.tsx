'use client'

import { useState } from 'react'
import PageLayout from '@/components/layouts/PageLayout'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted! Check console for details.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with our team"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Send us a message">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <div>
          <Card title="Other ways to reach us">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-muted-foreground">
                  123 Main Street<br />
                  Suite 100<br />
                  Anytown, ST 12345
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}