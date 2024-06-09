import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import { GiCheckMark } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const ManageProperties = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allProperties,
    refetch,
    isPending: allPropertiesPending,
  } = useQuery({
    queryKey: ['allProperties'],
    queryFn: async () => {
      const propertyRes = await axiosSecure.get('/properties');
      return propertyRes.data;
    },
  });

  const TABLE_HEAD = [
    'Image',
    'Name',
    'Location',
    'Price',
    'Agent Info',
    'Status',
    'Verify or Reject',
  ];

  if (allPropertiesPending) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <h2 className='text-3xl'>Manage Properties</h2>
      <div>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'
                >
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
            {allProperties.map(
              (
                {
                  _id,
                  title,
                  location,
                  minPrice,
                  maxPrice,
                  image,
                  status,
                  agentName,
                  agentImage,
                  agentEmail,
                },
                index,
              ) => {
                const isLast = index === allProperties.length - 1;
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
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-bold'
                      >
                        {title}
                      </Typography>
                    </td>
                    {/* Location */}
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
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
                        <Avatar
                          src={agentImage}
                          alt='avatar'
                          size='sm'
                          variant='rounded'
                        />
                        <div className='flex flex-col'>
                          <p className='font-regular'>{agentName}</p>
                          <p className='font-regular text-sm'>{agentEmail}</p>
                        </div>
                      </dir>
                    </td>
                    {/* Status */}
                    <td className={classes}>
                      <div className='w-max'>
                        <Chip
                          variant='ghost'
                          size='lg'
                          value={status}
                          color={
                            status === 'pending'
                              ? 'yellow'
                              : status === 'verified'
                                ? 'blue'
                                : 'red'
                          }
                        />
                      </div>
                    </td>

                    {/* Verify or Reject */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Tooltip content='Verify'>
                          <IconButton variant='text'>
                            <GiCheckMark className='text-xl text-green-400' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content='Reject'>
                          <IconButton variant='text'>
                            <ImCross className='h-4 w-4 text-red-400' />
                          </IconButton>
                        </Tooltip>
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

export default ManageProperties;
