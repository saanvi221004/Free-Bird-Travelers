'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import Card from '@/components/ui/Card';

const Testimonials = () => {
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

  const avatarSrc = '/images/image copy 2.png';

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? 'text-yellow-400' : 'text-neutral-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
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
            What Our Travelers Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our amazing customers have to say about 
            their unforgettable travel experiences with Free Bird Travelers.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants} className="h-full">
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 bg-white border border-neutral-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={avatarSrc}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border border-neutral-200"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-neutral-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="text-neutral-700 italic mt-4 leading-relaxed flex-1">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="text-sm text-primary-600 font-medium">
                    Trip: {testimonial.trip}
                  </p>
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
          className="text-center mt-12"
        >
          <p className="text-neutral-600 text-lg">
            Want to share your experience? 
            <span className="text-primary-600 font-semibold ml-2 cursor-pointer hover:underline">
              Write a review
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
