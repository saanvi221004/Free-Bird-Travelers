export const COMPANY_INFO = {
  name: 'Free Bird Travelers',
  tagline: 'Your Personal Travel Companion - Where Dreams Take Flight',
  description: 'A comprehensive travel and tourism website providing personalized travel services with a human touch. No online bookings, just authentic personal service and unforgettable travel experiences.',
  
  // Contact Information
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'contact@freebirdtravelers.com',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91-XXXXXXXXXX',
  whatsapp: process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || '+91-XXXXXXXXXX',
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/freebirdtravelers',
    instagram: 'https://instagram.com/freebirdtravelers',
    twitter: 'https://twitter.com/freebirdtravelers',
    youtube: 'https://youtube.com/freebirdtravelers'
  },
  
  // Business Hours
  businessHours: '9:00 AM - 8:00 PM (Monday to Saturday)',
  
  // Address
  address: {
    street: '123 Travel Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India'
  }
};

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'booking',
    title: 'Travel Booking',
    href: '/services/booking',
    icon: '✈️'
  },
  {
    id: 'packages',
    title: 'Tour Packages',
    href: '/services/packages',
    icon: '🌍'
  },
  {
    id: 'essentials',
    title: 'Travel Essentials',
    href: '/services/essentials',
    icon: '💼'
  },
  {
    id: 'tours',
    title: 'Special Tours',
    href: '/services/tours',
    icon: '🗺️'
  }
];

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
};

export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID;
