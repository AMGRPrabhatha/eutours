import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Region from './pages/Region';
import AboutUs from './pages/AboutUs';

import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Moments from './pages/Moments';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import TravelGuides from './pages/TravelGuides';
import BookVehicle from './pages/BookVehicle';
import Packages from './pages/Packages';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/travel-guides" element={<TravelGuides />} />
          <Route path="/book-vehicle" element={<BookVehicle />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/region/:id" element={<Region />} />
        </Routes>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
