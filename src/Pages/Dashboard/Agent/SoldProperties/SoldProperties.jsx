import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: soldProperties = [], isPending } = useQuery({
    queryKey: ['soldProperties'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/soldProperties/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>Sold Properties</h2>

      <div>
        {soldProperties.map((property) => (
          <p key={property._id}>{property.title}</p>
        ))}
      </div>
    </div>
  );
};

export default SoldProperties;
