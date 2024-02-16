import { AnimatedBox } from '@/components/AnimatedBox';
import { TestimonialBlock } from './TestimonialBlock';
import { testimonialData } from './data';

export const TestimonialsSection = () => {
  return (
    <section className='mt-48'>
      <AnimatedBox>
        <h2
          className='text-k-2xl sm:text-k-3xl mb-12 font-source-serif font-semibold leading-tight
            tracking-[-0.04em]'
        >
          What People Say About Us
        </h2>
      </AnimatedBox>

      <div
        className='grid overflow-hidden rounded-xl border border-gray-400 shadow-3xl shadow-black/4
          md:grid-cols-2'
      >
        {testimonialData.map((itm, i) => (
          <AnimatedBox key={itm.id} delay={i % 2 ? 0.2 : 0.1}>
            <TestimonialBlock {...itm} />
          </AnimatedBox>
        ))}
      </div>
    </section>
  );
};
