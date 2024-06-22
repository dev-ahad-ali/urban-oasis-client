import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const Advertised = () => {
  const axiosPublic = useAxiosPublic();

  const { data: displayProperties = [], isPending } = useQuery({
    queryKey: ['displayProperties'],
    queryFn: async () => {
      const res = await axiosPublic.get('/displayProperties');
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className='my-20'>
        <h2 className='mx-6 border-y-2 border-customBlack py-2 font-title text-6xl uppercase'>
          Out best destinations...
        </h2>
      </div>
      <div>
        {displayProperties.map((property) => (
          <p key={property._id}>{property.title}</p>
        ))}
      </div>
    </section>
  );
};

export default Advertised;
