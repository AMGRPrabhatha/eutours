import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const guidesData = [
  {
    id: 'packing',
    title: 'The Ultimate European Packing List',
    category: 'Preparation',
    description: 'Travel light but travel right. Discover the essential items you need to pack for a seamless European vacation across multiple climates.',
    img: '/images/guide_packing_1781117034832.png',
    content: {
      intro: "Packing for a trip to Europe can be a daunting task, especially if you're visiting multiple countries with different climates or cultures. The secret to a successful European holiday is packing light, prioritizing comfort, and focusing on versatility.",
      sections: [
        {
          heading: "The Golden Rule: Stick to a Carry-on",
          text: "European streets are famous for cobblestones, narrow stairs, and tiny elevators. Dragging a massive 30kg suitcase will quickly turn your dream vacation into a workout. Aim for a 40-50L backpack or a lightweight spinner suitcase. Stick to 10kg or less to easily fit in airline overhead compartments."
        },
        {
          heading: "Footwear: Comfort is King",
          text: "You will likely walk between 15,000 and 25,000 steps a day in Europe. Bring two pairs of extremely comfortable walking shoes. Think stylish sneakers, supportive flats, or durable walking sandals. Never bring brand new shoes—break them in at least a month before your trip."
        },
        {
          heading: "Clothing: The 5-4-3-2-1 Rule",
          text: "A great travel wardrobe relies on layering. Use the 5-4-3-2-1 rule: 5 pairs of socks & underwear, 4 tops (t-shirts, shirts, blouses), 3 bottoms (jeans, shorts, skirts), 2 pairs of shoes, and 1 light jacket/sweater. Neutral colors make mixing and matching easy."
        },
        {
          heading: "Electronics and Accessories",
          text: "Don't forget a universal travel adapter. Europe uses Type C, E, and F plugs (plus Type G in the UK and Ireland). A lightweight power bank is also essential for long days of taking photos and navigating with GPS."
        }
      ]
    }
  },
  {
    id: 'trains',
    title: 'Navigating European Rail Systems',
    category: 'Transport',
    description: 'A comprehensive guide to booking, boarding, and enjoying scenic train routes across the continent without the stress.',
    img: '/images/guide_train_1781117045654.png',
    content: {
      intro: "Train travel is one of the greatest joys of exploring Europe. The continent boasts a highly connected, fast, and reliable rail network that connects bustling city centers directly, sparing you from airport queues and traffic.",
      sections: [
        {
          heading: "Eurail Pass vs. Point-to-Point Tickets",
          text: "If you're taking multiple trains across several countries, a Eurail Pass offers incredible flexibility. However, if you have a fixed itinerary with only 2 or 3 journeys, purchasing point-to-point tickets in advance is usually much cheaper. Train tickets in Europe typically open for booking 90 to 180 days in advance."
        },
        {
          heading: "Understanding High-Speed Rail & Reservations",
          text: "High-speed trains like France's TGV, Italy's Frecciarossa, and Germany's ICE are incredibly fast but often require mandatory seat reservations, even if you hold a Eurail Pass. Always check reservation rules beforehand so you aren't caught without a valid ticket."
        },
        {
          heading: "At the Station: Boarding Tips",
          text: "Unlike airports, you don't need to arrive hours before departure. 20-30 minutes is usually plenty. Look at the departures board (usually labeled 'Partenze' or 'Départs') to find your platform ('Binario' or 'Voie'). Make sure to validate paper tickets in the small stamping machines before boarding if required."
        },
        {
          heading: "Luggage and Comfort on Board",
          text: "There are no strict luggage weight limits on trains, but you must be able to lift your own bags onto the racks. Standard train carriages have luggage areas at the ends of the cars and overhead racks. Keep valuables in a small daypack by your seat."
        }
      ]
    }
  },
  {
    id: 'food',
    title: 'Culinary Secrets of Western Europe',
    category: 'Culture & Food',
    description: 'Skip the tourist traps. Learn how to find authentic local cuisine, from hidden Parisian cafés to traditional Italian trattorias.',
    img: '/images/guide_food_1781117057421.png',
    content: {
      intro: "Food is a vital part of European culture, and dining out should be a highlight of your trip. However, popular destinations are filled with overpriced tourist traps serving subpar meals. With a few simple insider tips, you can eat like a local.",
      sections: [
        {
          heading: "Avoid the 'Tourist Zones'",
          text: "Rule number one: never eat at restaurants directly facing major monuments, such as the Colosseum, Eiffel Tower, or Grand Place. Walk at least three to four blocks away, down quiet side streets, to find restaurants with local patrons and authentic recipes."
        },
        {
          heading: "Spotting the Tourist Traps",
          text: "Be wary of restaurants with laminated menus in six different languages, photos of the food on display, or hosts standing outside trying to pull you in. Authentic places usually have small, handwritten menus in the local language, often changing daily based on market availability."
        },
        {
          heading: "Understand Regional Specialties",
          text: "European cuisine is highly regional. In Italy, don't order Pizza in Florence or Bolognese in Venice—instead, eat Bistecca alla Fiorentina in Tuscany and seafood risotto in Venice. Research regional delicacies before arriving in each city."
        },
        {
          heading: "Tipping Etiquette and Coperto",
          text: "Tipping is not as common or generous in Europe as in North America. Service is usually included ('service compris'). A tip of 5-10% or rounding up the bill is appreciated for exceptional service. In Italy, watch out for the 'coperto' (cover charge), which is a standard fee per person for bread and table setting."
        }
      ]
    }
  },
  {
    id: 'budget',
    title: 'Europe on a Budget: Money-Saving Tips',
    category: 'Finance',
    description: 'Learn how to stretch your Euros. From budget airlines to free walking tours, discover how to travel Europe without breaking the bank.',
    img: '/images/guide_budget.png',
    content: {
      intro: "Europe doesn't have to be prohibitively expensive. With smart planning, budget-friendly transportation options, and a little local know-how, you can experience the wonders of the continent on a modest budget.",
      sections: [
        {
          heading: "Travel During the Shoulder Season",
          text: "Summer (July and August) is peak season in Europe, meaning accommodation and flight prices skyrocket. Instead, travel during the shoulder seasons: Spring (April to June) or Autumn (September to October). The weather is pleasant, the crowds are thinner, and prices are up to 40% lower."
        },
        {
          heading: "Master Public Transit and Budget Carriers",
          text: "Avoid taxis and ride-shares, which are notoriously expensive. Instead, use well-connected subway and bus networks, or rent city bikes. For travel between cities, compare train prices with budget airlines like Ryanair or EasyJet, or long-distance buses like FlixBus."
        },
        {
          heading: "Free Activities and Museum Days",
          text: "Many of Europe's best experiences are free. Join a 'Free Walking Tour' in your first city (just remember to tip the guide). Furthermore, many major museums offer free entry on specific days—such as the first Sunday of the month in Paris and Rome. Always check museum websites in advance!"
        },
        {
          heading: "Eat Like a Local: Picnics and Lunch Menus",
          text: "Dining out for three meals a day adds up quickly. Save money by having a picnic lunch—visit local bakeries and supermarkets for fresh bread, cheese, and cured meats to enjoy in a public park. For dinner, look for the 'menu del día' (menu of the day) in Spain or lunch specials in France, which offer multi-course meals at discount prices."
        }
      ]
    }
  },
  {
    id: 'solo',
    title: "The Solo Traveler's Survival Guide",
    category: 'Safety',
    description: 'Embarking on a solo adventure? Read our top tips on staying safe, meeting people, and navigating European cities on your own.',
    img: '/images/guide_solo.png',
    content: {
      intro: "Solo travel in Europe is an incredibly rewarding and liberating experience. It gives you complete control over your itinerary and encourages self-discovery. Europe is one of the safest regions for solo travel, but staying alert and prepared is key.",
      sections: [
        {
          heading: "Choose Social Accommodations",
          text: "If you want to meet fellow travelers, stay in highly-rated boutique hostels. Many hostels offer private rooms if you value your quiet time, along with social common areas, group dinners, and walking tours that make it easy to make friends."
        },
        {
          heading: "Stay Alert Against Pickpockets",
          text: "Violent crime is very rare in Europe, but petty theft like pickpocketing is common in major tourist areas, train stations, and crowded metro lines. Keep your phone and wallet out of your back pockets. Use a cross-body bag that zips shut, and never leave your bag unattended on the floor or back of a chair at cafés."
        },
        {
          heading: "Download Offline Maps and Translation Apps",
          text: "Before arriving, download offline maps of your destinations on Google Maps or Maps.me. Download the local language on Google Translate for offline use. Having access to directions and basic phrases will boost your confidence and keep you from looking lost."
        },
        {
          heading: "Embrace Dining Alone",
          text: "Dining alone can feel intimidating at first. Overcome this by bringing a book or journal, or sitting at the bar where you can chat with the bartender or other locals. Many European eateries have communal tables, which are perfect for solo diners."
        }
      ]
    }
  },
  {
    id: 'hidden',
    title: 'Hidden Gems: Off the Beaten Path',
    category: 'Exploration',
    description: "Ditch the crowds. Explore Europe's best-kept secrets, from quiet alpine villages to untouched Mediterranean beaches.",
    img: '/images/guide_hidden.png',
    content: {
      intro: "While Paris, Rome, and London are spectacular, Europe is full of quieter, lesser-known destinations that offer rich culture and breathtaking scenery without the overwhelming crowds. Venture off the beaten path to find authentic European charm.",
      sections: [
        {
          heading: "Sintra's Secret Corners, Portugal",
          text: "While tourists swarm Sintra's Pena Palace, take time to visit the Quinta da Regaleira with its mystical initiation wells, or hike to the quiet Capuchos Convent, hidden deep in the cork forests. You will find a peaceful side of Sintra that most visitors miss."
        },
        {
          heading: "The Soča River Valley, Slovenia",
          text: "For nature lovers, the Soča Valley is an emerald-green paradise. Nestled in the Julian Alps, this region offers crystal-clear turquoise waters, dramatic gorges, and pristine hiking trails. It is perfect for white-water rafting, hiking, or simply escaping the busy Mediterranean coast."
        },
        {
          heading: "The Peak District, England",
          text: "Skip the tourist-heavy Cotswolds and visit the rugged Peak District. Famous for rolling hills, stone-built villages like Bakewell, and grand estates like Chatsworth House, it offers some of the most dramatic landscapes in England, ideal for scenic walks and afternoon teas."
        },
        {
          heading: "Hallstatt's Quiet Neighbor: Gosau, Austria",
          text: "The fairy-tale town of Hallstatt is beautiful but often crowded with tour buses. For a serene alpine experience, stay in nearby Gosau. Nestled in a lush valley with stunning views of the Dachstein glacier, Gosau offers quiet lakes, hiking trails, and authentic Austrian hospitality."
        }
      ]
    }
  }
];

const TravelGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openGuide = (guide) => {
    setSelectedGuide(guide);
    document.body.style.overflow = 'hidden'; // prevent scrolling behind the modal
  };

  const closeGuide = () => {
    setSelectedGuide(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeGuide();
      }
    };
    if (selectedGuide) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGuide]);

  return (
    <div className="guides-page">
      {/* Hero Section */}
      <section className="guides-hero" style={{ backgroundImage: "url('/images/travelguide-hero.jpg')" }}>
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
            <div key={guide.id} className="guide-card" onClick={() => openGuide(guide)} style={{ cursor: 'pointer' }}>
              <div className="guide-card-image" style={{ backgroundImage: `url('${guide.img}')` }}>
                <div className="guide-badge">{guide.category}</div>
              </div>
              <div className="guide-card-content">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <button 
                  className="guide-read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openGuide(guide);
                  }}
                >
                  Read Full Guide &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedGuide && (
        <div className="guide-modal-overlay" onClick={closeGuide}>
          <div className="guide-modal-container animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="guide-modal-close" onClick={closeGuide} aria-label="Close modal">
              &times;
            </button>
            
            <div className="guide-modal-hero" style={{ backgroundImage: `url('${selectedGuide.img}')` }}>
              <div className="guide-modal-hero-overlay"></div>
              <div className="guide-modal-hero-content">
                <span className="guide-modal-badge">{selectedGuide.category}</span>
                <h2>{selectedGuide.title}</h2>
              </div>
            </div>
            
            <div className="guide-modal-body">
              <p className="guide-modal-intro">{selectedGuide.content.intro}</p>
              
              <div className="guide-modal-sections">
                {selectedGuide.content.sections.map((section, idx) => (
                  <div key={idx} className="guide-modal-section">
                    <h4>{section.heading}</h4>
                    <p>{section.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="guide-modal-footer">
                <p>Ready to plan your trip using these tips?</p>
                <div className="guide-modal-footer-btns">
                  <button className="btn btn-secondary" onClick={closeGuide}>Close Guide</button>
                  <Link to="/contact" className="btn btn-primary" onClick={closeGuide}>Get Custom Itinerary</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
