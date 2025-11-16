'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
const NewsletterLazy = dynamic(() => import('@/components/common/Newsletter'), {
  ssr: false,
  loading: () => <div className="py-16 text-center text-neutral-500">Loading…</div>,
});
import { COMPANY_INFO } from '@/lib/constants';
import { formatPhoneForWhatsApp, generateWhatsAppMessage } from '@/lib/utils';
import { sendContactEmail, validateContactForm, type ContactFormData } from '@/lib/emailjs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '1',
    budget: '',
    travelDates: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<string[]>([]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFormErrors([]);

    // Validate form
    const validation = validateContactForm(formData as ContactFormData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const success = await sendContactEmail(formData as ContactFormData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          travelers: '1',
          budget: '',
          travelDates: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage(`Hi! I'm interested in planning a trip. Here are my details:\n\nName: ${formData.name}\nDestination: ${formData.destination}\nTravelers: ${formData.travelers}\nBudget: ${formData.budget}\nDates: ${formData.travelDates}\n\nMessage: ${formData.message}`);
    const whatsappUrl = `https://wa.me/${formatPhoneForWhatsApp(COMPANY_INFO.phone)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image copy 4.png')" }}
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
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-neutral-900"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed text-neutral-900"
            >
              Ready to plan your dream journey? Let's connect and create something amazing together
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                  Plan Your Trip
                </h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and our travel experts will get back to you within 24 hours 
                  with a personalized itinerary and quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="travelers" className="block text-sm font-medium text-neutral-700 mb-2">
                        Number of Travelers
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num.toString()}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-neutral-700 mb-2">
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="e.g., Goa, Dubai, Europe"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                        Budget Range (per person)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k-200k">₹1,00,000 - ₹2,00,000</option>
                        <option value="above-200k">Above ₹2,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., December 2024, Flexible"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Tell us about any special requirements, interests, or questions you have..."
                    />
                  </div>

                  {formErrors.length > 0 && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium mb-2">Please fix the following errors:</p>
                      <ul className="text-red-700 text-sm space-y-1">
                        {formErrors.map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✅ Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">
                        ❌ There was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleWhatsAppClick}
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50 font-bold py-3"
                    >
                      💬 WhatsApp Instead
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-neutral-600 mb-8">
                  We're here to help you plan the perfect trip. Reach out to us through any of the 
                  following channels and our travel experts will assist you.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div variants={fadeInUp}>
                <Card className="p-6 mb-6 border border-neutral-200 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Phone</h3>
                      <p className="text-neutral-600">{COMPANY_INFO.phone}</p>
                      <p className="text-sm text-neutral-500">Available 24/7 for assistance</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">WhatsApp</h3>
                      <p className="text-neutral-600">{COMPANY_INFO.phone}</p>
                      <p className="text-sm text-neutral-500">Quick responses, anytime</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Email</h3>
                      <p className="text-neutral-600">{COMPANY_INFO.email}</p>
                      <p className="text-sm text-neutral-500">Detailed inquiries welcome</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Office Hours</h3>
                      <p className="text-neutral-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-neutral-600">Sunday: 10:00 AM - 6:00 PM</p>
                      <p className="text-sm text-neutral-500">Emergency support: 24/7</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* FAQ Section */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      q: "How quickly will I get a response?",
                      a: "We respond to all inquiries within 24 hours, usually much sooner during business hours."
                    },
                    {
                      q: "Do you charge for consultations?",
                      a: "Initial consultations and trip planning discussions are completely free. No hidden charges."
                    },
                    {
                      q: "Can you help with visa processing?",
                      a: "Yes! We provide complete visa assistance and documentation support for international travel."
                    }
                  ].map((faq, index) => (
                    <details key={index} className="group border border-neutral-200 rounded-xl p-4 bg-white">
                      <summary className="cursor-pointer list-none flex items-center justify-between font-medium text-neutral-900">
                        <span>{faq.q}</span>
                        <span className="transition-transform group-open:rotate-45 text-neutral-500">+</span>
                      </summary>
                      <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <NewsletterLazy />
    </div>
  );
}
