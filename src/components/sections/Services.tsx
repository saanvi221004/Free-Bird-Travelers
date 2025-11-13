'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services, serviceCategories } from '@/data/services';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
          >
            Our Travel Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            From flight bookings to customized tour packages, we provide comprehensive travel solutions 
            with a personal touch that makes your journey unforgettable.
          </motion.p>
        </div>

        {/* Service Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {serviceCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants} className="w-full sm:w-72">
              <Link href={`/services#${category.id}`}>
                <Card
                  variant="elevated"
                  className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group rounded-xl"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {category.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card variant="elevated" className="h-full group hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-sm text-neutral-600 flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button size="lg" className="px-8 py-4">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
