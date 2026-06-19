import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/home%20hero.webp',
  '/images/home%20hero%202.webp',
  '/images/home%20hero%203.webp'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {heroImages.map((img, index) => (
        <div
          key={img}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0
          }}
        />
      ))}
      <div className="hero-overlay" style={{ zIndex: 1 }}></div>
      <div className="hero-content" style={{ zIndex: 2, position: 'relative' }}>
          <h1 className="hero-title">Discover the Magic of Europe</h1>
          <p className="hero-subtitle">Premium, hassle-free European tours tailored exclusively for Sri Lankan travelers.</p>
          <div className="hero-cta">
              <Link to="/region/france" className="btn btn-primary">Explore Places</Link>
              <Link to="/book-vehicle" className="btn btn-accent">Book a Vehicle</Link>
          </div>
      </div>
    </section>
  );
};

export default Hero;
