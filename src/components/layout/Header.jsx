import { Link } from 'react-router-dom';
import { useState } from 'react';
import { regions, destinations, explore } from '../../data';

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
    regions: { items: regions, label: 'Things to do in', title: 'Popular regions' },
    destinations: { items: destinations, label: 'Things to do in', title: 'Popular destinations' },
    explore: { items: explore, label: 'Explore', title: 'Explore Eutours' }
  };

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li 
                      onMouseEnter={() => setDestHover(true)}
                      onMouseLeave={() => setDestHover(false)}
                      className="primary-nav-item"
                    >
                      <a href="#">Destinations</a>
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
                      <a href="#">Adventure Styles</a>
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
                                  <Link to="/styles" key={style.name} className="adv-style-item" onClick={() => setAdvHover(false)}>
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
                    <li><a href="#booking">Book a Vehicle</a></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/contact" className="btn btn-primary" style={{ color: 'white', padding: '0.5rem 1.5rem' }}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>

        <div className="sub-nav-categories">
            <div className="container sub-nav-flex" style={{ position: 'relative' }}>
                
                {Object.keys(menuData).map((menuKey) => (
                    <div 
                      key={menuKey} 
                      className="mega-menu-wrapper"
                      onMouseEnter={() => setActiveMenu(menuKey)}
                    >
                        <Link to="#" className={`sub-nav-link ${activeMenu === menuKey ? 'active' : ''}`}>
                            {menuData[menuKey].title}
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
                                        <Link to={`/region/${item.id}`} className="mega-item" key={item.id} onClick={() => setActiveMenu(null)}>
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

                <span className="sub-nav-divider"></span>
                <Link to="/travel-guides" className="sub-nav-link">Travel guides</Link>
                <Link to="/faq" className="sub-nav-link">FAQ</Link>
                <Link to="/moments" className="sub-nav-link">Moments</Link>
                <a href="#" className="sub-nav-link">🏷️ Payment discounts</a>
                <a href="#" className="sub-nav-link">🎁 Gift cards</a>
            </div>
        </div>
    </header>
  );
};

export default Header;
