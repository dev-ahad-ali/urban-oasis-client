import useAuth from '../../../../Hooks/useAuth';
import ReviewCard from '../../../../Components/Cards/ReviewCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const MyReviews = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: reviews = [],
    isPending: reviewsPending,
    refetch,
  } = useQuery({
    queryKey: [user ? user?.email : '', 'reviews'],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosPublic.get(`/reviews/${user?.email}`);
        return res.data;
      }
    },
  });

  if (reviewsPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>My Reviews</h2>
      <div className='grid grid-cols-3 gap-5'>
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
