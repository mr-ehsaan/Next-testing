import { FC } from 'react';
import {
  Select,
  SelectItem,
  SelectProps,
  SelectItemProps,
} from '@nextui-org/react';

type DataType = {
  id: number;
  label: string;
  value: string;
};

interface IFormSelect extends Omit<SelectProps, 'children'> {
  data: DataType[];
}

export const FormSelect: FC<IFormSelect> = ({ data, ...rest }) => {
  return (
    <Select
      variant='bordered'
      className='pt-6'
      classNames={{
        trigger:
          'bg-white border-gray-400 border shadow-3xl shadow-black/4 h-[4.75rem] data-[hover=true]:border-dark data-[focus=true]:border-dark py-3 px-8',
        value:
          'bg-transparent !text-[1.1875rem] text-gray-900 group-data-[has-value=true]:text-dark',
        label:
          '!text-k-sm group-data-[filled=true]:scale-75 text-gray-900',
        innerWrapper: 'group-data-[has-label=true]:pt-6',
      }}
      {...rest}
    >
      {data?.map((itm) => (
        <SelectItem
          key={itm.value}
          value={itm.value}
          classNames={{
            base: 'data-[selectable=true]:focus:bg-black/4 data-[hover=true]:bg-black/4',
          }}
        >
          {itm.label}
        </SelectItem>
      ))}
    </Select>
  );
};
