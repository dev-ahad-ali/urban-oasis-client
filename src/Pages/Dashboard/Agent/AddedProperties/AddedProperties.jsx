import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import { Avatar, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';
import DeletePropertyModal from '../../../../Components/DeletePropertyModal/DeletePropertyModal';
import PropertyUpdateModal from '../../../../Components/PropertyUpdateModal/PropertyUpdateModal';

const AddedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
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

  const TABLE_HEAD = ['Image', 'Name', 'Location', 'Price', 'Agent Info', 'Status', ''];

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
            {addedProperties.map(
              (
                { _id, title, location, minPrice, maxPrice, image, status, agentName, agentImage },
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
                        <p className='font-regular'>{agentName}</p>
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
                            status === 'pending' ? 'yellow' : status === 'verified' ? 'blue' : 'red'
                          }
                        />
                      </div>
                    </td>

                    {/* Delete or Update */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Tooltip content='Update Property'>
                          <IconButton
                            onClick={() => {
                              setUpdateOpen(true);
                              setId(_id);
                            }}
                            variant='text'
                          >
                            <FaEdit className='text-xl text-green-400' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content='Delete Property'>
                          <IconButton
                            onClick={() => {
                              setDeleteOpen(true);
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
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        name={name}
        id={id}
        refetch={refetch}
      />
      {/* Property Update Modal */}
      <PropertyUpdateModal
        updateOpen={updateOpen}
        setUpdateOpen={setUpdateOpen}
        id={id}
        refetch={refetch}
      />
    </section>
  );
};

export default AddedProperties;
