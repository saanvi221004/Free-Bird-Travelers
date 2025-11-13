# 🐦 Free Bird Travelers

✈️ **Your Personal Travel Companion - Where Dreams Take Flight**

**Author:** Omni Helix  
**Copyright:** © 2024 Omni Helix. All rights reserved.

A comprehensive travel and tourism website providing personalized travel services with a human touch. No online bookings, just authentic personal service and unforgettable travel experiences.

---

## 🌟 Project Overview

Free Bird Travelers is a travel and tourism service website that connects travelers with personalized, hands-on travel assistance. Unlike automated booking platforms, we focus on providing personal touch and customized travel experiences through direct consultation and service.

### 🎯 Our Philosophy

- **Personal Touch First** - Every service is handled personally, not through automated systems
- **No Online Bookings** - We believe in human interaction and customized service
- **Comprehensive Travel Solutions** - One-stop destination for all travel needs
- **Authentic Experiences** - Curated trips that create lasting memories

### 🏢 Service Categories

#### ✈️ Travel Booking Services

- **Flight Booking** (domestic & international)
- **Train Booking** (IRCTC integration)
- **Bus Booking** (intercity & local)
- **Cab / Car Rentals** (local & outstation)

#### 🌍 Holiday & Tour Packages

- **Domestic Packages** (Goa, Manali, Kerala, Rajasthan, etc.)
- **International Packages** (Dubai, Thailand, Singapore, Maldives, Europe, etc.)
- **Customized Tours** (honeymoon, family, adventure, solo, luxury trips)
- **Weekend Getaways**

#### 💼 Travel Essentials

- **Forex Exchange Assistance**
- **Visa Assistance & Travel Insurance**
- **Hotel & Resort Bookings**
- **Airport Transfers**

#### 🗺️ Special Tours

- **City Tours** (Kolkata, Delhi, Mumbai, etc.)
- **Adventure Tours** (trekking, rafting, camping)
- **Cultural & Heritage Tours**
- **Food Tours**
- **Group / Corporate Travel**

#### 🎒 Add-on Services

- **Travel Consultation** (help planning trips)
- **Travel Blogs & Guides** (on your website for traffic & SEO)
- **Local Experience Bookings** (events, activities, restaurants)
- **24/7 Customer Support**

---

## 🛠️ Tech Stack

### Frontend (Static Website)

- **Framework:** Next.js 15+ with TypeScript (Static Site Generation)
- **Styling:** Tailwind CSS + Custom components
- **UI Library:** Headless UI or Radix UI for accessibility
- **Animation:** Framer Motion for smooth transitions
- **Forms:** Contact forms with EmailJS (no backend required)
- **Build:** Static export for hosting anywhere

### No Backend Required

- **No Database** - All content is static
- **No Authentication** - Public website only
- **No User Accounts** - Contact-based interaction only
- **No Online Bookings** - All services handled personally via contact

### Deployment (Static Hosting)

- **Platform:** Vercel, Netlify, or any static hosting
- **CI/CD:** Automated builds from Git
- **Domain:** Custom domain with SSL
- **Analytics:** Google Analytics (client-side only)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/saket-i3th/Free-Bird-Travelers
   cd Free-Bird-Travelers
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your environment variables:

   ```env
   # Contact Information
   NEXT_PUBLIC_BUSINESS_EMAIL=contact@freebirdtravelers.com
   NEXT_PUBLIC_BUSINESS_PHONE=+91-XXXXXXXXXX
   NEXT_PUBLIC_BUSINESS_WHATSAPP=+91-XXXXXXXXXX

   # EmailJS Configuration (for contact forms)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production (static export)**

   ```bash
   npm run build
   # or
   yarn build
   ```
   
   The build output will be in the `out/` directory, ready for static hosting.

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
Free-Bird-Travelers/
├── src/
│   ├── app/              # Next.js 15 app directory (static export)
│   │   ├── (pages)/      # Page components
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Basic UI components
│   │   ├── forms/        # Contact form components
│   │   ├── sections/     # Page sections
│   │   └── layout/       # Layout components
│   ├── lib/              # Utility functions and configurations
│   │   ├── emailjs.ts    # EmailJS configuration
│   │   ├── utils.ts      # Helper functions
│   │   └── constants.ts   # App constants
│   ├── data/             # Static content data
│   ├── types/            # TypeScript type definitions
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── icons/           # Icon assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

---

## 🎯 Target Audience

### Primary Users

- **Leisure Travelers** - Families, couples, solo travelers
- **Corporate Clients** - Business travel and group bookings
- **Adventure Seekers** - Trekking, camping, outdoor activities
- **Luxury Travelers** - Premium and customized experiences

### Geographic Focus

- **Primary:** Indian domestic travelers
- **Secondary:** International tourists visiting India
- **Tertiary:** Indian travelers going abroad

---

## 📈 Business Objectives

### Short-term Goals (3-6 months)

- Establish online presence and brand identity
- Generate quality leads through website
- Build trust and credibility in travel industry
- Optimize for local SEO and search visibility

### Long-term Goals (6-12 months)

- Become go-to travel service provider in target regions
- Build loyal customer base through exceptional service
- Expand service offerings based on customer feedback
- Develop partnerships with hotels, airlines, and tour operators

---

## 🗺️ Development Roadmap

See [ROADMAP.md](./ROADMAP.md) for detailed development phases and milestones.

For development guidelines and context, see [CURSOR.md](./CURSOR.md).

---

## 📄 License

This project is proprietary software owned by Omni Helix. All rights reserved.

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** In Development 🚧
