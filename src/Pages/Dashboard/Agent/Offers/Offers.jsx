import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import OfferRow from '../../../../Components/OfferRow/OfferRow';
import { Typography } from '@material-tailwind/react';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const Offers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: agentOffers = [],
    isPending: agentOffersPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, 'agentOffers'],
    queryFn: async () => {
      if (user) {
        const offersRes = await axiosSecure.get(`/agentOffers/${user?.email}`);
        return offersRes.data;
      }
    },
  });

  const TABLE_HEAD = [
    'Image',
    'Name',
    'Location',
    'Buyer Info',
    'Date',
    'Offered Price',
    'Status',
    '',
  ];

  if (agentOffersPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>Offers</h2>
      <div>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agentOffers?.map((offer, index) => {
              const isLast = index === agentOffers.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-600';
              return <OfferRow key={offer._id} offer={offer} classes={classes} refetch={refetch} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Offers;
