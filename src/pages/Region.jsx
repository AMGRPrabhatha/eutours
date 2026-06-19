import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import ImagePreviewModal from '../components/ui/ImagePreviewModal';
import { regionPages } from '../data';

const getAlbaniaImage = (name) => {
  const filename = {
    'National Museum of Albania': 'National Museum of Albania Express Pass',
    'Old Town Square Experience': 'Old Town Square',
  }[name] || name;

  return `/images/Albania/${encodeURIComponent(`${filename}.webp`)}`;
};

const exactImageMap = {
  // Andorra
  'Andorra la Vella': '/images/Andorra/Andorra.jpg',
  'Encamp': '/images/Andorra/andorra encamp.jpg',
  'Ordino': '/images/Andorra/Ordino.jpg',
  'La Massana': '/images/Andorra/La Massana.jpg',
  'Canillo': '/images/Andorra/Canillo.jpg',
  'Vallnord': '/images/Andorra/Vallnord.jpg',
  'Grandvalira': '/images/Andorra/andorra grandvalira.jpg',
  'Caldea Spa': '/images/Andorra/andorra caldea spa.jpg',
  'Vallnord Express Pass': '/images/Andorra/Vallnord Express Pass.jpg',
  'Full Day Guided Tour of Andorra la Vella': '/images/Andorra/Full Day Guided Tour of Andorra la Vella.jpg',
  'Caldea Spa Skip-the-Line Ticket': '/images/Andorra/Caldea Spa Skip-the-Line Ticket.avif',

  // Austria
  'Vienna': '/images/Austria/Vienna.jpg',
  'Salzburg': '/images/Austria/Salzburg.jpg',
  'Innsbruck': '/images/Austria/Innsbruck.jpg',
  'Graz': '/images/Austria/Graz.jpg',
  'Linz': '/images/Austria/Linz.jpg',
  'Schönbrunn Palace': '/images/Austria/Schönbrunn Palace.jpg',
  'Hohensalzburg Fortress': '/images/Austria/Hohensalzburg Fortress.jpg',
  'Hofburg': '/images/Austria/Hofburg.jpg',
  'Belvedere': '/images/Austria/Belvedere.jpg',
  'Schönbrunn Palace Express Pass': '/images/Austria/Schönbrunn Palace Express Pass.jpg',
  'Full Day Guided Tour of Vienna': '/images/Austria/Full Day Guided Tour of Vienna.jpg',
  'Hofburg Skip-the-Line Ticket': '/images/Austria/Hofburg Skip-the-Line Ticket.jpg',
  'Belvedere Experience': '/images/Austria/Belvedere Experience.jpg',

  // Belgium
  'Brussels': '/images/Belgium/Brussels.jpg',
  'Bruges': '/images/Belgium/Bruges.jpg',
  'Antwerp': '/images/Belgium/Antwerp.jpg',
  'Ghent': '/images/Belgium/Ghent.jpg',
  'Liege': '/images/Belgium/Liege.jpg',
  'Grand Place': '/images/Belgium/belgium grand place.jpg',
  'Atomium': '/images/Belgium/Atomium.jpg',
  'Manneken Pis': '/images/Belgium/manneken pis.jpg',
  'Belfry of Bruges': '/images/Belgium/Belfry of Bruges.jpg',
  'Grand Place Express Pass': '/images/Belgium/Grand Place Express Pass.jpg',
  'Full Day Guided Tour of Brussels': '/images/Belgium/Full Day Guided Tour of Brussels.avif',
  'Manneken Pis Skip-the-Line Ticket': '/images/Belgium/Manneken Pis Skip-the-Line Ticket.jpg',
  'Belfry of Bruges Experience': '/images/Belgium/Belfry of Bruges Experience.jpg',

  // Bosnia
  'Sarajevo': '/images/Bosnia/Sarajevo.jpg',
  'Mostar': '/images/Bosnia/Mostar.jpg',
  'Banja Luka': '/images/Bosnia/Banja Luka.jpg',
  'Tuzla': '/images/Bosnia/bosnia tuzla.jpg',
  'Stari Most': '/images/Bosnia/Stari Most.jpg',
  'Baščaršija': '/images/Bosnia/bosnia baščaršija.jpg',
  'Kravica Waterfall': '/images/Bosnia/Kravica Waterfall.jpg',
  'Gazi Husrev-beg Mosque': '/images/Bosnia/bosnia Gazi Husrev-beg Mosque.jpg',
  'Stari Most Express Pass': '/images/Bosnia/Stari Most Express Pass.jpg',
  'Full Day Guided Tour of Sarajevo': '/images/Bosnia/Full Day Guided Tour of Sarajevo.jpg',
  'Kravica Waterfall Skip-the-Line Ticket': '/images/Bosnia/Kravica Waterfall Skip-the-Line Ticket.jpg',
  'Gazi Husrev-beg Mosque Experience': '/images/Bosnia/Gazi Husrev-beg Mosque Experience.jpg',

  // Bulgaria
  'Sofia': '/images/Bulgaria/Sofia.jpg',
  'Plovdiv': '/images/Bulgaria/Plovdiv.jpg',
  'Varna': '/images/Bulgaria/Varna.jpg',
  'Burgas': '/images/Bulgaria/Burgas.jpg',
  'Rila Monastery': '/images/Bulgaria/Rila Monastery.jpg',
  'Alexander Nevsky Cathedral': '/images/Bulgaria/Alexander Nevsky Cathedral.jpg',
  'Tsarevets Fortress': '/images/Bulgaria/Tsarevets Fortress.jpg',
  'Seven Rila Lakes': '/images/Bulgaria/Seven Rila Lakes.jpg',
  'Rila Monastery Express Pass': '/images/Bulgaria/Rila Monastery Express Pass.jpg',
  'Full Day Guided Tour of Sofia': '/images/Bulgaria/Full Day Guided Tour of Sofia.jpg',
  'Tsarevets Fortress Skip-the-Line Ticket': '/images/Bulgaria/Tsarevets Fortress Skip-the-Line Ticket.jpg',
  'Seven Rila Lakes Experience': '/images/Bulgaria/Seven Rila Lakes Experience.jpg',

  // Croatia
  'Dubrovnik': '/images/Croatia/Dubrovnik.jpg',
  'Split': '/images/Croatia/Split.jpg',
  'Zagreb': '/images/Croatia/Zagreb.jpg',
  'Zadar': '/images/Croatia/Zadar.jpg',
  'Plitvice Lakes': '/images/Croatia/Plitvice Lakes.jpg',
  'Diocletian\'s Palace': '/images/Croatia/croatia diocletian\'s palace.avif',
  'Dubrovnik Walls': '/images/Croatia/Dubrovnik Walls.jpg',
  'Krka National Park': '/images/Croatia/Krka National Park.jpg',
  'Plitvice Lakes Express Pass': '/images/Croatia/Plitvice Lakes Express Pass.jpg',
  'Full Day Guided Tour of Dubrovnik': '/images/Croatia/Full Day Guided Tour of Dubrovnik.jpg',
  'Dubrovnik Walls Skip-the-Line Ticket': '/images/Croatia/Dubrovnik Walls Skip-the-Line Ticket.jpg',
  'Krka National Park Experience': '/images/Croatia/Krka National Park Experience.jpg',

  // Czech Republic
  'Prague': '/images/Czech Republic/Prague.jpg',
  'Brno': '/images/Czech Republic/Brno.jpg',
  'Cesky Krumlov': '/images/Czech Republic/Cesky Krumlov.jpg',
  'Karlovy Vary': '/images/Czech Republic/Karlovy Vary.jpg',
  'Charles Bridge': '/images/Czech Republic/Charles Bridge.jpg',
  'Prague Castle': '/images/Czech Republic/Prague Castle.jpg',
  'Old Town Square': '/images/Czech Republic/Old Town Square.jpg',
  'St. Vitus Cathedral': '/images/Czech Republic/St. Vitus Cathedral.jpg',
  'Charles Bridge Express Pass': '/images/Czech Republic/Charles Bridge Express Pass.jpg',
  'Full Day Guided Tour of Prague': '/images/Czech Republic/Full Day Guided Tour of Prague.jpg',
  'Old Town Square Skip-the-Line Ticket': '/images/Czech Republic/Old Town Square Skip-the-Line Ticket.jpg',
  'St. Vitus Cathedral Experience': '/images/Czech Republic/St. Vitus Cathedral Experience.jpg',

  // Denmark
  'Denmark Capital City': '/images/Denmark/denmark capital city.jpg',
  'Historic Denmark': '/images/Denmark/Historic Denmark.jpg',
  'Denmark Mountains': '/images/Denmark/Denmark Mountains.jpg',
  'Denmark Coast': '/images/Denmark/Denmark Coast.jpg',
  'Rural Denmark': '/images/Denmark/Rural Denmark.jpg',
  'National Museum of Denmark': '/images/Denmark/National Museum of Denmark.jpg',
  'Royal Palace of Denmark': '/images/Denmark/Royal Palace of Denmark.jpg',
  'Denmark Scenic Gorge': '/images/Denmark/Denmark Scenic Gorge.jpg',
  'National Museum of Denmark Express Pass': '/images/Denmark/National Museum of Denmark Express Pass.jpg',
  'Full Day Guided Tour of Denmark Capital City': '/images/Denmark/Full Day Guided Tour of Denmark Capital City.jpg',
  'Denmark Scenic Gorge Skip-the-Line Ticket': '/images/Denmark/Denmark Scenic Gorge Skip-the-Line Ticket.jpg',
  'Old Town Square Experience': '/images/Denmark/Old Town Square.jpg'
};

