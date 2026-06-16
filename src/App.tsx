import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ServicesReadMore from './pages/ServicesReadMore'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Career from './pages/Career'
import Contact from './pages/Contact'
import ServiceMobileUI from './pages/ServiceMobileUI'
import ServiceDetail from './pages/ServiceDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <TopBanner />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/services/read-more" element={<ServicesReadMore />} />
            <Route path="/services/mobile-ui-ux" element={<ServiceMobileUI />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  )
}

export default App
