import React from 'react';
import { motion } from 'framer-motion';

const SpecialFeatures = () => {
  return (
    <section className="special-features">
      <div className="container">
        
        {/* Top Header Section */}
        <div className="sf-header">
          <div className="sf-header-left">
            <span className="sf-pill">/About Us</span>
            <h2>What's so special<br/>about this?</h2>
            <p>Save more on your trips with exclusive discounts, seasonal promotions, and unbeatable deals for unforgettable adventures.</p>
          </div>
          <div className="sf-header-right">
            <button className="btn-sf-learn">Learn More &gt;&gt;&gt;</button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="sf-cards">
          <motion.div 
            className="sf-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sf-card-top">
              <img src="/images/Italy.jpg" alt="Beautiful landscape" />
              <span className="sf-number">01</span>
            </div>
            <div className="sf-card-content">
              <p>We don't just plan vacations; we create journeys tailored to your dreams, ensuring every moment is unforgettable.</p>
            </div>
          </motion.div>

          <motion.div 
            className="sf-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sf-card-top">
              <img src="/images/Swiss Alps.jpg" alt="Mountain landscape" />
              <span className="sf-number">02</span>
            </div>
            <div className="sf-card-content">
              <p>With our trusted local partners, you'll discover hidden spots and cultural experiences <span className="sf-fade-text">that most travelers never get to see.</span></p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="sf-controls">
          <div className="sf-progress-track">
            <div className="sf-progress-fill"></div>
          </div>
          <div className="sf-nav-buttons">
            <button className="sf-nav-btn sf-prev">&lt;</button>
            <button className="sf-nav-btn sf-next">&gt;</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialFeatures;
