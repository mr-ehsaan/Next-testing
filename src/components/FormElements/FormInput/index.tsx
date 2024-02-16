import { FC } from 'react';
import { Input, InputProps } from '@nextui-org/react';

export const FormInput: FC<InputProps> = (props) => {
  return (
    <Input
      variant='bordered'
      // className='text-k-s'
      classNames={{
        inputWrapper:
          'bg-white border-gray-400 border shadow-3xl shadow-black/4 h-[4.75rem] data-[hover=true]:border-dark data-[focus=true]:border-dark py-3 px-8',
        input: 'bg-transparent !text-[1.1875rem] !text-dark',
        label:
          'group-data-[filled-within=true]:scale-75 !text-k-sm text-gray-900',
      }}
      {...props}
    />
  );
};
