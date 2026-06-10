import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUs = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: "url('/images/paris_dest_1781075727792.webp')" }}>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>Discover Eutours</h1>
          <p>Your premier gateway to the wonders of Europe, tailored exclusively for Sri Lankan travelers.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="lead-text">
              We understand that planning a European vacation from halfway across the world can be daunting. That's why we've dedicated ourselves to making your journey as seamless, luxurious, and magical as possible.
            </p>
            <p>
              From the romantic, cobblestone streets of Paris to the awe-inspiring ruins of Rome, and the breathtaking snow-capped landscapes of the Swiss Alps, our expertly crafted itineraries ensure you experience the absolute best that Europe has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <div className="container">
          <h2 className="section-title">Why Choose Eutours</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚙</div>
              <h3>Premium Transport</h3>
              <p>Travel in ultimate comfort with our hassle-free, luxury European tour vans.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>Curated Stays</h3>
              <p>Rest easy in our hand-picked, premium accommodations ensuring maximum relaxation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Expert Guidance</h3>
              <p>Unforgettable guided tours led by passionate experts who bring history to life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🇱🇰</div>
              <h3>Tailored For You</h3>
              <p>Meticulously planned itineraries designed specifically with Sri Lankan travelers in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="about-story">
        <div className="container story-container">
          <div className="story-images">
            <img src="/images/luxury_van_1781075675269.webp" alt="Eutours Luxury Van" className="story-img-main" />
            <img src="/images/switzerland_vertical_1781089957980.webp" alt="Swiss Alps" className="story-img-secondary" />
          </div>
          <div className="story-text">
            <h2>More Than Just a Trip</h2>
            <p>
              With Eutours, you're not just booking a vacation; you're securing a meticulously planned adventure. We believe that travel should be about inspiration and joy, not stress and logistics.
            </p>
            <p>
              Let our expert team handle all the complex details—from visas and transport to bookings and local navigation—while you focus entirely on creating memories that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready for your dream European adventure?</h2>
          <p>Join thousands of happy travelers who have explored Europe with us.</p>
          <div className="cta-buttons">
            <Link to="/" className="btn btn-primary" style={{ marginRight: '1rem' }}>Explore Destinations</Link>
            <Link to="/contact" className="btn btn-accent">Contact Our Experts</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
