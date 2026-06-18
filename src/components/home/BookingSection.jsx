import { useState } from 'react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    destination: '',
    vehicleType: '',
    dateStart: '',
    pax: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.destination && formData.vehicleType && formData.dateStart && formData.pax) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert(`Success! We have received your inquiry for a ${formData.vehicleType.replace('-', ' ')} in ${formData.destination} starting ${formData.dateStart} for ${formData.pax} passengers. Our team in Colombo will contact you shortly.`);
        setFormData({ destination: '', vehicleType: '', dateStart: '', pax: '' });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section className="booking" id="booking">
        <div className="container booking-container">
            <div className="booking-form-wrapper">
                <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', left: 0, transform: 'none', marginBottom: '2rem' }}>Book Your Transport</h2>
                <form id="vehicle-booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="destination" className="form-label">European Destination</label>
                        <select id="destination" className="form-select" value={formData.destination} onChange={handleChange} required>
                            <option value="">Select a country...</option>
                            <option value="france">France (Paris, Nice)</option>
                            <option value="switzerland">Switzerland (Zurich, Geneva)</option>
                            <option value="italy">Italy (Rome, Venice)</option>
                            <option value="germany">Germany (Berlin, Munich)</option>
                            <option value="multi">Multi-Country Tour</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleType" className="form-label">Vehicle Preference</label>
                        <select id="vehicleType" className="form-select" value={formData.vehicleType} onChange={handleChange} required>
                            <option value="">Select vehicle type...</option>
                            <option value="luxury-sedan">Luxury Sedan (1-3 Pax)</option>
                            <option value="premium-van">Premium Van (4-7 Pax)</option>
                            <option value="minibus">Mini Bus (8-15 Pax)</option>
                            <option value="coach">Luxury Coach (16+ Pax)</option>
                        </select>
                    </div>
                    <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label htmlFor="dateStart" className="form-label">Start Date</label>
                            <input type="date" id="dateStart" className="form-input" value={formData.dateStart} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="pax" className="form-label">Passengers</label>
                            <input type="number" id="pax" className="form-input" min="1" placeholder="e.g. 2" value={formData.pax} onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={isSubmitting}>
                        {isSubmitting ? 'Checking...' : 'Check Availability'}
                    </button>
                </form>
            </div>
            <div className="booking-image-wrapper">
                <img src="/images/luxury_van_rome.webp" alt="Luxury European Tour Van" />
            </div>
        </div>
    </section>
  );
};

export default BookingSection;
