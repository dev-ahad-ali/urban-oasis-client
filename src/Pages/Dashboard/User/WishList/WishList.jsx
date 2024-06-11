import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import WishPropertyCard from '../../../../Components/Cards/WishPropertyCard';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const WishList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: wishItems,
    isPending: wishListPending,
    refetch: wishRefetch,
  } = useQuery({
    queryKey: [user?.email, 'wishProperties'],
    queryFn: async () => {
      const wishRes = await axiosSecure.get(`/wishList/${user?.email}`);
      return wishRes.data;
    },
  });

  if (wishListPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>Wish List</h2>
      <div>
        {wishItems.map((wishItem) => (
          <WishPropertyCard key={wishItem._id} wishItem={wishItem} wishRefetch={wishRefetch} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
