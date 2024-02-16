'use client';
import { Accordeon } from '@/components/Accordion';
import { faqData } from './data';
import { AnimatedBox } from '@/components/AnimatedBox';

export const FaqSection = () => {
  return (
    <section className='mt-48'>
      <AnimatedBox>
        <h2
          className='text-k-2xl sm:text-k-3xl mb-12 font-source-serif font-semibold leading-tight
            tracking-[-0.04em]'
        >
          Have Questions?
        </h2>
      </AnimatedBox>

      <Accordeon data={faqData} />
    </section>
  );
};
