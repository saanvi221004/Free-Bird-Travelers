'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionDivider from '@/components/common/SectionDivider';

export default function AboutPage() {
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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')` }}
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
              About Free Bird Travelers
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed text-shadow"
            >
              Where Dreams Take Flight - Your Personal Travel Companion Since Day One
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Free Bird Travelers was born from a simple yet powerful belief: that every journey should be 
                  as unique as the traveler embarking on it. Founded by passionate travel enthusiasts, we 
                  started with a dream to make personalized travel accessible to everyone.
                </p>
                <p>
                  Unlike traditional travel agencies that rely on automated bookings and impersonal service, 
                  we believe in the human touch. Every trip we plan is crafted with care, attention to detail, 
                  and a deep understanding of what makes travel truly memorable.
                </p>
                <p>
                  From our humble beginnings, we've grown into a trusted travel partner for hundreds of 
                  families, couples, and solo adventurers. But our mission remains the same: to turn your 
                  travel dreams into reality, one personalized journey at a time.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/image copy 3.png"
                  alt="Our story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider align="left" />

      {/* Our Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              The principles that guide every decision we make and every journey we plan
            </motion.p>
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
                icon: "🎯",
                title: "Personalization",
                description: "Every trip is tailored to your unique preferences, interests, and budget. No two journeys are the same."
              },
              {
                icon: "🤝",
                title: "Trust & Reliability", 
                description: "We build lasting relationships with our clients through honest communication and dependable service."
              },
              {
                icon: "💝",
                title: "Passion for Travel",
                description: "Our team consists of travel enthusiasts who understand the joy and wonder of exploring new places."
              },
              {
                icon: "🛡️",
                title: "Safety First",
                description: "Your safety and security are our top priorities in every destination and every experience we plan."
              },
              {
                icon: "🌟",
                title: "Excellence",
                description: "We strive for perfection in every detail, ensuring your travel experience exceeds expectations."
              },
              {
                icon: "💚",
                title: "Sustainable Travel",
                description: "We promote responsible tourism that respects local cultures and preserves natural environments."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              The passionate professionals behind your perfect travel experiences
            </motion.p>
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
                name: "Priya Sharma",
                role: "Founder & Travel Designer",
                description: "With 10+ years in travel industry, Priya specializes in creating bespoke international experiences.",
                expertise: "International Tours, Luxury Travel"
              },
              {
                name: "Rajesh Kumar", 
                role: "Operations Manager",
                description: "Ensures seamless execution of every trip with his attention to detail and problem-solving skills.",
                expertise: "Logistics, Customer Service"
              },
              {
                name: "Anita Singh",
                role: "Domestic Travel Specialist",
                description: "Expert in India's hidden gems and cultural experiences, making domestic travel extraordinary.",
                expertise: "Domestic Tours, Cultural Experiences"
              }
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-3">
                    {member.description}
                  </p>
                  <p className="text-sm text-neutral-500">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="left" />

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
              Why Choose Free Bird Travelers?
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "No Online Bookings",
                description: "We believe in personal consultation. Every trip starts with understanding your dreams and preferences."
              },
              {
                title: "24/7 Support",
                description: "Our team is available around the clock to assist you before, during, and after your journey."
              },
              {
                title: "Local Expertise",
                description: "We have strong relationships with local guides and vendors worldwide for authentic experiences."
              },
              {
                title: "Flexible Planning",
                description: "Your plans can change, and we adapt. We offer flexibility in itineraries and last-minute adjustments."
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees or surprises. We provide clear, detailed pricing for every aspect of your trip."
              },
              {
                title: "Memory Makers",
                description: "We don't just plan trips; we create experiences that become lifelong memories."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider align="right" />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
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
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 text-neutral-700"
            >
              Let's create your perfect travel experience together
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 font-bold px-8 py-4"
              >
                Contact Us Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
