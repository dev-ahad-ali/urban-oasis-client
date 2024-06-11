import { Dialog } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PropertyUpdateModal = ({ updateOpen, setUpdateOpen, id, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { data: property = {}, refetch: propertyRefetch } = useQuery({
    queryKey: ['propertyDetails', id],
    queryFn: async () => {
      if (id) {
        const res = await axiosSecure.get(`/properties?id=${id}`);
        return res.data;
      }
    },
  });

  console.log(property);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: property.title,
    },
  });
  // propertyRefetch();
  const handleUpdate = (data) => {
    console.log(data);
  };

  if (updateOpen && property) {
    return (
      <Dialog open={updateOpen} size='lg'>
        <>
          <form>
            <input type='text' defaultValue={property.location} />
            <input type='text' {...register('title')} defaultValue={property.title} />
            <input type='submit' value={'submit'} />
          </form>
          <button
            onClick={() => setUpdateOpen(false)}
            className='transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
          >
            Cancel
          </button>
          {/* <section className='mx-auto max-w-5xl rounded-md bg-white p-6 shadow-md dark:bg-gray-800'>
          <h2 className='text-lg font-semibold capitalize text-gray-700 dark:text-white'>
            Update : {property?.title}
          </h2>

          <form onSubmit={handleSubmit(handleUpdate)}>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label
                    className='text-gray-700 dark:text-gray-200'
                    htmlFor='title'
                  >
                    Property Title
                  </label>
                  <input
                    id='title'
                    type='text'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                    {...register('title', {
                      required: {
                        value: true,
                        message: 'Please fill up this field',
                      },
                    })}
                  />
                  {errors.title && (
                    <p className='text-sm font-semibold text-red-500'>
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className='text-gray-700 dark:text-gray-200'
                    htmlFor='location'
                  >
                    Location
                  </label>
                  <input
                    id='location'
                    defaultValue={property.location}
                    type='text'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                    {...register('location', {
                      required: {
                        value: true,
                        message: 'Please fill up this field',
                      },
                    })}
                  />
                  {errors.location && (
                    <p className='text-sm font-semibold text-red-500'>
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label
                    className='text-gray-700 dark:text-gray-200'
                    htmlFor='minPrice'
                  >
                    Minimum Price
                  </label>
                  <input
                    id='minPrice'
                    type='number'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                    {...register('minPrice', {
                      required: {
                        value: true,
                        message: 'Please fill up this field',
                      },
                    })}
                  />
                  {errors.minPrice && (
                    <p className='text-sm font-semibold text-red-500'>
                      {errors.minPrice.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className='text-gray-700 dark:text-gray-200'
                    htmlFor='maxPrice'
                  >
                    Maximum Price
                  </label>
                  <input
                    id='maxPrice'
                    type='number'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                    {...register('maxPrice', {
                      required: {
                        value: true,
                        message: 'Please fill up this field',
                      },
                    })}
                  />
                  {errors.maxPrice && (
                    <p className='text-sm font-semibold text-red-500'>
                      {errors.maxPrice.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-2 items-center gap-4'>
                <div>
                  <p>Current Image</p>
                  <img
                    className='h-[200px] w-full rounded-lg'
                    src={property.image}
                    alt=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='dropzone-file'
                    className='mx-auto flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900'
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

                    <h2 className='-mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200'>
                      Update Property Image
                    </h2>
                    <input
                      id='dropzone-file'
                      type='file'
                      className='block w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 placeholder-gray-400/70 file:rounded-full file:border-none file:bg-gray-200 file:px-4 file:py-1 file:text-sm file:text-gray-700'
                      {...register('image', {
                        required: {
                          value: true,
                          message: 'Must select a image',
                        },
                      })}
                    />
                  </label>
                  {errors.image && (
                    <p className='text-sm font-semibold text-red-500'>
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p>agent Name : {property.agentName}</p>
                <p>agent email: {property.agentEmail}</p>
              </div>
            </div>

            <div className='mt-6 flex justify-end'>
              <button
                type='submit'
                className='transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
              >
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
        </section> */}
        </>
      </Dialog>
    );
  }
};

export default PropertyUpdateModal;
