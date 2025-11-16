import Link from 'next/link';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '@/lib/constants';
import { formatPhoneForCall, formatPhoneForWhatsApp, formatEmail } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🐦</div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary-400">
                  Free Bird Travelers
                </h3>
                <p className="text-sm text-neutral-400">Where Dreams Take Flight</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-lg">
                    {platform === 'facebook' && '📘'}
                    {platform === 'instagram' && '📷'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'youtube' && '📺'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={category.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {category.icon} {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-neutral-400 mb-1">Address:</p>
                <p className="text-neutral-300 text-sm">
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                  {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-neutral-400 mb-1">Phone:</p>
                <a
                  href={formatPhoneForCall(COMPANY_INFO.phone)}
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-neutral-400 mb-1">Email:</p>
                <a
                  href={formatEmail(COMPANY_INFO.email)}
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-neutral-400 mb-1">WhatsApp:</p>
                <a
                  href={formatPhoneForWhatsApp(COMPANY_INFO.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {COMPANY_INFO.whatsapp}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-neutral-400 mb-1">Business Hours:</p>
                <p className="text-neutral-300 text-sm">{COMPANY_INFO.businessHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved. Powered by{' '}
            <span className="text-primary-400">Omni Helix</span>.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
