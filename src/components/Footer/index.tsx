export const Footer = () => {
  return (
    <footer className='mt-auto flex justify-center gap-3 bg-alabaster py-8'>
      <a
        href='#'
        target='_blank'
        className='cursor-pointer text-xl text-gray-600 hover:text-gray-900'
      >
        Terms & Service
      </a>
      <span className='text-xl text-gray-600'>·</span>
      <a
        href='#'
        target='_blank'
        className='cursor-pointer text-xl text-gray-600 hover:text-gray-900'
      >
        Privacy Policy
      </a>
    </footer>
  );
};