const manualImageCountries = ['albania', 'andorra', 'austria', 'belgium', 'bosnia', 'bulgaria', 'croatia', 'czech-republic', 'denmark'];
const getManualImage = (id, name) => {
  if (id === 'albania') return getAlbaniaImage(name);
  if (exactImageMap[name]) return exactImageMap[name];
  return `/images/${id}/${name}.webp`;
};

// Helper function for deterministic mock data
const getMockData = (id) => {
  const seed = id.charCodeAt(0) + id.charCodeAt(id.length - 1);
  const capitalized = id.charAt(0).toUpperCase() + id.slice(1);

  const realData = {
    france: {
      dests: ['Paris', 'Nice', 'Lyon', 'Marseille', 'Bordeaux', 'Strasbourg', 'Toulouse', 'Nantes', 'Lille', 'Montpellier'],
      attrs: ['Eiffel Tower', 'Louvre Museum', 'Mont Blanc', 'Palace of Versailles', 'Mont Saint-Michel', 'Arc de Triomphe', 'Notre-Dame', 'Château de Chambord']
    },
    japan: {
      dests: ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Sapporo'],
      attrs: ['Mount Fuji', 'Universal Studios Japan', 'Takachiho Gorge', 'Ghibli Museum']
    },
    london: {
      dests: ['Westminster', 'Camden', 'Greenwich', 'Kensington', 'Soho'],
      attrs: ['Big Ben & Parliament', 'London Eye', 'Tower of London', 'British Museum']
    },
    vienna: {
      dests: ['Innere Stadt', 'Schönbrunn', 'Belvedere', 'Hofburg', 'Prater'],
      attrs: ['Schönbrunn Palace', 'St. Stephen\'s Cathedral', 'Hofburg Palace', 'Vienna State Opera']
    },
    italy: {
      dests: ['Rome', 'Venice', 'Florence', 'Milan', 'Naples', 'Verona', 'Turin', 'Bologna', 'Genoa', 'Palermo'],
      attrs: ['Colosseum', 'Vatican Museums', 'Leaning Tower of Pisa', 'Pantheon', 'Pompeii', 'Uffizi Gallery', 'Duomo di Milano', 'Amalfi Coast']
    },
    switzerland: {
      dests: ['Zurich', 'Geneva', 'Lucerne', 'Interlaken', 'Bern'],
      attrs: ['Matterhorn', 'Jungfraujoch', 'Lake Geneva', 'Chapel Bridge']
    },
    spain: {
      dests: ['Barcelona', 'Madrid', 'Seville', 'Valencia', 'Granada'],
      attrs: ['Sagrada Familia', 'Park Güell', 'Alhambra', 'Prado Museum']
    },
    germany: {
      dests: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Dresden', 'Leipzig', 'Nuremberg'],
      attrs: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Berlin Wall', 'Cologne Cathedral', 'Miniatur Wunderland', 'Europa-Park', 'Reichstag Building', 'Marienplatz']
    },
    netherlands: {
      dests: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Maastricht'],
      attrs: ['Rijksmuseum', 'Anne Frank House', 'Van Gogh Museum', 'Keukenhof']
    },
    paris: {
      dests: ['Montmartre', 'Le Marais', 'Latin Quarter', 'Saint-Germain', 'Louvre'],
      attrs: ['Eiffel Tower', 'Louvre Museum', 'Arc de Triomphe', 'Notre-Dame']
    },
    rome: {
      dests: ['Trastevere', 'Centro Storico', 'Testaccio', 'Monti', 'Prati'],
      attrs: ['Colosseum', 'Pantheon', 'Trevi Fountain', 'Roman Forum']
    },
    amsterdam: {
      dests: ['Jordaan', 'De Pijp', 'Oud-Zuid', 'Centrum', 'Noord'],
      attrs: ['Rijksmuseum', 'Anne Frank House', 'Van Gogh Museum', 'Vondelpark']
    },
    'united-kingdom': {
      dests: ['London', 'Edinburgh', 'Manchester', 'Bath', 'Oxford'],
      attrs: ['Stonehenge', 'Tower of London', 'Edinburgh Castle', 'Roman Baths']
    },
    greece: {
      dests: ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes'],
      attrs: ['Acropolis', 'Parthenon', 'Meteora', 'Delphi']
    },
    portugal: {
      dests: ['Lisbon', 'Porto', 'Sintra', 'Faro', 'Coimbra'],
      attrs: ['Belém Tower', 'Pena Palace', 'Jerónimos Monastery', 'Ribeira']
    },
    austria: {
      dests: ['Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Linz'],
      attrs: ['Schönbrunn Palace', 'Hohensalzburg Fortress', 'Hofburg', 'Belvedere']
    },
    belgium: {
      dests: ['Brussels', 'Bruges', 'Antwerp', 'Ghent', 'Liege'],
      attrs: ['Grand Place', 'Atomium', 'Manneken Pis', 'Belfry of Bruges']
    },
    ireland: {
      dests: ['Dublin', 'Galway', 'Cork', 'Killarney', 'Limerick'],
      attrs: ['Cliffs of Moher', 'Guinness Storehouse', 'Ring of Kerry', 'Blarney Castle']
    },
    zurich: {
      dests: ['Altstadt', 'Enge', 'Seefeld', 'Niederdorf', 'Aussersihl'],
      attrs: ['Lake Zurich', 'Grossmünster', 'Bahnhofstrasse', 'Uetliberg']
    },
    barcelona: {
      dests: ['Eixample', 'Gothic Quarter', 'Gràcia', 'El Born', 'Poblenou'],
      attrs: ['Sagrada Familia', 'Park Güell', 'Casa Batlló', 'La Rambla']
    },
    berlin: {
      dests: ['Mitte', 'Kreuzberg', 'Prenzlauer Berg', 'Friedrichshain', 'Charlottenburg'],
      attrs: ['Brandenburg Gate', 'Berlin Wall', 'Reichstag', 'Museum Island']
    },
    madrid: {
      dests: ['Sol', 'Malasaña', 'Chueca', 'La Latina', 'Salamanca'],
      attrs: ['Prado Museum', 'Royal Palace', 'Retiro Park', 'Plaza Mayor']
    },
    prague: {
      dests: ['Old Town', 'Mala Strana', 'New Town', 'Hradcany', 'Vinohrady'],
      attrs: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'Astronomical Clock']
    },
    milan: {
      dests: ['Brera', 'Navigli', 'Centro Storico', 'Porta Nuova', 'Isola'],
      attrs: ['Duomo di Milano', 'Galleria Vittorio', 'The Last Supper', 'Sforzesco Castle']
    },
    munich: {
      dests: ['Altstadt', 'Maxvorstadt', 'Schwabing', 'Haidhausen', 'Glockenbach'],
      attrs: ['Marienplatz', 'English Garden', 'Nymphenburg', 'Hofbräuhaus']
    },
    andorra: {
      dests: ['Andorra la Vella', 'Encamp', 'Ordino', 'La Massana', 'Canillo'],
      attrs: ['Vallnord', 'Grandvalira', 'Caldea Spa', 'Casa de la Vall']
    },
    bosnia: {
      dests: ['Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla'],
      attrs: ['Stari Most', 'Baščaršija', 'Kravica Waterfall', 'Gazi Husrev-beg Mosque']
    },
    bulgaria: {
      dests: ['Sofia', 'Plovdiv', 'Varna', 'Burgas'],
      attrs: ['Rila Monastery', 'Alexander Nevsky Cathedral', 'Tsarevets Fortress', 'Seven Rila Lakes']
    },
    croatia: {
      dests: ['Dubrovnik', 'Split', 'Zagreb', 'Zadar'],
      attrs: ['Plitvice Lakes', 'Diocletian\'s Palace', 'Dubrovnik Walls', 'Krka National Park']
    },
    'czech-republic': {
      dests: ['Prague', 'Brno', 'Cesky Krumlov', 'Karlovy Vary'],
      attrs: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'St. Vitus Cathedral']
    }
  };

  const images = [
    '/images/london.webp',
    '/images/Italy.webp',
    '/images/Swiss Alps.webp',
    '/images/Amsterdam.webp',
    '/images/paris.webp',
    '/images/home hero.webp',
    '/images/barcelona.webp',
    '/images/italy/Venice.webp',
    '/images/Switzerland.webp',
    '/images/Germany.webp'
  ];

  const fallbackDests = [`${capitalized} Capital City`, `Historic ${capitalized}`, `${capitalized} Mountains`, `${capitalized} Coast`, `Rural ${capitalized}`];
  const fallbackAttrs = [`National Museum of ${capitalized}`, `Royal Palace of ${capitalized}`, `${capitalized} Scenic Gorge`, `Old Town Square`];

  const destNames = realData[id]?.dests || fallbackDests;
  const attrNames = realData[id]?.attrs || fallbackAttrs;

  // Generate top destinations using exactly the available names
  const topDests = destNames.map((name, i) => ({
    title: name,
    img: manualImageCountries.includes(id) ? getManualImage(id, name) : '',
    fallbackImg: ''
  }));

  // Top attractions using exactly the available names
  const topAttractions = attrNames.map((name, i) => ({
    title: name,
    img: manualImageCountries.includes(id) ? getManualImage(id, name) : '',
    fallbackImg: ''
  }));

  // Top things to do using available attractions
  const topThings = attrNames.map((name, i) => {
    const itemSeed = seed + i;
    
    let title = `${name} Experience`;
    let desc = `Experience the majesty of the region with our premium VIP access. Skip the long lines and enjoy a comprehensive guided tour with a local expert.`;
    let loc = `Sightseeing • ${capitalized} Area`;
    
    if (i === 0) {
        title = `${name} Express Pass`;
        loc = `Sightseeing • ${capitalized} Central`;
        desc = `Experience the majesty of ${name || 'the city'} with our premium VIP express access. Skip the long lines and enjoy a comprehensive guided tour with a local expert.`;
    } else if (i === 1) {
        title = `Full Day Guided Tour of ${destNames[0] || capitalized}`;
        loc = `Day Trips • ${capitalized} Area`;
        desc = `Discover the hidden gems and rich history of ${destNames[0] || 'this beautiful region'} on a full day immersive journey including local tastings.`;
    } else if (i === 2) {
        title = `${name} Skip-the-Line Ticket`;
        loc = `Attractions • ${capitalized} City`;
        desc = `Gain exclusive priority entrance to ${name || 'the observation deck'} and marvel at the breathtaking panoramic views at your own pace.`;
    }
    
    return { 
      title: title,
      loc: loc,
      desc: desc,
      img: manualImageCountries.includes(id) ? getManualImage(id, title) : '',
      fallbackImg: '',
      badge: i % 2 === 0 ? 'Book now for tomorrow' : 'Instant Confirmation',
      rating: (4.5 + (i % 5) * 0.1).toFixed(1)
    };
  });

  // Reviews
  const reviews = [
    {
      name: `Pei ********`,
      date: `2026-06-06 01:17:28`,
      text: `We had a super great time! We bought tickets for this experience and got everything we wanted. Just a downside, it started raining at 5+pm...`,
      product: topThings[1].title,
      img: topThings[1].img
    },
    {
      name: `Klook User`,
      date: `2026-06-04 20:58:29`,
      text: `Visiting ${capitalized} was an unforgettable experience. The views were absolutely breathtaking, especially at sunset. Highly recommended to everyone!`,
      product: topThings[2].title,
      img: topThings[2].img
    },
    {
      name: `Marianne **********`,
      date: `2026-06-06 16:38:49`,
      text: `Queue Times: We arrived at 10:00 AM, and the queue was very fast. All staff were friendly. We had a chance to enter the special area easily.`,
      product: topThings[0].title,
      img: topThings[0].img
    }
  ];

  const weatherSeed = (seed % 4);
  const weathers = [
    { season: "DEC - FEB", temps: { high: "45°", low: "28°" }, desc: "Winter Season" },
    { season: "MAR - MAY", temps: { high: "68°", low: "45°" }, desc: "Spring Season" },
    { season: "JUN - AUG", temps: { high: "85°", low: "65°" }, desc: "Summer Season" },
    { season: "SEP - NOV", temps: { high: "62°", low: "48°" }, desc: "Autumn Season" }
  ];
  const weather = weathers[weatherSeed];

  return { title: capitalized, topDests, topAttractions, topThings, reviews, weather };
};

