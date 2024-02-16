import { FC } from 'react';
import { Textarea, TextAreaProps } from '@nextui-org/react';

export const FormTextarea: FC<TextAreaProps> = (props) => {
  return (
    <Textarea
      variant='bordered'
      classNames={{
        inputWrapper:
          'bg-white border-gray-400 border shadow-3xl shadow-black/4 h-[4.75rem] data-[hover=true]:border-dark data-[focus=true]:border-dark py-3 px-8',
        input: 'bg-transparent text-[1.1875rem] !text-dark',
        label:
          'text-[1.1875rem] group-data-[filled=true]:scale-75 text-gray-900',
      }}
      {...props}
    />
  );
};
