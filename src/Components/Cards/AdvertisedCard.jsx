import { Button } from '@material-tailwind/react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ property }) => {
  const { title, image, location, maxPrice, _id, minPrice, propertyBought } = property;
  return (
    <div className='group p-3'>
      <div className='relative h-[400px] overflow-hidden'>
        <img className='h-full w-full duration-700 group-hover:scale-125' src={image} alt='' />
        {propertyBought === 'bought' && (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 px-4 py-2 font-title text-7xl uppercase text-white'>
            Sold
          </span>
        )}
      </div>
      <h3 className='mt-2 text-center font-title text-3xl font-bold'>{title}</h3>
      <h4 className='mt-4 text-center text-2xl font-bold text-gray-600 underline underline-offset-4'>
        {location}
      </h4>
      <div className='mt-8 flex items-center justify-between gap-2'>
        <p className='font-title text-xl font-bold'>
          ${minPrice}-${maxPrice}
        </p>
        <Link to={`/propertyDetails/${_id}`}>
          <Button variant='text' className='flex items-center gap-2 font-title text-lg'>
            View Details
            <BiRightArrow />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdvertisedCard;
