import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-hero-section">
          <div className="blog-hero-header">
            <h1 className="blog-hero-title">
              Travel Blog<br />Around Europe
            </h1>
            <div className="blog-hero-desc-area">
              <p className="blog-hero-desc">
                This blog features beautiful photographs and personal experiences, providing insights into the local culture and customs, and inspiring travel enthusiasts to explore this enchanting destination.
              </p>
              <div className="blog-hero-buttons">
                <Link to="/contact?subject=Blog%20Updates" className="btn btn-dark-rounded">Reminder me</Link>
                <Link to="/travel-guides" className="btn btn-outline-rounded">Learn More</Link>
              </div>
            </div>
          </div>

          <div className="blog-hero-grid">
            <div className="blog-grid-main">
              <div className="blog-card main-card">
                <div className="blog-img-wrapper">
                  <img src="/images/Hidden Gems Off the Beaten Path.webp" alt="Local Culture" />
                </div>
                <div className="blog-content">
                  <span className="blog-tag">TRAVEL</span>
                  <h2 className="blog-post-title main-title">Exploring Local Culture and Traditions</h2>
                  <div className="blog-author">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Author" className="author-avatar" />
                    <div className="author-info">
                      <span className="author-name">Pambudi Smith</span>
                      <span className="author-date">10th May 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-grid-side">
              <div className="blog-card side-card">
                <div className="blog-img-wrapper side-img">
                  <img src="/images/Swiss Alps.webp" alt="Sea of Sand" />
                </div>
                <div className="blog-content">
                  <span className="blog-tag">TRAVEL</span>
                  <h3 className="blog-post-title side-title">The Beauty of the Swiss Alps</h3>
                </div>
              </div>
              <div className="blog-card side-card">
                <div className="blog-img-wrapper side-img">
                  <img src="/images/Venice.webp" alt="Sunrise" />
                </div>
                <div className="blog-content">
                  <span className="blog-tag">TRAVEL</span>
                  <h3 className="blog-post-title side-title">Sunrise in Magical Venice</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
