import { Link, useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'

const serviceDetails: Record<string, { title: string; subtitle: string; overview: string; features: string[]; platformFocus: string; image: string; }>
  = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Design interfaces that delight and convert',
    overview: 'Our UI/UX design service focuses on user research, interaction design, and visual polish to create apps and web experiences that feel effortless and look premium.',
    features: ['User research & personas', 'Wireframing and interaction design', 'High-fidelity visual design', 'Usability testing & iteration', 'Brand-consistent design systems'],
    platformFocus: 'Web & Mobile UI/UX',
    image: '/clients/client3.svg',
  },
  'mobile-app-design': {
    title: 'Mobile App Design',
    subtitle: 'Build engaging mobile experiences for iOS and Android',
    overview: 'From concept to prototype, our mobile app design workflow delivers intuitive layouts, polished motion, and platform-specific design patterns that make your app feel native and easy to use.',
    features: ['Platform-specific interface design', 'Interaction and motion design', 'Prototyping for testing', 'App store-ready screens', 'Design handoff assets'],
    platformFocus: 'Android + iOS',
    image: '/clients/client4.svg',
  },
  'wordpress-development': {
    title: 'WordPress Development',
    subtitle: 'Custom WordPress sites built for growth',
    overview: 'We create scalable WordPress websites with custom themes, plugins, and performance optimization to support marketing, sales, and brand storytelling.',
    features: ['Custom theme development', 'Responsive page templates', 'Plugin integration', 'Speed and SEO optimization', 'Content migration support'],
    platformFocus: 'WordPress CMS',
    image: '/clients/client5.svg',
  },
  'shopify-development': {
    title: 'Shopify Development',
    subtitle: 'E-commerce stores designed to convert',
    overview: 'Our Shopify development service combines beautiful storefront design with seamless checkout experiences, ensuring your store looks professional and sells effectively.',
    features: ['Store setup and theme customization', 'Conversion-focused layout', 'Payment and shipping integration', 'App configuration', 'Ongoing store support'],
    platformFocus: 'Shopify eCommerce',
    image: '/clients/client6.svg',
  },
  'ecommerce-solutions': {
    title: 'Ecommerce Solutions',
    subtitle: 'Complete e-commerce systems for modern brands',
    overview: 'We deliver full e-commerce solutions that include product display, conversion optimization, order flows, and backend management so your online business can scale confidently.',
    features: ['Catalog strategy', 'Checkout experience design', 'Inventory and order workflows', 'Analytics and tracking', 'Retention and loyalty features'],
    platformFocus: 'Ecommerce Platforms',
    image: '/clients/client7.svg',
  },
  'webflow-development': {
    title: 'Webflow Development',
    subtitle: 'Pixel-perfect websites with no compromise',
    overview: 'Our Webflow development service turns designs into responsive, CMS-driven websites that load fast and are easy to manage without code.',
    features: ['Custom Webflow builds', 'CMS-driven content', 'Responsive interactions', 'Performance optimization', 'Editor training'],
    platformFocus: 'Webflow',
    image: '/clients/client8.svg',
  },
  'corporate-branding': {
    title: 'Corporate Branding',
    subtitle: 'Brand identity systems that make a statement',
    overview: 'We develop corporate branding that aligns your values, messaging, and visuals, helping you stand out in competitive markets with clarity and confidence.',
    features: ['Logo and visual identity', 'Brand messaging', 'Style guides', 'Print and digital assets', 'Brand launch support'],
    platformFocus: 'Brand Identity',
    image: '/clients/client1.svg',
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Marketing campaigns built to grow your audience',
    overview: 'Our digital marketing services include strategy, creative, and execution across channels so your business reaches the right customers with the right message.',
    features: ['Campaign strategy', 'Social and search ads', 'Content marketing', 'Email automation', 'Performance reporting'],
    platformFocus: 'Growth Marketing',
    image: '/clients/client2.svg',
  },
  'seo-services': {
    title: 'SEO Services',
    subtitle: 'Rank higher, attract more organic leads',
    overview: 'We help businesses improve search visibility with technical SEO, content strategy, and ongoing optimization that delivers sustainable traffic growth.',
    features: ['Technical site audit', 'Keyword research', 'On-page optimization', 'Content strategy', 'Link building support'],
    platformFocus: 'Search Optimization',
    image: '/kt.png',
  },
}

export default function ServiceDetail() {
  const { serviceSlug } = useParams()
  const service = serviceSlug ? serviceDetails[serviceSlug] : undefined

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <p className="mt-4 text-slate-600">Please choose from our available services.</p>
        <Link to="/services" className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-semibold">Back to Services</Link>
      </div>
    )
  }

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-8 py-16">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-[0.3em] text-primary-400">Service Detail</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{service.title}</h1>
          <p className="text-xl text-slate-600">{service.subtitle}</p>
          <p className="text-slate-600 leading-relaxed">{service.overview}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/services" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50">Back to Services</Link>
            <a href="#pricing" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-slate-900 font-semibold">View Plans</a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What’s included</h2>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-slate-600">
                <Check className="mt-1 text-primary-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary-50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Focus Area</h2>
          <p className="text-slate-700 leading-relaxed">{service.platformFocus}</p>
          <div className="mt-8 space-y-3">
            <div className="p-5 rounded-3xl bg-white border border-slate-200">
              <h3 className="font-semibold">Consultation</h3>
              <p className="text-slate-600 text-sm">Stakeholder alignment and project requirement definition.</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-slate-200">
              <h3 className="font-semibold">Delivery</h3>
              <p className="text-slate-600 text-sm">Design files, prototypes, and handoff documentation included.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="space-y-6">
        <h2 className="text-3xl font-bold">Plans & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold mb-4">Basic Pack</h3>
            <p className="text-slate-600 mb-4">Perfect for startups and small projects.</p>
            <div className="text-4xl font-extrabold mb-6">$100</div>
            <ul className="space-y-3 text-slate-600">
              <li>5 Screens</li>
              <li>Android or iPhone</li>
              <li>Image Format (JPG)</li>
              <li>Source File</li>
              <li>Unlimited Revisions</li>
              <li>2 Days Delivery</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-gradient-to-br from-slate-900 to-primary-600 text-white shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Standard Pack</h3>
            <p className="text-slate-200 mb-4">Best value for growing products.</p>
            <div className="text-4xl font-extrabold mb-6">$150</div>
            <ul className="space-y-3 text-slate-200">
              <li>10 Screens</li>
              <li>Both Platforms</li>
              <li>Full Assets</li>
              <li>Source Files</li>
              <li>Prototype</li>
              <li>Unlimited Revisions</li>
              <li>3 Days Delivery</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold mb-4">Premium Pack</h3>
            <p className="text-slate-600 mb-4">For enterprise experiences and full branding.</p>
            <div className="text-4xl font-extrabold mb-6">$250</div>
            <ul className="space-y-3 text-slate-600">
              <li>20 Screens</li>
              <li>Full Branding</li>
              <li>Full Assets</li>
              <li>Source Files</li>
              <li>Prototyping</li>
              <li>Unlimited Revisions</li>
              <li>5 Days Delivery</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-slate-900 font-semibold">Book A Free Consultation →</a>
        </div>
      </section>
    </div>
  )
}
