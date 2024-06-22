import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import PropertyBoughtCard from '../../../../Components/Cards/PropertyBoughtCard';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const PropertyBought = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: offers = [], isPending: offersPending } = useQuery({
    queryKey: [user?.email, 'offers'],
    queryFn: async () => {
      if (user) {
        const offersRes = await axiosSecure.get(`/offers/${user?.email}`);
        return offersRes.data;
      }
    },
  });

  if (offersPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>
        Property Bought
      </h2>

      <div className='grid grid-cols-2 gap-4'>
        {offers.map((offer) => (
          <PropertyBoughtCard key={offer._id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default PropertyBought;
