import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from './kt.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const serviceItems = [
    'UI/UX Design',
    'Mobile App Design',
    'WordPress Development',
    'Shopify Development',
    'Ecommerce',
    'Webflow Development',
    'Corporate Branding',
    'Digital Marketing',
    'SEO',
  ]

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} title="Kshetrajna Technologies LLP" alt="Kshetrajna logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">Kshetrajna</div>
            <div className="text-sm text-primary-600 font-semibold">Technologies LLP</div>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Link to="/" className="text-slate-700 hover:text-primary-600 transition font-medium">Home</Link>
          <Link to="/about" className="text-slate-700 hover:text-primary-600 transition font-medium">About Us</Link>

          <div className="relative group">
            <button className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition font-medium">
              Services
              <ChevronDown size={18} />
            </button>
            <div className="absolute left-0 mt-3 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
              {serviceItems.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="block px-4 py-2 text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition rounded-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/portfolio" className="text-slate-700 hover:text-primary-600 transition font-medium">Portfolio</Link>
          <Link to="/blog" className="text-slate-700 hover:text-primary-600 transition font-medium">Blog</Link>
          <Link to="/career" className="text-slate-700 hover:text-primary-600 transition font-medium">Career</Link>
          <Link to="/contact" className="text-slate-700 hover:text-primary-600 transition font-medium">Contact Us</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden xl:inline-flex items-center justify-center rounded-full border border-primary-600 px-5 py-3 text-primary-600 font-semibold transition hover:bg-primary-50"
          >
            Get Quote →
          </Link>

          <button
            className="xl:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 p-4 space-y-3">
          <Link to="/" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">Home</Link>
          <Link to="/about" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">About Us</Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full text-slate-700 hover:text-primary-600 transition font-medium py-2"
          >
            Services
            <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-2">
              {serviceItems.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="block text-slate-600 hover:text-primary-600 transition text-sm py-1"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          <Link to="/portfolio" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">Portfolio</Link>
          <Link to="/blog" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">Blog</Link>
          <Link to="/career" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">Career</Link>
          <Link to="/contact" className="block text-slate-700 hover:text-primary-600 transition font-medium py-2">Contact Us</Link>

          <Link to="/contact" className="block w-full rounded-full border border-primary-600 px-5 py-3 text-center text-primary-600 font-semibold transition hover:bg-primary-50">
            Get Quote →
          </Link>
        </div>
      )}
    </nav>
  )
}
