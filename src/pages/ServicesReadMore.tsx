import { useState } from 'react'
import { Palette, Smartphone, Code, ShoppingCart, Package, Zap, Briefcase, BarChart3, Search, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting beautiful and intuitive user interfaces that users love.',
    icon: Palette,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Mobile App Design',
    description: 'Designing stunning mobile experiences for iOS and Android.',
    icon: Smartphone,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'WordPress Development',
    description: 'Building powerful WordPress websites with custom functionality.',
    icon: Code,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Shopify Development',
    description: 'Creating high-converting e-commerce stores on Shopify platform.',
    icon: ShoppingCart,
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-600',
  },
  {
    title: 'Ecommerce Solutions',
    description: 'Complete e-commerce solutions tailored to your business needs.',
    icon: Package,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Webflow Development',
    description: 'Responsive, visually stunning websites without coding limitations.',
    icon: Zap,
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    title: 'Corporate Branding',
    description: 'Building strong brand identities that resonate with your audience.',
    icon: Briefcase,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive growth and engagement.',
    icon: BarChart3,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'SEO Services',
    description: 'Optimization strategies to boost your online visibility and rankings.',
    icon: Search,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
]

const pricing = [
  {
    name: 'Basic Pack',
    price: '$100',
    features: ['5 Screens', 'Android or iPhone', 'Image Format (JPG)', 'Source File', 'Unlimited Revisions', '2 Days Delivery'],
  },
  {
    name: 'Standard Pack',
    price: '$150',
    features: ['10 Screens', 'Both Platforms', 'Full Assets', 'Source Files', 'Prototype', 'Unlimited Revisions', '3 Days Delivery'],
  },
  {
    name: 'Premium Pack',
    price: '$250',
    features: ['20 Screens', 'Full Branding', 'Full Assets', 'Source Files', 'Prototyping', 'Unlimited Revisions', '5 Days Delivery'],
  },
]

export default function ServicesReadMore() {
  const [selectedPlan, setSelectedPlan] = useState(pricing[1].name)

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-8 py-16">
      <section className="bg-primary-600 text-white rounded-3xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 lg:p-16">
          <div>
            <p className="uppercase text-sm tracking-[0.3em] text-sky-200 mb-4">Service Detail</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">All Services & Pricing</h1>
            <p className="mt-6 text-slate-100 max-w-2xl leading-relaxed">Explore our full portfolio of digital solutions, read detailed service information, and choose the pricing plan that fits your project requirements.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/services" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20">Back to Services</Link>
              <a href="#pricing" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-slate-900 font-semibold">Jump to Pricing</a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Selected Plan</h2>
            <div className="space-y-3">
              <p className="text-slate-600">Choose a package below and see the selected price highlighted in the pricing matrix.</p>
              <div className="flex flex-col gap-3">
                {pricing.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full text-left rounded-2xl px-4 py-4 border ${selectedPlan === plan.name ? 'border-primary-600 bg-primary-50' : 'border-slate-200 bg-slate-50'} transition`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{plan.name}</span>
                      <span className="font-bold text-lg">{plan.price}</span>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{plan.features[0]}, {plan.features[1]}, {plan.features[2]}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">All Services</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Every service we provide is designed to help your business grow online, from conversion-focused design to technical development and marketing support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.bgColor} ${service.iconColor} mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-5">{service.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <Link to="/services/read-more" className="text-primary-600 font-semibold hover:text-primary-700">Read More →</Link>
                  <span className="rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-xs font-semibold">Detail</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="pricing" className="space-y-6">
        <h2 className="text-3xl font-bold">Pricing Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-6 transition ${selectedPlan === plan.name ? 'border-primary-600 bg-primary-50 shadow-lg' : 'border-slate-200 bg-white'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {selectedPlan === plan.name && <span className="text-sm font-semibold text-primary-600">Selected</span>}
              </div>
              <div className="text-4xl font-extrabold mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-6 text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 text-primary-600" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full rounded-2xl px-4 py-3 font-semibold transition ${selectedPlan === plan.name ? 'bg-primary-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                {selectedPlan === plan.name ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-slate-600 mb-4">Selected package: <span className="font-semibold text-slate-900">{selectedPlan}</span></p>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-slate-900 font-semibold">Book A Free Consultation →</a>
        </div>
      </section>
    </div>
  )
}
