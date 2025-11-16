export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'booking' | 'packages' | 'essentials' | 'tours' | 'addons';
}

export const services: Service[] = [
  // Travel Booking Services
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    description: 'Domestic & international flight bookings with best prices and flexible options',
    icon: '✈️',
    features: ['Domestic flights', 'International flights', 'Best price guarantee', 'Flexible cancellation'],
    category: 'booking'
  },
  {
    id: 'train-booking',
    title: 'Train Booking',
    description: 'IRCTC integration for seamless train ticket bookings across India',
    icon: '🚆',
    features: ['IRCTC integration', 'All train routes', 'Seat selection', 'Instant confirmation'],
    category: 'booking'
  },
  {
    id: 'bus-booking',
    title: 'Bus Booking',
    description: 'Intercity & local bus bookings for comfortable ground transportation',
    icon: '🚌',
    features: ['Intercity buses', 'Local transportation', 'AC/Non-AC options', 'Online booking'],
    category: 'booking'
  },
  {
    id: 'car-rentals',
    title: 'Cab / Car Rentals',
    description: 'Local & outstation car rentals with professional drivers',
    icon: '🚗',
    features: ['Local city rides', 'Outstation travel', 'Professional drivers', 'Multiple car types'],
    category: 'booking'
  },

  // Holiday & Tour Packages
  {
    id: 'domestic-packages',
    title: 'Domestic Packages',
    description: 'Explore incredible India with curated domestic tour packages',
    icon: '🏔️',
    features: ['Goa beaches', 'Manali mountains', 'Kerala backwaters', 'Rajasthan heritage'],
    category: 'packages'
  },
  {
    id: 'international-packages',
    title: 'International Packages',
    description: 'Discover the world with our international holiday packages',
    icon: '🌍',
    features: ['Dubai luxury', 'Thailand adventure', 'Singapore city', 'Maldives romance', 'Europe tours'],
    category: 'packages'
  },
  {
    id: 'customized-tours',
    title: 'Customized Tours',
    description: 'Personalized travel experiences tailored to your preferences',
    icon: '🎯',
    features: ['Honeymoon specials', 'Family trips', 'Adventure tours', 'Solo travel', 'Luxury experiences'],
    category: 'packages'
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    description: 'Quick escapes for refreshing weekend breaks',
    icon: '🌅',
    features: ['2-3 day trips', 'Nearby destinations', 'Budget-friendly', 'Quick booking'],
    category: 'packages'
  },

  // Travel Essentials
  {
    id: 'forex-exchange',
    title: 'Forex Exchange Assistance',
    description: 'Currency exchange services for international travel',
    icon: '💱',
    features: ['Best exchange rates', 'Multiple currencies', 'Cash & cards', 'Quick processing'],
    category: 'essentials'
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance & Travel Insurance',
    description: 'Complete visa processing and comprehensive travel insurance',
    icon: '📋',
    features: ['Visa processing', 'Document assistance', 'Travel insurance', 'Expert guidance'],
    category: 'essentials'
  },
  {
    id: 'hotel-bookings',
    title: 'Hotel & Resort Bookings',
    description: 'Accommodation bookings from budget to luxury properties',
    icon: '🏨',
    features: ['Budget to luxury', 'Resort bookings', 'Best rates', 'Instant confirmation'],
    category: 'essentials'
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Convenient and reliable airport pickup and drop services',
    icon: '🚐',
    features: ['Airport pickup', 'Drop services', 'Professional drivers', 'On-time guarantee'],
    category: 'essentials'
  },

  // Special Tours
  {
    id: 'city-tours',
    title: 'City Tours',
    description: 'Explore major cities with guided local experiences',
    icon: '🏙️',
    features: ['Kolkata heritage', 'Delhi monuments', 'Mumbai attractions', 'Local guides'],
    category: 'tours'
  },
  {
    id: 'adventure-tours',
    title: 'Adventure Tours',
    description: 'Thrilling outdoor adventures for adrenaline seekers',
    icon: '🏔️',
    features: ['Trekking expeditions', 'River rafting', 'Camping trips', 'Rock climbing'],
    category: 'tours'
  },
  {
    id: 'cultural-heritage',
    title: 'Cultural & Heritage Tours',
    description: 'Immerse in rich cultural and historical experiences',
    icon: '🏛️',
    features: ['Historical sites', 'Cultural experiences', 'Heritage walks', 'Local traditions'],
    category: 'tours'
  },
  {
    id: 'food-tours',
    title: 'Food Tours',
    description: 'Culinary journeys to taste authentic local cuisines',
    icon: '🍽️',
    features: ['Street food tours', 'Fine dining', 'Cooking classes', 'Local specialties'],
    category: 'tours'
  },
  {
    id: 'corporate-travel',
    title: 'Group / Corporate Travel',
    description: 'Specialized services for group and corporate travel needs',
    icon: '👥',
    features: ['Group bookings', 'Corporate rates', 'Event planning', 'Team building'],
    category: 'tours'
  },

  // Add-on Services
  {
    id: 'travel-consultation',
    title: 'Travel Consultation',
    description: 'Expert guidance and planning for your perfect trip',
    icon: '💡',
    features: ['Trip planning', 'Destination advice', 'Budget optimization', 'Custom itineraries'],
    category: 'addons'
  },
  {
    id: 'travel-blogs',
    title: 'Travel Blogs & Guides',
    description: 'Informative content for better travel experiences and SEO',
    icon: '📝',
    features: ['Destination guides', 'Travel tips', 'Photo stories', 'Local insights'],
    category: 'addons'
  },
  {
    id: 'local-experiences',
    title: 'Local Experience Bookings',
    description: 'Authentic local activities and dining experiences',
    icon: '🎭',
    features: ['Local events', 'Cultural activities', 'Restaurant bookings', 'Unique experiences'],
    category: 'addons'
  },
  {
    id: 'customer-support',
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for all your travel needs',
    icon: '📞',
    features: ['24/7 availability', 'Emergency assistance', 'Real-time support', 'Multiple channels'],
    category: 'addons'
  }
];

export const serviceCategories = [
  {
    id: 'booking',
    title: 'Travel Booking Services',
    description: 'Complete booking solutions for all your travel needs',
    icon: '✈️'
  },
  {
    id: 'packages',
    title: 'Holiday & Tour Packages',
    description: 'Curated travel packages for memorable experiences',
    icon: '🌍'
  },
  {
    id: 'essentials',
    title: 'Travel Essentials',
    description: 'Essential services to make your travel smooth',
    icon: '💼'
  },
  {
    id: 'tours',
    title: 'Special Tours',
    description: 'Unique and specialized tour experiences',
    icon: '🗺️'
  },
  {
    id: 'addons',
    title: 'Add-on Services',
    description: 'Additional services to enhance your travel',
    icon: '🎒'
  }
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};
