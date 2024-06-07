import { Spinner } from '@material-tailwind/react';

const LoadingSpinner = () => {
  return (
    <div className='grid min-h-screen w-full place-items-center bg-offWhite'>
      <Spinner className='h-16 w-16 text-gray-900/50' />
    </div>
  );
};

export default LoadingSpinner;
