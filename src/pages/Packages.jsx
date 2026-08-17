import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 7 Curated European Tour Packages (Pricing entirely excluded)
const packagesData = [
  {
    id: 'imperial-europe',
    title: 'Imperial Europe & Alps Explorer',
    category: 'Exploration',
    rating: 5.0,
    reviewCount: 34,
    quote: "From Roman Legends to Alpine Wonders — Europe's Greatest Highlights",
    quoteAuthor: "Eutours",
    quoteMonth: "May",
    duration: 13,
    countries: ['Italy', 'Austria', 'Germany'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/Imperial Europe & Alps Explorer/Piazza towerr.webp',
      '/images/packagess/Imperial Europe & Alps Explorer/marienplatz germany.webp',
      '/images/packagess/Imperial Europe & Alps Explorer/pompeiii.webp',
      '/images/packagess/Imperial Europe & Alps Explorer/rome colloseum.webp',
      '/images/packagess/Imperial Europe & Alps Explorer/trevi fountain rome.webp',
      '/images/packagess/Imperial Europe & Alps Explorer/1.jpeg',
      '/images/packagess/Imperial Europe & Alps Explorer/2.jpeg'
    ],
    overview: [
      "Discover the timeless beauty of Italy, Austria, and Germany on an unforgettable 13-day journey that blends ancient history, Renaissance masterpieces, world-famous landmarks, breathtaking Alpine scenery, and iconic automotive experiences. Wander through the Eternal City of Rome, marvel at the ruins of Pompeii, indulge in the charm of Tuscany, cruise Venice's romantic canals, embrace the spectacular Austrian Alps, and conclude your adventure in vibrant Munich. Carefully paced and thoughtfully designed, this itinerary lets you experience Europe's most celebrated destinations without feeling rushed."
    ]
  },
  {
    id: 'grand-marian',
    title: 'The Grand Marian & Saints Pilgrimage',
    category: 'Pilgrimage',
    rating: 4.9,
    reviewCount: 42,
    quote: "A Sacred Journey of Faith, Prayer & Grace Across Europe's Most Revered Catholic Shrines",
    quoteAuthor: "Eutours",
    quoteMonth: "June",
    duration: 15,
    countries: ['Italy', 'France', 'Spain', 'Portugal'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.22 (1).webp',
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.22 (2).webp',
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.22 (3).webp',
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.22.webp',
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.23 (1).webp',
      '/images/packagess/The Grand Marian & Saints Pilgrimage/WhatsApp Image 2026-07-04 at 00.51.23.webp'
    ],
    overview: [
      "Travel across some of Europe's most cherished Catholic destinations through four remarkable European countries, where centuries of faith, devotion, and Christian heritage come alive. This carefully curated spiritual journey combines revered Marian traditions, inspiring saints, sacred places of worship, and opportunities for daily prayer, reflection, and Holy Mass in an atmosphere of peace and grace.",
      "Designed for pilgrims seeking more than sightseeing, this unforgettable experience offers meaningful moments of worship, spiritual renewal, candlelit devotions, breathtaking scenery, and fellowship with fellow believers. Every step is thoughtfully planned to inspire the heart, strengthen faith, and create memories that last a lifetime."
    ]
  },
  {
    id: 'footsteps-faith',
    title: 'Footsteps of Faith: Central Europe Catholic Pilgrimage',
    category: 'Pilgrimage',
    rating: 5.0,
    reviewCount: 28,
    quote: "Spiritually Enriching • Comfortably Paced • Deeply Transformative",
    quoteAuthor: "Eutours",
    quoteMonth: "July",
    duration: 15,
    countries: ['Italy', 'Poland', 'Czech Republic', 'Slovakia', 'Austria', 'Hungary', 'Bosnia'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41 (1).webp',
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41 (2).webp',
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41 (3).webp',
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41 (4).webp',
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41 (5).webp',
      '/images/packagess/Footsteps of Faith Central Europe Catholic Pilgrimage/WhatsApp Image 2026-07-05 at 21.15.41.webp'
    ],
    overview: [
      "Embark on a sacred pilgrimage through the heart of Catholic Europe, where every destination invites you to deepen your faith, encounter the lives of beloved saints, and experience God's presence in places of profound spiritual significance. From the Vatican and the holy footsteps of St. Francis, St. Anthony, and St. Padre Pio, to the Divine Mercy devotion in Poland, the Infant Jesus of Prague, the timeless cathedrals of Vienna and Budapest, and the peaceful sanctuary of Međugorje, this journey is thoughtfully designed to nourish your soul. With opportunities for Holy Mass, prayer, reflection, and fellowship, this pilgrimage offers not only a visit to holy sites but also a life-changing spiritual experience that inspires, renews, and strengthens your walk with Christ"
    ]
  },
  {
    id: 'grand-road-adventure',
    title: 'Grand European Road Adventure',
    category: 'Road Trip',
    rating: 4.8,
    reviewCount: 56,
    quote: "From Paris boulevards to Roman streets — an unforgettable European road adventure",
    quoteAuthor: "Eutours",
    quoteMonth: "August",
    duration: 15,
    countries: ['France', 'Belgium', 'Netherlands', 'Germany', 'Switzerland', 'Italy'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/Grand European Road Adventure/1.jpg',
      '/images/packagess/Grand European Road Adventure/2.jpg',
      '/images/packagess/Grand European Road Adventure/3.jpg',
      '/images/packagess/Grand European Road Adventure/4.jpg',
      '/images/packagess/Grand European Road Adventure/5.jpg'
    ],
    overview: [
      "One unforgettable journey. Six incredible countries. Endless memories.",
      "Discover the very best, from elegant capital cities and charming old towns to breathtaking alpine landscapes and picturesque countryside, this carefully crafted tour blends iconic European experiences with comfortable travel, scenic drives, relaxing sightseeing, and plenty of opportunities to capture unforgettable memories.",
      "Enjoy a perfect balance of culture, history, nature, and local experiences as you cruise through beautiful waterways, wander vibrant city centers, admire world-famous architecture, experience spectacular mountain scenery, travel along legendary highways, and savor authentic European cafés, cuisine, shopping, and regional flavors. Every day offers a new destination and a different perspective, ensuring an exciting yet unhurried journey.",
      "The adventure concludes in Italy, where romance, timeless heritage, artistic beauty, and spiritual traditions come together to create the perfect finale. Whether you're travelling as a couple, family, or group of friends, this expertly planned itinerary offers a seamless European holiday that combines famous highlights, hidden treasures, scenic routes, and unforgettable experiences—all designed to let you experience Europe at its finest."
    ]
  },
  {
    id: 'romance-peaks',
    title: 'A Journey through Romance & Peaks',
    category: 'Exploration',
    rating: 4.9,
    reviewCount: 30,
    quote: "A breathtaking journey through romantic cities and majestic peaks",
    quoteAuthor: "Eutours",
    quoteMonth: "September",
    duration: 9,
    countries: ['France', 'Switzerland'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/A Journey Through Romance & Peaks/bern clocktower.webp',
      '/images/packagess/A Journey Through Romance & Peaks/colmar france.webp',
      '/images/packagess/A Journey Through Romance & Peaks/disny france.webp',
      '/images/packagess/A Journey Through Romance & Peaks/jungfraujoch.webp',
      '/images/packagess/A Journey Through Romance & Peaks/thunersee.webp'
    ],
    overview: [
      "From Parisian elegance to Swiss alpine grandeur, this 8-night journey blends two iconic worlds into one seamless escape. Start in Paris with its timeless landmarks—admire the Louvre Museum, stand beneath the Arc de Triomphe, cruise the Seine, and explore the grandeur of the Palace of Versailles. Venture into the French countryside with a scenic stop in storybook Colmar.",
      "Then continue into Switzerland’s alpine beauty—stroll through Lucerne, cross the iconic Chapel Bridge, and unwind by Lake Lucerne. Experience Swiss craftsmanship at Lindt & Sprüngli before journeying through the mountains to Interlaken and reaching the breathtaking heights of Jungfraujoch—the “Top of Europe.”",
      "A refined, private, and perfectly paced escape through Europe’s most unforgettable landscapes"
    ]
  },
  {
    id: 'italy-swiss-alps',
    title: 'Italy to Swiss Alps Prime Escape',
    category: 'Road Trip',
    rating: 5.0,
    reviewCount: 45,
    quote: "The ultimate escape from Italian charm to Swiss Alpine grandeur",
    quoteAuthor: "Eutours",
    quoteMonth: "October",
    duration: 10,
    countries: ['Italy', 'Switzerland'],
    ageRange: 'All Ages Welcome',
    operatedIn: 'your preferred Language',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: [
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (1).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (2).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (3).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (4).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (5).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15 (6).webp',
      '/images/packagess/ITALY TO SWISS ALPS PRIME ESCAPE 2/WhatsApp Image 2026-07-07 at 01.06.15.webp'
    ],
    overview: [
      "Where timeless elegance meets breathtaking alpine beauty.",
      "Journey through the heart of Italy and Switzerland on a carefully crafted escape that blends romance, culture, spectacular scenery, and unforgettable experiences. Discover historic cities, charming lakeside retreats, picturesque countryside, and majestic mountain landscapes while enjoying relaxed travel, premium comfort, and handpicked experiences designed to create lasting memories.",
      "From Mediterranean charm to snow-capped Alpine peaks, this signature journey offers the perfect balance of iconic highlights, authentic local experiences, scenic drives, and leisurely exploration—making every day as memorable as the destination itself."
    ]
  }
];

