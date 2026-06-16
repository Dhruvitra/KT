import { Palette, Smartphone, Code, ShoppingCart, Package, Zap, Briefcase, BarChart3, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces that users love.',
      icon: Palette,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      slug: 'ui-ux-design',
    },
    {
      title: 'Mobile App Design',
      description: 'Designing stunning mobile experiences for iOS and Android.',
      icon: Smartphone,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      slug: 'mobile-app-design',
    },
    {
      title: 'WordPress Development',
      description: 'Building powerful WordPress websites with custom functionality.',
      icon: Code,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      slug: 'wordpress-development',
    },
    {
      title: 'Shopify Development',
      description: 'Creating high-converting e-commerce stores on Shopify platform.',
      icon: ShoppingCart,
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-600',
      slug: 'shopify-development',
    },
    {
      title: 'Ecommerce Solutions',
      description: 'Complete e-commerce solutions tailored to your business needs.',
      icon: Package,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      slug: 'ecommerce-solutions',
    },
    {
      title: 'Webflow Development',
      description: 'Responsive, visually stunning websites without coding limitations.',
      icon: Zap,
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      slug: 'webflow-development',
    },
    {
      title: 'Corporate Branding',
      description: 'Building strong brand identities that resonate with your audience.',
      icon: Briefcase,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      slug: 'corporate-branding',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive growth and engagement.',
      icon: BarChart3,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      slug: 'digital-marketing',
    },
    {
      title: 'SEO Services',
      description: 'Optimization strategies to boost your online visibility and rankings.',
      icon: Search,
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      slug: 'seo-services',
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-gradient">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="card-shadow bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgColor} ${service.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition inline-flex items-center gap-1"
                >
                  Read More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
