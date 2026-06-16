import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
      <p className="text-gray-600 mb-8">Explore our wide range of digital services crafted for modern businesses.</p>

      <Services />
    </div>
  )
}
