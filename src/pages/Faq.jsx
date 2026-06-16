import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    q: "How do I book a tour?",
    a: "You can book a tour directly through our website by navigating to the Destinations page, selecting your preferred tour, and clicking 'See Details' to proceed with booking. You can also contact our team for a customized itinerary."
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer free cancellation up to 48 hours before the tour departure for most of our standard tours. Premium and small-group tours may have different policies which will be clearly stated during the booking process."
  },
  {
    q: "Are flights included in the tour packages?",
    a: "Flights are generally not included in our standard tour packages. This allows you the flexibility to choose your preferred airline and use your air miles. However, we do offer luxury transport solutions and private vehicle pickups once you arrive in Europe."
  },
  {
    q: "What kind of vehicles do you use for tours?",
    a: "We maintain a premium fleet of modern, air-conditioned vehicles ranging from luxury sedans for couples to spacious, comfortable minivans for larger families and groups. All our vehicles are driven by professional, experienced chauffeurs."
  },
  {
    q: "Do you provide visa assistance?",
    a: "Yes! We provide comprehensive visa guidance for Sri Lankan travelers applying for Schengen visas. We assist with itinerary planning, hotel confirmations, and document preparation to maximize your chances of a successful application."
  },
  {
    q: "What is the best time of year to visit Europe?",
    a: "Europe is a year-round destination! Summer (June-August) offers warm weather and long days, perfect for coastal regions. Spring and Autumn provide mild weather and fewer crowds. Winter is magical for skiing in the Alps and visiting Christmas markets."
  },
  {
    q: "Can you accommodate specific dietary requirements?",
    a: "Absolutely. We understand that dietary needs vary. Please inform our booking team of any allergies or dietary restrictions (e.g., vegan, halal, gluten-free) well in advance so we can ensure suitable meal options are arranged throughout your tour."
  },
  {
    q: "How large are your tour groups?",
    a: "Our standard group tours range from 12 to 24 travelers to ensure a personalized experience. We also offer private customized tours for couples, families, and completely bespoke travel parties."
  },
  {
    q: "What is the baggage allowance for tours?",
    a: "We typically allow one large suitcase (up to 23kg) and one small carry-on bag per traveler. If you plan to bring additional luggage, please inform us during booking so we can arrange an appropriate vehicle."
  },
  {
    q: "Are gratuities and tips included in the price?",
    a: "Gratuities for your driver and tour guide are not included in the base price. While tipping is always at your discretion, it is customary in Europe to tip service staff if you are satisfied with their service."
  },
  {
    q: "Do I need travel insurance?",
    a: "Yes, comprehensive travel insurance is mandatory for all our tours. You must provide proof of insurance covering medical emergencies, trip cancellations, and lost luggage before departure."
  },
  {
    q: "How much walking is involved in your tours?",
    a: "Most of our European tours involve a moderate amount of walking, especially in historic city centers where vehicles are restricted. We recommend comfortable walking shoes. If you have mobility concerns, please contact us for customized accessible options."
  },
  {
    q: "Can I customize an existing tour itinerary?",
    a: "Yes! If you are booking a private tour, our travel experts can fully tailor the itinerary to match your interests, adding extra days, specific museum visits, or luxury dining experiences."
  },
  {
    q: "What languages are your tours conducted in?",
    a: "All our standard group tours are conducted in English by fluent, certified local guides. For private tours, we can arrange guides who speak other languages upon request."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default like screenshot
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page-redesign" style={{ background: 'var(--white)', minHeight: '80vh', paddingTop: '150px' }}>
      {/* New Header Section */}
      <section className="faq-header-modern container section-padding" style={{ paddingBottom: '0' }}>
        <div className="faq-header-grid">
          <div className="faq-header-left">
            <span className="faq-support-tag">Support</span>
            <h1 className="faq-main-title">Top questions about Eutours</h1>
            <div className="faq-search-bar">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="faq-header-right">
            <p>Need something cleared up? Here are our most frequently asked questions.</p>
          </div>
        </div>
      </section>

      <section className="faq-split-container container section-padding" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="faq-split-layout">
          {/* Left Column */}
          <div className="faq-left-col">
            <h2>General FAQs</h2>
            <p>Everything you need to know about our tours and how they work. Can't find an answer? Please <Link to="/contact" style={{textDecoration: 'underline'}}>chat to our friendly team</Link>.</p>
          </div>

          {/* Right Column */}
          <div className="faq-right-col">
            <div className="faq-accordion-modern">
              {filteredFaqs.length === 0 ? (
                <p style={{ color: 'var(--text-light)', padding: '2rem 0' }}>No questions match your search.</p>
              ) : (
                filteredFaqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className={`faq-item-modern ${isOpen ? 'active' : ''}`}>
                      <button 
                        className="faq-question-modern" 
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="q-text">{item.q}</span>
                        <span className="q-icon">
                          {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/><path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/><path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          )}
                        </span>
                      </button>
                      <div 
                        className="faq-answer-modern-wrapper" 
                        style={{ maxHeight: isOpen ? '500px' : '0px' }}
                      >
                        <div className="faq-answer-modern">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
