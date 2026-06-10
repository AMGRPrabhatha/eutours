// Reusing existing images for now to provide rich aesthetics immediately
const images = {
  france: '/images/france_circle_1781090115021.webp',
  italy: '/images/italy_circle_1781090125109.webp',
  swiss: '/images/swiss_circle_1781090136030.webp',
  spain: '/images/spain_circle_1781090146338.webp',
  paris_bg: '/images/paris_dest_1781075727792.webp',
  rome_bg: '/images/italy_vertical_1781089947416.webp',
  london_bg: '/images/london_dest_1781077494703.webp',
  amsterdam_bg: '/images/amsterdam_dest_1781077507425.webp',
  swiss_bg: '/images/switzerland_vertical_1781089957980.webp',
  generic_bg: '/images/hero_bg_1781075622715.webp',
  van_bg: '/images/luxury_van_1781075675269.webp'
};

export const regions = [
  { id: 'france', title: 'France', img: images.france },
  { id: 'italy', title: 'Italy', img: images.italy },
  { id: 'switzerland', title: 'Switzerland', img: images.swiss },
  { id: 'spain', title: 'Spain', img: images.spain },
  { id: 'germany', title: 'Germany', img: images.generic_bg },
  { id: 'uk', title: 'United Kingdom', img: images.london_bg },
  { id: 'netherlands', title: 'Netherlands', img: images.amsterdam_bg },
  { id: 'greece', title: 'Greece', img: images.rome_bg },
  { id: 'portugal', title: 'Portugal', img: images.spain },
  { id: 'austria', title: 'Austria', img: images.swiss_bg },
  { id: 'belgium', title: 'Belgium', img: images.france },
  { id: 'ireland', title: 'Ireland', img: images.london_bg }
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
