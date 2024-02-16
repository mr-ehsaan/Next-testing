'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppLogoIcon } from '@/Icons/AppLogo';
import { MenuButton } from './MenuButton';
import { HeaderNav } from './HeaderNav';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const q = useSearchParams();

  useEffect(() => {
    // close menu when URL changed
    setIsOpen(false);
  }, [pathname, q]);

  const textColor =
    pathname === '/' || isOpen || isScrolled ? 'text-white' : 'text-dark';

  const headerContainnerClasses = isScrolled ? 'py-4 bg-dark' : 'py-9';

  return (
    <header className={`sticky left-0 top-0 z-20 ${textColor}`}>
      <div
        className={`${headerContainnerClasses} absolute left-0 top-0 z-10 w-full transition-all`}
      >
        <div className='container relative flex items-center justify-between px-6'>
          <Link href='/' className='z-10 flex items-center font-roboto'>
            <AppLogoIcon className='mr-3 h-8 w-8' />
            <span className='text-2xl font-medium leading-7'>Kirlian </span>
            &nbsp;
            <span className='text-2xl font-light leading-7'>Cameras</span>
          </Link>

          <div className='hidden gap-12 md:flex'>
            <HeaderNav />
          </div>

          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className='h-11 w-11 md:hidden'
          >
            <MenuButton
              onClickHandler={() => setIsOpen((prevState) => !prevState)}
            />
            {isOpen && <HeaderMobileMenu />}
          </motion.nav>
        </div>
      </div>
    </header>
  );
};
