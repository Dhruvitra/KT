import { Microscope, Lightbulb, Palette as PaletteIcon, Code } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Research',
      description: 'Dive deep into understanding business workflows and user needs.',
      icon: Microscope,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '2',
      title: 'Strategy',
      description: 'Building precise architectural roadmaps and strategic plans.',
      icon: Lightbulb,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '3',
      title: 'Design',
      description: 'Delivering user-centric, pixel-perfect UI/UX layouts.',
      icon: PaletteIcon,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '4',
      title: 'Development',
      description: 'Engineering clean, scalable code architectures.',
      icon: Code,
      color: 'bg-primary-100 text-primary-600',
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our <span className="text-gradient">Working Process</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We follow a proven methodology to ensure project success at every stage
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-primary-400 to-transparent transform translate-x-full -z-10"></div>
                )}

                <div className="card-shadow bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-4 text-2xl font-bold`}>
                    {step.number}
                  </div>
                  <div className={`absolute top-6 right-6 ${step.color} p-3 rounded-full`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
