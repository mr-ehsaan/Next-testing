'use client';

import React from 'react';
import { Pagination as NPagination, Spinner } from '@nextui-org/react';

interface IPagination {
  className?: string;
  initialPage?: number;
  total: number;
  isLoading?: boolean;
  onPageChange: (p: number) => void;
}

export const Pagination = ({
  className,
  initialPage = 1,
  total = 0,
  isLoading,
  onPageChange,
}: IPagination) => {
  const handleChange = (page: number) => {
    onPageChange(page);
  };

  const isNextButtonDisabled = initialPage >= total || isLoading;
  const isPrevButtonDisabled = initialPage <= 1 || isLoading;

  return (
    <div className={`flex justify-center gap-5 ${className}`}>
      {isLoading && (
        <Spinner className='absolute left-1/2 z-30 translate-x--1/2' />
      )}
      <div
        className={`relative flex flex-col gap-3 ${isLoading ? 'grayscale' : ''}`}
      >
        <NPagination
          total={total}
          color='secondary'
          page={initialPage}
          onChange={handleChange}
          isDisabled={isLoading}
          classNames={{
            item: 'bg-transparent rounded-full hover:bg-gray-400 shadow-none',
            cursor: 'rounded-full bg-dark',
          }}
        />

        <div className='flex justify-between sm:absolute sm:left-0 sm:right-0'>
          <button
            className={`order-2 h-9 k-xs font-bold uppercase tracking-wider transition-opacity
            hover:opacity-60 sm:absolute sm:right-full sm:mr-8 ${
              isPrevButtonDisabled ? 'text-gray-900' : 'text-dark'
            }`}
            onClick={() => handleChange(initialPage - 1)}
            disabled={isPrevButtonDisabled}
          >
            Previous
          </button>

          <button
            className={`order-3 h-9 k-xs font-bold uppercase tracking-wider transition-opacity
            hover:opacity-60 sm:absolute sm:left-full sm:ml-8 ${
              isNextButtonDisabled ? 'text-gray-900' : 'text-dark'
            }`}
            onClick={() => handleChange(initialPage + 1)}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
