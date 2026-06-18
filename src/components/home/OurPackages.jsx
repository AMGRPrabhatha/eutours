import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurPackages = () => {
  return (
    <section className="our-packages-section">
      <div className="container">
        
        <div className="packages-header">
          <span className="section-pill">//OUR PACKAGE</span>
          <h2>Discover our <span className="text-theme">exceptional</span> selection of travel<br/>packages and destinations</h2>
        </div>

        <div className="packages-grid">
          {/* Card 1 - All Inclusive (Large) */}
          <motion.div 
            className="pkg-card pkg-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/Italy.jpg" alt="All-Inclusive Packages" />
            <div className="pkg-duration">5 day, 4 night</div>
            <div className="pkg-content">
              <div className="pkg-text">
                <h3>All-Inclusive Packages</h3>
                <p>These include everything from flights to accommodation, meals, and activities.</p>
              </div>
              <Link to="/packages" className="btn-pkg-choose">Choose package</Link>
            </div>
          </motion.div>

          {/* Card 2 - Cultural */}
          <motion.div 
            className="pkg-card pkg-tall"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/Vatican_Museums_&_Sistine_Chapel_Tour.jpg" alt="Cultural Packages" />
            <div className="pkg-duration">5 day, 4 night</div>
            <div className="pkg-content">
              <div className="pkg-text">
                <h3>Cultural Packages</h3>
                <p>Focus on cultural experiences such as heritage tours, and local performances.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Adventure */}
          <motion.div 
            className="pkg-card pkg-tall"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="/images/Mount_Titlis_Half-Day_Tour_with_Cable_Car.jpg" alt="Adventure Packages" />
            <div className="pkg-duration">5 day, 4 night</div>
            <div className="pkg-content">
              <div className="pkg-text">
                <h3>Adventure Packages</h3>
                <p>Tailored for thrill-seekers, offering activities like hiking, diving, or extreme sports.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurPackages;
