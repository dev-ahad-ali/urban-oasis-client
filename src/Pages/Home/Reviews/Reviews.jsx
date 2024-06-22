import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import ReviewCard from '../../../Components/Cards/ReviewCard';

const Reviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [], isPending } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get('/latestReviews');
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <section className='my-32'>
      <div className='mb-24'>
        <h2 className='mx-6 border-y-2 border-customBlack py-2 text-center font-title text-6xl uppercase'>
          What our clients say...
        </h2>
      </div>
      <div>
        <Marquee speed={150} pauseOnHover={true} className='py-8'>
          {reviews.slice(0, 5).map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Reviews;
