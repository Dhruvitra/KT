import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="w-full bg-slate-950 text-slate-300">
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Kshetrajna Technologies LLP</h3>
            <p className="text-slate-400 leading-relaxed">
              A full-service agency delivering premium digital products, branding, and software development for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-primary-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500 transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-slate-400 mb-4 text-sm">Subscribe for project insights, portfolio updates, and agency news.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-primary-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-white font-semibold hover:bg-primary-700 transition"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <button
                  key={idx}
                  className="h-11 w-11 rounded-full bg-slate-800 text-slate-300 hover:bg-primary-600 hover:text-white transition flex items-center justify-center"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-3 md:flex-row items-center justify-between text-sm text-slate-400">
          <span>© 2026 Kshetrajna Technologies LLP. All rights reserved.</span>
          <span>GSTIN: 24ABBFK4173C1ZR</span>
        </div>
      </div>
    </footer>
  )
}
