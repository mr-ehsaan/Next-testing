import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';

export const HeaderNav = () => (
  <>
    <AnimatedBox>
      <Link
        href='/articles'
        className='k-xs font-bold uppercase leading-7 tracking-wider hover:opacity-90'
      >
        Read Our Blog
      </Link>
    </AnimatedBox>
    <AnimatedBox delay={0.1}>
      <Link
        href='/#get-more-info'
        className='k-xs font-bold uppercase leading-7 tracking-wider hover:opacity-90'
      >
        Get more Info
      </Link>
    </AnimatedBox>
  </>
);
