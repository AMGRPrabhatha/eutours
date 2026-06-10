import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const adventureStylesData = [
  { name: 'Adventure & Adrenaline', icon: '⛰️', desc: 'Push your limits and seek thrills.', img: '/images/swiss_circle_1781090136030.webp' },
  { name: 'Ancient Wonders', icon: '🏛️', desc: 'Explore the foundations of civilization.', img: '/images/italy_vertical_1781089947416.webp' },
  { name: 'Bicycle', icon: '🚲', desc: 'Pedal through breathtaking landscapes.', img: '/images/amsterdam_dest_1781077507425.webp' },
  { name: 'City & Culture', icon: '🏙️', desc: 'Immerse yourself in vibrant urban life.', img: '/images/london_dest_1781077494703.webp' },
  { name: 'Festival & Events', icon: '🎉', desc: 'Celebrate local traditions and modern events.', img: '/images/spain_circle_1781090146338.webp' },
  { name: 'Food & Wine', icon: '🍷', desc: 'Taste the rich culinary heritage of Europe.', img: '/images/france_circle_1781090115021.webp' },
  { name: 'Hiking & Trekking', icon: '🥾', desc: 'Conquer peaks and traverse scenic trails.', img: '/images/switzerland_vertical_1781089957980.webp' },
  { name: 'River Cruise', icon: '⛴️', desc: 'Glide peacefully through historic waterways.', img: '/images/amsterdam_dest_1781077507425.webp' },
  { name: 'Safari', icon: '🦁', desc: 'Encounter wildlife in unique environments.', img: '/images/hero_bg_1781075622715.webp' },
  { name: 'Sailing', icon: '⛵', desc: 'Navigate beautiful coastlines and islands.', img: '/images/italy_circle_1781090125109.webp' },
  { name: 'Wellness & Retreats', icon: '🧘', desc: 'Rejuvenate your body and mind in tranquility.', img: '/images/paris_dest_1781075727792.webp' }
];

const AdventureStyles = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="adv-styles-page">
      {/* Hero Section */}
      <section className="adv-styles-hero" style={{ backgroundImage: "url('/images/hero_bg_1781075622715.webp')" }}>
        <div className="adv-styles-hero-overlay"></div>
        <div className="container adv-styles-hero-content">
          <h1>Find Your Perfect Adventure</h1>
          <p>From thrilling alpine treks to relaxing culinary retreats, customize your European journey based on exactly how you love to travel.</p>
        </div>
      </section>

      {/* Styles Grid Section */}
      <section className="adv-styles-grid-section">
        <div className="container">
          <div className="styles-card-grid">
            {adventureStylesData.map((style) => (
              <Link to="/contact" key={style.name} className="style-card" style={{ backgroundImage: `url(${style.img})` }}>
                <div className="style-card-overlay"></div>
                <div className="style-card-content">
                  <div className="style-card-icon">{style.icon}</div>
                  <h3>{style.name}</h3>
                  <p>{style.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdventureStyles;
