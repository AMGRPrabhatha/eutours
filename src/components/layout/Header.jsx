import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} onMouseLeave={() => setActiveMenu(null)}>
        <nav className="navbar static-nav" id="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Eutours" style={{ height: '40px' }} />
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
                      onMouseEnter={() => setActiveMenu('regions')}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="primary-nav-item"
                    >
                      <Link 
                        to="#" 
                        onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'regions' ? null : 'regions'); }}
                      >
                        Popular regions
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === 'regions' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </Link>
                      {activeMenu === 'regions' && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            marginLeft: '-450px',
                            width: '900px',
                            zIndex: 1000
                        }}>
                          <div className="mega-menu" style={{ 
                              opacity: 1, 
                              visibility: 'visible', 
                              position: 'relative',
                              background: 'white',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                              borderRadius: '0 0 16px 16px',
                              borderTop: '1px solid #eaeaea',
                              padding: '2rem'
                          }}>
                              <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                                  {regions.map((item) => (
                                      <Link to={`/region/${item.id}`} className="mega-item" key={item.id} onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                                          <img src={item.img} alt={item.title} />
                                          <div>
                                              <span className="mega-sub">Things to do in</span>
                                              <span className="mega-title">{item.title}</span>
                                          </div>
                                      </Link>
                                  ))}
                              </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li><Link to="/book-vehicle" onClick={() => setMobileMenuOpen(false)}>Book a Vehicle</Link></li>
                    <li><Link to="/packages" onClick={() => setMobileMenuOpen(false)}>Packages</Link></li>
                    <li 
                      onMouseEnter={() => setActiveMenu('more')}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="primary-nav-item"
                    >
                      <Link 
                        to="#" 
                        onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'more' ? null : 'more'); }}
                      >
                        More
                        <span style={{ display: 'inline-block', marginLeft: '4px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === 'more' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === 'more' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </Link>
                      {activeMenu === 'more' && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            right: '15px',
                            zIndex: 1000
                        }}>
                          <div style={{ 
                              background: 'white',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                              borderRadius: '0 0 16px 16px',
                              borderTop: '1px solid #eaeaea',
                              padding: '1rem',
                              display: 'flex',
                              flexDirection: 'column',
                              minWidth: '180px',
                              gap: '0.5rem'
                          }}>
                              <Link to="/reviews" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
                              <Link to="/contact" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                              <Link to="/travel-guides" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>Travel guides</Link>
                              <Link to="/blog" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                              <Link to="/faq" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                              <Link to="/moments" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(false)}>Moments</Link>
                          </div>
                        </div>
                      )}
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Header;
