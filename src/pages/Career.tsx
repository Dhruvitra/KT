export default function Career() {
  const openings = ['Graphics Designer','Business Development Executive','Sr. UI/UX Designer','Interns/Fresher WordPress Developer','Jr. Shopify Developer','SEO Executive']

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-4xl font-bold mb-6">Explore Growth Opportunities</h1>

      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({length:4}).map((_,i)=>(
            <div key={i} className="h-36 bg-gray-100 rounded-2xl flex items-center justify-center">Collage {i+1}</div>
          ))}
        </div>
      </div>

      <div className="mb-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4">Perks And Benefits</h3>
          <p className="text-gray-600 mb-4">Flexible Time, Extensive Training, Competitive Compensation and more.</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Flexible Time</li>
            <li>• Extensive Training</li>
            <li>• Competitive Compensation</li>
            <li>• Health Benefits</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4">Openings</h3>
          <div className="space-y-3">
            {openings.map((o, idx) => (
              <div key={idx} className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-semibold">{o}</div>
                  <div className="text-sm text-gray-500">Location: Remote / Onsite</div>
                </div>
                <button className="text-primary-600">Apply</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Hiring Roadmap</h3>
        <ol className="space-y-3">
          {['Application Review','Initial Screening','Skill Assessment','Interview Round','Final Discussion','Offer Rollout'].map((s, i) => (
            <li key={i} className="p-4 bg-white rounded-2xl shadow-md">{i+1}. {s}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
