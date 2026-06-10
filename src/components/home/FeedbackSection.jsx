import { useState } from 'react';

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '5',
    comment: ''
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
    if (formData.name && formData.rating && formData.comment) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert('Thank you for your review! It will be published after moderation.');
        setFormData({ name: '', rating: '5', comment: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section className="feedback" id="feedback">
        <div className="container">
            <h2 className="section-title">Traveler Stories</h2>
            <div className="feedback-grid">
                
                <div className="reviews-list">
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="feedback-text">"Our family trip to Switzerland was incredibly smooth. The visa guidance from Sri Lanka and the premium van waiting for us in Zurich made all the difference. Highly recommended!"</p>
                        <div className="feedback-author">
                            <div className="author-img">S</div>
                            <span>Saman Kumara, Colombo</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="feedback-text">"Eutours arranged our 10-day Italy tour perfectly. The driver was professional, and navigating Europe as first-timers from SL was a breeze."</p>
                        <div className="feedback-author">
                            <div className="author-img">N</div>
                            <span>Nimeshi Perera, Kandy</span>
                        </div>
                    </div>
                </div>

                <div className="feedback-form">
                    <h3 className="section-title" style={{ fontSize: '1.8rem', textAlign: 'left', left: 0, transform: 'none', marginBottom: '1.5rem', color: 'white' }}>Share Your Experience</h3>
                    <form id="user-feedback-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" id="name" className="form-input" placeholder="e.g. Kasun Silva" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                            <input type="number" id="rating" className="form-input" min="1" max="5" value={formData.rating} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment" className="form-label">Review</label>
                            <textarea id="comment" className="form-input" rows="4" placeholder="How was your trip?" value={formData.comment} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeedbackSection;
