import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const WhereToNext = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const destinations = [
    { title: 'Rome', activities: '150 activities', img: '/images/italy_vertical_1781089947416.webp', link: '/region/italy' },
    { title: 'Swiss Alps', activities: '120 activities', img: '/images/switzerland_vertical_1781089957980.webp', link: '/region/switzerland' },
    { title: 'Paris', activities: '200 activities', img: '/images/paris_dest_1781075727792.webp', style: { objectPosition: 'center' }, link: '/region/france' },
    { title: 'London', activities: '180 activities', img: '/images/london_dest_1781077494703.webp', link: '/region/uk' },
    { title: 'Barcelona', activities: '190 activities', img: '/images/spain_circle_1781090146338.webp', link: '/region/spain' },
    { title: 'Amsterdam', activities: '140 activities', img: '/images/amsterdam_dest_1781077507425.webp', link: '/region/netherlands' },
    { title: 'Berlin', activities: '160 activities', img: '/images/hero_bg_1781075622715.webp', link: '/region/germany' },
    { title: 'Venice', activities: '110 activities', img: '/images/italy_circle_1781090125109.webp', link: '/region/italy' }
  ];

  return (
    <section className="destinations" style={{ paddingTop: '4rem', paddingBottom: '2rem', background: 'var(--white)' }}>
        <div className="container">
            <div className="dest-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 className="dest-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>Where to next?</h2>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button onClick={() => scroll('left')} className="scroll-btn">←</button>
                    <button onClick={() => scroll('right')} className="scroll-btn">→</button>
                </div>
            </div>
            <div className="dest-grid" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', scrollBehavior: 'smooth' }} ref={scrollRef}>
                {destinations.map((dest, idx) => (
                  <Link to={dest.link} className="vertical-card" key={idx} style={{ flex: '0 0 auto', width: '200px' }}>
                      <img src={dest.img} alt={dest.title} style={dest.style || {}} />
                      <div className="v-card-overlay">
                          <h3>{dest.title}</h3>
                          <p>{dest.activities}</p>
                      </div>
                  </Link>
                ))}
            </div>
        </div>
    </section>
  );
};

export default WhereToNext;
