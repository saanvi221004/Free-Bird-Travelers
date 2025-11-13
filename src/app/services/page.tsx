'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import SectionDivider from '@/components/common/SectionDivider';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1920&q=80')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-shadow"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed text-shadow"
            >
              Comprehensive travel solutions tailored to make your journey extraordinary
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Services Grid */}
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
              What We Offer
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              From planning to execution, we handle every aspect of your travel journey with 
              personalized care and professional expertise.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 group bg-white border border-neutral-200 rounded-xl">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary-600/90 rounded-lg flex items-center justify-center text-white text-xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-100 text-center">
                    <a href="/contact" className="inline-flex items-center text-primary-600 font-medium hover:underline">
                      Learn More
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="left" />

      {/* Process Section */}
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
              How We Work
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our proven process ensures your travel experience is seamless from start to finish
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We start with understanding your travel dreams, preferences, budget, and requirements.",
                icon: "💬"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Our experts craft a personalized itinerary with accommodations, activities, and logistics.",
                icon: "📋"
              },
              {
                step: "03",
                title: "Booking",
                description: "We handle all bookings and reservations, ensuring everything is confirmed and ready.",
                icon: "✅"
              },
              {
                step: "04",
                title: "Support",
                description: "24/7 assistance during your trip to ensure everything goes smoothly and you have support.",
                icon: "🛡️"
              }
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Why Choose Us Section */}
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
              Why Choose Our Services?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "No Hidden Costs",
                description: "Transparent pricing with detailed breakdowns. What you see is what you pay.",
                icon: "💰"
              },
              {
                title: "Personal Touch",
                description: "Every interaction is human-to-human. No bots, no automated responses.",
                icon: "🤝"
              },
              {
                title: "Local Expertise",
                description: "Our network of local guides and partners ensures authentic experiences.",
                icon: "🗺️"
              },
              {
                title: "Flexible Cancellation",
                description: "Life happens. We offer flexible cancellation policies for peace of mind.",
                icon: "🔄"
              },
              {
                title: "24/7 Emergency Support",
                description: "Round-the-clock assistance for any emergency or urgent requirements.",
                icon: "🚨"
              },
              {
                title: "Customization",
                description: "Every trip is unique. We customize everything based on your preferences.",
                icon: "⚙️"
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-display font-bold text-neutral-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="left" />

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-shadow"
            >
              Ready to Plan Your Next Adventure?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 text-shadow"
            >
              Let our travel experts create a personalized experience just for you
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 font-bold px-8 py-4"
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4"
              >
                View Our Packages
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
