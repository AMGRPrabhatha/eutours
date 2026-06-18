import { Link } from 'react-router-dom';

const Moments = () => {
  return (
    <main className="moments-page">
      <div className="container">
        <div className="moments-header-section">
          <div className="moments-header">
            <h1 className="moments-title">
              The Journey Of<br />European Magic
            </h1>
            <div className="moments-desc-area">
              <p className="moments-desc">
                This journey offers an unforgettable experience that blends adventure, culture, and natural beauty. Located in the heart of Europe's most iconic destinations.
              </p>
              <div className="moments-buttons">
                <Link to="/contact?subject=Travel%20Moments" className="btn btn-dark-rounded">Reminder me</Link>
                <Link to="/travel-guides" className="btn btn-outline-rounded">Learn More</Link>
              </div>
            </div>
          </div>

          <div className="moments-grid">
            {/* Top Row */}
            <div className="moment-card span-2">
              <img src="/images/Swiss Alps.jpg" alt="Country above the clouds" className="moment-bg" />
              <div className="moment-overlay"></div>
              <div className="moment-badge">Most interesting</div>
              <div className="moment-content">
                <span className="moment-subtitle">THE BEAUTY OF EUROPE</span>
                <h3 className="moment-card-title">Country above the clouds</h3>
                <div className="moment-avatars">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Traveler" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Traveler" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="Traveler" />
                </div>
              </div>
            </div>

            <div className="moment-card">
              <img src="/images/Jungfraujoch_Top_of_Europe_Day_Trip.jpg" alt="Jeep Tour" className="moment-bg" />
              <div className="moment-overlay"></div>
              <div className="moment-play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="moment-content">
                <span className="moment-subtitle">ADVENTURE AWAITS</span>
                <h3 className="moment-card-title">Mountain Jeep Tour</h3>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="moment-card">
              <img src="/images/Adventure_Styles_hero.jpg" alt="Hiking" className="moment-bg" />
              <div className="moment-overlay"></div>
              <div className="moment-play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="moment-content">
                <span className="moment-subtitle">MEMORABLE EXPERIENCE</span>
                <h3 className="moment-card-title">Hiking in the Alps</h3>
              </div>
            </div>

            <div className="moment-card">
              <img src="/images/Sagrada_Familia_Fast_Track_Access.jpg" alt="Culture" className="moment-bg" />
              <div className="moment-overlay"></div>
              <div className="moment-play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="moment-content">
                <span className="moment-subtitle">CULTURE AND TRADITION</span>
                <h3 className="moment-card-title">Ancient Cathedrals</h3>
              </div>
            </div>

            <div className="moment-card">
              <img src="/images/paris.jpg" alt="City Riding" className="moment-bg" />
              <div className="moment-overlay"></div>
              <div className="moment-play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="moment-content">
                <span className="moment-subtitle">UNFORGETTABLE EXPERIENCE</span>
                <h3 className="moment-card-title">City Bike Riding</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Moments;
