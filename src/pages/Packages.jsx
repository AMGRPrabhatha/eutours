import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 7 Curated European Tour Packages (Pricing entirely excluded)
const packagesData = [
  {
    id: 'venice-alps-rome',
    title: 'Western and Central Europe: Venice, the Alps & the Flavours of Rome',
    category: 'Food & Wine',
    rating: 5.0,
    reviewCount: 17,
    quote: "Fast paced tour & lots of sight-seeing. The local food tastings in Florence were amazing.",
    quoteAuthor: "Jasmine",
    quoteMonth: "April",
    duration: 8,
    countries: ['Italy', 'Austria', 'Germany'],
    destinations: 'Germany, Austria, Italy, Vatican City (Holy See)',
    ageRange: 'Ages 18-35',
    operatedIn: 'English',
    operator: 'G Adventures • Platinum',
    discount: '30% Off',
    roomType: 'Price based on Shared Room',
    itinerary: [
      { day: 1, title: 'Arrival in Munich, Germany', desc: 'Arrive in the Bavarian capital, check into your hostel, and meet your group for a welcome dinner.' },
      { day: 2, title: 'Scenic Drive through the Austrian Alps', desc: 'Travel south through the majestic Alps, stopping for lunch in Innsbruck before crossing into Italy.' },
      { day: 3, title: 'Exploring Venice Canals', desc: 'Enjoy a private vaporetto ride to St. Mark\'s Square, followed by a walking tour and optional gondola ride.' },
      { day: 4, title: 'Florence: Art & Architecture', desc: 'Travel to the cradle of the Renaissance. Visit the Duomo, walk across Ponte Vecchio, and taste local Chianti wine.' },
      { day: 5, title: 'Journey to the Eternal City', desc: 'Head south to Rome. Take a guided walking tour through Rome\'s historic cobblestone alleys to see the Trevi Fountain.' },
      { day: 6, title: 'Vatican City & Colosseum Tour', desc: 'Explore the Vatican Museums and St. Peter\'s Basilica, then marvel at the architectural wonder of the Colosseum.' },
      { day: 7, title: 'Rome Leisure Day & Farewell Dinner', desc: 'Spend the day wandering Rome\'s neighborhoods like Trastevere. Regroup for a traditional multi-course farewell feast.' },
      { day: 8, title: 'Rome Departures', desc: 'Check out of your hotel and catch your departure transfer or continue your European adventure.' }
    ]
  },
  {
    id: 'grand-europe-eastern',
    title: 'Grand Tour of Europe: Germany and Eastern Europe',
    category: 'City & Culture',
    rating: 4.8,
    reviewCount: 24,
    quote: "The entire tour was very well planned and complete guidance was given for each day.",
    quoteAuthor: "Arpit",
    quoteMonth: "August",
    duration: 12,
    countries: ['Germany', 'Czech Republic', 'Hungary', 'Austria'],
    destinations: 'Germany, Czech Republic, Slovakia, Hungary, Austria',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'WiseYatra • Gold',
    discount: '30% Off',
    roomType: 'Price based on Private Double Room',
    itinerary: [
      { day: 1, title: 'Welcome to Berlin', desc: 'Arrive in Berlin and gather for a briefing and local craft beer tasting.' },
      { day: 2, title: 'Berlin Wall & Historic Sights', desc: 'Explore the Brandenburg Gate, Checkpoint Charlie, and the East Side Gallery.' },
      { day: 3, title: 'Dresden to Prague', desc: 'Stop in the baroque city of Dresden for lunch, then proceed to Prague, the city of a hundred spires.' },
      { day: 4, title: 'Prague Castle & Old Town', desc: 'A local guide shows you Prague Castle, Charles Bridge, and the Astronomical Clock.' },
      { day: 5, title: 'Prague to Budapest via Bratislava', desc: 'Travel through Slovakia, stopping in Bratislava for lunch, arriving in Budapest by evening.' },
      { day: 6, title: 'Budapest Parliament & Thermal Baths', desc: 'Tour Buda Castle, the Parliament building, and unwind in the famous Széchenyi Thermal Baths.' },
      { day: 7, title: 'Budapest Cruises & Danube Scenic Route', desc: 'Enjoy a daytime cruise on the Danube and explore the historic ruin bars.' },
      { day: 8, title: 'Budapest to Vienna', desc: 'Drive to Vienna, Austria. Enjoy a classical concert in the evening in the home of Mozart.' },
      { day: 9, title: 'Vienna Imperial Palace Tour', desc: 'Visit the magnificent Schönbrunn Palace and walk the elegant Ringstrasse boulevard.' },
      { day: 10, title: 'Salzburg & Alpine Lakes', desc: 'Excursion to Salzburg, the birthplace of Mozart and film location of Sound of Music.' },
      { day: 11, title: 'Return to Munich', desc: 'Drive back to Munich. Enjoy a farewell celebration at a traditional Bavarian beer hall.' },
      { day: 12, title: 'Munich Departures', desc: 'Bid farewell to your travel group as your grand tour concludes.' }
    ]
  },
  {
    id: 'germany-austria-8-days',
    title: 'Germany and Austria in 8 days - Covering Munich, Innsbruck, Salzburg and Vienna',
    category: 'City & Culture',
    rating: 4.9,
    reviewCount: 31,
    quote: "Spectacular fairytale castles, breathtaking alpine scenery, and rich imperial history.",
    quoteAuthor: "Marcus",
    quoteMonth: "June",
    duration: 8,
    countries: ['Germany', 'Austria'],
    destinations: 'Munich, Innsbruck, Salzburg, Hallstatt, Vienna',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'WiseYatra • Silver',
    discount: '30% Off',
    roomType: 'Price based on Private Double Room',
    itinerary: [
      { day: 1, title: 'Munich Check-in & Marienplatz', desc: 'Check into your hotel and enjoy a walking tour around Marienplatz and the English Garden.' },
      { day: 2, title: 'Neuschwanstein Castle Excursion', desc: 'Visit Germany\'s most famous fairytale castle in Fussen before crossing into Austria.' },
      { day: 3, title: 'Innsbruck Old Town & Golden Roof', desc: 'Explore Innsbruck, the capital of Tyrol, surrounded by towering peaks. Visit the Golden Roof.' },
      { day: 4, title: 'Salzburg: Sound of Music & Fortress', desc: 'Travel to Salzburg. Explore the Hohensalzburg Fortress and walk through Mirabell Gardens.' },
      { day: 5, title: 'Fairytale Village of Hallstatt', desc: 'Visit the postcard-perfect lakeside village of Hallstatt, taking a funicular to the world\'s oldest salt mine.' },
      { day: 6, title: 'Vienna: Schönbrunn & Opera House', desc: 'Drive to Vienna. Take an evening tour of the majestic Hofburg Palace and Vienna State Opera.' },
      { day: 7, title: 'Vienna Coffee House & St. Stephen\'s', desc: 'Indulge in Sachertorte at a traditional café and explore the historic St. Stephen\'s Cathedral.' },
      { day: 8, title: 'Vienna Departure', desc: 'Check out of your hotel and head to the airport for your return home.' }
    ]
  },
  {
    id: 'spanish-fiesta-coast',
    title: 'Spanish Fiesta & Portuguese Coast',
    category: 'Active Adventure',
    rating: 4.7,
    reviewCount: 19,
    quote: "Loved the stunning coastal beaches in Lagos and the breathtaking architecture in Barcelona.",
    quoteAuthor: "Elena",
    quoteMonth: "May",
    duration: 10,
    countries: ['Spain', 'Portugal'],
    destinations: 'Madrid, Toledo, Lisbon, Lagos (Algarve), Seville, Granada, Barcelona',
    ageRange: 'Ages 18-39',
    operatedIn: 'English',
    operator: 'Iberian Wonders • Gold',
    discount: '25% Off',
    roomType: 'Price based on Shared Twin Room',
    itinerary: [
      { day: 1, title: 'Arrival in Madrid, Spain', desc: 'Meet your tour leader and group, then enjoy a tapas and sangria tasting in Plaza Mayor.' },
      { day: 2, title: 'Historic Toledo & Travel to Lisbon', desc: 'Tour Toledo, the medieval capital of Spain, then cross the border into Portugal\'s capital.' },
      { day: 3, title: 'Lisbon: Tram 28 & Belem Tower', desc: 'Explore Lisbon\'s hilly Alfama district, ride a vintage tram, and taste delicious Pasteis de Nata.' },
      { day: 4, title: 'Algarve Golden Coast (Lagos)', desc: 'Head south to Lagos. Relax on sandy beaches surrounded by dramatic golden limestone cliffs.' },
      { day: 5, title: 'Lagos Kayak & Grotto Cruise', desc: 'Explore ocean grottos and rock arches by boat. Enjoy fresh seafood overlooking the harbor.' },
      { day: 6, title: 'Seville: Flamenco & Cathedral', desc: 'Travel back to Spain to Seville. Watch an authentic Flamenco show and tour the Alcázar palace.' },
      { day: 7, title: 'Granada: The Alhambra Palace', desc: 'Drive to Granada. Visit the breathtaking Moorish fortress of Alhambra and stroll the Albayzín.' },
      { day: 8, title: 'High-speed Train to Barcelona', desc: 'Catch a high-speed train to Barcelona. Stroll along La Rambla and watch the street artists.' },
      { day: 9, title: 'Gaudí Masterpieces & Park Güell', desc: 'Visit the spectacular La Sagrada Família, Park Güell, and enjoy a farewell paella dinner.' },
      { day: 10, title: 'Barcelona Departures', desc: 'Say goodbye to your companions. Your tour concludes after breakfast.' }
    ]
  },
  {
    id: 'swiss-alps-lakes',
    title: 'Swiss Alps Adventure & Italian Lakes',
    category: 'Hiking & Trekking',
    rating: 4.9,
    reviewCount: 14,
    quote: "Hiking under the shadow of the Matterhorn was a dream come true. Truly majestic views.",
    quoteAuthor: "Sarah",
    quoteMonth: "September",
    duration: 9,
    countries: ['Switzerland', 'Italy'],
    destinations: 'Zurich, Lucerne, Interlaken, Zermatt, Lake Como, Milan',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'AlpenTours • Elite',
    discount: '15% Off',
    roomType: 'Price based on Private Double Room',
    itinerary: [
      { day: 1, title: 'Zurich to Lucerne Canals', desc: 'Arrive in Zurich and transfer to the lakeside town of Lucerne. See the famous Chapel Bridge.' },
      { day: 2, title: 'Mount Pilatus Funicular', desc: 'Ascend Mt. Pilatus on the world\'s steepest cogwheel railway for panoramic Alpine views.' },
      { day: 3, title: 'Interlaken Adventure Capital', desc: 'Travel to Interlaken, nestled between two lakes. Try optional paragliding or kayaking.' },
      { day: 4, title: 'Lauterbrunnen Valley of 72 Waterfalls', desc: 'Hike through the stunning Lauterbrunnen valley, stopping at the roaring Trummelbach Falls.' },
      { day: 5, title: 'Car-Free Village of Zermatt', desc: 'Take a train to Zermatt, a car-free alpine village nestled at the foot of the iconic Matterhorn.' },
      { day: 6, title: 'Gornergrat Railway Vista', desc: 'Ride the cogwheel train to Gornergrat summit for spectacular views of glaciers and 29 peaks.' },
      { day: 7, title: 'Zermatt to Lake Como, Italy', desc: 'Travel south across the border to the glamourous shores of Lake Como, Italy.' },
      { day: 8, title: 'Lake Como Ferry & Bellagio', desc: 'Take a scenic public ferry to Bellagio. Walk through narrow streets lined with boutiques.' },
      { day: 9, title: 'Milan Cathedral & Departure', desc: 'Transfer to Milan. Tour the Duomo before catch your departure flight at Malpensa Airport.' }
    ]
  },
  {
    id: 'france-netherlands',
    title: 'Highlights of France & the Netherlands',
    category: 'Culture & Food',
    rating: 4.8,
    reviewCount: 22,
    quote: "A perfect blend of world-class art in Paris and historic canals in Amsterdam. Very comfortable transport.",
    quoteAuthor: "Chloe",
    quoteMonth: "July",
    duration: 7,
    countries: ['France', 'Netherlands', 'Belgium'],
    destinations: 'Paris, Brussels, Amsterdam',
    ageRange: 'All Ages Welcome',
    operatedIn: 'English',
    operator: 'Eutours Platinum',
    discount: '20% Off',
    roomType: 'Price based on Private Double Room',
    itinerary: [
      { day: 1, title: 'Welcome to Paris, France', desc: 'Arrive in the City of Light. Enjoy an evening cruise along the Seine River to see the Eiffel Tower lit up.' },
      { day: 2, title: 'Louvre Museum & Montmartre', desc: 'Take a guided tour of the Louvre, see the Mona Lisa, and explore the artistic streets of Montmartre.' },
      { day: 3, title: 'Palace of Versailles Excursion', desc: 'Visit the magnificent palace of Louis XIV, explore the Hall of Mirrors, and stroll through the manicured gardens.' },
      { day: 4, title: 'Brussels: Chocolates & Grand Place', desc: 'Travel to Belgium. Walk the cobblestones of the Grand Place and taste world-famous Belgian waffles and chocolates.' },
      { day: 5, title: 'Brussels to Amsterdam Canals', desc: 'Drive to Amsterdam. Enjoy a scenic twilight canal cruise with cheese and wine on board.' },
      { day: 6, title: 'Van Gogh Museum & Windmills', desc: 'Tour the Van Gogh Museum and take a brief afternoon trip to Zaanse Schans to see historic windmills.' },
      { day: 7, title: 'Amsterdam Departures', desc: 'Enjoy a final Dutch breakfast before checking out and departing.' }
    ]
  },
  {
    id: 'greece-sailing',
    title: 'Classical Greece & Mediterranean Cruise',
    category: 'Sailing',
    rating: 5.0,
    reviewCount: 42,
    quote: "Watching the golden sunset in Santorini from our catamaran was an unforgettable experience.",
    quoteAuthor: "Alex",
    quoteMonth: "September",
    duration: 8,
    countries: ['Greece'],
    destinations: 'Athens, Mykonos, Paros, Santorini',
    ageRange: 'Ages 18-35',
    operatedIn: 'English',
    operator: 'Aegean Cruises • Premium',
    discount: '40% Off',
    roomType: 'Price based on Catamaran Cabin',
    itinerary: [
      { day: 1, title: 'Arrival in Athens, Greece', desc: 'Check in, meet your group, and climb up to the Acropolis to watch the sunset over Athens.' },
      { day: 2, title: 'Acropolis Museum & Board Catamaran', desc: 'Tour the Acropolis Museum and board your sailing catamaran at the Marina.' },
      { day: 3, title: 'Sailing to Mykonos Island', desc: 'Sail across the Aegean, anchor in a quiet bay for swimming, and head to Mykonos for nightlife.' },
      { day: 4, title: 'Mykonos Windmills & Old Town', desc: 'Explore the picture-perfect white houses of Little Venice and the famous windmills.' },
      { day: 5, title: 'Sailing to Paros Island', desc: 'Enjoy a quiet day of sailing. Explore the charming fishing villages and sandy beaches of Paros.' },
      { day: 6, title: 'Arriving in Santorini Crater', desc: 'Sail into the dramatic caldera of Santorini. Hike up the cliffs to the cliffside town of Fira.' },
      { day: 7, title: 'Santorini Catamaran Sunset Tour', desc: 'Enjoy a farewell day catamaran tour around the volcanic red and white beaches, ending with sunset in Oia.' },
      { day: 8, title: 'Santorini Departures', desc: 'Transfer to Santorini Airport or catch the ferry back to Athens.' }
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
      {/* Banner / Hero */}
      <section className="packages-hero">
        <div className="packages-hero-overlay"></div>
        <div className="packages-hero-content container">
          <h1>Mega Sale Deals</h1>
          <p>Find the best special offers on exclusive European itineraries.</p>
        </div>
      </section>

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
                  {/* Left Column: Template Image & Map overlay */}
                  <div className="pkg-card-media-col" onClick={(e) => e.stopPropagation()}>
                    <TemplateImagePlaceholder category={pkg.category} />
                    
                    <button 
                      className={`wishlist-heart-btn ${wishlist.includes(pkg.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(pkg.id)}
                      aria-label="Save to wishlist"
                    >
                      ♥
                    </button>
                    
                    <div className="pkg-map-wrapper">
                      <img src="/images/map_placeholder.png" className="mock-map-svg" alt="Map Route Placeholder" />
                      <button className="view-map-overlay-btn" onClick={() => openItinerary(pkg)}>
                        <span className="map-icon">📍</span> View Map
                      </button>
                    </div>
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

      {/* Itinerary / View Tour Modal */}
      {activeItinerary && (
        <div className="guide-modal-overlay" onClick={closeItinerary}>
          <div className="guide-modal-container animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="guide-modal-close" onClick={closeItinerary} aria-label="Close modal">
              &times;
            </button>
            
            <div className="guide-modal-hero" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
              <div className="guide-modal-hero-content">
                <span className="guide-modal-badge">{activeItinerary.category}</span>
                <h2>{activeItinerary.title}</h2>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>{activeItinerary.duration} Days Tour • Operated by {activeItinerary.operator}</p>
              </div>
            </div>
            
            <div className="guide-modal-body">
              <div className="pkg-itinerary-map-section">
                <h4>Interactive Route Map Placeholder</h4>
                <div className="large-mock-map">
                  <img src="/images/map_placeholder.png" className="mock-map-svg" alt="Map Route Placeholder" />
                </div>
                <p className="map-caption">Route covers: {activeItinerary.destinations}</p>
              </div>

              <div className="guide-modal-intro">
                <strong>Review Highlights:</strong> "{activeItinerary.quote}" – {activeItinerary.quoteAuthor}
              </div>
              
              <div className="guide-modal-sections">
                <h4 style={{ marginBottom: '1.25rem' }}>Detailed Day-by-Day Itinerary</h4>
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
              
              <div className="guide-modal-footer">
                <p>Interested in customizing this route for your trip?</p>
                <div className="guide-modal-footer-btns">
                  <button className="btn btn-secondary" onClick={closeItinerary}>Close</button>
                  <Link to={`/contact?subject=${encodeURIComponent('Inquiry for ' + activeItinerary.title)}`} className="btn btn-primary" onClick={closeItinerary}>
                    Inquire / Customize Route
                  </Link>
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
