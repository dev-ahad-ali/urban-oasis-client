import { Button, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import usePropertyData from '../../Hooks/usePropertyData';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const PropertyDetails = () => {
  const { id } = useParams();
  const { property, propertyPending } = usePropertyData(id);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { title, image } = property;

  const handleWishList = async (id) => {
    const wishDetails = {
      propertyId: id,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    const wishRes = await axiosPublic.post('/wishList', wishDetails);
    if (wishRes.data.insertedId) {
      toast.success('Property added to wish list.');
    }
  };

  if (propertyPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <figure>
        <img className='h-96 w-full rounded-lg object-cover object-center' src={image} />
        <Typography as='p' variant='small' className='mt-2 text-center font-normal'>
          {title}
        </Typography>
        <div>
          <Button
            onClick={() => {
              handleWishList(id);
            }}
          >
            Add To wishlist
          </Button>
        </div>
      </figure>
    </div>
  );
};

export default PropertyDetails;
