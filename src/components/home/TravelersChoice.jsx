import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const TravelersChoice = () => {
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
      img: '/images/paris_dest_1781075727792.webp',
      subtitle: 'Tours • Paris',
      title: 'Eiffel Tower Summit Access & Seine Cruise',
      tag: 'Book now for tomorrow',
      rating: '4.8',
      reviews: '(7,994) • 300K+ booked',
      price: 'From € 85.50',
      link: '/region/france'
    },
    {
      img: '/images/hero_bg_1781075622715.webp',
      subtitle: 'Tours • Zurich',
      title: 'Jungfraujoch Top of Europe Day Trip',
      tag: 'Book now for tomorrow',
      rating: '4.9',
      reviews: '(12K+) • 500K+ booked',
      price: 'From € 210.00',
      link: '/region/switzerland'
    },
    {
      img: '/images/london_dest_1781077494703.webp',
      subtitle: 'Attractions • London',
      title: 'London Eye Standard Ticket',
      tag: 'Book now for tomorrow',
      rating: '4.6',
      reviews: '(15K+) • 1M+ booked',
      price: 'From € 42.50',
      link: '/region/uk'
    },
    {
      img: '/images/amsterdam_dest_1781077507425.webp',
      subtitle: 'Cruises • Amsterdam',
      title: 'Amsterdam Evening Canal Cruise',
      tag: 'Book now for today',
      rating: '4.7',
      reviews: '(8,124) • 250K+ booked',
      price: 'From € 35.00',
      link: '/region/netherlands'
    },
    {
      img: '/images/italy_vertical_1781089947416.webp',
      subtitle: 'Tours • Rome',
      title: 'Vatican Museums & Sistine Chapel Tour',
      tag: 'Bestseller',
      rating: '4.9',
      reviews: '(24K+) • 2M+ booked',
      price: 'From € 65.00',
      link: '/region/italy'
    },
    {
      img: '/images/spain_circle_1781090146338.webp',
      subtitle: 'Attractions • Barcelona',
      title: 'Sagrada Familia Fast Track Access',
      tag: 'Book now for tomorrow',
      rating: '4.8',
      reviews: '(19K+) • 800K+ booked',
      price: 'From € 33.80',
      link: '/region/spain'
    },
    {
      img: '/images/swiss_circle_1781090136030.webp',
      subtitle: 'Tours • Lucerne',
      title: 'Mount Titlis Half-Day Tour with Cable Car',
      tag: 'Instant Confirmation',
      rating: '4.7',
      reviews: '(5,432) • 150K+ booked',
      price: 'From € 145.00',
      link: '/region/switzerland'
    },
    {
      img: '/images/france_circle_1781090115021.webp',
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
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: 'auto' }}>
                    <button onClick={() => scroll('left')} className="scroll-btn">←</button>
                    <button onClick={() => scroll('right')} className="scroll-btn">→</button>
                </div>
            </div>
            
            <div className="advanced-grid" style={{ marginBottom: 0 }} ref={scrollRef}>
                {tours.map((tour, idx) => (
                  <Link to={tour.link} className="adv-card" key={idx}>
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
                              <div className="adv-price">{tour.price}</div>
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
