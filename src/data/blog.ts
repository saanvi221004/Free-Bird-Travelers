export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: 'travel-tips' | 'destinations' | 'culture' | 'adventure' | 'food';
  tags: string[];
  image: string;
  readTime: number; // in minutes
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Travel Packing Checklist for International Trips',
    slug: 'essential-travel-packing-checklist-international-trips',
    excerpt: 'Never forget important items again with our comprehensive packing checklist designed for international travelers.',
    content: `
# Essential Travel Packing Checklist for International Trips

Traveling internationally can be exciting, but forgetting essential items can turn your dream trip into a nightmare. Here's our comprehensive packing checklist to ensure you're prepared for any adventure.

## Documents & Important Papers
- Valid passport (check expiration date)
- Visa (if required)
- Travel insurance documents
- Flight tickets and hotel confirmations
- Driver's license or international driving permit
- Emergency contact information
- Copies of all important documents (store separately)

## Money & Cards
- Credit/debit cards (inform your bank about travel)
- Local currency and USD
- Travel money card
- Emergency cash hidden separately

## Health & Safety
- Prescription medications (in original containers)
- First aid kit basics
- Hand sanitizer
- Sunscreen
- Insect repellent
- Travel-sized toiletries

## Electronics
- Phone and charger
- Universal power adapter
- Portable power bank
- Camera and accessories
- Headphones

## Clothing Essentials
- Weather-appropriate clothing
- Comfortable walking shoes
- Formal outfit (for special occasions)
- Undergarments and socks
- Pajamas/sleepwear

Remember to check the weather forecast and cultural dress codes for your destination before finalizing your packing list!
    `,
    author: 'Priya Sharma',
    publishedAt: '2024-01-15',
    category: 'travel-tips',
    tags: ['packing', 'international-travel', 'checklist', 'preparation'],
    image: '/images/blog/packing-checklist.jpg',
    readTime: 5,
    featured: true
  },
  {
    id: '2',
    title: 'Best Time to Visit Kerala: A Complete Guide',
    slug: 'best-time-visit-kerala-complete-guide',
    excerpt: 'Discover when to visit Kerala for the perfect balance of weather, crowds, and prices across different regions.',
    content: `
# Best Time to Visit Kerala: A Complete Guide

Kerala, known as God's Own Country, offers different experiences throughout the year. Here's when to visit for the best experience.

## Winter Season (October to March) - Peak Season
**Weather:** Cool and pleasant (15°C to 32°C)
**Best for:** Beach activities, backwater cruises, hill stations
**Pros:** Perfect weather, clear skies, ideal for all activities
**Cons:** Higher prices, more crowds

## Summer Season (April to May) - Off Season  
**Weather:** Hot and humid (25°C to 37°C)
**Best for:** Hill stations like Munnar, indoor activities
**Pros:** Lower prices, fewer crowds, lush greenery
**Cons:** Hot weather in coastal areas

## Monsoon Season (June to September) - Unique Experience
**Weather:** Heavy rainfall, cooler temperatures
**Best for:** Ayurvedic treatments, experiencing monsoon magic
**Pros:** Lowest prices, beautiful landscapes, authentic Ayurveda
**Cons:** Limited outdoor activities, transportation challenges

## Region-Specific Recommendations
- **Backwaters:** October to March
- **Hill Stations:** September to May  
- **Beaches:** November to February
- **Wildlife:** October to April

Plan your Kerala trip based on your interests and budget for the best experience!
    `,
    author: 'Anita Singh',
    publishedAt: '2024-01-10',
    category: 'destinations',
    tags: ['kerala', 'weather', 'planning', 'domestic-travel'],
    image: '/images/blog/kerala-weather.jpg',
    readTime: 7,
    featured: true
  },
  {
    id: '3',
    title: 'Cultural Etiquette: Traveling Respectfully in Southeast Asia',
    slug: 'cultural-etiquette-traveling-respectfully-southeast-asia',
    excerpt: 'Learn important cultural customs and etiquette tips to show respect and avoid offending locals during your Southeast Asia travels.',
    content: `
# Cultural Etiquette: Traveling Respectfully in Southeast Asia

Southeast Asia is rich in diverse cultures and traditions. Understanding local etiquette helps you connect with locals and shows respect for their heritage.

## General Guidelines

### Greetings
- **Thailand:** Wai greeting (palms together, slight bow)
- **Indonesia:** Handshake or slight bow
- **Vietnam:** Handshake or slight nod
- **Singapore:** Handshake is standard

### Religious Sites
- Remove shoes before entering temples
- Dress modestly (cover shoulders and knees)
- Don't point feet toward Buddha statues
- Maintain quiet, respectful behavior

### Dining Etiquette
- Use chopsticks properly (don't stick them upright in rice)
- Wait for elders to start eating
- Try everything offered to you
- Finish your plate to show appreciation

## Country-Specific Tips

### Thailand
- Never touch someone's head
- Don't step on thresholds
- Show respect for the royal family
- Remove shoes when entering homes

### Indonesia
- Use right hand for eating and greeting
- Dress conservatively, especially in rural areas
- Ask permission before photographing people
- Learn basic Bahasa Indonesia phrases

### Vietnam
- Avoid public displays of affection
- Use both hands when receiving business cards
- Don't wear revealing clothing
- Respect Ho Chi Minh's image

Remember: When in doubt, observe locals and follow their lead. A respectful attitude goes a long way!
    `,
    author: 'Rajesh Kumar',
    publishedAt: '2024-01-05',
    category: 'culture',
    tags: ['culture', 'etiquette', 'southeast-asia', 'respect', 'international-travel'],
    image: '/images/blog/cultural-etiquette.jpg',
    readTime: 8,
    featured: false
  },
  {
    id: '4',
    title: 'Budget Travel: How to Explore Europe on ₹1 Lakh',
    slug: 'budget-travel-explore-europe-1-lakh-rupees',
    excerpt: 'Discover practical tips and strategies to experience the best of Europe on a tight budget of just ₹1 lakh.',
    content: `
# Budget Travel: How to Explore Europe on ₹1 Lakh

Think Europe is too expensive? Think again! With smart planning and budget-friendly strategies, you can explore multiple European countries on just ₹1 lakh.

## Budget Breakdown (15 days)
- **Flights:** ₹35,000
- **Accommodation:** ₹25,000 (hostels/budget hotels)
- **Food:** ₹20,000
- **Transportation:** ₹15,000
- **Activities/Sightseeing:** ₹5,000

## Money-Saving Strategies

### Flights
- Book 2-3 months in advance
- Use flight comparison websites
- Consider budget airlines
- Fly mid-week for better deals

### Accommodation
- Stay in hostels (₹1,500-2,500/night)
- Use Couchsurfing for free stays
- Book Airbnb for longer stays
- Consider night trains to save on hotels

### Food
- Shop at local supermarkets
- Cook in hostel kitchens
- Try local street food
- Look for lunch deals at restaurants

### Transportation
- Buy Eurail passes for multiple countries
- Use budget airlines for longer distances
- Walk or cycle in cities
- Use public transport day passes

## Sample 15-Day Itinerary
1. **Days 1-3:** Prague, Czech Republic
2. **Days 4-6:** Vienna, Austria  
3. **Days 7-9:** Budapest, Hungary
4. **Days 10-12:** Krakow, Poland
5. **Days 13-15:** Berlin, Germany

## Pro Tips
- Travel during shoulder season (April-May, September-October)
- Use city tourism cards for discounts
- Download offline maps to avoid roaming charges
- Pack light to avoid baggage fees

With careful planning, Europe on a budget is absolutely achievable!
    `,
    author: 'Priya Sharma',
    publishedAt: '2024-01-01',
    category: 'travel-tips',
    tags: ['budget-travel', 'europe', 'planning', 'backpacking'],
    image: '/images/blog/budget-europe.jpg',
    readTime: 10,
    featured: true
  },
  {
    id: '5',
    title: 'Food Adventures: Must-Try Street Food in Thailand',
    slug: 'food-adventures-must-try-street-food-thailand',
    excerpt: 'Embark on a culinary journey through Thailand\'s vibrant street food scene and discover authentic flavors.',
    content: `
# Food Adventures: Must-Try Street Food in Thailand

Thailand's street food scene is legendary worldwide. From aromatic curries to sweet desserts, here are the must-try dishes that will make your taste buds dance.

## Top Street Food Dishes

### Pad Thai
**Where to find:** Everywhere, but try Thip Samai in Bangkok
**Price:** ₹80-150
**What makes it special:** Perfect balance of sweet, sour, and savory

### Som Tam (Green Papaya Salad)
**Where to find:** Street vendors, especially in Isaan region
**Price:** ₹60-100
**What makes it special:** Fresh, spicy, and incredibly refreshing

### Mango Sticky Rice (Khao Niao Mamuang)
**Where to find:** Dessert stalls, especially during mango season
**Price:** ₹100-200
**What makes it special:** Perfect combination of sweet mango and coconut rice

### Tom Yum Goong
**Where to find:** Any street food stall
**Price:** ₹120-200
**What makes it special:** Iconic hot and sour soup with prawns

### Satay
**Where to find:** Night markets
**Price:** ₹40-80 per stick
**What makes it special:** Perfectly grilled meat with peanut sauce

## Best Places for Street Food

### Bangkok
- **Chatuchak Weekend Market:** Huge variety
- **Chinatown (Yaowarat):** Best for dinner
- **Khao San Road:** Tourist-friendly options

### Chiang Mai
- **Sunday Walking Street:** Local specialties
- **Warorot Market:** Authentic northern Thai food
- **Chang Phueak Gate:** Famous for khao soi

### Phuket
- **Phuket Weekend Market:** Fresh seafood
- **Patong Beach Road:** Beach-side dining
- **Old Town:** Traditional Peranakan cuisine

## Food Safety Tips
1. Choose stalls with high turnover
2. Watch food being cooked fresh
3. Avoid raw vegetables if you have a sensitive stomach
4. Drink bottled or boiled water
5. Start slowly and build up spice tolerance

## Essential Thai Food Phrases
- **"Mai pet"** = Not spicy
- **"Pet nit noi"** = A little spicy
- **"Aroi mak"** = Very delicious
- **"Check bin"** = Check, please

Don't miss the opportunity to explore Thailand's incredible street food culture – it's an adventure for your senses!
    `,
    author: 'Anita Singh',
    publishedAt: '2023-12-28',
    category: 'food',
    tags: ['thailand', 'street-food', 'culinary', 'international-travel'],
    image: '/images/blog/thailand-street-food.jpg',
    readTime: 6,
    featured: false
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogPost['category']) => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit: number = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
