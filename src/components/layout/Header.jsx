import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { regions } from '../../data';

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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => {
      const nextOpen = !prev;
      if (!nextOpen) {
        setActiveMenu(null);
        setDestHover(false);
      }
      return nextOpen;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setDestHover(false);
  };

  const handleHeaderMouseLeave = () => {
    if (!mobileMenuOpen) {
      setActiveMenu(null);
      setDestHover(false);
    }
  };

  const handleDestinationsToggle = (event) => {
    event.preventDefault();
    setDestHover(prev => !prev);
    setActiveMenu(null);
  };

  const handleMenuToggle = (event, menu) => {
    event.preventDefault();
    setActiveMenu(prev => (prev === menu ? null : menu));
    setDestHover(false);
  };


  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} onMouseLeave={handleHeaderMouseLeave}>
        <nav className="navbar static-nav" id="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Eutours" />
                </Link>
                <div 
                    className="menu-toggle" 
                    id="mobile-menu"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <>
                        <span style={{ transform: 'none' }}></span>
                        <span style={{ opacity: 1 }}></span>
                        <span style={{ transform: 'none' }}></span>
                      </>
                    )}
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
                    <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                    <li 
                      onMouseEnter={() => { if (!mobileMenuOpen) setDestHover(true); }}
                      onMouseLeave={() => { if (!mobileMenuOpen) setDestHover(false); }}
                      className="primary-nav-item"
                    >
                      <a href="#" onClick={handleDestinationsToggle}>
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
                                  <Link to={`/region/${country.toLowerCase().replace(/ /g, '-')}`} key={country} className="country-item" onClick={closeMobileMenu}>
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
                      onMouseEnter={() => { if (!mobileMenuOpen) setActiveMenu('regions'); }}
                      onMouseLeave={() => { if (!mobileMenuOpen) setActiveMenu(null); }}
                      className="primary-nav-item"
                    >
                      <Link 
                        to="#" 
                        onClick={(event) => handleMenuToggle(event, 'regions')}
                      >
                        Popular regions
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === 'regions' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </Link>
                      {activeMenu === 'regions' && (
                        <div className="nav-dropdown-panel nav-dropdown-panel-regions" style={{
                            position: 'absolute',
                            top: 'calc(100% - 1px)',
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
                              padding: '2rem',
                              transform: 'translateY(0)'
                          }}>
                              <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                                  {regions.map((item) => (
                                      <Link to={`/region/${item.id}`} className="mega-item" key={item.id} onClick={closeMobileMenu}>
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
                    <li><Link to="/book-vehicle" onClick={closeMobileMenu}>Book a Vehicle</Link></li>
                    <li><Link to="/packages" onClick={closeMobileMenu}>Packages</Link></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                    <li 
                      onMouseEnter={() => { if (!mobileMenuOpen) setActiveMenu('more'); }}
                      onMouseLeave={() => { if (!mobileMenuOpen) setActiveMenu(null); }}
                      className="primary-nav-item"
                    >
                      <Link 
                        to="#" 
                        onClick={(event) => handleMenuToggle(event, 'more')}
                      >
                        More
                        <span className="mobile-dropdown-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeMenu === 'more' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </Link>
                      {activeMenu === 'more' && (
                        <div className="nav-dropdown-panel nav-dropdown-panel-more" style={{
                            position: 'absolute',
                            top: '100%',
                            right: '15px',
                            zIndex: 1000
                        }}>
                          <div className="more-dropdown" style={{ 
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
                              <Link to="/reviews" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>Reviews</Link>
                              <Link to="/travel-guides" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>Travel guides</Link>
                              <Link to="/blog" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>Blog</Link>
                              <Link to="/faq" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>FAQ</Link>
                              <Link to="/moments" className="sub-nav-link" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>Moments</Link>
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
