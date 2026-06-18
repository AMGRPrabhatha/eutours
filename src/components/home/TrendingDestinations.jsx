import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagePreviewModal from '../ui/ImagePreviewModal';

const trendingData = [
  { id: 'fr', name: 'France', flag: '🇫🇷', img: '/images/home hero.webp', size: 'large' },
  { id: 'ch', name: 'Switzerland', flag: '🇨🇭', img: '/images/Switzerland.webp', size: 'large' },
  { id: 'it', name: 'Italy', flag: '🇮🇹', img: '/images/Italy.webp', size: 'small' },
  { id: 'de', name: 'Germany', flag: '🇩🇪', img: '/images/Germany.webp', size: 'small' },
  { id: 'nl', name: 'Netherlands', flag: '🇳🇱', img: '/images/Netherlands.webp', size: 'small' }
];

const TrendingDestinations = () => {
  const [previewData, setPreviewData] = useState({ isOpen: false, img: '', title: '' });

  return (
    <section className="trending-destinations-section">
      <div className="container">
        <h2 className="trending-title">Trending destinations</h2>

        <div className="trending-grid">
          {trendingData.map((dest) => (
            <div 
              key={dest.id} 
              className={`trending-card ${dest.size}`}
              onClick={() => setPreviewData({ isOpen: true, img: dest.img, title: dest.name })}
              style={{ cursor: 'pointer' }}
            >
              <div className="trending-bg" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              <div className="trending-overlay"></div>
              <div className="trending-content">
                <h3>{dest.name} <span>{dest.flag}</span></h3>
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

export default TrendingDestinations;
