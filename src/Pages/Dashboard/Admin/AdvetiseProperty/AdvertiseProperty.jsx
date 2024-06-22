import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import { Avatar, Button, Chip, Typography } from '@material-tailwind/react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { GiFireworkRocket } from 'react-icons/gi';
import { toast } from 'react-toastify';

const AdvertiseProperty = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: advertiseProperties = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['advertiseProperties'],
    queryFn: async () => {
      const res = await axiosSecure.get('/advertiseProperties');
      return res.data;
    },
  });

  const handleAdvertise = (id) => {
    axiosSecure.patch(`/advertiseProperty/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success('Property Advertised Successfully');
        refetch();
      }
    });
  };

  const TABLE_HEAD = ['Image', 'Name', 'Location', 'Price', 'Agent Info', 'Advertise'];

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div>
        <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>
          Advertise Property
        </h2>
      </div>
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
            {advertiseProperties.map(
              (
                {
                  _id,
                  title,
                  location,
                  minPrice,
                  maxPrice,
                  image,
                  advertise,
                  agentName,
                  agentImage,
                  agentEmail,
                },
                index,
              ) => {
                const isLast = index === advertiseProperties.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-600';

                return (
                  <tr key={_id}>
                    {/* Image */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
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
                      <div className='flex items-center gap-2'>
                        <p>${minPrice}</p>
                        <FaArrowRightArrowLeft />
                        <p>${maxPrice}</p>
                      </div>
                    </td>
                    {/* Agent Info */}
                    <td className={classes}>
                      <dir className='flex items-center gap-4 px-0'>
                        <Avatar src={agentImage} alt='avatar' size='sm' variant='rounded' />
                        <div className='flex flex-col'>
                          <p className='font-regular'>{agentName}</p>
                          <p className='font-regular text-sm'>{agentEmail}</p>
                        </div>
                      </dir>
                    </td>
                    {/* Advertise */}
                    <td className={classes}>
                      <div>
                        {advertise === 'pending' ? (
                          <Button
                            size='sm'
                            color='pink'
                            onClick={() => handleAdvertise(_id)}
                            className='flex items-center justify-center gap-2 rounded-none capitalize'
                          >
                            Advertise
                            <GiFireworkRocket className='text-lg' />
                          </Button>
                        ) : (
                          <Chip
                            color='green'
                            className='rounded-none font-semibold'
                            value={'Advertised'}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdvertiseProperty;
