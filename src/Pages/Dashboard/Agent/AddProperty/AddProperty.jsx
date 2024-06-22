import { Button, Input, Textarea } from '@material-tailwind/react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProperty = async (data) => {
    const imageFile = { image: data.image[0] };

    const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    if (imageRes.data.success) {
      const property = {
        title: data.title,
        location: data.location,
        description: data.description,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        agentEmail: user?.email || user?.providerData[0]?.email,
        agentName: user?.displayName,
        agentImage: user?.photoURL,
        image: imageRes.data.data.display_url,
        status: 'pending',
        propertyBought: 'pending',
        advertise: 'pending',
      };

      const propertyRes = await axiosSecure.post('/properties', property);

      if (propertyRes.data.insertedId) {
        toast.success('Property Added successfully');
        reset();
      }
    }
  };

  return (
    <section className='min-h-full'>
      <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>AddProperty</h2>

      <div className='mt-12 min-h-full'>
        <form onSubmit={handleSubmit(handleAddProperty)} className='flex flex-col gap-10'>
          <div>
            <Input
              color='black'
              variant='standard'
              label='Property Title'
              placeholder='Property Title'
              {...register('title', {
                required: {
                  value: true,
                  message: 'Please fill up this field',
                },
              })}
            />
            {errors.title && (
              <p className='text-sm font-semibold text-red-500'>{errors.title.message}</p>
            )}
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <Input
                color='black'
                variant='standard'
                label='Location'
                placeholder='Location'
                {...register('location', {
                  required: {
                    value: true,
                    message: 'Please fill up this field',
                  },
                })}
              />
              {errors.location && (
                <p className='text-sm font-semibold text-red-500'>{errors.location.message}</p>
              )}
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <Input
                  type='number'
                  color='black'
                  variant='standard'
                  label='Minimum Price'
                  placeholder='Minimum Price'
                  {...register('minPrice', {
                    required: {
                      value: true,
                      message: 'Please fill up this field',
                    },
                  })}
                />
                {errors.minPrice && (
                  <p className='text-sm font-semibold text-red-500'>{errors.minPrice.message}</p>
                )}
              </div>
              <div>
                <Input
                  type='number'
                  color='black'
                  variant='standard'
                  label='Maximum Price'
                  placeholder='Maximum Price'
                  {...register('maxPrice', {
                    required: {
                      value: true,
                      message: 'Please fill up this field',
                    },
                  })}
                />
                {errors.maxPrice && (
                  <p className='text-sm font-semibold text-red-500'>{errors.maxPrice.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <Textarea
                label='Property Description'
                className='h-[142px] w-full'
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Please fill up this field',
                  },
                })}
              />
              {errors.description && (
                <p className='text-sm font-semibold text-red-500'>{errors.description.message}</p>
              )}
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
                  Property Image
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
                <p className='text-sm font-semibold text-red-500'>{errors.image.message}</p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <Input defaultValue={user?.displayName} label={user?.displayName} disabled />
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
