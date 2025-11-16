'use client';

import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const Destinations = () => {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6"
          >
            Popular Destinations
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover breathtaking destinations around the world. From serene beaches to majestic mountains, 
            we'll help you create unforgettable memories wherever your heart desires to go.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {destinations.slice(0, 6).map((destination, index) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-white/90 text-neutral-800 font-medium shadow-sm">
                      {(index % 3 === 0 && 'Trending') || (index % 3 === 1 && 'Top Rated') || 'New'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-display font-bold text-xl mb-1 text-shadow">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm text-shadow">
                      {destination.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary-600 font-semibold">
                      {destination.priceRange}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center"
        >
          <Button
            size="lg"
            variant="primary"
            className="shadow-md"
            onClick={() => router.push('/destinations')}
          >
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
