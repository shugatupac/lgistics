import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Contact from './pages/Contact'
import Layout from './components/layout/Layout'
import LogisticsServicesPage from './pages/LogisticsServicesPage'

// In your routes configuration
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/logistics-services" element={<LogisticsServicesPage />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/logistics-services" element={<LogisticsServicesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App