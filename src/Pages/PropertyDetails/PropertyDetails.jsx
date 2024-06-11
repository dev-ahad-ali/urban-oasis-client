import { Button, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import usePropertyData from '../../Hooks/usePropertyData';

const PropertyDetails = () => {
  const { id } = useParams();
  const { property, propertyPending } = usePropertyData(id);

  const { title, image } = property;

  const handleWishList = () => {};

  if (propertyPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <figure>
        <img className='h-96 w-full rounded-lg object-cover object-center' src={image} />
        <Typography as='caption' variant='small' className='mt-2 text-center font-normal'>
          {title}
        </Typography>
        <div>
          <Button>Add To wishlist</Button>
        </div>
      </figure>
    </div>
  );
};

export default PropertyDetails;
