import { Skeleton } from '@nextui-org/react';

export const ArticleFallback = () => {
  return (
    <div>
      <Skeleton className='mb-6 aspect-video rounded-xl !bg-gray-400' />
      <Skeleton className='mb-4 h-8 w-10/12 rounded-xl !bg-gray-400' />
      <Skeleton className='mb-2 h-3 w-1/2 rounded-xl !bg-gray-400' />
      <Skeleton className='mb-2 h-3 w-2/3 rounded-xl !bg-gray-400' />
      <Skeleton className='h-3 w-2/5 rounded-xl !bg-gray-400' />
    </div>
  );
};
