import { Button } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';
import usePropertyData from '../../Hooks/usePropertyData';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MakeOffer = () => {
  const { state } = useLocation();
  const { propertyId, userName, userEmail } = state;
  const { property } = usePropertyData(propertyId);
  const { title, location, minPrice, maxPrice, agentName, agentEmail } = property;
  const date = new Date().toDateString();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOffer = async (data) => {
    const offer = {
      propertyId: propertyId,
      offerAmount: data.offerAmount,
      offerDate: date,
      status: 'pending',
      buyerName: userName,
      buyerEmail: userEmail,
      agentEmail: agentEmail,
    };

    const offerRes = await axiosSecure.post('/offers', offer);
    if (offerRes.data.insertedId) {
      toast.success('Offer send successfully');
      reset();
    }
  };

  return (
    <div>
      <h2 className='text-2xl'>Make and Offer</h2>
      <div>
        <form onSubmit={handleSubmit(handleOffer)}>
          <div>
            <label htmlFor='email' className='block text-sm dark:text-gray-300'>
              Property Tile
            </label>
            <input
              type='text'
              defaultValue={title}
              disabled={true}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm dark:text-gray-300'>
              Property Location
            </label>
            <input
              type='text'
              disabled={true}
              defaultValue={location}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm dark:text-gray-300'>
              Agent name
            </label>
            <input
              type='text'
              disabled={true}
              defaultValue={agentName}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div className='grid grid-cols-2 items-center gap-5'>
            <div>
              <label htmlFor='email' className='block text-sm dark:text-gray-300'>
                Offered amount
              </label>
              <input
                type='number'
                className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5'
                {...register('offerAmount', {
                  required: {
                    value: true,
                    message: 'Must Fill this before making a offer',
                  },
                  min: {
                    value: minPrice,
                    message: 'Offer must match be between given amount',
                  },
                  max: {
                    value: maxPrice,
                    message: 'Offer must match be between given amount',
                  },
                })}
              />
              {errors.offerAmount && (
                <p className='font-noto text-sm font-semibold text-red-500'>
                  {errors.offerAmount.message}
                </p>
              )}
            </div>
            <div>
              <p className='mt-2'>
                Price Rage : ${minPrice} ~ {maxPrice}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor='email' className='block text-sm dark:text-gray-300'>
              Buyer Email
            </label>
            <input
              type='email'
              disabled={true}
              defaultValue={userEmail}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm dark:text-gray-300'>
              Buyer Name
            </label>
            <input
              type='text'
              disabled={true}
              defaultValue={userName}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm disabled:text-gray-400 dark:text-gray-300'
            >
              Date
            </label>
            <input
              type='text'
              disabled={true}
              defaultValue={date}
              className='mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 disabled:bg-gray-400'
            />
          </div>
          <div className='text-center'>
            <Button type='submit' className='mt-12 w-96 text-lg' color='green'>
              Offer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeOffer;
