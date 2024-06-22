import { Button } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const WishPropertyCard = ({ wishItem, wishRefetch }) => {
  const { property, propertyPending } = usePropertyData(wishItem.propertyId);
  const {
    title,
    image,
    location,
    minPrice,
    maxPrice,
    agentName,
    agentImage,
    description,
    status,
    propertyBought,
  } = property;
  const axiosSecure = useAxiosSecure();

  const handleRemoveWish = async (id) => {
    const removeRes = await axiosSecure.delete(`/wishList/${id}`);
    if (removeRes.data.deletedCount > 0) {
      toast.success('Property Removed');
      wishRefetch();
    }
  };

  if (propertyPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className='max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800'>
      <div className='relative'>
        <img className='h-64 w-full object-cover' src={image} alt='Article' />
        {propertyBought === 'bought' && (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 px-4 py-2 font-title text-7xl uppercase text-white'>
            Sold
          </span>
        )}
      </div>
      <div className='p-6'>
        <div className='flex items-center justify-between gap-1'>
          <span className='text-sm font-bold uppercase text-green-600 dark:text-blue-400'>
            Status : {status}
          </span>
          <span className='font-bold'>Location : {location}</span>
          <p className='font-bold'>
            Price : ${minPrice}:${maxPrice}
          </p>
        </div>
        <div>
          <h3 className='mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white'>
            {title}
          </h3>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            {description.slice(0, 300)}
          </p>
        </div>

        <div className='mt-4'>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center'>
              <img className='h-10 rounded-full object-cover' src={agentImage} alt='Avatar' />
              <a
                href='#'
                className='mx-2 font-semibold text-gray-700 dark:text-gray-200'
                tabIndex='0'
                role='link'
              >
                {agentName}
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <Link to={'/dashboard/makeOffer'} state={wishItem}>
                <Button disabled={propertyBought === 'bought' ? true : false} color='green'>
                  Make An Offer
                </Button>
              </Link>
              <Button onClick={() => handleRemoveWish(wishItem._id)} color='red'>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishPropertyCard;
