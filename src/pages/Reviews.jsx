import { useEffect } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'John & Emily',
    trip: '14 Days in Classic Europe',
    rating: 5,
    text: 'Eutours planned the absolute perfect honeymoon for us! From the moment we landed in Paris to our final night in Rome, everything was incredibly seamless. The luxury transport made hopping between countries entirely stress-free.',
    date: 'March 2026',
    avatar: '/images/avatars/avatar_saman_nimeshi_1781792924179.webp'
  },
  {
    id: 2,
    name: 'The Smith Family',
    trip: '10 Days in the Swiss Alps',
    rating: 5,
    text: 'Traveling with two young kids is usually a nightmare, but the Eutours team took care of every single logistical detail. Our guide in Interlaken was incredibly knowledgeable and fantastic with the kids. Truly a trip of a lifetime!',
    date: 'January 2026',
    avatar: '/images/avatars/avatar_perera_family_1781792938042.webp'
  },
  {
    id: 3,
    name: 'David W.',
    trip: '7 Days - Taste of Italy',
    rating: 5,
    text: 'The food and wine tour through Tuscany was breathtaking. I highly recommend letting Eutours handle your itinerary—they found boutique hotels and authentic local experiences that we never would have discovered on our own.',
    date: 'November 2025',
    avatar: '/images/avatars/avatar_dilshan_1781792950719.webp'
  },
  {
    id: 4,
    name: 'Emma Davis',
    trip: '12 Days - Northern Lights',
    rating: 5,
    text: 'Seeing the Aurora Borealis in Iceland has always been my dream. The Eutours team ensured we were at the right place at the perfect time, with cozy, premium accommodations waiting for us in the extreme cold. Exceptional service.',
    date: 'February 2026',
    avatar: '/images/avatars/avatar_amaya_1781792963732.webp'
  },
  {
    id: 5,
    name: 'Kevin & Friends',
    trip: '15 Days Backpacking Europe',
    rating: 5,
    text: 'We wanted a mix of city nightlife and cultural tours. The custom itinerary Eutours built gave us the absolute perfect balance. The local guides in Amsterdam and Berlin were legendary.',
    date: 'December 2025',
    avatar: '/images/avatars/avatar_kavindu_friends_1781793007405.webp'
  },
  {
    id: 6,
    name: 'Mr. & Mrs. Brown',
    trip: '21 Days - Grand European Tour',
    rating: 5,
    text: 'As older travelers, comfort was our top priority. The luxury vans and hand-picked accessible hotels were beyond our expectations. A highly professional, warm, and caring team that we trust completely.',
    date: 'October 2025',
    avatar: '/images/avatars/avatar_silvas_1781793020282.webp'
  }
];

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      {/* Reviews Grid Section */}
      <section className="reviews-grid-section">
        <div className="container">
          <div className="reviews-header">
            <span className="section-pill">//REVIEW</span>
            <h2 className="reviews-main-title">Your <span className="text-theme">trusted partner</span> in travel</h2>
          </div>
          
          <div className="reviews-masonry-grid">
            {reviewsData.map((review) => (
              <div key={review.id} className="modern-review-card">
                <div className="modern-review-header">
                  <div className="avatar">
                    <img src={review.avatar || `https://ui-avatars.com/api/?name=${review.name.split(' ').join('+')}&background=f3f4f6&color=111`} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4>{review.name}</h4>
                </div>
                <p className="modern-review-text">{review.text}</p>
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
              <img src="/images/happy_couple_paris.webp" alt="Happy couple in Paris" />
              <div className="gallery-caption">John & Emily in Paris, France</div>
            </div>
            <div className="gallery-column">
              <div className="gallery-item">
                <img src="/images/happy_family_swiss.webp" alt="Happy family in Switzerland" />
                <div className="gallery-caption">The Smith Family in the Swiss Alps</div>
              </div>
              <div className="gallery-item">
                <img src="/images/happy_group_rome.webp" alt="Friends in Rome" />
                <div className="gallery-caption">David & Friends in Rome, Italy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
