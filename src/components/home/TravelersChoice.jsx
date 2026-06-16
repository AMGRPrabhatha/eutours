import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const TravelersChoice = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const tours = [
    {
      img: '/images/Eiffel_Tower_Summit_Access_&_Seine_Cruise.webp',
      subtitle: 'Tours • Paris',
      title: 'Eiffel Tower Summit Access & Seine Cruise',
      tag: 'Book now for tomorrow',
      rating: '4.8',
      reviews: '(7,994) • 300K+ booked',
      price: 'From € 85.50',
      link: '/region/france'
    },
    {
      img: '/images/Jungfraujoch_Top_of_Europe_Day_Trip.jpg',
      subtitle: 'Tours • Zurich',
      title: 'Jungfraujoch Top of Europe Day Trip',
      tag: 'Book now for tomorrow',
      rating: '4.9',
      reviews: '(12K+) • 500K+ booked',
      price: 'From € 210.00',
      link: '/region/switzerland'
    },
    {
      img: '/images/London_Eye_Standard_Ticket.jpg',
      subtitle: 'Attractions • London',
      title: 'London Eye Standard Ticket',
      tag: 'Book now for tomorrow',
      rating: '4.6',
      reviews: '(15K+) • 1M+ booked',
      price: 'From € 42.50',
      link: '/region/uk'
    },
    {
      img: '/images/Amsterdam_Evening_Canal_Cruise.jpg',
      subtitle: 'Cruises • Amsterdam',
      title: 'Amsterdam Evening Canal Cruise',
      tag: 'Book now for today',
      rating: '4.7',
      reviews: '(8,124) • 250K+ booked',
      price: 'From € 35.00',
      link: '/region/netherlands'
    },
    {
      img: '/images/Vatican_Museums_&_Sistine_Chapel_Tour.jpg',
      subtitle: 'Tours • Rome',
      title: 'Vatican Museums & Sistine Chapel Tour',
      tag: 'Bestseller',
      rating: '4.9',
      reviews: '(24K+) • 2M+ booked',
      price: 'From € 65.00',
      link: '/region/italy'
    },
    {
      img: '/images/Sagrada_Familia_Fast_Track_Access.jpg',
      subtitle: 'Attractions • Barcelona',
      title: 'Sagrada Familia Fast Track Access',
      tag: 'Book now for tomorrow',
      rating: '4.8',
      reviews: '(19K+) • 800K+ booked',
      price: 'From € 33.80',
      link: '/region/spain'
    },
    {
      img: '/images/Mount_Titlis_Half-Day_Tour_with_Cable_Car.jpg',
      subtitle: 'Tours • Lucerne',
      title: 'Mount Titlis Half-Day Tour with Cable Car',
      tag: 'Instant Confirmation',
      rating: '4.7',
      reviews: '(5,432) • 150K+ booked',
      price: 'From € 145.00',
      link: '/region/switzerland'
    },
    {
      img: '/images/Versailles_Palace_Skip-the-Line_Guided_Tour.jpg',
      subtitle: 'Day Trips • Paris',
      title: 'Versailles Palace Skip-the-Line Guided Tour',
      tag: 'Book now for today',
      rating: '4.6',
      reviews: '(11K+) • 400K+ booked',
      price: 'From € 55.00',
      link: '/region/france'
    }
  ];

  return (
    <section className="destinations" style={{ paddingTop: '2rem', background: 'var(--white)' }}>
        <div className="container">
            <div className="dest-header" style={{ flexWrap: 'wrap', gap: '10px' }}>
                <h2 className="dest-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>Travelers' favorite choices</h2>
                <div className="mobile-only" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: 'auto' }}>
                    <button onClick={() => scroll('left')} className="scroll-btn">←</button>
                    <button onClick={() => scroll('right')} className="scroll-btn">→</button>
                </div>
                {visibleCount < tours.length && (
                  <div className="explore-more desktop-only" style={{cursor: 'pointer', marginLeft: 'auto'}} onClick={() => setVisibleCount(prev => prev + 4)}>See more</div>
                )}
            </div>
            
            <div className="advanced-grid" style={{ marginBottom: 0 }} ref={scrollRef}>
                {tours.map((tour, idx) => (
                  <Link to={tour.link} className={`adv-card ${idx >= visibleCount ? 'desktop-hide' : ''}`} key={idx}>
                      <div className="adv-img-container">
                          <img src={tour.img} alt={tour.title} className="adv-img" />
                      </div>
                      <div className="adv-info">
                          <p className="adv-subtitle" style={{ marginBottom: '0.3rem' }}>{tour.subtitle}</p>
                          <h3 className="adv-title">{tour.title}</h3>
                          <div className="adv-tags">
                              <span className="adv-tag">{tour.tag}</span>
                          </div>
                          <div className="adv-rating">
                              <span className="adv-star">★</span> {tour.rating} <span>{tour.reviews}</span>
                          </div>
                          <div className="adv-price-section">
                              <div className="adv-price" style={{ textDecoration: 'underline', fontWeight: '600', color: 'var(--text-main)' }}>Inquiry</div>
                          </div>
                      </div>
                  </Link>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TravelersChoice;
