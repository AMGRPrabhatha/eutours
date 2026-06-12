import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Region from './pages/Region';
import AboutUs from './pages/AboutUs';
import AdventureStyles from './pages/AdventureStyles';
import Faq from './pages/Faq';
import Moments from './pages/Moments';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import TravelGuides from './pages/TravelGuides';
import BookVehicle from './pages/BookVehicle';
import ScrollToTop from './components/ScrollToTop';

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
          <Route path="/styles" element={<AdventureStyles />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/travel-guides" element={<TravelGuides />} />
          <Route path="/book-vehicle" element={<BookVehicle />} />
          <Route path="/region/:id" element={<Region />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
