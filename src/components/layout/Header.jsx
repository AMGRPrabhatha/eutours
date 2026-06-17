import { Link } from 'react-router-dom';
import { useState } from 'react';
import { regions, destinations } from '../../data';

const advStyles = [
  { name: 'Adventure & Adrenaline', icon: '⛰️' },
  { name: 'Ancient Wonders', icon: '🏛️' },
  { name: 'Bicycle', icon: '🚲' },
  { name: 'City & Culture', icon: '🏙️' },
  { name: 'Festival & Events', icon: '🎉' },
  { name: 'Food & Wine', icon: '🍷' },
  { name: 'Hiking & Trekking', icon: '🥾' },
  { name: 'River Cruise', icon: '⛴️' },
  { name: 'Safari', icon: '🦁' },
  { name: 'Sailing', icon: '⛵' },
  { name: 'Wellness & Retreats', icon: '🧘' }
];

const allEuropeCountries = [
  "Albania", "Andorra", "Austria", "Belgium", "Bosnia", "Bulgaria",
  "Croatia", "Czech Republic", "Denmark", "England", "Estonia", "Faroe Islands",
  "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
  "Ireland", "Italy", "Kosovo", "Latvia", "Lithuania", "Macedonia",
  "Malta", "Moldova", "Montenegro", "Netherlands", "Northern Ireland", "Norway",
  "Poland", "Portugal", "Romania", "Scotland", "Serbia", "Slovakia",
  "Slovenia", "Spain", "Svalbard", "Sweden", "Switzerland", "Turkey", "Wales"
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [destHover, setDestHover] = useState(false);
  const [advHover, setAdvHover] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuData = {
    regions: { items: regions, label: 'Things to do in', title: 'Popular regions' }
  };

  const renderSubNav = () => (
    <div className="container sub-nav-flex" style={{ position: 'relative' }}>
        {Object.keys(menuData).map((menuKey) => (
            <div 
              key={menuKey} 
              className="mega-menu-wrapper"
              onMouseEnter={() => setActiveMenu(menuKey)}
            >
                <Link 
                  to="#" 
                  className={`sub-nav-link ${activeMenu === menuKey ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === menuKey ? null : menuKey); }}
                >
                    {menuData[menuKey].title}
                    <span className="mobile-dropdown-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === menuKey ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                </Link>
                
                {activeMenu === menuKey && (
                    <div className="mega-menu" style={{ 
                        opacity: 1, 
                        visibility: 'visible', 
                        transform: 'none',
                        left: 0,
                        width: menuData[menuKey].items.length > 8 ? '900px' : '800px'
                    }}>
                        <div className="mega-grid" style={{ gridTemplateColumns: menuData[menuKey].items.length > 8 ? 'repeat(4, 1fr)' : 'repeat(4, 1fr)' }}>
                            {menuData[menuKey].items.map((item) => (
                                <Link to={`/region/${item.id}`} className="mega-item" key={item.id} onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                                    <img src={item.img} alt={item.title} />
                                    <div>
                                        <span className="mega-sub">{menuData[menuKey].label}</span>
                                        <span className="mega-title">{item.title}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        ))}

        <Link to="/packages" className="sub-nav-link" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
        <span className="sub-nav-divider"></span>
        <Link to="/travel-guides" className="sub-nav-link" onClick={() => setMobileMenuOpen(false)}>Travel guides</Link>
        <Link to="/blog" className="sub-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link to="/faq" className="sub-nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
        <Link to="/moments" className="sub-nav-link" onClick={() => setMobileMenuOpen(false)}>Moments</Link>
    </div>
  );

  return (
    <header className="main-header" onMouseLeave={() => setActiveMenu(null)}>
        <nav className="navbar static-nav" id="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    Eu<span>tours</span>
                </Link>
                <div 
                    className="menu-toggle" 
                    id="mobile-menu"
                    onClick={toggleMobileMenu}
                >
                    <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                    <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
                    <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }}></span>
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
                    <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li 
                      onMouseEnter={() => setDestHover(true)}
                      onMouseLeave={() => setDestHover(false)}
                      className="primary-nav-item"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); setDestHover(!destHover); }}>
                        Destinations
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: destHover ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </a>
                      {destHover && (
                        <div className="primary-wrapper">
                          <div className="primary-dropdown">
                            <div className="primary-dropdown-inner">
                              <div className="primary-dropdown-title">
                                <span style={{ fontSize: '1.4rem', fontWeight: 300, cursor: 'pointer', marginRight: '5px' }}>←</span> Europe
                              </div>
                              <div className="primary-dropdown-grid">
                                {allEuropeCountries.map(country => (
                                  <Link to={`/region/${country.toLowerCase().replace(/ /g, '-')}`} key={country} className="country-item" onClick={() => setDestHover(false)}>
                                    {country}
                                    {country === 'Ireland' && <span className="badge-trending">Trending</span>}
                                    {country === 'Iceland' && <span className="badge-topseller">Top seller</span>}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li 
                      onMouseEnter={() => setAdvHover(true)}
                      onMouseLeave={() => setAdvHover(false)}
                      className="primary-nav-item"
                    >
                      <a href="#" onClick={(e) => { e.preventDefault(); setAdvHover(!advHover); }}>
                        Adventure Styles
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: advHover ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </a>
                      {advHover && (
                        <div className="adv-styles-wrapper">
                          <div className="adv-styles-dropdown">
                            <div className="adv-styles-left">
                              <h3>Adventure Styles</h3>
                              <p>Go wild, go slow, go smooth, go solo - an adventure is what you make of it. Choose one style or create a package, fill your passports with adventures together.</p>
                              <Link to="/styles" className="adv-styles-btn">View all Adventure Styles</Link>
                            </div>
                            <div className="adv-styles-right">
                              <div className="adv-styles-grid">
                                {advStyles.map(style => (
                                  <Link to={`/styles?filter=${encodeURIComponent(style.name)}`} key={style.name} className="adv-style-item" onClick={() => setAdvHover(false)}>
                                    <span className="adv-style-icon" style={{ filter: 'grayscale(1)', opacity: 0.6 }}>{style.icon}</span>
                                    {style.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li><Link to="/book-vehicle" onClick={() => setMobileMenuOpen(false)}>Book a Vehicle</Link></li>
                    <li><Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link></li>
                    <li className="mobile-only-sub-nav">
                        {renderSubNav()}
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="sub-nav-categories desktop-only-sub-nav">
            {renderSubNav()}
        </div>
    </header>
  );
};

export default Header;
