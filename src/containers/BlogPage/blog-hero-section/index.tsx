import { AnimatedBox } from '@/components/AnimatedBox';

export const BlogHeroSection = () => (
  <section className='text-center'>
    <AnimatedBox>
      <h1
        className='sm:text-k-4xl mb-6 font-source-serif text-4xl leading-tight tracking-tighter
          sm:font-semibold'
      >
        Read Our Blog
      </h1>
    </AnimatedBox>

    <AnimatedBox delay={0.1}>
      <p className='text-xl text-gray-600'>
        Discover how Kirlian Cameras lay the foundation for advanced aura
        imaging.
      </p>
    </AnimatedBox>
  </section>
);
