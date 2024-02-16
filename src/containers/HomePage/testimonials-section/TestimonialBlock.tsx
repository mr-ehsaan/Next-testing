import Image from 'next/image';
import { FC } from 'react';

export interface ITestimonialBlock {
  id: number;
  text: string;
  author: string;
}

export const TestimonialBlock: FC<ITestimonialBlock> = ({ text, author }) => {
  return (
    <blockquote className='bg-white p-10 shadow-border-type shadow-gray-400'>
      <Image
        src='/assets/images/blockquote_icon.svg'
        width={34}
        height={28}
        alt='blockquote icon'
      />
      <p className='text-k-sm mb-8 mt-8 leading-tight'>{text}</p>
      <p className='text-k-xs font-source-sans font-bold uppercase leading-tight tracking-widest'>
        {author}
      </p>
    </blockquote>
  );
};