// Helper components for UI templates

const TemplateImagePlaceholder = ({ category }) => (
  <div className="template-image-placeholder">
    <div className="placeholder-art">
      <div className="art-sun"></div>
      <div className="art-mountain-back"></div>
      <div className="art-mountain-front"></div>
    </div>
    <span className="placeholder-text-badge">{category}</span>
  </div>
);

const AutoImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="pkg-card-real-img" style={{ position: 'relative', overflow: 'hidden' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} - ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0
          }}
          onError={(e) => { e.target.onerror = null; e.target.src = '/images/Switzerland.webp'; }}
        />
      ))}
    </div>
  );
};

const Packages = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [wishlist, setWishlist] = useState([]);
  const [activeItinerary, setActiveItinerary] = useState(null);
  const [activeBrochure, setActiveBrochure] = useState(null);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureName, setBrochureName] = useState('');
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute all unique countries represented in the packages for the sidebar filter
  const allCountries = Array.from(
    new Set(packagesData.flatMap((pkg) => pkg.countries))
  ).sort();

  const getCountryCount = (country) => {
    return packagesData.filter((pkg) => pkg.countries.includes(country)).length;
  };

  const handleCountryToggle = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const removeCountryFilter = (country) => {
    setSelectedCountries(selectedCountries.filter((c) => c !== country));
  };

  const clearAllFilters = () => {
    setSelectedCountries([]);
  };

  const toggleWishlist = (pkgId) => {
    if (wishlist.includes(pkgId)) {
      setWishlist(wishlist.filter((id) => id !== pkgId));
    } else {
      setWishlist([...wishlist, pkgId]);
    }
  };

  const openItinerary = (pkg) => {
    setActiveItinerary(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeItinerary = () => {
    setActiveItinerary(null);
    document.body.style.overflow = 'unset';
  };

  const openBrochure = (pkg) => {
    setActiveBrochure(pkg);
    setBrochureEmail('');
    setBrochureName('');
    setBrochureSuccess(false);
    document.body.style.overflow = 'hidden';
  };

  const closeBrochure = () => {
    setActiveBrochure(null);
    document.body.style.overflow = 'unset';
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    if (brochureEmail && brochureName) {
      setBrochureSuccess(true);
    }
  };

  // Filter packages based on selected countries
  const filteredPackages = packagesData.filter((pkg) => {
    if (selectedCountries.length === 0) return true;
    return pkg.countries.some((country) => selectedCountries.includes(country));
  });

  // Sort packages based on chosen option
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'popular') {
      return (b.rating * b.reviewCount) - (a.rating * a.reviewCount);
    } else if (sortBy === 'duration-asc') {
      return a.duration - b.duration;
    } else if (sortBy === 'duration-desc') {
      return b.duration - a.duration;
    }
    return 0;
  });

  return (
    <div className="packages-page">

      <div className="packages-layout container">
        {/* Left Side Filters Sidebar */}


        {/* Right Side Packages List */}
        <main className="packages-main-content">
          <div className="packages-list-header">
            <h3>Special Offers</h3>
          </div>

          <div className="packages-list-cards">
            {sortedPackages.length > 0 ? (
              sortedPackages.map((pkg) => (
                <div key={pkg.id} className="pkg-horizontal-card" onClick={() => openItinerary(pkg)} style={{ cursor: 'pointer' }}>
                  {/* Left Column: Real Image & Map overlay */}
                  <div className="pkg-card-media-col" onClick={(e) => e.stopPropagation()}>
                    <AutoImageSlider images={pkg.images} title={pkg.title} />
                  </div>

                  {/* Middle Column: Details & Ratings */}
                  <div className="pkg-card-details-col">
                    <div className="pkg-category-badge">{pkg.category}</div>
                    <h2>{pkg.title}</h2>

                    <div className="pkg-spec-grid">
                      <div className="spec-item">
                        <span className="spec-label">Duration</span>
                        <span className="spec-value">{pkg.duration} days</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Countries</span>
                        <span className="spec-value text-truncate" title={pkg.countries.join(', ')}>
                          {pkg.countries.join(', ')}
                        </span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Age Range</span>
                        <span className="spec-value">{pkg.ageRange}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Operated in</span>
                        <span className="spec-value">{pkg.operatedIn}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Operator</span>
                        <span className="spec-value">{pkg.operator}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions (No Prices) */}
                  <div className="pkg-card-actions-col" onClick={(e) => e.stopPropagation()}>
                    <div className="pkg-discount-tag">{pkg.discount}</div>
                    
                    <div className="pkg-action-buttons">
                      <button className="btn btn-primary btn-view-tour" onClick={() => openItinerary(pkg)}>
                        View tour
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-packages-found">
                <div className="no-pkg-icon">🗺️</div>
                <h3>No Packages Found</h3>
                <p>Try clearing your selected filters or choosing another country.</p>
                <button className="btn btn-primary" onClick={clearAllFilters}>Reset Filters</button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Itinerary / View Tour Modal Redesign */}
      {activeItinerary && (
        <div className="guide-modal-overlay" onClick={closeItinerary}>
          <div className="guide-modal-container pkg-modal-redesign animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="guide-modal-close" onClick={closeItinerary} aria-label="Close modal">
              &times;
            </button>
            
            <div className="pkg-modal-header">
              <h2>{activeItinerary.title}</h2>
              <div className="pkg-modal-meta-row">
                <span className="pkg-rating">★ {activeItinerary.rating.toFixed(1)} <span className="pkg-reviews">({activeItinerary.reviewCount} reviews)</span></span>
                <span className="pkg-meta-divider"></span>
                <span className="pkg-tour-code">Tour Code: EU-{activeItinerary.id.substring(0, 6).toUpperCase()}</span>
                <span className="pkg-guarantee-badge">Guaranteed Departure</span>
              </div>
            </div>

            <div className="pkg-modal-split-layout">
              {/* Left Column (70%) */}
              <div className="pkg-modal-left">
                <div className="pkg-modal-hero-img">
                  <AutoImageSlider images={activeItinerary.images} title={activeItinerary.title} />
                  {activeItinerary.discount && (
                    <div className="pkg-hero-discount">
                      Save {activeItinerary.discount.replace(' Off', '')}
                    </div>
                  )}
                </div>

                <div className="pkg-details-grid">
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Start</span>
                      <span className="pkg-detail-value">{activeItinerary.countries[0] || 'Varies'}</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">End</span>
                      <span className="pkg-detail-value">{activeItinerary.countries[activeItinerary.countries.length - 1] || 'Varies'}</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Duration</span>
                      <span className="pkg-detail-value">{activeItinerary.duration} days</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Language</span>
                      <span className="pkg-detail-value">{activeItinerary.operatedIn}</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Group Size</span>
                      <span className="pkg-detail-value">Up to 35</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Group Type</span>
                      <span className="pkg-detail-value">Standard Group</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">Tour Audience</span>
                      <span className="pkg-detail-value">{activeItinerary.ageRange}</span>
                    </div>
                  </div>
                </div>

                <div className="guide-modal-sections">
                  <h4 style={{ marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 800 }}>Tour Overview</h4>
                  {activeItinerary.overview && activeItinerary.overview.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1.05rem' }}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Right Column (30%) */}
              <div className="pkg-modal-right">
                {/* Action Card */}
                <div className="pkg-action-card">
                  <div className="pkg-action-flex">
                    <Link to={`/contact?subject=${encodeURIComponent('Availability for ' + activeItinerary.title)}`} className="btn btn-primary pkg-book-btn" onClick={closeItinerary}>
                      Check Availability
                    </Link>
                    <button className="pkg-wishlist-btn" aria-label="Add to wishlist">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </button>
                  </div>
                </div>

                {/* Why Book Card */}
                <div className="pkg-guarantees-card">
                  <h4>Why book with Eutours?</h4>
                  <ul className="pkg-guarantees-list">
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Best Price Guarantee
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Transparent Pricing
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Departure & Itinerary Protection
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Travel Safety Assurance
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      24/7 Multilingual Support
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brochure Request Modal */}
      {activeBrochure && (
        <div className="guide-modal-overlay" onClick={closeBrochure}>
          <div className="guide-modal-container animate-slide-up" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <button className="guide-modal-close" onClick={closeBrochure} aria-label="Close modal">
              &times;
            </button>
            
            <div className="guide-modal-hero" style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', padding: '2rem' }}>
              <div className="guide-modal-hero-content">
                <span className="guide-modal-badge" style={{ background: 'rgba(255,255,255,0.2)' }}>BROCHURE</span>
                <h2 style={{ fontSize: '1.5rem' }}>Request Brochure</h2>
                <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0', opacity: 0.9 }}>{activeBrochure.title}</p>
              </div>
            </div>
            
            <div className="guide-modal-body" style={{ padding: '2rem' }}>
              {brochureSuccess ? (
                <div className="brochure-success-state" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>✓</div>
                  <h4>Brochure Sent Successfully!</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>We have emailed the detailed PDF brochure for <strong>{activeBrochure.title}</strong> to <strong>{brochureEmail}</strong>.</p>
                  <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={closeBrochure}>
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="brochure-request-form">
                  <div className="form-group-new" style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={brochureName}
                      onChange={(e) => setBrochureName(e.target.value)}
                      placeholder="John Doe"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                    />
                  </div>

                  <div className="form-group-new" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      placeholder="johndoe@example.com"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                    Send PDF Brochure
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
