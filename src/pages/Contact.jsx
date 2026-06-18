import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormModal from '../components/ui/FormModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const tourQuery = searchParams.get('tour');
  const [status, setStatus] = useState('idle');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, status: 'success', message: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: tourQuery || '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setModalConfig({
        isOpen: true,
        status: 'success',
        message: 'Thank you for your inquiry! Our travel experts will get back to you shortly.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: tourQuery || '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setModalConfig({
        isOpen: true,
        status: 'error',
        message: 'There was an error sending your message. Please try again later.'
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
    <div className="contact-page">
      <FormModal 
        isOpen={modalConfig.isOpen} 
        status={modalConfig.status} 
        message={modalConfig.message} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))} 
      />
      {/* Contact Hero */}
      <section className="contact-hero" style={{ backgroundImage: "url('/images/aboutus-hero.webp')" }}>
        <div className="contact-hero-overlay"></div>
        <motion.div 
          className="container contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>Get in Touch</h1>
          <p>We're here to help you craft the perfect European getaway.</p>
        </motion.div>
      </section>

      {/* Contact Split Layout */}
      <section className="contact-split-section">
        <div className="container">
          <div className="contact-split-layout">
            
            <motion.div 
              className="contact-info-col"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span className="contact-subtitle">REACH OUT TO US</span>
              <h2>Let's Start Planning Your <span className="text-theme">European Dream</span></h2>
              <p>
                Whether you have a question about our itineraries, need help booking a specific luxury vehicle, or want a completely customized tour, our expert team is ready to assist you.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">📍</div>
                  <div>
                    <h3>Office Address</h3>
                    <p>123 Luxury Avenue,<br/>London, W1J 7BU,<br/>United Kingdom</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="detail-icon">📞</div>
                  <div>
                    <h3>Phone Number</h3>
                    <p>+94 77 792 4464</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="detail-icon">✉️</div>
                  <div>
                    <h3>Email Address</h3>
                    <p>info@eurotours.eu</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <form className="booking-form-new" onSubmit={handleSubmit}>
                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="name">FULL NAME *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="email">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="destination">DESTINATION INQUIRY *</label>
                    <input 
                      type="text" 
                      id="destination" 
                      name="destination" 
                      required 
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Paris & Rome"
                    />
                  </div>
                </div>

                <div className="form-group-new full-width">
                  <label htmlFor="message">YOUR MESSAGE *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ideal trip, special requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
