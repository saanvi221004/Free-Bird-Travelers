'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';
import { destinations, getDomesticDestinations, getInternationalDestinations } from '@/data/destinations';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DestinationsPage() {
  const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const searchParams = useSearchParams();
  const whereQuery = (searchParams.get('where') || '').trim();
  const normalizedWhere = whereQuery.toLowerCase();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getFilteredDestinations = () => {
    switch (filter) {
      case 'domestic':
        return getDomesticDestinations();
      case 'international':
        return getInternationalDestinations();
      default:
        return destinations;
    }
  };

  const filteredDestinations = useMemo(() => {
    const base = getFilteredDestinations();
    if (!normalizedWhere) return base;
    return base.filter((d) => {
      const hay = `${d.name} ${d.location} ${d.description}`.toLowerCase();
      return hay.includes(normalizedWhere);
    });
  }, [filter, normalizedWhere]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={false}
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-shadow"
            >
              Explore Destinations
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed text-shadow"
            >
              Discover amazing places around the world, from local treasures to international wonders
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Filter Tabs */}
      <section className="py-8 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 bg-neutral-100 rounded-full p-1.5">
              {[
                { key: 'all', label: 'All Destinations' },
                { key: 'domestic', label: 'Domestic' },
                { key: 'international', label: 'International' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as typeof filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    filter === tab.key
                      ? 'bg-primary-600 text-white border-primary-600 shadow'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-neutral-600">
              {normalizedWhere
                ? `Showing ${filteredDestinations.length} result${filteredDestinations.length !== 1 ? 's' : ''} for "${whereQuery}"`
                : `Showing ${filteredDestinations.length} destinations${filter !== 'all' ? ` in ${filter} category` : ''}`}
            </p>
          </div>

          <motion.div
            key={filter} // Key to trigger animation on filter change
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div key={destination.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-neutral-200 bg-white h-full rounded-xl flex flex-col">
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        destination.type === 'domestic' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {destination.type === 'domestic' ? '🇮🇳 Domestic' : '🌍 International'}
                      </span>
                    </div>
                    {/* Price badge removed from image; shown in content */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-display font-bold text-xl mb-1 text-shadow">
                        {destination.name}
                      </h3>
                      <p className="text-white/90 text-sm text-shadow">
                        {destination.location}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Price at top */}
                    <div className="text-primary-600 font-bold text-lg">
                      {destination.priceRange}
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 3).map((highlight, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                        {destination.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
                            +{destination.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Duration:</span>
                        <span className="text-neutral-900 font-medium">{destination.duration}</span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-neutral-600">Best Time:</span>
                        <span className="text-neutral-900 font-medium whitespace-pre-line text-right">{destination.bestTime}</span>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-auto pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <p className="text-neutral-600 text-lg">
                {normalizedWhere
                  ? `No destinations found for "${whereQuery}".`
                  : 'No destinations found for the selected filter.'}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Travel Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6"
            >
              Travel Tips & Insights
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              Expert advice to make your travels smoother and more enjoyable
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Best Time to Visit",
                content: "Each destination has its peak season. We help you choose the perfect time based on weather, crowds, and activities.",
                icon: "🗓️"
              },
              {
                title: "Local Culture",
                content: "Understand local customs, etiquette, and traditions to have a more authentic and respectful travel experience.",
                icon: "🏛️"
              },
              {
                title: "Packing Essentials",
                content: "Get personalized packing lists based on your destination, activities, and travel duration.",
                icon: "🎒"
              }
            ].map((tip, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {tip.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="left" />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-900"
            >
              Can't Find Your Dream Destination?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 text-neutral-800"
            >
              We create custom itineraries for any destination worldwide. Let us know where you want to go!
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 font-bold px-8 py-4"
              >
                Plan Custom Trip
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
