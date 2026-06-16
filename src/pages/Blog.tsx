import { CalendarDays } from 'lucide-react'

const posts = [
  { title: 'Why Website Maintenance Is The Silent Hero Of Business Growth', date: 'June 2026' },
  { title: 'UI/UX Design: Beyond Aesthetics & Building Customer Trust', date: 'May 2026' },
  { title: 'How To Optimize Product Pages For More Sales', date: 'May 2026' },
  { title: 'No-Code vs Low-Code Vs Pro Code: Where Webflow Fits In', date: 'April 2026' },
  { title: 'Essential ECommerce Web Design Trends For Modern Businesses', date: 'April 2026' },
  { title: 'What Is The Difference Between Front-End and Back-End Development?', date: 'March 2026' },
  { title: 'SearchGPT Vs Google Search Comparison – Analytics and Outcomes', date: 'March 2026' },
  { title: 'WordPress SEO Settings Checklist: The Complete Guide', date: 'February 2026' },
  { title: 'ECommerce Design Trends: Creating The Best Corporate Platform', date: 'February 2026' },
  { title: "How Web Hosting Affects Your Website's Performance And SEO", date: 'January 2026' },
  { title: 'How To Choose A Web Design Company For Your Project', date: 'January 2026' },
  { title: 'Best WordPress Plugins Every Business Website Must Have', date: 'December 2025' },
]

export default function Blog() {
  return (
    <div className="bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            Blog & News
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Welcome To Our Blog: Discover, Learn, And Share
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The latest insights on design, development, marketing, and digital strategy for businesses ready to grow.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article key={index} className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="h-52 bg-[linear-gradient(135deg,_rgba(44,82,130,0.3)_0%,_rgba(226,232,240,0.9)_100%)] flex items-end p-5">
                <div className="rounded-3xl bg-slate-950/10 p-2 text-sm text-slate-800">Article {index + 1}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                  <span className="font-medium text-slate-700">Kshetrajna Technologies</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <CalendarDays size={18} />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Practical guidance for modern teams who want to build better digital experiences and measurable outcomes.
                </p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 transition">
                  Read More &gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
