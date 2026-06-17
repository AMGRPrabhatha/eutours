// Reusing existing images for now to provide rich aesthetics immediately
const images = {
  france: '/images/paris.jpg',
  italy: '/images/Italy.jpg',
  swiss: '/images/Switzerland.jpg',
  spain: '/images/barcelona.jpg',
  germany: '/images/Germany.jpg',
  uk: '/images/london.jpg',
  netherlands: '/images/Netherlands.jpg',
  greece: '/images/greece.png',
  portugal: '/images/portugal.png',
  austria: '/images/Swiss Alps.jpg',
  belgium: '/images/belgium.png',
  ireland: '/images/ireland.png',
  paris_bg: '/images/paris.jpg',
  rome_bg: '/images/rome.jpg',
  london_bg: '/images/london.jpg',
  amsterdam_bg: '/images/Amsterdam.jpg',
  swiss_bg: '/images/Switzerland.jpg',
  generic_bg: '/images/europe_map_wide.png',
  van_bg: '/images/black_luxury_van.png'
};

export const regions = [
  { id: 'france', title: 'France', img: images.france },
  { id: 'italy', title: 'Italy', img: images.italy },
  { id: 'switzerland', title: 'Switzerland', img: images.swiss },
  { id: 'spain', title: 'Spain', img: images.spain },
  { id: 'germany', title: 'Germany', img: images.germany },
  { id: 'uk', title: 'United Kingdom', img: images.uk },
  { id: 'netherlands', title: 'Netherlands', img: images.netherlands },
  { id: 'greece', title: 'Greece', img: images.greece },
  { id: 'portugal', title: 'Portugal', img: images.portugal },
  { id: 'austria', title: 'Austria', img: images.austria },
  { id: 'belgium', title: 'Belgium', img: images.belgium },
  { id: 'ireland', title: 'Ireland', img: images.ireland }
];

export const destinations = [
  { id: 'paris', title: 'Paris', img: images.paris_bg },
  { id: 'rome', title: 'Rome', img: images.rome_bg },
  { id: 'london', title: 'London', img: images.london_bg },
  { id: 'amsterdam', title: 'Amsterdam', img: images.amsterdam_bg },
  { id: 'zurich', title: 'Zurich', img: images.swiss_bg },
  { id: 'barcelona', title: 'Barcelona', img: images.spain },
  { id: 'berlin', title: 'Berlin', img: images.generic_bg },
  { id: 'madrid', title: 'Madrid', img: images.spain },
  { id: 'vienna', title: 'Vienna', img: images.swiss_bg },
  { id: 'prague', title: 'Prague', img: images.rome_bg },
  { id: 'milan', title: 'Milan', img: images.italy },
  { id: 'munich', title: 'Munich', img: images.generic_bg }
];

export const explore = [
  { id: 'tours', title: 'Guided Tours', img: images.van_bg },
  { id: 'hotels', title: 'Luxury Hotels', img: images.generic_bg },
  { id: 'transport', title: 'Transport', img: images.van_bg },
  { id: 'attractions', title: 'Attractions', img: images.paris_bg }
];

export const regionPages = {
  france: {
    title: 'France',
    hero: images.paris_bg,
    topDestinations: [
      { title: 'Paris', img: images.paris_bg },
      { title: 'Nice', img: images.france },
      { title: 'Lyon', img: images.generic_bg },
      { title: 'Marseille', img: images.amsterdam_bg }
    ]
  },
  italy: {
    title: 'Italy',
    hero: images.rome_bg,
    topDestinations: [
      { title: 'Rome', img: images.rome_bg },
      { title: 'Venice', img: images.italy },
      { title: 'Milan', img: images.generic_bg },
      { title: 'Florence', img: images.spain }
    ]
  },
  switzerland: {
    title: 'Switzerland',
    hero: images.swiss_bg,
    topDestinations: [
      { title: 'Zurich', img: images.swiss_bg },
      { title: 'Geneva', img: images.swiss },
      { title: 'Interlaken', img: images.generic_bg },
      { title: 'Lucerne', img: images.paris_bg }
    ]
  },
  spain: {
    title: 'Spain',
    hero: images.generic_bg,
    topDestinations: [
      { title: 'Barcelona', img: images.spain },
      { title: 'Madrid', img: images.rome_bg },
      { title: 'Seville', img: images.generic_bg },
      { title: 'Valencia', img: images.amsterdam_bg }
    ]
  }
};
