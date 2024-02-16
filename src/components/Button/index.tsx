import { FC, ReactNode } from 'react';
import { Button as NButton, ButtonProps } from '@nextui-org/react';

type ButtonVariant =
  | 'light-semi-transparent'
  | 'dark-semi-transparent'
  | 'dark';

interface IButton {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonVariantClasses = {
  [k in ButtonVariant]: string;
};

export const Button: FC<IButton> = ({
  variant = 'dark',
  className = '',
  children,
}) => {
  const buttonVariantClasses: ButtonVariantClasses = {
    'light-semi-transparent':
      'bg-white/4 text-white hover:bg-white/6 active:bg-white/8',
    'dark-semi-transparent':
      'bg-black/4 text-black hover:bg-black/6 active:bg-black/8',
    dark: 'bg-fuchsia text-white hover:bg-purple active:bg-blue',
  };

  return (
    <NButton
      className={`!text-k-xs pointer-events-auto h-auto min-w-40 cursor-pointer select-none
      rounded-xl px-4 py-3 text-center font-semibold uppercase leading-7
      tracking-wider ${buttonVariantClasses[variant]} ${className}`}
    >
      {children}
    </NButton>
  );
};

export default Button;
