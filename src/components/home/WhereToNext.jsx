import { useState, useRef } from 'react';
import ImagePreviewModal from '../ui/ImagePreviewModal';

const WhereToNext = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const scrollRef = useRef(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, img: '', title: '' });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const destinations = [
    { title: 'Rome', activities: '150 activities', img: '/images/rome.webp', link: '/region/italy' },
    { title: 'Swiss Alps', activities: '120 activities', img: '/images/Swiss Alps.webp', link: '/region/switzerland' },
    { title: 'Paris', activities: '200 activities', img: '/images/paris.webp', style: { objectPosition: 'center' }, link: '/region/france' },
    { title: 'London', activities: '180 activities', img: '/images/london.webp', link: '/region/uk' },
    { title: 'Barcelona', activities: '190 activities', img: '/images/barcelona.webp', link: '/region/spain' },
    { title: 'Amsterdam', activities: '140 activities', img: '/images/Amsterdam.webp', link: '/region/netherlands' },
    { title: 'Berlin', activities: '160 activities', img: '/images/berlin.webp', link: '/region/germany' },
    { title: 'Venice', activities: '110 activities', img: '/images/Venice.webp', link: '/region/italy' }
  ];

  return (
    <section className="destinations" style={{ paddingTop: '4rem', paddingBottom: '2rem', background: 'var(--white)' }}>
        <div className="container">
            <div className="dest-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <h2 className="dest-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>Where to next?</h2>
                <div className="mobile-only" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button onClick={() => scroll('left')} className="scroll-btn">←</button>
                    <button onClick={() => scroll('right')} className="scroll-btn">→</button>
                </div>
                {visibleCount < destinations.length && (
                  <div className="explore-more desktop-only" style={{cursor: 'pointer'}} onClick={() => setVisibleCount(prev => prev + 5)}>See more</div>
                )}
            </div>
            <div className="dest-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', marginTop: '1rem' }} ref={scrollRef}>
                {destinations.map((dest, idx) => (
                  <div 
                    className={`vertical-card ${idx >= visibleCount ? 'desktop-hide' : ''}`} 
                    key={idx}
                    onClick={() => setPreviewData({ isOpen: true, img: dest.img, title: dest.title })}
                    style={{ cursor: 'pointer' }}
                  >
                      <img src={dest.img} alt={dest.title} style={dest.style || {}} />
                      <div className="v-card-overlay">
                          <h3>{dest.title}</h3>
                          <p>{dest.activities}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
        
        <ImagePreviewModal 
          isOpen={previewData.isOpen}
          onClose={() => setPreviewData({ ...previewData, isOpen: false })}
          imageSrc={previewData.img}
          title={previewData.title}
        />
    </section>
  );
};

export default WhereToNext;
