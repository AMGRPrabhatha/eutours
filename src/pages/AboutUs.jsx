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

      {/* About Intro Section */}
      <section className="about-intro-section">
        <div className="container">
          
          <div className="about-intro-top">
            <div className="about-intro-left">
              <span className="section-pill">//ABOUT US</span>
              <h2 className="about-intro-title">
                We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. <span className="text-light">Our mission is to provide you with the best travel experiences</span>
              </h2>
            </div>
            <div className="about-intro-right">
              <div className="stat-item">
                <h3>200+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>65+</h3>
                <p>Top Hotels</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>250+</h3>
                <p>Experienced Guides</p>
              </div>
            </div>
          </div>

          <div className="about-services-top">
            <span className="section-pill">//OUR SERVICE</span>
            <h2 className="about-services-title">Explore <span className="text-theme">endless options</span> with our service</h2>
            <p className="about-services-subtitle">Discover a myriad of choices available through our service, offering limitless possibilities for your exploration and enjoyment</p>
          </div>

          <div className="about-services-grid">
            <motion.div 
              className="service-card large-vertical"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/Jungfraujoch_Top_of_Europe_Day_Trip.jpg" alt="Comprehensive Travel Support" />
              <div className="service-card-content">
                <h3>Comprehensive Travel Support</h3>
                <p>24/7 customer service to assist you before, during, and after your trip.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="service-card small-horizontal top-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/Swiss Alps.jpg" alt="Expert Travel Advice" />
              <div className="service-card-content">
                <h3>Expert Travel Advice</h3>
                <p>Tips and guides to enhance your travel experience.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="service-card small-horizontal bottom-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="/images/Vatican_Museums_&_Sistine_Chapel_Tour.jpg" alt="Diverse Destinations" />
              <div className="service-card-content">
                <h3>Diverse Destinations</h3>
                <p>Access to a wide range of domestic and international locations.</p>
              </div>
            </motion.div>
          </div>

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
              <h2>We Tailor Our European Tours To Meet Your Specific <span className="text-theme">Travel Dreams</span></h2>
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
            <Link to="/region/france" className="btn btn-primary" style={{ marginRight: '1rem' }}>Explore Destinations</Link>
            <Link to="/contact" className="btn btn-accent">Contact Our Experts</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
