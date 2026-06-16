import { Send } from 'lucide-react'
import { useState, ChangeEvent, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const services = [
    'UI/UX Design',
    'Mobile App Design',
    'WordPress Development',
    'Shopify Development',
    'Ecommerce Solutions',
    'Webflow Development',
    'Corporate Branding',
    'Digital Marketing',
    'SEO Services',
  ]

  return (
    <section className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Contact No.</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98XXXXX123"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Select Target Solutions</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
            required
          >
            <option value="">Choose a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Project Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none transition"
            required
          />
        </div>

        <button type="submit" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-primary-700">
          <Send size={20} />
          Submit →
        </button>
      </form>
    </section>
  )
}

