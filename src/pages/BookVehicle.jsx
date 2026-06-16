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
    image: '/images/van.jpg',
    price: '$200',
    topTags: [{text: 'Group Travel', type: 'success'}],
    pills: [
      { icon: '👥', text: '8/9 seats' },
      { icon: '🧳', text: '8 Bags' },
      { icon: '📶', text: 'Wi-Fi' },
      { icon: '❄️', text: 'Climate Control' }
    ]
  },
  {
    id: 'mercedes-benz-ford',
    name: 'Mercedes Benz/ Ford',
    image: '/images/sedan.webp',
    price: '$300',
    topTags: [{text: 'Premium', type: 'success'}],
    pills: [
      { icon: '👥', text: '3 seats' },
      { icon: '🧳', text: '2 Bags' },
      { icon: '📶', text: 'Wi-Fi' },
      { icon: '💺', text: 'Leather Seats' }
    ]
  },
  {
    id: 'luxury-vans',
    name: 'Luxury vans',
    image: '/images/luxury_van_1781075675269.webp',
    price: '$250',
    topTags: [{text: 'Available', type: 'success'}, {text: 'Popular', type: 'alert'}],
    pills: [
      { icon: '👥', text: '7 seats' },
      { icon: '🧳', text: '7 Bags' },
      { icon: '📶', text: 'Wi-Fi' },
      { icon: '🚐', text: 'Van' }
    ]
  },
  {
    id: 'luxury-bus',
    name: 'luxury bus',
    image: '/images/bus.jpg',
    price: '$450',
    topTags: [{text: 'Available', type: 'success'}],
    pills: [
      { icon: '👥', text: '30 seats' },
      { icon: '🧳', text: '30 Bags' },
      { icon: '📶', text: 'Wi-Fi' },
      { icon: '🚌', text: 'Bus' }
    ]
  }
];

const BookVehicle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero" style={{ backgroundImage: "url('/images/hero_bg_1781075622715.webp')" }}>
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
          >
            <h2>Our Premium Fleet</h2>
            <p>Select the perfect vehicle for your European adventure.</p>
          </motion.div>

          <motion.div 
            className="fleet-grid-new"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {vehicles.map((vehicle) => (
              <motion.div className="fleet-card-modern" key={vehicle.id} variants={fadeInUp}>
                <div className="fleet-card-image-wrapper">
                  <div className="fleet-card-tags">
                    {vehicle.topTags.map((tag, idx) => (
                      <span key={idx} className={`fleet-tag tag-${tag.type}`}>
                        <span className="tag-icon">{tag.type === 'alert' ? '!' : '✓'}</span> {tag.text}
                      </span>
                    ))}
                  </div>
                  <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
                  <div className="fleet-carousel-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>

                <div className="fleet-card-content">
                  <div className="fleet-card-header-modern">
                    <h3>{vehicle.name}</h3>
                  </div>

                  <div className="fleet-pill-grid">
                    {vehicle.pills.map((pill, idx) => (
                      <div className="fleet-pill" key={idx}>
                        <span className="pill-icon">{pill.icon}</span> {pill.text}
                      </div>
                    ))}
                  </div>

                  <div className="fleet-card-footer">
                    <button 
                      className="btn-book-now-modern"
                      onClick={() => document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Now <span className="arrow">→</span>
                    </button>
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
