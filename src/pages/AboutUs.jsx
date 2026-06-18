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
      <section className="about-hero" style={{ backgroundImage: "url('/images/aboutus-hero.webp')" }}>
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
              <img src="/images/Jungfraujoch_Top_of_Europe_Day_Trip.webp" alt="Comprehensive Travel Support" />
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
              <img src="/images/Swiss Alps.webp" alt="Expert Travel Advice" />
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
              <img src="/images/Vatican_Museums_&_Sistine_Chapel_Tour.webp" alt="Diverse Destinations" />
              <div className="service-card-content">
                <h3>Diverse Destinations</h3>
                <p>Access to a wide range of domestic and international locations.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>


      {/* Global Reach Stats */}
      <section className="global-reach-section" style={{ paddingBottom: '3rem' }}>
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
      </section>

      {/* New Liquid Glass CTA Section */}
      <section className="liquid-glass-cta" style={{
        backgroundImage: 'url(/images/europe_map_wide.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '120px 0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        {/* Dark overlay to make text pop against the image */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#ffffff', fontSize: '3.2rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
          >
            Ready for your dream European adventure?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#f8fafc', fontSize: '1.25rem', marginBottom: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)', fontWeight: 500 }}
          >
            Join thousands of happy travelers who have explored Europe with us.
          </motion.p>
          
          {/* Liquid Glass Pill Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', bounce: 0.4 }}
            className="glass-pill-container"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '12px 12px 12px 30px',
              borderRadius: '100px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <Link to="/region/france" style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1.05rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }} className="glass-link-hover">
              Explore Destinations
            </Link>
            
            <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.4)', margin: '0 0.5rem' }} className="glass-divider"></div>
            
            <Link to="/contact" style={{
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '100px',
              padding: '16px 36px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease'
            }} className="glass-btn-hover">
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Mobile-responsive styles for the glass pill */}
      <style>{`
        @media (max-width: 768px) {
          .glass-pill-container {
            flex-direction: column;
            padding: 20px !important;
            border-radius: 24px !important;
            gap: 1rem !important;
          }
          .glass-divider {
            display: none !important;
          }
          .liquid-glass-cta h2 {
            font-size: 2.2rem !important;
          }
        }
        .glass-link-hover:hover {
          color: #f26522 !important;
        }
        .glass-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
