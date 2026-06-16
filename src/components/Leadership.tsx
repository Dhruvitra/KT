import { Linkedin, Twitter } from 'lucide-react'

export default function Leadership() {
  const team = [
    {
      name: 'Mr. Rutvik Kalasha',
      role: 'Founder & MD',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Visionary leader with 15+ years in tech industry',
    },
    {
      name: 'Mr. Keval Sardhara',
      role: 'Founder & MD',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Strategic innovator driving digital transformation',
    },
    {
      name: 'Mr. Dhruvik Vanol',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop',
      bio: 'Executive leader committed to excellence',
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Meet Our <span className="text-gradient">Visionary Leadership</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the talented team behind our success, driving innovation and excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="card-shadow bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-primary-500 hover:text-white transition text-gray-600">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-primary-500 hover:text-white transition text-gray-600">
                    <Twitter size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
