import { FC } from 'react';
import { Checkbox, CheckboxProps } from '@nextui-org/react';

interface IFormCheckbox extends Omit<CheckboxProps, 'children'> {
  label: string;
}

export const FormCheckbox: FC<IFormCheckbox> = ({ label, ...rest }) => {
  return (
    <Checkbox
      variant='bordered'
      size='lg'
      classNames={{
        icon: 'text-white',
        wrapper:
          'after:rounded-[0.25rem] before:rounded-[0.25rem] rounded-[0.25rem] mr-4',
      }}
      {...rest}
    >
      {label}
    </Checkbox>
  );
};
