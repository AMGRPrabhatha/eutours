import { Link } from 'react-router-dom';

const trendingData = [
  { id: 'fr', name: 'France', flag: '🇫🇷', img: '/images/home hero.webp', size: 'large' },
  { id: 'ch', name: 'Switzerland', flag: '🇨🇭', img: '/images/Switzerland.jpg', size: 'large' },
  { id: 'it', name: 'Italy', flag: '🇮🇹', img: '/images/Italy.jpg', size: 'small' },
  { id: 'de', name: 'Germany', flag: '🇩🇪', img: '/images/Germany.jpg', size: 'small' },
  { id: 'nl', name: 'Netherlands', flag: '🇳🇱', img: '/images/Netherlands.jpg', size: 'small' }
];

const TrendingDestinations = () => {
  return (
    <section className="trending-destinations-section">
      <div className="container">
        <h2 className="trending-title">Trending destinations</h2>

        <div className="trending-grid">
          {trendingData.map((dest) => (
            <Link to="/contact" key={dest.id} className={`trending-card ${dest.size}`}>
              <div className="trending-bg" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              <div className="trending-overlay"></div>
              <div className="trending-content">
                <h3>{dest.name} <span>{dest.flag}</span></h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
