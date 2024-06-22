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
        <h2 className='mx-6 border-y-2 border-customBlack py-2 text-center font-title text-3xl uppercase md:text-6xl'>
          Out best destinations...
        </h2>
      </div>
      <div className=',md:grid-cols-2 relative grid max-w-[1920px] gap-x-8 gap-y-12 px-6'>
        {displayProperties.slice(0, 4).map((property) => (
          <AdvertisedCard key={property._id} property={property} />
        ))}
        <span className='absolute top-1/2 hidden h-[2px] w-full bg-customBlack md:block'></span>
        <span className='absolute left-1/2 top-0 hidden h-full w-[3px] bg-customBlack md:block'></span>
      </div>
    </section>
  );
};

export default Advertised;
