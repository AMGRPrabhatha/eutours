import { useEffect } from 'react';
import { motion } from 'framer-motion';
import VehicleActivities from '../components/vehicles/VehicleActivities';

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
    name: '8/9 Seated Tour Van',
    location: 'Paris, France',
    features: ['Group Travel', '4.9 rating', 'Max 9 Pax'],
    price: '€1,200',
    duration: '7-day package',
    image: '/images/van_paris.png',
  },
  {
    id: 'mercedes-benz-ford',
    name: 'Mercedes Premium Sedan',
    location: 'Swiss Alps',
    features: ['Luxury Travel', '5.0 rating', 'Max 4 Pax'],
    price: '€1,850',
    duration: '5-day package',
    image: '/images/sedan_alps.png',
  },
  {
    id: 'luxury-vans',
    name: 'Luxury V-Class Van',
    location: 'Rome, Italy',
    features: ['Premium VIP', '5.0 rating', 'Max 7 Pax'],
    price: '€2,100',
    duration: '10-day package',
    image: '/images/luxury_van_rome.png',
  },
  {
    id: 'luxury-bus',
    name: 'Luxury Tourist Coach',
    location: 'Europe Countryside',
    features: ['Large Group', '4.8 rating', 'Max 30 Pax'],
    price: '€3,500',
    duration: '14-day package',
    image: '/images/bus_europe.png',
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

      <VehicleActivities />

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
            className="premium-fleet-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {vehicles.map((vehicle) => (
              <motion.div className="premium-fleet-photo-card" key={vehicle.id} variants={fadeInUp}>
                <div className="pfc-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="pfc-content">
                  <h3 className="pfc-title">{vehicle.name}</h3>
                  <div className="pfc-location">
                    <span className="pfc-pin">📍</span> {vehicle.location}
                  </div>
                  <div className="pfc-meta-row">
                    <div className="pfc-meta-item"><span>↺</span> {vehicle.features[0]}</div>
                    <div className="pfc-meta-item"><span>☆</span> {vehicle.features[1]}</div>
                    <div className="pfc-meta-item"><span>📅</span> {vehicle.features[2]}</div>
                  </div>
                  <div className="pfc-footer">
                    <button 
                      className="pfc-book-btn"
                      onClick={() => document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book
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
