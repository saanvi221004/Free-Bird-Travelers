'use client';

import { useEffect } from 'react';

/**
 * FontPreconnect component
 * Adds preconnect links for Google Fonts to improve font loading performance.
 * This component ensures fonts load faster by establishing early connections
 * to Google Fonts servers. It works reliably with static export builds.
 */
export default function FontPreconnect() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Check if preconnect links already exist (avoid duplicates)
    const existingGoogle = document.querySelector('link[href="https://fonts.googleapis.com"]');
    const existingGstatic = document.querySelector('link[href="https://fonts.gstatic.com"]');

    // Add preconnect for fonts.googleapis.com if not exists
    if (!existingGoogle) {
      const link1 = document.createElement('link');
      link1.rel = 'preconnect';
      link1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(link1);
    }

    // Add preconnect for fonts.gstatic.com if not exists
    if (!existingGstatic) {
      const link2 = document.createElement('link');
      link2.rel = 'preconnect';
      link2.href = 'https://fonts.gstatic.com';
      link2.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(link2);
    }
  }, []);

  // This component doesn't render anything
  return null;
}