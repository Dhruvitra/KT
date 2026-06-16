import { Briefcase, CheckCircle, Award, Users } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      number: '2,500+',
      label: 'Projects Done',
      icon: Briefcase,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '100%',
      label: 'Success Rate',
      icon: CheckCircle,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '15+',
      label: 'Awards',
      icon: Award,
      color: 'bg-primary-100 text-primary-600',
    },
    {
      number: '1,500+',
      label: 'Happy Clients',
      icon: Users,
      color: 'bg-primary-100 text-primary-600',
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="card-shadow bg-white p-8 text-center hover:scale-105 transition-transform"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
