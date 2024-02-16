import React, { FC } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { DividerIcon } from '@/Icons/DividerIcon';
import { PlusIcon } from '@/Icons/PlusIcon';
import { AnimatedBox } from '../AnimatedBox';

export type AccordeonItemType = {
  id: number;
  title: string;
  description: string;
};

interface IAccordeon {
  data: AccordeonItemType[];
}

export const Accordeon: FC<IAccordeon> = ({ data }) => {
  return (
    <Accordion
      className='overflow-hidden rounded-xl border border-gray-400 p-0 shadow-3xl shadow-black/4'
      dividerProps={{ className: 'bg-gray-400 mt-20' }}
      variant='bordered'
    >
      {data?.map((itm) => (
        <AccordionItem
          classNames={{
            trigger: 'p-7 sm:p-9 items-start sm:items-center',
            title: 'text-k-md font-semibold',
            content: 'px-7 pb-9 sm:px-9  pt-0 text-k-sm',
            indicator: 'text-dark mt-2 sm:mt-0',
          }}
          key={itm.id}
          aria-label={itm.title}
          title={<AnimatedBox>{itm.title}</AnimatedBox>}
          indicator={({ isOpen }) => (isOpen ? <DividerIcon /> : <PlusIcon />)}
        >
          {itm.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
