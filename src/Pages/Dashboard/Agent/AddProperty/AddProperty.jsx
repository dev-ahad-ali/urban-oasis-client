import { Button, Input } from '@material-tailwind/react';
import useAuth from '../../../../Hooks/useAuth';

const AddProperty = () => {
  const { user } = useAuth();

  return (
    <section className='min-h-full'>
      <h2 className='text-3xl'>AddProperty</h2>

      <div className='mt-12 min-h-full'>
        <form className='flex flex-col gap-10'>
          <div>
            <Input
              color='black'
              variant='standard'
              label='Property Title'
              placeholder='Property Title'
            />
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <Input
              color='black'
              variant='standard'
              label='Location'
              placeholder='Location'
            />
            <div className='grid grid-cols-2 gap-2'>
              <Input
                type='number'
                color='black'
                variant='standard'
                label='Minimum Price'
                placeholder='Minimum Price'
              />
              <Input
                type='number'
                color='black'
                variant='standard'
                label='Maximum Price'
                placeholder='Maximum Price'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='dropzone-file'
              className='mx-auto mt-2 flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-8 w-8 text-gray-500 dark:text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
                />
              </svg>

              <h2 className='mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200'>
                Property Image
              </h2>

              <p className='mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400'>
                Upload or darg & drop your file.
              </p>

              <input id='dropzone-file' type='file' className='hidden' />
            </label>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <Input
              defaultValue={user?.displayName}
              label={user?.displayName}
              disabled
            />
            <Input defaultValue={user?.email} label={user?.email} disabled />
          </div>
          <div>
            <Button type='submit' className='mt-6' fullWidth>
              Add Property
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProperty;
