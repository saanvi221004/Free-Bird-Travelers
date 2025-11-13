export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  type: 'domestic' | 'international';
  highlights: string[];
  bestTime: string;
  duration: string;
  priceRange: string;
}

export const destinations: Destination[] = [
  // Domestic Destinations
  {
    id: 'goa',
    name: 'Goa',
    location: 'West India',
    description: 'Beautiful beaches, vibrant nightlife, and Portuguese heritage',
    image: '/images/destinations/image copy 5.png',
    type: 'domestic',
    highlights: ['Beautiful beaches', 'Water sports', 'Portuguese architecture', 'Vibrant nightlife'],
    bestTime: 'October to March',
    duration: '3-5 days',
    priceRange: '₹15,000 - ₹25,000'
  },
  {
    id: 'manali',
    name: 'Manali',
    location: 'Himachal Pradesh',
    description: 'Scenic hill station with snow-capped mountains and adventure activities',
    image: '/images/destinations/image copy 4.png',
    type: 'domestic',
    highlights: ['Snow-capped mountains', 'Adventure sports', 'Scenic valleys', 'Cool climate'],
    bestTime: 'March to June,\nOctober to February',
    duration: '4-6 days',
    priceRange: '₹20,000 - ₹30,000'
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    location: 'South India',
    description: 'Tranquil backwaters, lush greenery, and Ayurvedic treatments',
    image: '/images/destinations/image.png',
    type: 'domestic',
    highlights: ['Backwater cruises', 'Ayurvedic spas', 'Tea plantations', 'Wildlife sanctuaries'],
    bestTime: 'September to March',
    duration: '5-7 days',
    priceRange: '₹25,000 - ₹40,000'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    location: 'Northwest India',
    description: 'Royal palaces, desert landscapes, and rich cultural heritage',
    image: '/images/destinations/image copy 2.png',
    type: 'domestic',
    highlights: ['Royal palaces', 'Desert safaris', 'Cultural festivals', 'Historic forts'],
    bestTime: 'October to March',
    duration: '7-10 days',
    priceRange: '₹30,000 - ₹50,000'
  },

  // International Destinations
  {
    id: 'dubai',
    name: 'Dubai',
    location: 'United Arab Emirates',
    description: 'Modern metropolis with luxury shopping, futuristic architecture',
    image: '/images/destinations/image copy.png',
    type: 'international',
    highlights: ['Burj Khalifa', 'Luxury shopping', 'Desert safaris', 'Modern architecture'],
    bestTime: 'November to March',
    duration: '4-6 days',
    priceRange: '₹50,000 - ₹80,000'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    location: 'Southeast Asia',
    description: 'Tropical paradise with stunning beaches and rich culture',
    image: '/images/destinations/image copy 6.png',
    type: 'international',
    highlights: ['Beautiful beaches', 'Thai cuisine', 'Ancient temples', 'Island hopping'],
    bestTime: 'November to April',
    duration: '5-8 days',
    priceRange: '₹40,000 - ₹70,000'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    location: 'Southeast Asia',
    description: 'Modern city-state with diverse culture and attractions',
    image: '/images/destinations/image copy 7.png',
    type: 'international',
    highlights: ['Marina Bay Sands', 'Universal Studios', 'Gardens by the Bay', 'Street food'],
    bestTime: 'December to June',
    duration: '3-5 days',
    priceRange: '₹45,000 - ₹75,000'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    location: 'Indian Ocean',
    description: 'Tropical paradise with overwater villas and pristine beaches',
    image: '/images/destinations/image copy 3.png',
    type: 'international',
    highlights: ['Overwater villas', 'Crystal clear waters', 'Scuba diving', 'Luxury resorts'],
    bestTime: 'November to April',
    duration: '4-7 days',
    priceRange: '₹80,000 - ₹150,000'
  },
  {
    id: 'europe',
    name: 'Europe Tour',
    location: 'Multiple Countries',
    description: 'Explore multiple European countries with rich history and culture',
    image: '/images/destinations/image copy 8.png',
    type: 'international',
    highlights: ['Historic cities', 'Art & culture', 'Scenic landscapes', 'Multiple countries'],
    bestTime: 'April to September',
    duration: '10-15 days',
    priceRange: '₹100,000 - ₹200,000'
  }
];

export const getDomesticDestinations = () => {
  return destinations.filter(dest => dest.type === 'domestic');
};

export const getInternationalDestinations = () => {
  return destinations.filter(dest => dest.type === 'international');
};
