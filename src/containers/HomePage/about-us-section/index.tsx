import Button from '@/components/Button';
import Image from 'next/image';
import { AnimatedBox } from '@/components/AnimatedBox';

export const AboutUsSection = () => {
  return (
    <section>
      <div className='pt-48'>
        <AnimatedBox>
          <h2
            className='text-k-2xl sm:text-k-3xl mb-8 font-source-serif font-semibold leading-tight
              tracking-[-0.04em]'
          >
            Diving into the World of Kirlian Photography and Aura Imaging
          </h2>
        </AnimatedBox>
        <AnimatedBox>
          <p className='text-k-sm'>
            Enter the captivating realm of Kirlian photography, where the
            intersection of science and spirituality unveils the hidden energies
            around us. Kirlian photography, named after its creators, Semyon and
            Valentina Kirlian, is a special technique capturing the electrical
            coronal discharges of objects, often seen as &apos;auras&apos; or
            energy fields. This intriguing method allows us to peek into the
            otherwise invisible, dynamic world enveloping all living entities.
          </p>
        </AnimatedBox>
        <div className='mt-12 grid gap-8 sm:grid-cols-2'>
          <AnimatedBox>
            <Image
              src='/assets/images/1.jpg'
              width={384}
              height={240}
              alt='Leaf aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
          <AnimatedBox delay={0.1}>
            <Image
              src='/assets/images/2.jpg'
              width={384}
              height={240}
              alt='Butterfly aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
        </div>
      </div>

      <div className='pt-48'>
        <AnimatedBox>
          <h2
            className='text-k-2xl sm:text-k-3xl mb-8 font-source-serif font-semibold leading-tight
              tracking-[-0.01em]'
          >
            The Enchantment of Kirlian Photography and Aura Imaging
          </h2>
        </AnimatedBox>{' '}
        <AnimatedBox>
          <p className='text-k-sm'>
            What sets Kirlian photography apart is its link to the mystical
            practice of aura imaging. Kirlian photography provides us with
            snapshots of these subtle energies, but aura cameras go beyond this.
            They provide a fuller, more detailed insight into our energetic
            tapestry. Utilizing advanced biofeedback technology, aura cameras
            read and display the energy radiating from individuals in vivid,
            colorful visuals, indicative of various emotional, physical, and
            spiritual states.
          </p>
        </AnimatedBox>
        <AnimatedBox>
          <Image
            src='/assets/images/slide_1.jpg'
            width={800}
            height={342}
            alt='Leaf aura'
            className='mt-12 rounded-xl'
          />
        </AnimatedBox>
      </div>

      <div className='pt-48'>
        <AnimatedBox>
          <h2
            className='text-k-2xl sm:text-k-3xl mb-8 font-source-serif font-semibold leading-tight
              tracking-[-0.01em]'
          >
            Discovering the Invisible: The Role of Aura Cameras
          </h2>
        </AnimatedBox>
        <AnimatedBox>
          <p className='text-k-sm'>
            Venturing further into Kirlian photography leads us to the
            transformative world of aura imaging. Aura cameras are not mere
            visual tools; they are pathways to self-realization and growth. They
            offer insights into our energetic presence, enabling us to
            comprehend and manage our inner energies for improved well-being and
            spiritual advancement.
          </p>
        </AnimatedBox>
        <div className='mt-12 grid gap-8 sm:grid-cols-2'>
          <AnimatedBox>
            <Image
              src='/assets/images/aura_1.jpg'
              width={384}
              height={215}
              alt='Leaf aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
          <AnimatedBox delay={0.1}>
            <Image
              src='/assets/images/aura_2.jpg'
              width={384}
              height={215}
              alt='Butterfly aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
          <AnimatedBox>
            <Image
              src='/assets/images/aura_3.jpg'
              width={384}
              height={215}
              alt='Butterfly aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
          <AnimatedBox delay={0.1}>
            <Image
              src='/assets/images/aura_4.jpg'
              width={384}
              height={215}
              alt='Butterfly aura'
              className='w-full rounded-xl'
            />
          </AnimatedBox>
        </div>
      </div>

      <div className='pt-48'>
        <AnimatedBox>
          <h2
            className='text-k-2xl sm:text-k-3xl mb-8 font-source-serif font-semibold leading-tight
              tracking-[-0.01em]'
          >
            Begin Your Journey into Aura Exploration
          </h2>
        </AnimatedBox>
        <AnimatedBox>
          <p className='text-k-sm'>
            We invite you to progress from the stunning visuals of Kirlian
            photography to the enlightening path of aura exploration. Learn how
            aura cameras can deepen your understanding of unseen energies,
            opening up new avenues for self-discovery and spiritual growth.
            Explore our selection of aura cameras and start your journey into
            the vivid universe of energy and color.
          </p>
        </AnimatedBox>

        <div className='mt-12 flex gap-6'>
          <AnimatedBox>
            <Button>Get more Info</Button>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Button variant='dark-semi-transparent'>Contact Sales</Button>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
