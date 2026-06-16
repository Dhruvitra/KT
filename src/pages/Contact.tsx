import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 uppercase tracking-[0.15em]">
              Contact Us
            </span>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              How do we help ?
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Reach out to our team for a custom consultation, project estimate, or technical strategy discussion.
            </p>
            <div className="rounded-3xl bg-primary-700 p-8 text-white shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <div>
                  <p className="text-slate-200 mb-1">Mo:</p>
                  <p className="font-semibold">+91 9726459356</p>
                </div>
                <div>
                  <p className="text-slate-200 mb-1">Email:</p>
                  <p className="font-semibold break-words">kshetrajnatechnologies@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-200 mb-1">Address:</p>
                  <p className="font-semibold leading-relaxed">
                    323/1 - 37, Bhaktinagar-1, Bhabhan Road, Malani Vadi, Botad, Bhavnagar, Botad, Gujarat, India, 364710
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-2xl">
          <div className="h-[520px] bg-[radial-gradient(circle_at_top,_rgba(44,_82,_130,_0.16),transparent_40%),linear-gradient(180deg,_#e2e8f0_0%,_#f8fafc_100%)] p-8">
            <div className="h-full w-full rounded-[1.75rem] bg-[url('https://images.unsplash.com/photo-1483721310020-03333e577078?w=1800&h=900&fit=crop')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-slate-950/15" />
              <div className="absolute inset-x-8 bottom-8 rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-primary-700">Office Location</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Botad, Gujarat</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  A premium workspace positioned to support enterprise-grade digital services and client collaboration across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
