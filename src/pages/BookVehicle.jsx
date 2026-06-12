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
    id: 'luxury-van',
    name: 'Luxury Tour Van',
    image: '/images/luxury_van_1781075675269.webp',
    passengers: 'Up to 7',
    luggage: '7 Large Suitcases',
    features: ['Wi-Fi', 'Leather Seats', 'Climate Control']
  },
  {
    id: 'executive-suv',
    name: 'Executive SUV',
    image: '/images/switzerland_vertical_1781089957980.webp',
    passengers: 'Up to 4',
    luggage: '4 Large Suitcases',
    features: ['Wi-Fi', 'Panoramic Roof', 'Heated Seats']
  },
  {
    id: 'premium-sedan',
    name: 'Premium Sedan',
    image: '/images/paris_dest_1781075727792.webp',
    passengers: 'Up to 3',
    luggage: '2 Large Suitcases',
    features: ['Wi-Fi', 'Quiet Cabin', 'Refreshments']
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
            className="fleet-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {vehicles.map((vehicle) => (
              <motion.div className="fleet-card" key={vehicle.id} variants={fadeInUp}>
                <div className="fleet-img-wrapper">
                  <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
                </div>
                <div className="fleet-details">
                  <h3>{vehicle.name}</h3>
                  <div className="fleet-specs">
                    <span><i className="icon-users">👥</i> {vehicle.passengers}</span>
                    <span><i className="icon-luggage">🧳</i> {vehicle.luggage}</span>
                  </div>
                  <ul className="fleet-features">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-section bg-light section-padding">
        <div className="container">
          <div className="booking-form-container">
            <motion.div 
              className="booking-form-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2>Trip Details & Booking</h2>
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickupLocation">Pickup Location</label>
                    <input type="text" id="pickupLocation" placeholder="Airport, Hotel, or City" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dropoffLocation">Drop-off Location</label>
                    <input type="text" id="dropoffLocation" placeholder="Airport, Hotel, or City" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickupDate">Pickup Date & Time</label>
                    <input type="datetime-local" id="pickupDate" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passengers">Number of Passengers</label>
                    <input type="number" id="passengers" min="1" max="15" placeholder="e.g. 4" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="vehicleType">Select Vehicle</label>
                  <select id="vehicleType" required>
                    <option value="">-- Choose a Vehicle --</option>
                    {vehicles.map(v => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-divider"></div>
                <h3>Personal Details</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 234 567 8900" required />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Requests / Notes</label>
                  <textarea id="notes" rows="4" placeholder="Any special requirements? (e.g. child seat, extra luggage)"></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Request Booking</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookVehicle;
