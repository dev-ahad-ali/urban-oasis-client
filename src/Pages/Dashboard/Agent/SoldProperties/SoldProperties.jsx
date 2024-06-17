import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import { Chip, Typography } from '@material-tailwind/react';
import { BiCheck } from 'react-icons/bi';

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: soldPropertiesDetails = {}, isPending } = useQuery({
    queryKey: [user ? user.email : '', 'soldProperties'],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/soldProperties/${user?.email}`);
        return res.data;
      }
    },
  });

  const TABLE_HEAD = ['Image', 'Name', 'Location', 'Buyer Name', 'Buyer Email', 'Status', 'Price'];

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className='text-3xl'>Total Properties Sold : {soldPropertiesDetails.count}</h2>

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
            {soldPropertiesDetails?.result?.map(
              ({ title, propertyBought, location, paymentInfo, image, _id }, index) => {
                const isLast = index === soldPropertiesDetails.result.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-600';

                return (
                  <tr key={_id}>
                    {/* Image */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <BiCheck className='text-3xl text-green-500' />
                        <img src={image} alt={title} className='w-[120px]' />
                      </div>
                    </td>
                    {/* Name */}
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-bold'>
                        {title}
                      </Typography>
                    </td>
                    {/* Location */}
                    <td className={classes}>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {location}
                      </Typography>
                    </td>
                    {/* Price */}
                    <td className={classes}>
                      <p>{paymentInfo?.buyerName}</p>
                    </td>
                    {/* Agent Info */}
                    <td className={classes}>
                      <p>{paymentInfo?.buyerEmail}</p>
                    </td>
                    {/* Status */}
                    <td className={classes}>
                      <div className='w-max'>
                        <Chip
                          variant='ghost'
                          size='lg'
                          value={propertyBought === 'bought' && 'sold'}
                          color='green'
                        />
                      </div>
                    </td>

                    {/* Delete or Update */}
                    <td className={classes}>
                      <p>${paymentInfo?.price}</p>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldProperties;
