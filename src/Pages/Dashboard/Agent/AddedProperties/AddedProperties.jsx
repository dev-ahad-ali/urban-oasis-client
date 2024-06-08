import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import {
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';
import DeletePropertyModal from '../../../../Components/DeletePropertyModal/DeletePropertyModal';

const AddedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState('');

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

  const TABLE_HEAD = ['Image', 'Name', 'Location', 'Price', 'Status', ''];

  if (propertiesPending) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <h2 className='text-3xl'>Added Properties</h2>
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
            {addedProperties.map(
              (
                { _id, title, location, minPrice, maxPrice, image, status },
                index,
              ) => {
                const isLast = index === addedProperties.length - 1;
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
                    {/* Status */}
                    <td className={classes}>
                      <div className='w-max'>
                        <Chip
                          variant='ghost'
                          size='lg'
                          value={status}
                          color={status === 'pending' ? 'yellow' : 'blue'}
                        />
                      </div>
                    </td>

                    {/* Delete or Update */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Tooltip content='Update Property'>
                          <IconButton variant='text'>
                            <FaEdit className='text-xl text-green-400' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content='Delete User'>
                          <IconButton
                            onClick={() => {
                              setOpen(true);
                              setId(_id);
                              setName(title);
                            }}
                            variant='text'
                          >
                            <FaTrash className='h-4 w-4 text-red-400' />
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
      {/* delete modal */}
      <DeletePropertyModal
        open={open}
        setOpen={setOpen}
        name={name}
        id={id}
        refetch={refetch}
      />
    </section>
  );
};

export default AddedProperties;
