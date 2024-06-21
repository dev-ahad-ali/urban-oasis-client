import { Button } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import usePropertyData from '../../Hooks/usePropertyData';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import { PiArrowsLeftRight } from 'react-icons/pi';
import { FaHeart } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { useState } from 'react';
import ReviewModal from '../../Components/ReviewModal/ReviewModal';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from '../../Components/Cards/ReviewCard';

const PropertyDetails = () => {
  const { id } = useParams();
  const { property, propertyPending } = usePropertyData(id);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [open, handleOpen] = useState(false);

  const {
    title,
    image,
    location,
    description,
    minPrice,
    maxPrice,
    agentName,
    agentEmail,
    agentImage,
    status,
  } = property;

  const { data: propertyReviews = [] } = useQuery({
    queryKey: [id, 'propertyReviews'],
    queryFn: async () => {
      if (id) {
        const res = await axiosPublic.get(`/review/${id}`);
        return res.data;
      }
    },
  });

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
    <>
      <section className='px-7'>
        <div className='h-52'></div>
        {/* title */}
        <div>
          <h2 className='font-title text-8xl'>{title}`</h2>
          <div className='flex items-center justify-between gap-3 border-b-2 border-customBlack py-4'>
            <p>{description.slice(0, 50)}.......</p>
            <p className='text-lg font-semibold text-gray-500'>{location}</p>
          </div>
        </div>
        {/* image */}
        <img className='mt-5 h-[700px] w-full' src={image} />
        {/* details */}
        <div className='my-12 flex items-center justify-around gap-3 rounded-full bg-white p-4 shadow-xl'>
          <div>
            <p className='font-title text-2xl font-semibold'>Location : </p>
            <p className='text-xl italic'>{location}</p>
          </div>
          <div>
            <p className='font-title text-2xl font-semibold'>Price Range : </p>
            <p className='flex items-center gap-2 text-xl italic'>
              ${minPrice}
              <PiArrowsLeftRight />${maxPrice}
            </p>
          </div>
          <div>
            <p className='font-title text-2xl font-semibold'>Status : </p>
            <p className='text-xl italic'>{status}</p>
          </div>
        </div>
        <div className='grid grid-cols-2 items-center gap-5'>
          <div>
            <h3 className='mb-4 font-title text-2xl font-semibold'>Property Description : </h3>
            <p className='text-xl text-gray-600'>{description}</p>
          </div>
          {/* agent details */}
          <div>
            <div className='grid place-items-center'>
              <h3 className='mb-4 font-title text-2xl font-semibold'>Property Listed By : </h3>
              <div className='item-center flex gap-2 rounded-xl border border-customBlack p-4'>
                <img src={agentImage} alt='' className='w-12 rounded-md' />
                <div>
                  <p className='text-lg'>{agentName}</p>
                  <p className='font-semibold'>{agentEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add review or add to wishlist */}
        <div className='my-16 grid grid-cols-2 items-center gap-5'>
          <Button
            onClick={() => handleOpen(true)}
            color='blue'
            className='flex items-center justify-center gap-4 font-title text-lg capitalize'
          >
            Write a review
            <MdRateReview className='mt-[2px] text-xl' />
          </Button>
          <Button
            color='pink'
            className='flex items-center justify-center gap-4 font-title text-lg capitalize'
            onClick={() => {
              handleWishList(id);
            }}
          >
            Add To wishlist
            <FaHeart />
          </Button>
        </div>
      </section>
      {/* Reviews */}
      <div className='flex items-center gap-4 px-8'>
        <h3 className='font-title text-3xl'>
          Listed reviews for this property : ({propertyReviews?.length})
        </h3>
        <div className='h-[2px] flex-1 bg-black'></div>
      </div>
      <section className='mx-auto max-w-7xl px-4 pb-12'>
        <div className='mt-12 grid grid-cols-3 gap-4'>
          {propertyReviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </section>

      {/* Review Modal */}
      <ReviewModal propertyId={id} open={open} handleOpen={handleOpen} />
    </>
  );
};

export default PropertyDetails;
