import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const AllProperties = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allProperties = [], isPending: propertiesPending } = useQuery({
    queryKey: ['allProperties'],
    queryFn: async () => {
      const propertiesRes = await axiosSecure.get('/allProperties');
      return propertiesRes.data;
    },
  });

  if (propertiesPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>ALL properties</h2>
      <div>
        {allProperties.map(({ title, _id }) => (
          <p key={_id}>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
