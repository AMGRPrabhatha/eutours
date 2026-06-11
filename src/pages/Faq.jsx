import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        q: "How do I book a tour?",
        a: "You can book a tour directly through our website by navigating to the Destinations page, selecting your preferred tour, and clicking 'See Details' to proceed with booking. You can also contact our team for a customized itinerary."
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer free cancellation up to 48 hours before the tour departure for most of our standard tours. Premium and small-group tours may have different policies which will be clearly stated during the booking process."
      }
    ]
  },
  {
    category: "Transport & Logistics",
    questions: [
      {
        q: "Are flights included in the tour packages?",
        a: "Flights are generally not included in our standard tour packages. This allows you the flexibility to choose your preferred airline and use your air miles. However, we do offer luxury transport solutions and private vehicle pickups once you arrive in Europe."
      },
      {
        q: "What kind of vehicles do you use for tours?",
        a: "We maintain a premium fleet of modern, air-conditioned vehicles ranging from luxury sedans for couples to spacious, comfortable minivans for larger families and groups. All our vehicles are driven by professional, experienced chauffeurs."
      }
    ]
  },
  {
    category: "Visas & Preparation",
    questions: [
      {
        q: "Do you provide visa assistance?",
        a: "Yes! We provide comprehensive visa guidance for Sri Lankan travelers applying for Schengen visas. We assist with itinerary planning, hotel confirmations, and document preparation to maximize your chances of a successful application."
      },
      {
        q: "What is the best time of year to visit Europe?",
        a: "Europe is a year-round destination! Summer (June-August) offers warm weather and long days, perfect for coastal regions. Spring and Autumn provide mild weather and fewer crowds. Winter is magical for skiing in the Alps and visiting Christmas markets."
      }
    ]
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero" style={{ backgroundImage: "url('/images/faq-hero.jpg')" }}>
        <div className="faq-hero-overlay"></div>
        <div className="faq-hero-content container">
          <h1>How can we help?</h1>
          <p>Find answers to our most frequently asked questions below.</p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-content-section container">
        <div className="faq-wrapper">
          {faqData.map((categoryGroup, catIndex) => (
            <div key={catIndex} className="faq-category-group">
              <h2 className="faq-category-title">{categoryGroup.category}</h2>
              <div className="faq-accordion">
                {categoryGroup.questions.map((item, qIndex) => {
                  const currentIndex = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === currentIndex;
                  
                  return (
                    <div 
                      key={qIndex} 
                      className={`faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button 
                        className="faq-question" 
                        onClick={() => toggleAccordion(currentIndex)}
                      >
                        {item.q}
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      <div 
                        className="faq-answer-wrapper" 
                        style={{ maxHeight: isOpen ? '500px' : '0px' }}
                      >
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta-section">
        <div className="container text-center">
          <h2>Still have questions?</h2>
          <p>Our dedicated support team is here to help you plan the perfect European getaway.</p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-4" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faq;
