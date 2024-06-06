import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import {
  Avatar,
  Button,
  ButtonGroup,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { FaTrash } from 'react-icons/fa6';

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const TABLE_HEAD = ['Member', 'Status', 'Change Role', ''];

  return (
    <section>
      <h2 className='text-3xl'>Total Users</h2>
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
            {users.map(({ profileImage, name, email, role }, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={name}>
                  {/* Name and Info */}
                  <td className={classes}>
                    <div className='flex items-center gap-3'>
                      <Avatar src={profileImage} alt={name} size='sm' />
                      <div className='flex flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  {/* Roles */}
                  <td className={classes}>
                    <div className='w-max'>
                      <Chip
                        variant='ghost'
                        size='sm'
                        value={role}
                        color={
                          role === 'admin'
                            ? 'green'
                            : role === 'agent'
                              ? 'cyan'
                              : 'blue-gray'
                        }
                      />
                    </div>
                  </td>
                  {/* Change Role*/}
                  <td className={classes}>
                    <Tooltip content='Delete User'>
                      <IconButton variant='text'>
                        <FaTrash className='h-4 w-4 text-red-400' />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content='Delete User'>
                      <IconButton variant='text'>
                        <FaTrash className='h-4 w-4 text-red-400' />
                      </IconButton>
                    </Tooltip>
                  </td>
                  {/* Delete User */}
                  <td className={classes}>
                    <Tooltip content='Delete User'>
                      <IconButton variant='text'>
                        <FaTrash className='h-4 w-4 text-red-400' />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUsers;
