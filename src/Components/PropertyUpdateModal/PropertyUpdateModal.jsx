import { Dialog } from '@material-tailwind/react';

const PropertyUpdateModal = ({ updateOpen, setUpdateOpen, id, refetch }) => {
  return (
    <Dialog open={updateOpen}>
      <section className='mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold capitalize text-gray-700 dark:text-white'>
          Account settings
        </h2>

        <form>
          <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='username'
              >
                Username
              </label>
              <input
                id='username'
                type='text'
                className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='emailAddress'
              >
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='password'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='passwordConfirmation'
              >
                Password Confirmation
              </label>
              <input
                id='passwordConfirmation'
                type='password'
                className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
              />
            </div>
          </div>

          <div className='mt-6 flex justify-end'>
            <button className='transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              Save
            </button>
          </div>
        </form>
        <button
          onClick={() => setUpdateOpen(false)}
          className='transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
        >
          Cancel
        </button>
      </section>
    </Dialog>
  );
};

export default PropertyUpdateModal;
