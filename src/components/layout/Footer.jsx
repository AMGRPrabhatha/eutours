import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-column">
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-links">
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/book-vehicle">Vehicle Fleet</Link></li>
              <li><Link to="/moments">Travel Gallery</Link></li>
              <li><Link to="/contact?subject=Custom%20Itinerary">Custom Itineraries</Link></li>
              <li><Link to="/travel-guides">Travel Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">HELP</h4>
            <ul className="footer-links">
              <li><Link to="/faq">Get Help</Link></li>
              <li><Link to="/contact?subject=Booking%20Status">Booking Status</Link></li>
              <li><Link to="/faq">Payment Options</Link></li>
              <li><Link to="/faq">Cancellation Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Eutours</Link></li>
              <li><Link to="/about">Our Team</Link></li>
              <li><Link to="/about">Sustainability</Link></li>
              <li><Link to="/reviews">Customer Reviews</Link></li>
              <li><Link to="/contact?subject=Partner%20With%20Us">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h4 className="footer-heading">CONTACT INFO</h4>
            <ul className="footer-links">
              <li><a href="tel:+94777924464">+94 77 792 4464</a></li>
              <li><a href="https://wa.me/94777924464" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
              <li><a href="mailto:info@eurotours.eu">info@eurotours.eu</a></li>
            </ul>
          </div>

          <div className="footer-column social-column">
            <div className="social-icons">
              <Link to="/contact" className="social-circle" aria-label="Contact Eutours">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Link>
              <Link to="/moments" className="social-circle" aria-label="View Eutours travel gallery">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="location-pin">📍 Europe</span>
            <span className="copyright">© 2026 Eutours. All rights reserved @RP</span>
          </div>
          <div className="footer-bottom-right">
            <Link to="/travel-guides">Guides</Link>
            <Link to="/faq">Terms of Use</Link>
            <Link to="/faq">Terms of Sale</Link>
            <Link to="/about">Company Details</Link>
            <Link to="/faq">Privacy & Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