const Region = () => {
  const { id } = useParams();
  
  const [visibleDests, setVisibleDests] = useState(5);
  const [visibleAttrs, setVisibleAttrs] = useState(4);
  const [visibleThings, setVisibleThings] = useState(3);
  const [previewData, setPreviewData] = useState({ isOpen: false, img: '', title: '' });
  
  // Use existing hero if available, else generic
  let heroImage = '/images/home%20hero.webp';
  if (['france', 'japan', 'london', 'vienna', 'italy', 'switzerland', 'spain', 'germany', 'netherlands', 'paris', 'rome', 'amsterdam', 'united-kingdom', 'greece', 'portugal', 'ireland'].includes(id)) {
    heroImage = `/images/${id}.webp`;
  } else if (id === 'andorra') heroImage = '/images/Andorra/Andorra.jpg';
  else if (id === 'austria') heroImage = '/images/Austria/Austria.jpg';
  else if (id === 'belgium') heroImage = '/images/Belgium/Belgium.jpg';
  else if (id === 'bosnia') heroImage = '/images/Bosnia/Bosnia.jpg';
  else if (id === 'bulgaria') heroImage = '/images/Bulgaria/Bulgaria.jpg';
  else if (id === 'croatia') heroImage = '/images/Croatia/Croatia.jpg';
  else if (id === 'czech-republic') heroImage = '/images/Czech Republic/Czech-republic.jpg';
  else if (id === 'denmark') heroImage = '/images/Denmark/Denmark.jpg';
  else if (id === 'albania') {
    heroImage = getAlbaniaImage('Albania hero');
  } else if (regionPages[id] && regionPages[id].hero) {
    heroImage = regionPages[id].hero;
  }

  const { title, topDests, topAttractions, topThings, reviews, weather } = getMockData(id);

  return (
    <div className="region-page">
      {/* Hero Banner */}
      <div className="klook-hero" style={{ backgroundImage: `url('${heroImage}')` }}>
        <h1 className="klook-hero-title">
          {title} {id === 'france' && '🇫🇷'} {id === 'italy' && '🇮🇹'}
        </h1>
      </div>

      {/* Top Destinations Section */}
      <section className="klook-section container">
        <div className="klook-section-header">
            <h2 className="klook-section-title">Top destinations in {title}</h2>
            {visibleDests < topDests.length && (
              <div className="klook-see-more" style={{cursor: 'pointer'}} onClick={() => setVisibleDests(prev => prev + 5)}>See more</div>
            )}
        </div>
        <div className="klook-grid-5">
          {topDests.slice(0, visibleDests).map((dest, index) => (
            <div 
              className="klook-card klook-square-card" 
              key={index}
            >
              {dest.img && (
                <img 
                  src={dest.img} 
                  alt={dest.title} 
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} 
                  onClick={() => setPreviewData({ isOpen: true, img: dest.img, title: dest.title })}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="klook-card-overlay">{dest.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="klook-section container" style={{ paddingTop: '1rem' }}>
        <div className="klook-section-header">
            <h2 className="klook-section-title">Top attractions in {title}</h2>
            {visibleAttrs < topAttractions.length && (
              <div className="klook-see-more" style={{cursor: 'pointer'}} onClick={() => setVisibleAttrs(prev => prev + 4)}>See more</div>
            )}
        </div>
        <div className="klook-grid-4">
          {topAttractions.slice(0, visibleAttrs).map((attr, index) => (
            <div 
              className="klook-card klook-rect-card" 
              key={index}
            >
              {attr.img && (
                <img 
                  src={attr.img} 
                  alt={attr.title} 
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} 
                  onClick={() => setPreviewData({ isOpen: true, img: attr.img, title: attr.title })}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="klook-card-overlay">{attr.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Top Things to do Section */}
      <section className="klook-section container" style={{ paddingTop: '1rem' }}>
        <div className="klook-section-header">
            <h2 className="klook-section-title">Top things to do in {title}</h2>
            {visibleThings < topThings.length && (
              <div className="klook-see-more" style={{cursor: 'pointer'}} onClick={() => setVisibleThings(prev => prev + 3)}>See 999+ things to do in {title}</div>
            )}
        </div>
        <div className="klook-grid-3">
          {topThings.slice(0, visibleThings).map((thing, index) => (
            <div className="klook-vert-card" key={index}>
              <div className="klook-vert-img-box">
                  {thing.img && <img src={thing.img} alt={thing.title} onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />}
                  <div className="klook-vert-heart">♡</div>
              </div>
              <div className="klook-vert-info">
                  <div className="klook-vert-loc">{thing.loc}</div>
                  <h3 className="klook-vert-title">{thing.title}</h3>
                  <div className="klook-vert-badge">{thing.badge}</div>
                  <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1rem', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{thing.desc}</p>
                  
                  <div className="klook-vert-footer" style={{ borderTop: 'none', paddingTop: '0', flexDirection: 'column', alignItems: 'stretch' }}>
                      <div className="klook-vert-rating" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>Fantastic {thing.rating}</div>
                      <Link to={`/contact?tour=${encodeURIComponent(thing.title)}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', padding: '0.8rem', borderRadius: '8px' }}>
                          Details
                      </Link>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traveler Reviews Section */}
      <section className="klook-section container" style={{ paddingTop: '1rem' }}>
        <h2 className="klook-section-title" style={{ marginBottom: '1.5rem' }}>What travelers say about {title}</h2>
        <div className="klook-grid-3">
          {reviews.map((review, index) => (
            <div className="klook-review-card" key={index}>
              <div className="klook-review-header">
                  <div>
                      <div className="klook-reviewer-name">{review.name}</div>
                      <div className="klook-review-date">{review.date}</div>
                  </div>
                  <div className="klook-review-rating">Fantastic <span>5.0</span></div>
              </div>
              <div className="klook-review-text">{review.text}</div>
              <div className="klook-review-product">
                  <img src={review.img} alt="Product" />
                  <span>{review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="klook-section container" style={{ paddingTop: '1rem', paddingBottom: '6rem' }}>
        <h2 className="klook-section-title" style={{ marginBottom: '1.5rem' }}>Quick facts about {title}</h2>
        <div className="klook-weather-widget">
            <div className="klook-weather-header">
                <div className="klook-weather-title">Local weather</div>
                <div className="klook-toggle">
                    <span className="active">°F</span>
                    <span>°C</span>
                </div>
            </div>
            <div className="klook-weather-season">{weather.season}</div>
            <div className="klook-weather-temps">
                <span>{weather.temps.high}</span>
                <span className="low">{weather.temps.low}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>{weather.desc}</div>
        </div>
      </section>

      <ImagePreviewModal 
        isOpen={previewData.isOpen}
        onClose={() => setPreviewData({ ...previewData, isOpen: false })}
        imageSrc={previewData.img}
        title={previewData.title}
      />
    </div>
  );
};

export default Region;
