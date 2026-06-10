import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: "url('/images/home%20hero.webp')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="hero-title">Discover the Magic of Europe</h1>
            <p className="hero-subtitle">Premium, hassle-free European tours tailored exclusively for Sri Lankan travelers.</p>
            <div className="hero-cta">
                <Link to="/destinations" className="btn btn-primary">Explore Places</Link>
                <a href="#booking" className="btn btn-accent">Book a Vehicle</a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
