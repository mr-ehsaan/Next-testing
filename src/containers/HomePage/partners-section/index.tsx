import Image from 'next/image';
import { partnerLogoData } from './data';
import { AnimatedBox } from '@/components/AnimatedBox';

export const PartnersSection = () => {
  return (
    <section className='mt-20 flex flex-wrap justify-center gap-6 sm:justify-between'>
      {partnerLogoData.map((itm, i) => (
        <AnimatedBox key={itm.id} delay={i / 10 + 0.1}>
          <Image
            src={itm.url}
            width={itm.width}
            height={itm.height}
            alt={itm.alt}
          />
        </AnimatedBox>
      ))}
    </section>
  );
};
