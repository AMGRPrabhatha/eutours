// Reusing existing images for now to provide rich aesthetics immediately
const images = {
  france: '/images/paris.webp',
  italy: '/images/Italy.webp',
  swiss: '/images/Switzerland.webp',
  spain: '/images/barcelona.webp',
  germany: '/images/Germany/Germany.webp',
  uk: '/images/london.webp',
  netherlands: '/images/Netherlands.webp',
  greece: '/images/greece.webp',
  portugal: '/images/portugal.webp',
  austria: '/images/Swiss Alps.webp',
  belgium: '/images/belgium.webp',
  ireland: '/images/ireland.webp',
  paris_bg: '/images/paris.webp',
  rome_bg: '/images/rome.webp',
  london_bg: '/images/london.webp',
  amsterdam_bg: '/images/Amsterdam.webp',
  swiss_bg: '/images/Switzerland.webp',
  generic_bg: '/images/europe_map_wide.webp',
  van_bg: '/images/black_luxury_van.webp'
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
