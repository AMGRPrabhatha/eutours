import { useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const vehicles = [
  {
    id: '8-9-seated',
    name: '8/9 seated',
    subtitle: 'Group Travel Van',
    image: '/images/van.jpg',
  },
  {
    id: 'mercedes-benz-ford',
    name: 'Mercedes Benz/ Ford',
    subtitle: 'Premium Sedan',
    image: '/images/sedan.webp',
  },
  {
    id: 'luxury-vans',
    name: 'Luxury vans',
    subtitle: '7-Seat Luxury Van',
    image: '/images/black_luxury_van.png',
  },
  {
    id: 'luxury-bus',
    name: 'Luxury bus',
    subtitle: '30-Seat Tour Bus',
    image: '/images/bus.jpg',
  }
];

const BookVehicle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero" style={{ backgroundImage: "url('/images/Book_a_Vehicle.jpg')" }}>
        <div className="booking-hero-overlay"></div>
        <motion.div 
          className="container booking-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Book Your Vehicle</motion.h1>
          <motion.p variants={fadeInUp}>Travel Europe in comfort and style with our premium fleet.</motion.p>
        </motion.div>
      </section>

      {/* Fleet Section */}
      <section className="booking-fleet section-padding">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2>Our Premium Fleet</h2>
            <p>Select the perfect vehicle for your European adventure.</p>
          </motion.div>

          <motion.div 
            className="fleet-grid-new"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {vehicles.map((vehicle) => (
              <motion.div className="fleet-card-modern" key={vehicle.id} variants={fadeInUp} style={{ padding: 0, overflow: 'hidden', border: '1px solid #eaeaea', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="fleet-card-image-wrapper" style={{ backgroundColor: '#f4f4f5', padding: '2rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px' }}>
                  <div className="fleet-heart-icon" style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                  <img src={vehicle.image} alt={vehicle.name} className="fleet-img" style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <div className="fleet-card-content" style={{ padding: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="fleet-card-header-modern">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111', marginBottom: '0.2rem' }}>{vehicle.name}</h3>
                    <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>{vehicle.subtitle}</p>
                  </div>

                  <hr style={{ borderTop: '1px solid #eee', borderBottom: 'none', margin: '1.25rem 0', marginTop: 'auto' }} />

                  <div className="fleet-card-footer" style={{ padding: 0 }}>
                    <div 
                      style={{ fontWeight: '700', color: '#111', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.9rem' }}
                      onClick={() => document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                      INQUIRE <span style={{ fontWeight: '400', fontSize: '1.2rem' }}>+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form-section" className="booking-form-section bg-light section-padding">
        <div className="container">
          <div className="booking-split-layout">
            
            <motion.div 
              className="booking-split-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="quick-booking-label">QUICK BOOKING</span>
              <h2>Send Your Ride Plan</h2>
              <p>Share your trip details once and we will confirm the best vehicle with pricing quickly. Custom routes and multi-stop rides are supported.</p>
              
              <ul className="booking-contact-list">
                <li><span className="icon">📱</span> +94 12 000 0000</li>
                <li><span className="icon">✉️</span> eutoursinfo@gmail.com</li>
                <li><span className="icon">💬</span> Available 24/7 for support</li>
              </ul>
            </motion.div>

            <motion.div 
              className="booking-split-form-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <form className="booking-form-new" onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="fullName">FULL NAME *</label>
                    <input type="text" id="fullName" placeholder="Your full name" required />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="email">EMAIL ADDRESS *</label>
                    <input type="email" id="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="flightNumber">FLIGHT NUMBER</label>
                    <input type="text" id="flightNumber" placeholder="e.g., UL 504" />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="pickupDate">PICKUP DATE *</label>
                    <input type="date" id="pickupDate" required />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="pickupTime">PICKUP TIME *</label>
                    <input type="time" id="pickupTime" required />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="adults">ADULTS *</label>
                    <select id="adults" required>
                      <option value="">Select number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="children">CHILDREN</label>
                    <select id="children">
                      <option value="0">No Children</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="vehicleType">VEHICLE TYPE *</label>
                    <select id="vehicleType" required>
                      <option value="">Select vehicle type</option>
                      {vehicles.map(v => (
                        <option key={v.id} value={v.id}>{v.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="pickupLocation">PICKUP LOCATION *</label>
                    <input type="text" id="pickupLocation" placeholder="e.g., Colombo Airport" required />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="dropoffLocation">DROP-OFF LOCATION *</label>
                    <input type="text" id="dropoffLocation" placeholder="e.g., Galle Fort Hotel" required />
                  </div>
                </div>

                <div className="form-group-new full-width">
                  <label htmlFor="specialRequests">SPECIAL REQUESTS</label>
                  <textarea id="specialRequests" rows="3" placeholder="Any special requirements, luggage details, or additional information..."></textarea>
                </div>

                <button type="submit" className="btn btn-book-orange">BOOK NOW →</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookVehicle;
