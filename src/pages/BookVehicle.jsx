import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VehicleActivities from '../components/vehicles/VehicleActivities';
import FormModal from '../components/ui/FormModal';

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
    id: 'mercedes-classe-v-extralong',
    name: 'Mercedes Classe V Extralong',
    model: 'Luxury Van',
    location: 'Europe',
    rating: '5.0',
    reviews: '100+',
    category: 'VIP VAN',
    details: [
      '7 passengers',
      '7 bags',
      'Automatic',
      'Airport transfers and private tours',
    ],
    price: '€1,800',
    duration: '7-day package',
    image: '/images/Mercedes Classe v extralong 7pax.webp',
  },
  {
    id: 'mercedes-v-class',
    name: 'Mercedes V-Class',
    model: 'Luxury Van',
    location: 'Europe',
    rating: '5.0',
    reviews: '85+',
    category: 'VIP VAN',
    details: [
      '1-7 passengers',
      '7 bags',
      'Automatic',
      'Family tours and VIP transfers',
    ],
    price: '€2,100',
    duration: '10-day package',
    image: '/images/Mercedes V-Class.webp',
  },
  {
    id: 'luxury-bus',
    name: 'Luxury Tourist Coach',
    model: 'Premium Coach',
    location: 'Europe Countryside',
    rating: '4.8',
    reviews: '120+',
    category: 'COACH',
    details: [
      'Up to 30 passengers',
      'Large luggage hold',
      'Automatic',
      'Multi-day group tours',
    ],
    price: '€3,500',
    duration: '14-day package',
    image: '/images/black_luxury_coach.webp',
  }
];

const iconPaths = {
  location: (
    <>
      <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
  vehicle: (
    <>
      <path d="M5 16h14l-1.4-5.5A2 2 0 0 0 15.7 9H8.3a2 2 0 0 0-1.9 1.5L5 16Z" />
      <path d="M4 16v3" />
      <path d="M20 16v3" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
      <path d="M7 13h10" />
    </>
  ),
  range: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m12 8 4 4" />
      <path d="M12 8v8" />
    </>
  ),
  class: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 20v-8" />
      <path d="M8 10l4 2 4-2" />
      <path d="M9 7h6" />
    </>
  ),
  seat: (
    <>
      <path d="M7 5h7a3 3 0 0 1 3 3v5H7V5Z" />
      <path d="M5 13h14v5H5z" />
      <path d="M7 18v2" />
      <path d="M17 18v2" />
    </>
  ),
};

const CardIcon = ({ type, className = '' }) => (
  <svg className={`pfc-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    {iconPaths[type]}
  </svg>
);

const BookVehicle = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    flightNumber: '',
    pickupDate: '',
    pickupTime: '',
    adults: '',
    children: '0',
    vehicleType: '',
    pickupLocation: '',
    dropoffLocation: '',
    specialRequests: ''
  });
  const [status, setStatus] = useState('idle');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, status: 'success', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'vehicle' }),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking request');
      }

      setStatus('success');
      setModalConfig({
        isOpen: true,
        status: 'success',
        message: 'Your vehicle booking request has been sent! Our team will contact you shortly with confirmation.'
      });
      setFormData({
        fullName: '',
        email: '',
        flightNumber: '',
        pickupDate: '',
        pickupTime: '',
        adults: '',
        children: '0',
        vehicleType: '',
        pickupLocation: '',
        dropoffLocation: '',
        specialRequests: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setModalConfig({
        isOpen: true,
        status: 'error',
        message: 'There was an error sending your request. Please try again later.'
      });
    } finally {
      if (status !== 'error') {
          setTimeout(() => setStatus('idle'), 3000);
      } else {
          setStatus('idle');
      }
    }
  };

  return (
    <div className="booking-page">
      <FormModal 
        isOpen={modalConfig.isOpen} 
        status={modalConfig.status} 
        message={modalConfig.message} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))} 
      />
      {/* Hero Section */}
      <section className="booking-hero" style={{ backgroundImage: "url('/images/Book_a_Vehicle.webp')" }}>
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
                <div className="pfc-heading-row">
                  <div>
                    <h3 className="pfc-title">{vehicle.name}</h3>
                    <p className="pfc-model">{vehicle.model}</p>
                  </div>
                  <div className="pfc-rating">
                    <CardIcon type="star" className="pfc-star" />
                    <span>{vehicle.rating}</span>
                    <small>({vehicle.reviews})</small>
                  </div>
                </div>
                <div className="pfc-image">
                  <span className="pfc-badge">{vehicle.category}</span>
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="pfc-content">
                  <div className="pfc-location">
                    <CardIcon type="location" />
                    <span>{vehicle.location}</span>
                  </div>
                </div>
                <ul className="pfc-detail-list">
                  {vehicle.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <button
                  className="pfc-book-btn"
                  onClick={() => document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Reserve This Ride
                </button>
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
              <form className="booking-form-new" onSubmit={handleSubmit}>
                
                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="fullName">FULL NAME *</label>
                    <input type="text" id="fullName" placeholder="Your full name" required value={formData.fullName} onChange={handleChange} />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="email">EMAIL ADDRESS *</label>
                    <input type="email" id="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="flightNumber">FLIGHT NUMBER</label>
                    <input type="text" id="flightNumber" placeholder="e.g., UL 504" value={formData.flightNumber} onChange={handleChange} />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="pickupDate">PICKUP DATE *</label>
                    <input type="date" id="pickupDate" required value={formData.pickupDate} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="pickupTime">PICKUP TIME *</label>
                    <input type="time" id="pickupTime" required value={formData.pickupTime} onChange={handleChange} />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="adults">ADULTS *</label>
                    <select id="adults" required value={formData.adults} onChange={handleChange}>
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
                    <select id="children" value={formData.children} onChange={handleChange}>
                      <option value="0">No Children</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="vehicleType">VEHICLE TYPE *</label>
                    <select id="vehicleType" required value={formData.vehicleType} onChange={handleChange}>
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
                    <input type="text" id="pickupLocation" placeholder="e.g., Colombo Airport" required value={formData.pickupLocation} onChange={handleChange} />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="dropoffLocation">DROP-OFF LOCATION *</label>
                    <input type="text" id="dropoffLocation" placeholder="e.g., Galle Fort Hotel" required value={formData.dropoffLocation} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group-new full-width">
                  <label htmlFor="specialRequests">SPECIAL REQUESTS</label>
                  <textarea id="specialRequests" rows="3" placeholder="Any special requirements, luggage details, or additional information..." value={formData.specialRequests} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-book-orange" disabled={status === 'loading'}>
                  {status === 'loading' ? 'SENDING REQUEST...' : 'BOOK NOW →'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookVehicle;
