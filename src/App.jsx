import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contacts from './pages/Contact'
import NotFound from './pages/Notfound'


function App() {
  return (
    // Main Container
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Body Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer/Paahan */}
      <Footer />
    </div>
  )
}

export default App
