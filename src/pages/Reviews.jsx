import { useEffect } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Saman & Nimeshi',
    trip: '14 Days in Classic Europe',
    rating: 5,
    text: 'Eutours planned the absolute perfect honeymoon for us! From the moment we landed in Paris to our final night in Rome, everything was incredibly seamless. The luxury transport made hopping between countries entirely stress-free.',
    date: 'March 2026'
  },
  {
    id: 2,
    name: 'The Perera Family',
    trip: '10 Days in the Swiss Alps',
    rating: 5,
    text: 'Traveling with two young kids is usually a nightmare, but the Eutours team took care of every single logistical detail. Our guide in Interlaken was incredibly knowledgeable and fantastic with the kids. Truly a trip of a lifetime!',
    date: 'January 2026'
  },
  {
    id: 3,
    name: 'Dilshan W.',
    trip: '7 Days - Taste of Italy',
    rating: 5,
    text: 'The food and wine tour through Tuscany was breathtaking. I highly recommend letting Eutours handle your itinerary—they found boutique hotels and authentic local experiences that we never would have discovered on our own.',
    date: 'November 2025'
  },
  {
    id: 4,
    name: 'Amaya Fernando',
    trip: '12 Days - Northern Lights',
    rating: 5,
    text: 'Seeing the Aurora Borealis in Iceland has always been my dream. The Eutours team ensured we were at the right place at the perfect time, with cozy, premium accommodations waiting for us in the extreme cold. Exceptional service.',
    date: 'February 2026'
  },
  {
    id: 5,
    name: 'Kavindu & Friends',
    trip: '15 Days Backpacking Europe',
    rating: 5,
    text: 'We wanted a mix of city nightlife and cultural tours. The custom itinerary Eutours built gave us the absolute perfect balance. The local guides in Amsterdam and Berlin were legendary.',
    date: 'December 2025'
  },
  {
    id: 6,
    name: 'Mr. & Mrs. Silva',
    trip: '21 Days - Grand European Tour',
    rating: 5,
    text: 'As older travelers, comfort was our top priority. The luxury vans and hand-picked accessible hotels were beyond our expectations. A highly professional, warm, and caring team that we trust completely.',
    date: 'October 2025'
  }
];

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="reviews-hero" style={{ backgroundImage: "url('/images/reviews-hero.jpg')" }}>
        <div className="reviews-hero-overlay"></div>
        <div className="container reviews-hero-content">
          <h1>What Our Travelers Say</h1>
          <p>Don't just take our word for it. Read the stories of thousands of happy Sri Lankans who trusted Eutours with their dream European vacation.</p>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="reviews-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Verified Customer Reviews</h2>
          </div>
          
          <div className="reviews-masonry">
            {reviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-stars">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-footer">
                  <div className="review-author-info">
                    <h4>{review.name}</h4>
                    <span>{review.trip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Gallery Section */}
      <section className="happy-customers-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Memories Captured</h2>
            <p className="section-subtitle">Real moments of joy from our travelers exploring the wonders of Europe.</p>
          </div>
          
          <div className="customers-gallery">
            <div className="gallery-item large">
              <img src="/images/happy_couple_paris.png" alt="Happy couple in Paris" />
              <div className="gallery-caption">Saman & Nimeshi in Paris, France</div>
            </div>
            <div className="gallery-column">
              <div className="gallery-item">
                <img src="/images/happy_family_swiss.png" alt="Happy family in Switzerland" />
                <div className="gallery-caption">The Perera Family in the Swiss Alps</div>
              </div>
              <div className="gallery-item">
                <img src="/images/happy_group_rome.png" alt="Friends in Rome" />
                <div className="gallery-caption">Dilshan & Friends in Rome, Italy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
