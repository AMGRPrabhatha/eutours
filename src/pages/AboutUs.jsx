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

      {/* Mission Section */}
      <section className="about-mission">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="lead-text">
              We understand that planning a European vacation from halfway across the world can be daunting. That's why we've dedicated ourselves to making your journey as seamless, luxurious, and magical as possible.
            </p>
            <p>
              From the romantic, cobblestone streets of Paris to the awe-inspiring ruins of Rome, and the breathtaking snow-capped landscapes of the Swiss Alps, our expertly crafted itineraries ensure you experience the absolute best that Europe has to offer.
            </p>
          </div>
        </motion.div>
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
            viewport={{ once: true, amount: 0.2 }}
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

      {/* Visual Storytelling */}
      <section className="about-story">
        <div className="container story-container">
          <motion.div 
            className="story-images"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <img src="/images/luxury_van_1781075675269.webp" alt="Eutours Luxury Van" className="story-img-main" />
            <img src="/images/switzerland_vertical_1781089957980.webp" alt="Swiss Alps" className="story-img-secondary" />
          </motion.div>
          <motion.div 
            className="story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <h2>More Than Just a Trip</h2>
            <p>
              With Eutours, you're not just booking a vacation; you're securing a meticulously planned adventure. We believe that travel should be about inspiration and joy, not stress and logistics.
            </p>
            <p>
              Let our expert team handle all the complex details—from visas and transport to bookings and local navigation—while you focus entirely on creating memories that will last a lifetime.
            </p>
          </motion.div>
        </div>
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
