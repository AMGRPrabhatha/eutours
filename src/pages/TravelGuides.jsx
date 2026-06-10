import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const guidesData = [
  {
    id: 'packing',
    title: 'The Ultimate European Packing List',
    category: 'Preparation',
    description: 'Travel light but travel right. Discover the essential items you need to pack for a seamless European vacation across multiple climates.',
    img: '/images/guide_packing_1781117034832.png',
  },
  {
    id: 'trains',
    title: 'Navigating European Rail Systems',
    category: 'Transport',
    description: 'A comprehensive guide to booking, boarding, and enjoying scenic train routes across the continent without the stress.',
    img: '/images/guide_train_1781117045654.png',
  },
  {
    id: 'food',
    title: 'Culinary Secrets of Western Europe',
    category: 'Culture & Food',
    description: 'Skip the tourist traps. Learn how to find authentic local cuisine, from hidden Parisian cafés to traditional Italian trattorias.',
    img: '/images/guide_food_1781117057421.png',
  }
];

const TravelGuides = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guides-page">
      {/* Hero Section */}
      <section className="guides-hero" style={{ backgroundImage: "url('/images/guide_hero_1781117022033.png')" }}>
        <div className="guides-hero-overlay"></div>
        <div className="guides-hero-content container">
          <h1>Expert Travel Guides</h1>
          <p>Everything you need to know for a perfect European getaway.</p>
        </div>
      </section>

      {/* Guides Grid Section */}
      <section className="guides-content-section container">
        <div className="guides-grid">
          {guidesData.map((guide) => (
            <div key={guide.id} className="guide-card">
              <div className="guide-card-image" style={{ backgroundImage: `url('${guide.img}')` }}>
                <div className="guide-badge">{guide.category}</div>
              </div>
              <div className="guide-card-content">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link to="/contact" className="guide-read-more">Read Full Guide &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="guides-cta-section text-center">
        <div className="container">
          <h2>Need Personalized Advice?</h2>
          <p>Our travel experts are ready to help you plan your dream itinerary.</p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-4" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TravelGuides;
