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
    quote: "From Roman Legends to Alpine Wonders — Europe\'s Greatest Highlights",
    quoteAuthor: "Eutours",
    quoteMonth: "May",
    duration: 13,
    countries: ['Italy', 'Austria', 'Germany'],
    destinations: 'Rome, Naples, Florence, Pisa, Milan, Venice, Salzburg, Munich',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: ['/images/italy/Rome.webp','/images/italy/Florence.webp','/images/italy/Venice.webp','/images/Austria/Salzburg.webp','/images/Germany/Munich.webp'],
    itinerary: [
      { day: 1, title: 'Rome & Naples', desc: 'Colosseum • Vatican Museums • Sistine Chapel • St. Peter\'s Basilica • Trevi Fountain • Pantheon • Piazza Navona • Pompeii • Mount Vesuvius' },
      { day: 2, title: 'Rome & Naples', desc: 'Colosseum • Vatican Museums • Sistine Chapel • St. Peter\'s Basilica • Trevi Fountain • Pantheon • Piazza Navona • Pompeii • Mount Vesuvius' },
      { day: 3, title: 'Rome & Naples', desc: 'Colosseum • Vatican Museums • Sistine Chapel • St. Peter\'s Basilica • Trevi Fountain • Pantheon • Piazza Navona • Pompeii • Mount Vesuvius' },
      { day: 4, title: 'Florence & Tuscany', desc: 'Florence Duomo • Ponte Vecchio • Piazza Della Signoria • Tuscan Vineyard & Wine Experience' },
      { day: 5, title: 'Pisa & Supercars', desc: 'Leaning Tower of Pisa • Optional Ferrari/Lamborghini Factory, Museum & Self-Drive Experience on availability' },
      { day: 6, title: 'Milan', desc: 'Duomo di Milano • Leonardo da Vinci\'s The Last Supper • Shopping & Leisure' },
      { day: 7, title: 'Verona & Venice', desc: 'Juliet\'s House • St. Anthony\'s Basilica • Gondola Ride • Murano Glass Workshops' },
      { day: 8, title: 'Verona & Venice', desc: 'Juliet\'s House • St. Anthony\'s Basilica • Gondola Ride • Murano Glass Workshops' },
      { day: 9, title: 'Austrian Alps', desc: 'Salzburg • Boat Cruise • Mozart\'s birthplace • Spectacular Alpine Landscapes' },
      { day: 10, title: 'Austrian Alps', desc: 'Salzburg • Boat Cruise • Mozart\'s birthplace • Spectacular Alpine Landscapes' },
      { day: 11, title: 'Austrian Alps', desc: 'Salzburg • Boat Cruise • Mozart\'s birthplace • Spectacular Alpine Landscapes' },
      { day: 12, title: 'Munich', desc: 'BMW facility • Marienplatz • Viktualienmarkt • Munich Airport Drop-Off' },
      { day: 13, title: 'Munich', desc: 'BMW facility • Marienplatz • Viktualienmarkt • Munich Airport Drop-Off' }
    ]
  },
  {
    id: 'grand-marian',
    title: 'The Grand Marian & Saints Pilgrimage',
    category: 'Pilgrimage',
    rating: 4.9,
    reviewCount: 42,
    quote: "A Sacred Journey of Faith, Prayer & Grace Across Europe\'s Most Revered Catholic Shrines",
    quoteAuthor: "Eutours",
    quoteMonth: "June",
    duration: 15,
    countries: ['Italy', 'France', 'Spain', 'Portugal'],
    destinations: 'Rome, Assisi, Lanciano, San Giovanni Rotondo, Padua, Lourdes, Barcelona, Zaragoza, Fatima',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: ['/images/italy/Rome.webp','/images/italy/Vatican_Museums.webp','/images/france/Notre-Dame.webp','/images/Spain/Barcelona.webp','/images/Portugal/Lisbon.webp'],
    itinerary: [
      { day: 1, title: 'Italy – In the Footsteps of the Saints', desc: 'Rome • Vatican City • Assisi • Lanciano • San Giovanni Rotondo • Padua. Vatican Museums & St. Peter\'s Basilica. Papal Audience/Blessing.' },
      { day: 2, title: 'Italy – In the Footsteps of the Saints', desc: 'Holy Mass in Rome. Assisi – Tomb of St. Francis & St. Clare.' },
      { day: 3, title: 'Italy – In the Footsteps of the Saints', desc: 'Lanciano Eucharistic Miracle Shrine.' },
      { day: 4, title: 'Italy – In the Footsteps of the Saints', desc: 'San Giovanni Rotondo – Shrine of St. Padre Pio.' },
      { day: 5, title: 'Italy – In the Footsteps of the Saints', desc: 'Padua – Basilica of St. Anthony.' },
      { day: 6, title: 'Italy – In the Footsteps of the Saints', desc: 'Dedicated prayer, reflection, and devotional time throughout.' },
      { day: 7, title: 'France – Lourdes Pilgrimage', desc: '1 night in Monte carlo, 2 nights Lourdes. Sanctuary of Our Lady of Lourdes.' },
      { day: 8, title: 'France – Lourdes Pilgrimage', desc: 'Grotto of Massabielle. Healing Baths (where available).' },
      { day: 9, title: 'France – Lourdes Pilgrimage', desc: 'International Holy Mass. Eucharistic Procession. Evening Candlelight Rosary Procession.' },
      { day: 10, title: 'Spain – Faith & Heritage', desc: 'Barcelona • Zaragoza. Sagrada Familia Basilica.' },
      { day: 11, title: 'Spain – Faith & Heritage', desc: 'Basilica of Our Lady of the Pillar, Zaragoza.' },
      { day: 12, title: 'Spain – Faith & Heritage', desc: 'Holy Mass and devotional visits. Time for quiet prayer and pilgrimage activities.' },
      { day: 13, title: 'Portugal – Fatima', desc: '2 Nights Fatima. Sanctuary of Our Lady of Fatima. Chapel of the Apparitions.' },
      { day: 14, title: 'Portugal – Fatima', desc: 'Basilica of Our Lady of the Rosary. Holy Mass. Rosary at the Shrine.' },
      { day: 15, title: 'Portugal – Fatima', desc: 'Evening Candlelight Procession. Personal prayer and thanksgiving before departure.' }
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
    countries: ['Italy', 'Poland', 'Czech Republic', 'Slovakia', 'Austria', 'Hungary', 'Bosnia & Herzegovina'],
    destinations: 'Rome, Warsaw, Prague, Bratislava, Vienna, Budapest, Međugorje',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: ['/images/italy/Rome.webp','/images/Poland/Old Town Square.webp','/images/Austria/Vienna.webp','/images/Germany/Berlin.webp','/images/italy/Pantheon.webp'],
    itinerary: [
      { day: 1, title: 'Italy – The Heart of Catholicism', desc: 'Rome & Vatican City • Papal Audience (subject to schedule) • St. Peter\'s Basilica • Vatican Museums' },
      { day: 2, title: 'Italy – The Heart of Catholicism', desc: 'Assisi (St. Francis) • Padua (St. Anthony)' },
      { day: 3, title: 'Italy – The Heart of Catholicism', desc: 'Lanciano Eucharistic Miracle' },
      { day: 4, title: 'Italy – The Heart of Catholicism', desc: 'San Giovanni Rotondo (St. Padre Pio)' },
      { day: 5, title: 'Italy – The Heart of Catholicism', desc: 'Continued exploration of Italy\'s sacred sites.' },
      { day: 6, title: 'Italy – The Heart of Catholicism', desc: 'Final day in Italy before departing to Poland.' },
      { day: 7, title: 'Poland', desc: 'Warsaw • Divine Mercy devotion • Pilgrimage sites associated with St. John Paul II' },
      { day: 8, title: 'Poland', desc: 'Holy Mass & reflection time' },
      { day: 9, title: 'Czech Republic', desc: 'Prague • Infant Jesus of Prague Shrine • Historic churches and spiritual heritage' },
      { day: 10, title: 'Slovakia', desc: 'Bratislava • St Martin\'s Cathedral, • Leisurely old-town pilgrimage walk' },
      { day: 11, title: 'Austria & Hungary', desc: 'Vienna: St. Stephen’s Cathedral • St. Peter’s Church • Karlskirche • Schönbrunn Palace' },
      { day: 12, title: 'Austria & Hungary', desc: 'Budapest: St. Stephen’s Basilica • Matthias Church • Gellért Hill • Castle District • Danube River' },
      { day: 13, title: 'Međugorje, Bosnia & Herzegovina', desc: 'Apparition Hill • St. James Church • Holy Mass' },
      { day: 14, title: 'Međugorje, Bosnia & Herzegovina', desc: 'Rosary & Adoration • Personal prayer, reflection, and spiritual renewal' },
      { day: 15, title: 'Drop off at airport', desc: 'Final blessings and departure to the airport.' }
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
    destinations: 'Paris, Brussels, Amsterdam, Cologne, Interlaken, Venice, Pisa, Florence, Assisi, Rome',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'Eutours Premium',
    discount: 'Special Offer',
    roomType: 'Price based on Shared/Private Room',
    images: ['/images/france/Paris.webp','/images/Germany/Cologne.webp','/images/italy/Venice.webp','/images/italy/Rome.webp','/images/france/Eiffel_Tower.webp'],
    itinerary: [
      { day: 1, title: 'Paris, France', desc: 'Eiffel Tower photo stop, Arc de Triomphe, Louvre exterior & pyramid, Cruise tour.' },
      { day: 2, title: 'Paris Exploration', desc: 'No rushing — enjoy Paris comfortably. Café & shopping time, Paris by night experience.' },
      { day: 3, title: 'Paris → Brussels → Netherlands', desc: 'Morning Departure from Paris. Stop 1 – Brussels, Belgium. Grand Place, Atomium, Belgian waffles & chocolate.' },
      { day: 4, title: 'Amsterdam, Netherlands', desc: 'Canal district, Dam Square, Rijksmuseum area, Red Light District. Canal cruise, Tulip + Windmill area visit.' },
      { day: 5, title: 'Germany Road Experience', desc: 'Cologne Cathedral, Rhine River views, Old Town quick stop. Autobahn driving experience.' },
      { day: 6, title: 'Arrival in Interlaken, Switzerland', desc: 'Drive through Swiss Alpine roads, Lakeside highways. Interlaken Highlights: Lake Thun, Lake Brienz.' },
      { day: 7, title: 'Lauterbrunnen & Grindelwald', desc: 'Cliffside scenery, Alpine cafés, Cable car options, Lauterbrunnen Valley Waterfalls.' },
      { day: 8, title: 'Swiss Scenic Leisure Day', desc: 'Optional Experiences: Harder Kulm viewpoint, Lake cruise, Swiss chocolate shopping.' },
      { day: 9, title: 'Switzerland → Verona → Padova → Venice', desc: 'Juliet’s balcony, Roman Arena. Padova: Visit St\' Anthony\'s basilica. Evening: Venice waterfront.' },
      { day: 10, title: 'Venice → Pisa', desc: 'Scenic Italian Highway Journey. Leaning Tower of Pisa, Piazza dei Miracoli. Tuscan-style dinner & overnight stay.' },
      { day: 11, title: 'Florence → Assisi', desc: 'Florence Cathedral, Ponte Vecchio, panorama View point Florence, St Francis\'s tomb.' },
      { day: 12, title: 'Lanciano & San Giovanni Rotondo', desc: 'Eucaristico di Lanciano & Padre Pio Shrine & Church.' },
      { day: 13, title: 'Foggia → Rome', desc: 'Scenic Southern Italy Drive. Arrival in Rome. Colosseum night views, Spanish Steps area.' },
      { day: 14, title: 'Rome Exploration', desc: 'Colosseum, Roman Forum viewpoints, Vatican City, St. Peter’s Basilica, Pantheon, Piazza Navona.' },
      { day: 15, title: 'Departure', desc: 'Airport transfer.' }
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
        <aside className="packages-sidebar">
          {/* Applied filters box */}
          <div className="applied-filters-box">
            <h4>Applied filters</h4>
            
            {selectedCountries.length > 0 ? (
              <div className="active-filters-tags">
                {selectedCountries.map((country) => (
                  <button 
                    key={country} 
                    className="filter-chip"
                    onClick={() => removeCountryFilter(country)}
                  >
                    Goes through {country}
                    <span className="chip-close">&times;</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="no-active-filters">No active filters applied</p>
            )}

            {selectedCountries.length > 0 && (
              <button className="clear-all-btn" onClick={clearAllFilters}>
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="sidebar-filter-section">
            <label htmlFor="sort-select" className="filter-label">Sort Packages</label>
            <div className="custom-select-wrapper">
              <select 
                id="sort-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="popular">Popularity: Most popular first</option>
                <option value="duration-asc">Duration: Short to long</option>
                <option value="duration-desc">Duration: Long to short</option>
              </select>
            </div>
          </div>

          {/* Must-see countries checkboxes */}
          <div className="sidebar-filter-section">
            <h4 className="filter-section-title">Must-see countries</h4>
            <div className="checkbox-list">
              {allCountries.map((country) => (
                <label key={country} className="checkbox-item">
                  <input 
                    type="checkbox"
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountryToggle(country)}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label-text">{country}</span>
                  <span className="checkbox-count">{getCountryCount(country)}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side Packages List */}
        <main className="packages-main-content">
          <div className="packages-list-header">
            <h3>★ {sortedPackages.length} best Special Offers</h3>
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
                        <span className="spec-label">Destinations</span>
                        <span className="spec-value text-truncate" title={pkg.destinations}>
                          {pkg.destinations}
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
                      <span className="pkg-detail-label">Departure City</span>
                      <span className="pkg-detail-value">{activeItinerary.itinerary[0]?.title.split(',')[0].replace('Arrival in ', '') || 'Varies'}</span>
                    </div>
                  </div>
                  <div className="pkg-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <div className="pkg-detail-text">
                      <span className="pkg-detail-label">End City</span>
                      <span className="pkg-detail-value">{activeItinerary.itinerary[activeItinerary.itinerary.length - 1]?.title.split(' ')[0] || 'Varies'}</span>
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
                  <h4 style={{ marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 800 }}>Detailed Day-by-Day Itinerary</h4>
                  {activeItinerary.itinerary.map((dayPlan) => (
                    <div key={dayPlan.day} className="pkg-itinerary-day-card">
                      <div className="day-number-badge">Day {dayPlan.day}</div>
                      <div className="day-card-body">
                        <h5>{dayPlan.title}</h5>
                        <p>{dayPlan.desc}</p>
                      </div>
                    </div>
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
