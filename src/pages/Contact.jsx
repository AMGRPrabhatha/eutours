import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const tourQuery = searchParams.get('tour');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  useEffect(() => {
    if (tourQuery) {
      setFormData(prev => ({ ...prev, destination: tourQuery }));
    }
  }, [tourQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our travel experts will get back to you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
  };

  return (
    <main className="container" style={{ marginTop: '140px', padding: '2rem 0 6rem', minHeight: '70vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>
          Have a question or want to book a specific experience? Fill out the form below and we'll get right back to you.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
                placeholder="John Doe"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="destination" style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>Destination / Tour Inquiry *</label>
              <input 
                type="text" 
                id="destination" 
                name="destination" 
                required 
                value={formData.destination}
                onChange={handleChange}
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', background: tourQuery ? '#f1f5f9' : 'white' }}
                placeholder="e.g. Paris Day Trip"
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>Message / Special Requests</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
              placeholder="Tell us about your ideal trip..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
            Send Inquiry
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
