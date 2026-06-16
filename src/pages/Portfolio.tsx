const portfolioItems = [
  { title: 'Cro8 Exhibits', category: 'WordPress Development' },
  { title: 'Locad', category: 'WordPress Development' },
  { title: 'Baystreet Research', category: 'Wix Development' },
  { title: 'Guidelign', category: 'Ecommerce Website' },
  { title: 'Branta Shop', category: 'Corporate Identity' },
  { title: 'Mobile App Design', category: 'UI/UX Design' },
  { title: 'Digital Marketing', category: 'SEO' },
  { title: 'Logo Design', category: 'Graphic Design' },
]

export default function Portfolio() {
  return (
    <div className="bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              Our Work
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              All Portfolio
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              We are passionate about helping our clients achieve their goals. Check all Portfolio.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-slate-200 w-full max-w-3xl h-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(44,82,130,0.35),_transparent_40%),linear-gradient(135deg,_#eef2ff_0%,_#e2e8f0_100%)]" />
            <div className="absolute inset-0 opacity-100 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=700&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" />
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <span className="inline-flex rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em]">
                Featured Case Study
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight">Premium product experience design for enterprise brands</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <article key={item.title} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="h-72 bg-[radial-gradient(circle_at_top,rgba(44,82,130,0.22),transparent_50%),linear-gradient(180deg,_#e2e8f0_0%,_#ffffff_100%)] flex items-end p-6">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Project Preview</div>
                  <div className="mt-4 h-36 w-full rounded-3xl bg-slate-200 shadow-inner flex items-center justify-center text-slate-400 text-sm font-semibold">
                    UI Preview {index + 1}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white px-6 py-5 sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-primary-600 font-semibold">{item.category}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white transition duration-300 group-hover:scale-110">
                    →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
