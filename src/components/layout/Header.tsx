'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import { formatPhoneForCall, formatPhoneForWhatsApp } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Playfair_Display } from 'next/font/google';

const brandFont = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm sticky top-0 z-50">

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">🐦</div>
            <div>
              <h1 className={`${brandFont.className} text-xl md:text-2xl font-bold text-primary-600`}>Free Bird Travelers</h1>
              <p className={`${brandFont.className} text-xs text-neutral-600 hidden sm:block`}>Where Dreams Take Flight</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  pathname === link.href
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={formatPhoneForCall(COMPANY_INFO.phone)}
              className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <Button
              onClick={() => window.location.assign('/contact')}
              variant="primary"
              size="sm"
              className="px-4"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary-600 px-2 py-1 ${
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50 rounded-md'
                      : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Contact Actions */}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <a
                  href={formatPhoneForCall(COMPANY_INFO.phone)}
                  className="flex items-center space-x-2 text-base text-neutral-600 hover:text-primary-600 transition-colors px-2 py-1"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <Button
                  onClick={() => {
                    window.open(formatPhoneForWhatsApp(COMPANY_INFO.whatsapp), '_blank');
                    setIsMenuOpen(false);
                  }}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Contact on WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
