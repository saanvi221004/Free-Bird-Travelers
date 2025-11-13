export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  trip: string;
  image?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    review: 'Free Bird Travelers made our Goa trip absolutely perfect! The personal attention and care they provided was exceptional. Every detail was taken care of, from flights to hotel bookings.',
    trip: 'Goa Beach Holiday',
    image: '/images/testimonials/priya.jpg',
    date: '2024-11-15'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    review: 'Outstanding service for our family trip to Kerala! The team understood our needs perfectly and created a customized itinerary that everyone enjoyed. Highly recommended!',
    trip: 'Kerala Backwaters Tour',
    image: '/images/testimonials/rajesh.jpg',
    date: '2024-10-28'
  },
  {
    id: '3',
    name: 'Anjali & Vikram',
    location: 'Bangalore, India',
    rating: 5,
    review: 'Our honeymoon in Maldives was a dream come true! Free Bird Travelers handled everything professionally. The personal touch and attention to detail made our trip unforgettable.',
    trip: 'Maldives Honeymoon',
    image: '/images/testimonials/anjali-vikram.jpg',
    date: '2024-12-05'
  },
  {
    id: '4',
    name: 'Suresh Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    review: 'Excellent corporate travel management for our team outing to Manali. The coordination was seamless and everyone had a fantastic time. Will definitely use their services again.',
    trip: 'Corporate Team Outing',
    image: '/images/testimonials/suresh.jpg',
    date: '2024-09-20'
  },
  {
    id: '5',
    name: 'Meera Iyer',
    location: 'Chennai, India',
    rating: 5,
    review: 'As a solo female traveler, I felt completely safe and supported throughout my Rajasthan trip. The team provided excellent guidance and local insights. Truly a personalized experience!',
    trip: 'Rajasthan Cultural Tour',
    image: '/images/testimonials/meera.jpg',
    date: '2024-11-02'
  },
  {
    id: '6',
    name: 'The Gupta Family',
    location: 'Kolkata, India',
    rating: 5,
    review: 'Our Europe tour was perfectly planned! From visa assistance to daily itineraries, everything was handled with care. The kids loved every moment and we made memories for a lifetime.',
    trip: 'Europe Family Tour',
    image: '/images/testimonials/gupta-family.jpg',
    date: '2024-08-15'
  }
];

export const getAverageRating = () => {
  return testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
};

export const getRecentTestimonials = (count: number = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
