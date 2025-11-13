// Structured data for SEO optimization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Free Bird Travelers",
  "description": "Personalized travel services with expert planning and custom tour packages",
  "url": "https://freebirdtravelers.com",
  "logo": "https://freebirdtravelers.com/images/logo.png",
  "image": "https://freebirdtravelers.com/images/hero-bg.jpg",
  "telephone": "+91-XXXXXXXXXX",
  "email": "contact@freebirdtravelers.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Travel Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "123456",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "Place",
    "name": "India and International"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Travel Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Travel Planning",
          "description": "Personalized travel itineraries tailored to your preferences"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Visa Assistance",
          "description": "Complete visa processing and documentation support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tour Packages",
          "description": "Curated tour packages for domestic and international destinations"
        }
      }
    ]
  },
  "sameAs": [
    "https://facebook.com/freebirdtravelers",
    "https://instagram.com/freebirdtravelers",
    "https://twitter.com/freebirdtravelers"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Free Bird Travelers",
  "url": "https://freebirdtravelers.com",
  "description": "Personalized travel services with expert planning and custom tour packages",
  "publisher": {
    "@type": "Organization",
    "name": "Free Bird Travelers"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://freebirdtravelers.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "image": service.image,
  "provider": {
    "@type": "TravelAgency",
    "name": "Free Bird Travelers",
    "url": "https://freebirdtravelers.com"
  },
  "serviceType": "Travel Services",
  "areaServed": {
    "@type": "Place",
    "name": "India and International"
  }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
