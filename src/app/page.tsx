import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Destinations from '@/components/sections/Destinations';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import SectionDivider from '@/components/common/SectionDivider';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      <Hero />
      <SectionDivider align="right" />
      <Services />
      <SectionDivider align="left" />
      <Destinations />
      <SectionDivider align="right" />
      <Testimonials />
      <SectionDivider align="left" />
      <CallToAction />
    </>
  );
}