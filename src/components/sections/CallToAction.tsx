'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { formatPhoneForWhatsApp, generateWhatsAppMessage } from '@/lib/utils';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage("Hi! I'm interested in planning a trip with Free Bird Travelers.");
    const whatsappUrl = `https://wa.me/${formatPhoneForWhatsApp(COMPANY_INFO.phone)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${COMPANY_INFO.phone}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${COMPANY_INFO.email}?subject=Travel Inquiry`, '_self');
  };

  return (
    <section className="py-20 bg-brand-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      {/* Darken overlay to boost contrast for text */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-shadow">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-shadow">
            Let's create your perfect travel experience together. Our expert team is here to make your dream trip a reality.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg w-full sm:w-56 inline-flex justify-center"
            >
              💬 WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCallClick}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4 text-lg w-full sm:w-56 inline-flex justify-center"
            >
              📞 Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleEmailClick}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4 text-lg w-full sm:w-56 inline-flex justify-center"
            >
              ✉️ Email Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-white/80 text-lg"
          >
            <p>📍 Available 24/7 for all your travel needs</p>
            <p>🛡️ 100% personalized service guarantee</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
