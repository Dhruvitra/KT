import { useState } from 'react'
import Leadership from '../components/Leadership'

export default function About() {
  const [tab, setTab] = useState<'mission' | 'vision'>('mission')

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Journey Of Kshetrajna Technologies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-200">
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => setTab('mission')}
                className={`px-5 py-3 rounded-full font-semibold transition ${tab === 'mission' ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setTab('vision')}
                className={`px-5 py-3 rounded-full font-semibold transition ${tab === 'vision' ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Our Vision
              </button>
            </div>

            <div className="text-slate-700 text-lg leading-relaxed">
              {tab === 'mission' ? (
                <p>We deliver reliable, scalable software and digital experiences that help businesses grow.</p>
              ) : (
                <p>To be the most trusted technology partner for businesses seeking digital transformation and growth.</p>
              )}
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
          <div className="h-80 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop')] bg-cover bg-center" />
          <div className="absolute left-6 bottom-6 rounded-full bg-primary-600 px-5 py-3 text-white font-semibold shadow-xl">
            12+ Years of Expertise
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership</h2>
        <Leadership />
      </div>
    </div>
  )
}
