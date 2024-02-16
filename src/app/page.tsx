import Link from 'next/link';
import { AboutUsSection } from '@/containers/HomePage/about-us-section';
import { FaqSection } from '@/containers/HomePage/faq-section';
import { HeroSection } from '@/containers/HomePage/hero-section';
import { PartnersSection } from '@/containers/HomePage/partners-section';
import { ContactUsSection } from '@/containers/HomePage/contact-us-section';
import { TestimonialsSection } from '@/containers/HomePage/testimonials-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='container grid justify-center px-6 lg:grid-cols-12 '>
        <div className='col-span-8 col-start-3'>
          <PartnersSection />
          <AboutUsSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactUsSection />
        </div>
      </div>
    </>
  );
}
