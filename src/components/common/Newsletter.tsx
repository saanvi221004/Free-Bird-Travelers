'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { sendQuickInquiry, validateEmail } from '@/lib/emailjs';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Email is required');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send newsletter signup email
      const success = await sendQuickInquiry(
        'Newsletter Subscriber',
        email,
        'New newsletter subscription request'
      );

      if (success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-shadow">
            Stay Updated with Travel Tips
          </h2>
          <p className="text-xl text-white/90 text-shadow">
            Get the latest travel guides, destination insights, and exclusive offers delivered to your inbox
          </p>
          <p className="text-white/90 mb-8 mt-2 text-shadow">
            Join 5,000+ travelers discovering new places every month.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-primary-600 hover:bg-neutral-100 font-bold px-6 py-3 whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-lg max-w-md mx-auto">
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="p-3 bg-green-100 border border-green-300 rounded-lg max-w-md mx-auto">
                <p className="text-green-700 text-sm">
                  ✅ Thank you for subscribing! You'll receive travel tips and updates soon.
                </p>
              </div>
            )}

            {status === 'error' && !errorMessage && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-lg max-w-md mx-auto">
                <p className="text-red-700 text-sm">
                  ❌ Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </form>

          <p className="text-white/70 text-sm mt-4">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
