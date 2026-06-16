import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Process from '../components/Process'

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

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Trusted Clients / Logo carousel */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-sm text-gray-500 uppercase mb-4">Trusted Clients</h3>
        <div className="marquee">
          <div className="marquee-track">
            {clientLogos.flatMap((src, i) => (
              [0, 1].map((dup) => (
                <div key={`${i}-${dup}`} className="marquee-item">
                  <img src={src} alt={`Client ${i + 1}`} />
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <Services />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Working Process</h3>
        <Process />
      </section>
    </div>
  )
}
