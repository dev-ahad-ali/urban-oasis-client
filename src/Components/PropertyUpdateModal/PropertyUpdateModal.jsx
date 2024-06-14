import { Button, Dialog } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PropertyUpdateModal = ({ updateOpen, setUpdateOpen, id, refetch }) => {
  const { property, propertyRefetch } = usePropertyData(id);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const image = { image: form.imageFile.files[0] };
    let imageLink = '';

    if (image.image) {
      const res = await axiosPublic.post(image_hosting_api, image, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      if (res.data.success) {
        const link = res.data.data.display_url;
        imageLink = link;
      }
    }

    const update = {
      title: title,
      location: location,
      minPrice: minPrice,
      maxPrice: maxPrice,
      image: imageLink ? imageLink : property.image,
    };

    const updateRes = await axiosSecure.patch(`/property/${id}`, update);
    if (updateRes.data.modifiedCount > 0) {
      toast.success('Update successful');
      refetch();
      propertyRefetch();
      setUpdateOpen(false);
    }
  };

  return (
    <Dialog open={updateOpen} size='lg' className='p-4'>
      <div className='relative'>
        <h2 className='mb-4 text-2xl'>Update: {property.title}</h2>
      </div>
      <form onSubmit={handleUpdate} className='flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p>Property Title</p>
            <input
              type='text'
              name='title'
              className='text-black-700 mt-2 block w-full rounded-md border border-black bg-white px-4 py-2'
              defaultValue={property.title}
            />
          </div>
          <div>
            <p>Property Location</p>
            <input
              type='text'
              name='location'
              className='text-black-700 mt-2 block w-full rounded-md border border-black bg-white px-4 py-2'
              defaultValue={property.location}
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p>Minimum Price</p>
            <input
              type='number'
              name='minPrice'
              className='text-black-700 mt-2 block w-full rounded-md border border-black bg-white px-4 py-2'
              defaultValue={property.minPrice}
            />
          </div>
          <div>
            <p>Maximum Price</p>
            <input
              type='number'
              name='maxPrice'
              className='text-black-700 mt-2 block w-full rounded-md border border-black bg-white px-4 py-2'
              defaultValue={property.maxPrice}
            />
          </div>
        </div>
        <div>
          <p>Upload New Image</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <img src={property.image} className='h-[140px] w-[300px] rounded-md' />
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
              name='imageFile'
              className='block w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 placeholder-gray-400/70 file:rounded-full file:border-none file:bg-gray-200 file:px-4 file:py-1 file:text-sm file:text-gray-700'
            />
          </label>
        </div>
        <input
          type='submit'
          value='Update'
          className='w-full transform cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
        />
      </form>
      <div className='mt-4 flex justify-end'>
        <Button color='red' size='sm' className='rounded-full' onClick={() => setUpdateOpen(false)}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default PropertyUpdateModal;
