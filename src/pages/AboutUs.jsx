import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation variants
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const AboutUs = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: "url('/images/aboutus-hero.jpg')" }}>
        <div className="about-hero-overlay"></div>
        <motion.div 
          className="container about-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Discover Eutours</motion.h1>
          <motion.p variants={fadeInUp}>Your premier gateway to the wonders of Europe, tailored exclusively for Sri Lankan travelers.</motion.p>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story-section">
        <div className="brand-story-container">
          <motion.div 
            className="brand-story-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <img src="/images/switzerland_vertical_1781089957980.webp" alt="Eutours Journey" />
          </motion.div>
          <motion.div 
            className="brand-story-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideInRight}
          >
            <h2>HISTORY OF THE BRAND</h2>
            <p>
              Eutours first launched with a vision to connect Sri Lankan travelers with the mesmerizing landscapes and cultures of Europe. Our founders had a desire to challenge conventions and an idea to modernize the travel experience, leaving the stale and the conservative behind.
            </p>
            <p>
              Today, Eutours has grown into a premier travel partner with a worldwide presence, offering innovative and luxurious itineraries tailored specifically for you—from the romantic streets of Paris to the snow-capped Swiss Alps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
          >
            Why Choose Eutours
          </motion.h2>
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { icon: '🚙', title: 'Premium Transport', desc: 'Travel in ultimate comfort with our hassle-free, luxury European tour vans.' },
              { icon: '🏨', title: 'Curated Stays', desc: 'Rest easy in our hand-picked, premium accommodations ensuring maximum relaxation.' },
              { icon: '🗺️', title: 'Expert Guidance', desc: 'Unforgettable guided tours led by passionate experts who bring history to life.' },
              { icon: '🇱🇰', title: 'Tailored For You', desc: 'Meticulously planned itineraries designed specifically with Sri Lankan travelers in mind.' }
            ].map((feature, idx) => (
              <motion.div className="feature-card" key={idx} variants={fadeInUp}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Reach Map Section */}
      <section className="global-reach-section">
        <div className="container">
          <motion.div 
            className="global-reach-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="reach-title">
              <h2>We Tailor Our European Tours To Meet Your Specific Travel Dreams</h2>
            </div>
            <div className="reach-stats">
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Countries Explored<br/>Across Europe</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Happy Travelers<br/>From Sri Lanka</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">99%</span>
                <span className="stat-label">Satisfaction Rate<br/>For Our Tours</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="global-reach-map"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
          }}
        >
          <img src="/images/europe_map_wide.png" alt="European Travel Routes" className="reach-map-img" />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
        >
          <h2>Ready for your dream European adventure?</h2>
          <p>Join thousands of happy travelers who have explored Europe with us.</p>
          <div className="cta-buttons">
            <Link to="/" className="btn btn-primary" style={{ marginRight: '1rem' }}>Explore Destinations</Link>
            <Link to="/contact" className="btn btn-accent">Contact Our Experts</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
