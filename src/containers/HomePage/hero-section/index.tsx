import { AnimatedBox } from '@/components/AnimatedBox';
import Button from '@/components/Button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className=' bg-dark pt-48 lg:pt-0'>
      <div
        className='container grid items-center justify-center px-6 text-center lg:grid-cols-12
          lg:text-left'
      >
        <div className='lg:col-span-5'>
          <AnimatedBox>
            <h1
              className='sm:text-k-4xl mb-6 font-source-serif text-4xl leading-tight tracking-tighter
                text-white'
            >
              Discover the Realm of Kirlian Photography
            </h1>
          </AnimatedBox>

          <AnimatedBox delay={0.1}>
            <p className='mb-10 text-xl text-gray-900'>
              Uncover the role of Kirlian Cameras in pioneering sophisticated
              aura imaging techniques.
            </p>
          </AnimatedBox>

          <AnimatedBox delay={0.2}>
            <div className='grid gap-6 sm:flex sm:justify-center lg:justify-normal'>
              <Button>Get more Info</Button>
              <Button variant='light-semi-transparent'>Contact Sales</Button>
            </div>
          </AnimatedBox>
        </div>

        <Image
          className='mx-auto mt-16 lg:col-span-7 lg:mt-0'
          src='/assets/images/aura.png'
          alt='Human aura photo'
          width={700}
          height={700}
        />
      </div>
    </section>
  );
};
