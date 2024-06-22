import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import AdvertisedCard from '../../../Components/Cards/AdvertisedCard';

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
      <div className='my-32'>
        <h2 className='mx-6 border-y-2 border-customBlack py-2 text-center font-title text-6xl uppercase'>
          Out best destinations...
        </h2>
      </div>
      <div className='relative grid max-w-[1920px] grid-cols-2 gap-x-8 gap-y-12 px-6'>
        {displayProperties.map((property) => (
          <AdvertisedCard key={property._id} property={property} />
        ))}
        <span className='absolute top-1/2 block h-[2px] w-full bg-customBlack'></span>
        <span className='absolute left-1/2 top-0 block h-full w-[3px] bg-customBlack'></span>
      </div>
    </section>
  );
};

export default Advertised;
