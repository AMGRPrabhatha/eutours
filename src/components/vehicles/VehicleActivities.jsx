import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const VehicleActivities = () => {
  return (
    <section className="vehicle-activities-section section-padding" style={{ background: '#fff' }}>
      <div className="container">
        
        <div className="va-header text-center">
          <div className="va-pill">
            <span className="plus-icon">+</span> Vehicle Activity
          </div>
          <h2 className="va-title">
            Our <span className="text-theme">Premium</span> Fleet <span>Ensures A Seamless<br/>And Memorable Adventure.</span>
          </h2>
        </div>

        <div className="why-choose-grid">
          <div className="why-col">
            <motion.div className="why-item left-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-text">
                <h3>Experience driver</h3>
                <p>Don't have driver? Don't worry, we have experienced driver for you.</p>
              </div>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </motion.div>

            <motion.div className="why-item left-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-text">
                <h3>Wide Range of Vehicles</h3>
                <p>From economy to luxury — choose the perfect car for any trip.</p>
              </div>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
            </motion.div>

            <motion.div className="why-item left-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-text">
                <h3>24/7 technical support</h3>
                <p>Have a question? Contact support any time when you have problem.</p>
              </div>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
            </motion.div>
          </div>

          <div className="why-col why-center-col">
            <motion.div className="why-center-image" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="why-circle-bg"></div>
              <img src="/images/black_premium_sedan.png" alt="Premium Car" />
            </motion.div>
          </div>

          <div className="why-col">
            <motion.div className="why-item right-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="why-text">
                <h3>Best price guaranteed</h3>
                <p>Find a lower price? We'll refund you 100% of the difference.</p>
              </div>
            </motion.div>

            <motion.div className="why-item right-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="why-text">
                <h3>Well-Maintained Cars</h3>
                <p>Every vehicle is regularly serviced and ensured in top condition.</p>
              </div>
            </motion.div>

            <motion.div className="why-item right-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="why-text">
                <h3>24 hour car delivery</h3>
                <p>Book your car anytime and we will deliver it directly to you.</p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VehicleActivities;
