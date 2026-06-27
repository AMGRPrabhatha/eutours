import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpecialFeatures = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(33.33);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) {
        setScrollProgress(100);
        return;
      }

      // Calculate progress starting at 33.33% and ending at 100%
      const progress = (scrollLeft / maxScroll) * 66.66 + 33.33;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    // Initial calculation on mount
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="special-features">
      <div className="container">
        
        {/* Top Header Section */}
        <div className="sf-header" style={{ marginBottom: '1.5rem' }}>
          <div className="sf-header-left">
            <span className="sf-pill">/About Us</span>
            <h2 style={{ marginBottom: 0 }}>About <span className="text-theme">EUtours</span></h2>
          </div>
          <div className="sf-header-right desktop-only">
            <Link to="/about" className="btn-sf-learn">Learn More &gt;&gt;&gt;</Link>
          </div>
        </div>

        <div className="sf-description" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', width: '100%' }}>
          <p>At EU Tours, we believe exceptional journeys deserve exceptional planning. With years of Experience, we curate bespoke experiences that are as seamless as they are unforgettable.</p>
          <p>From the first moment you plan your journey to your return home, our dedicated staff manage every detail with precision and discretion, ensuring a journey defined by comfort, exclusivity, and peace of mind. Renowned for our personalized service and unwavering commitment to excellence, we transform travel into extraordinary experiences and lasting memories.</p>
          <p>At EU Tours, your journey is more than a destination—it is a carefully crafted experience, designed around you.</p>
        </div>

        <div className="mobile-only sf-mobile-btn-container" style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <Link to="/about" className="btn-sf-learn">Learn More &gt;&gt;&gt;</Link>
        </div>

        {/* Cards Slider */}
        <div className="sf-cards" ref={scrollRef} onScroll={handleScroll}>
          <motion.div 
            className="sf-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sf-card-top">
              <img src="/images/Italy.webp" alt="Beautiful landscape" />
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
              <img src="/images/Swiss Alps.webp" alt="Mountain landscape" />
              <span className="sf-number">02</span>
            </div>
            <div className="sf-card-content">
              <p>With our trusted local partners, you'll discover hidden spots and cultural experiences <span className="sf-fade-text">that most travelers never get to see.</span></p>
            </div>
          </motion.div>

          <motion.div 
            className="sf-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sf-card-top">
              <img src="/images/paris.webp" alt="City landscape" />
              <span className="sf-number">03</span>
            </div>
            <div className="sf-card-content">
              <p>Enjoy premium, hassle-free itineraries that let you relax while we handle all the tedious logistics, bookings, and navigation.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="sf-controls">
          <div className="sf-progress-track">
            <div className="sf-progress-fill" style={{ width: `${scrollProgress}%` }}></div>
          </div>
          <div className="sf-nav-buttons">
            <button className="sf-nav-btn sf-prev" onClick={scrollLeft}>&lt;</button>
            <button className="sf-nav-btn sf-next" onClick={scrollRight}>&gt;</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialFeatures;
