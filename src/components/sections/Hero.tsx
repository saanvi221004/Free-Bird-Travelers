'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { formatPhoneForWhatsApp, generateWhatsAppMessage } from '@/lib/utils';
import { Playfair_Display, Great_Vibes } from 'next/font/google';

const brandFont = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] });
const cursiveTitle = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Hero() {
  const handleGetStarted = () => {
    const message = generateWhatsAppMessage();
    window.open(formatPhoneForWhatsApp(COMPANY_INFO.whatsapp) + `&text=${encodeURIComponent(message)}`, '_blank');
  };

  const [where, setWhere] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [travelers, setTravelers] = useState<number>(2);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!datePickerRef.current) return;
      if (!datePickerRef.current.contains(e.target as Node)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const formattedDates = startDate && endDate ? `${startDate} to ${endDate}` : '';

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1920&q=80')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 hero-gradient" />

      {/* Decorative navigator arrows */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <svg aria-hidden="true" className="hidden md:block absolute -left-6 top-24 w-20 h-20 text-white/30" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 L90 50 M70 30 L90 50 L70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg aria-hidden="true" className="hidden md:block absolute -right-6 bottom-24 w-20 h-20 rotate-180 text-white/30" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 L90 50 M70 30 L90 50 L70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`${cursiveTitle.className} text-4xl md:text-6xl lg:text-7xl mb-6 text-shadow`}>
            Free Bird Travelers
          </h1>
          <p className={`${brandFont.className} text-xl md:text-2xl lg:text-3xl font-light mb-4 text-shadow`}>
            {COMPANY_INFO.tagline}
          </p>
          <p className={`${brandFont.className} text-lg md:text-xl mb-8 max-w-3xl mx-auto text-shadow opacity-90`}>
            Experience the world with our personalized travel services. No online bookings,
            just authentic personal service and unforgettable travel experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => window.location.assign('/destinations')}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
          >
            Explore Destinations
          </Button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            const params = new URLSearchParams();
            if (where.trim()) params.set('where', where.trim());
            if (startDate) params.set('start', startDate);
            if (endDate) params.set('end', endDate);
            params.set('travelers', String(travelers));
            window.location.assign(`/destinations?${params.toString()}`);
          }}
          className="mt-8 max-w-5xl mx-auto px-2"
        >
          <div className="flex items-center bg-white/95 backdrop-blur shadow-xl rounded-full border border-white/60 overflow-visible relative z-40 min-h-[64px]">
            {/* Where */}
            <label htmlFor="hero-where" className="sr-only">Where</label>
            <div className="flex-1 px-5 py-3 sm:py-4 hover:bg-neutral-50 transition-colors rounded-full text-center">
              <div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold">Where</div>
              <input
                id="hero-where"
                type="text"
                placeholder="Search destinations"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                className="w-full bg-transparent outline-none text-neutral-900 placeholder-neutral-400 text-sm text-center"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-10 w-px bg-neutral-200" />

            {/* Dates */}
            <label htmlFor="hero-dates" className="sr-only">Dates</label>
            <div className="relative flex-1 px-5 py-3 sm:py-4 hover:bg-neutral-50 transition-colors rounded-full text-center" ref={datePickerRef}>
              <div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold">Dates</div>
              <button
                type="button"
                onClick={() => setShowDatePicker((v) => !v)}
                className="w-full text-center bg-transparent outline-none text-neutral-900 placeholder-neutral-400 text-sm"
              >
                {formattedDates || 'Add dates'}
              </button>
              <input id="hero-dates" type="hidden" value={formattedDates} readOnly />

              {showDatePicker && (
                <div className="absolute left-0 mt-3 w-[min(90vw,520px)] bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">Start date</div>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">End date</div>
                      <input
                        type="date"
                        value={endDate}
                        min={startDate || undefined}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button type="button" className="text-sm text-neutral-500 hover:text-neutral-700" onClick={() => { setStartDate(''); setEndDate(''); }}>
                      Clear
                    </button>
                    <Button type="button" className="px-5 py-2" onClick={() => setShowDatePicker(false)}>
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-10 w-px bg-neutral-200" />

            {/* Travelers */}
            <label htmlFor="hero-travelers" className="sr-only">Travelers</label>
            <div className="flex-1 px-5 py-3 sm:py-4 hover:bg-neutral-50 transition-colors text-center">
              <div className="text-[11px] uppercase tracking-wide text-neutral-500 font-semibold">Travelers</div>
              <input
                id="hero-travelers"
                type="number"
                min={1}
                max={10}
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                className="w-full bg-transparent outline-none text-neutral-900 placeholder-neutral-400 text-sm text-center"
              />
            </div>

            {/* Search button */}
            <div className="pr-2 pl-1">
              <Button type="submit" className="rounded-full px-4 py-3 bg-primary-600 hover:bg-primary-700">
                <span className="sr-only">Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.243 12.003l3.627 3.627a.75.75 0 101.06-1.06l-3.627-3.627A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
        </motion.form>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">✈️</div>
            <h3 className="text-lg font-semibold mb-2">Personal Touch</h3>
            <p className="text-sm opacity-90">Every service handled personally with care and attention</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Global Destinations</h3>
            <p className="text-sm opacity-90">Domestic and international travel experiences</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Customized Tours</h3>
            <p className="text-sm opacity-90">Tailored itineraries to match your preferences</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
