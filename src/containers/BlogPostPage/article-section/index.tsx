import { AnimatedBox } from '@/components/AnimatedBox';
import Image from 'next/image';

export const ArticleSection = () => {
  return (
    <article>
      <div className='grid justify-center lg:grid-cols-12'>
        <div className='col-span-8 col-start-3'>
          <AnimatedBox>
            <h1 className='sm:text-k-4xl mb-12 font-source-serif text-4xl leading-tight tracking-tighter'>
              Unlocking the Mysteries of Kirlian Photography
            </h1>
          </AnimatedBox>

          <AnimatedBox delay={0.1}>
            <p className='text-xl text-gray-600'>
              Discover the fascinating world of Kirlian photography, an
              intriguing technique capturing the energy fields of living
              organisms. Dive into its history, underlying principles, and why
              it continues to captivate.
            </p>
          </AnimatedBox>
        </div>

        <AnimatedBox delay={0.2} className='col-span-12'>
          <div className='relative my-28 aspect-video overflow-hidden rounded-xl '>
            <Image
              src='/assets/images/blog_mock_image.jpg'
              fill
              alt='blog cover image'
            />
          </div>
        </AnimatedBox>

        <AnimatedBox className='col-span-8 col-start-3' delay={0.3}>
          <h2
            className='text-k-2xl mb-8 font-source-serif font-semibold leading-tight tracking-[-0.04em]
              sm:text-k-3xl'
          >
            The Science Behind the Phenomenon
          </h2>

          <p className='text-k-sm'>
            At its core, Kirlian photography is a process that visually captures
            electrical coronal discharges. It is achieved by placing an object
            on a photographic plate connected to a high-voltage source. This
            setup creates an image that appears to show an aura-like glow around
            the object. Originally, these images were thought to depict the life
            force or aura of living beings, sparking significant interest in
            various fields, from metaphysics to alternative medicine.
          </p>
        </AnimatedBox>
      </div>
    </article>
  );
};
