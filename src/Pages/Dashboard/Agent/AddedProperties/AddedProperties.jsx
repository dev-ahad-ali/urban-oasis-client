import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const AddedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: addedProperties = [],
    isPending: propertiesPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, 'addedProperties'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/properties/${user?.email}`);
      return res.data;
    },
  });

  if (propertiesPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>Added Properties</h2>
      <div>
        {addedProperties.map((property) => (
          <p key={property._id}>{property.title}</p>
        ))}
      </div>
    </div>
  );
};

export default AddedProperties;
