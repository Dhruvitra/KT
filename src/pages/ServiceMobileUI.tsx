import { useState } from 'react'
import { ChevronRight, Star, Check } from 'lucide-react'

const clientLogos = [
  '/clients/client1.svg',
  '/clients/client2.svg',
  '/clients/client3.svg',
  '/clients/client4.svg',
  '/clients/client5.svg',
  '/clients/client6.svg',
  '/clients/client7.svg',
  '/clients/client8.svg',
]

export default function ServiceMobileUI() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="bg-[url('/clients/client1.svg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold">Mobile App UI UX Design</h1>
            <p className="mt-4 max-w-xl text-slate-200">We craft intuitive and visually appealing mobile app UI/UX designs that enhance user engagement and deliver seamless experiences.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold shadow-md hover:opacity-95" href="#services">
                Explore Services <ChevronRight className="ml-3" />
              </a>
              <a className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10" href="#pricing">Plans and Pricing →</a>
            </div>
          </div>

          <div className="lg:justify-self-end w-full">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg mx-auto lg:mx-0">
              <h3 className="font-semibold text-slate-800">Request a Quote</h3>
              <p className="text-sm text-slate-500">Tell us briefly about your project</p>
              <form className="mt-4 space-y-3">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full border rounded-lg px-3 py-2" />
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Id" className="w-full border rounded-lg px-3 py-2" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Contact No." className="w-full border rounded-lg px-3 py-2" />
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What can we do for you?" className="w-full border rounded-lg px-3 py-2 h-24" />
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">Captcha: 12 + 6 = ?</div>
                  <button type="button" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold">Submit →</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients & Scope */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-sm text-gray-500 uppercase mb-4">Trusted Clients</h3>
        <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
          {clientLogos.map((src, i) => (
            <img key={i} src={src} alt={`client-${i}`} className="h-12 object-contain grayscale opacity-80" />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-b from-white to-white/90 p-6 rounded-2xl border">
            <h4 className="text-2xl font-bold mb-2">Service Overview</h4>
            <p className="text-slate-600">Our user-centric approach focuses on research, wireframing, prototyping and iterative testing to ensure designs that resonate with your users. We balance aesthetics with usability to deliver measurable engagement improvements.</p>
            <div className="mt-6">
              <a className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold" href="#contact">Book A Free Consultation →</a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border flex items-start gap-4">
              <div className="p-2 bg-primary-50 rounded-md"><Check className="text-primary-600" /></div>
              <div>
                <h5 className="font-semibold">Wireframing & Prototyping</h5>
                <p className="text-sm text-slate-600">Transform ideas into interactive prototypes for validation.</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border flex items-start gap-4">
              <div className="p-2 bg-primary-50 rounded-md"><Check className="text-primary-600" /></div>
              <div>
                <h5 className="font-semibold">Android App Design</h5>
                <p className="text-sm text-slate-600">Designs focused on Android conventions and user flows.</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border flex items-start gap-4">
              <div className="p-2 bg-primary-50 rounded-md"><Check className="text-primary-600" /></div>
              <div>
                <h5 className="font-semibold">iOS App Design</h5>
                <p className="text-sm text-slate-600">Elegant interfaces aligned with Apple Human Interface Guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-3xl font-bold mb-6">Plans and Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Basic Pack</h4>
              <div className="text-2xl font-extrabold">$100</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>5 Screens</li>
              <li>Android or iPhone</li>
              <li>Image Format (JPG)</li>
              <li>Source File</li>
              <li>Unlimited Revisions</li>
              <li>2 Days Delivery</li>
            </ul>
            <div className="mt-6">
              <a className="inline-flex items-center px-4 py-2 rounded-lg border border-primary-600 text-primary-600 font-semibold" href="#contact">Book A Free Consultation →</a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Standard Pack</h4>
              <div className="text-2xl font-extrabold">$150</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>10 Screens</li>
              <li>Both Platforms</li>
              <li>Full Assets</li>
              <li>Source Files & Prototype</li>
              <li>Unlimited Revisions</li>
              <li>3 Days Delivery</li>
            </ul>
            <div className="mt-6">
              <a className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold" href="#contact">Book A Free Consultation →</a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Premium Pack</h4>
              <div className="text-2xl font-extrabold">$250</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>20 Screens</li>
              <li>Full Branding & Assets</li>
              <li>Source Files</li>
              <li>Prototyping</li>
              <li>Unlimited Revisions</li>
              <li>5 Days Delivery</li>
            </ul>
            <div className="mt-6">
              <a className="inline-flex items-center px-4 py-2 rounded-lg border border-primary-600 text-primary-600 font-semibold" href="#contact">Book A Free Consultation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Portfolio */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <img src="/clients/client2.svg" alt="team" className="w-full rounded-2xl object-cover" />
          <div>
            <h3 className="text-2xl font-bold">Why Choose Us</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-center gap-3"><Check className="text-primary-600" /> Expertise in Adobe Photoshop, XD, Figma, and InVision</li>
              <li className="flex items-center gap-3"><Check className="text-primary-600" /> User research and testing driven approach</li>
              <li className="flex items-center gap-3"><Check className="text-primary-600" /> Rapid prototyping and iteration</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-2xl font-bold mb-4">Our Recent Works</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border p-4 flex flex-col items-center">
                <img src="/kt.png" alt={`work-${i}`} className="h-40 object-contain mb-4" />
                <div className="text-lg font-semibold">Project {i + 1}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold" href="/portfolio">View All Portfolio →</a>
          </div>
        </div>
      </section>

      {/* Testimonials & FAQ */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-2xl font-bold">Testimonials</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border">
                <div className="flex items-center gap-3">
                  <div className="text-xl font-semibold">Wei J.</div>
                  <div className="flex items-center text-yellow-400"><Star /><Star /><Star /><Star /><Star /></div>
                </div>
                <p className="mt-2 text-slate-600">"Excellent design sensibilities and quick turnaround. Delivered exactly what we needed."</p>
              </div>
              <div className="p-4 bg-white rounded-xl border">
                <div className="flex items-center gap-3">
                  <div className="text-xl font-semibold">Gian Leiroy R.</div>
                  <div className="flex items-center text-yellow-400"><Star /><Star /><Star /><Star /><Star /></div>
                </div>
                <p className="mt-2 text-slate-600">"Professional team, great communication, and polished designs."</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">FAQ</h4>
            <div className="space-y-2">
              {[
                'What is mobile app design, and why is it important?',
                'Do you offer design services for both Android and iOS?',
                'How long does it take to design an app?'
              ].map((q, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <button className="w-full text-left px-4 py-3 flex items-center justify-between" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    <span className="font-medium">{q}</span>
                    <ChevronRight className={`transition-transform ${faqOpen === i ? 'rotate-90' : ''}`} />
                  </button>
                  {faqOpen === i && <div className="px-4 py-3 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
