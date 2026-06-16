export default function Hero() {
  return (
    <section className="w-full relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500&h=800&fit=crop")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Trusted Software & <br />
          <span className="text-gradient">Digital Solutions</span> Agency
        </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
            We transform your digital vision into reality with cutting-edge technology and innovative design solutions.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="btn-primary text-lg">
              Get Quote →
            </button>
          </div>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
