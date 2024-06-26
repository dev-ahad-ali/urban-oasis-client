import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Avatar, Button, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { FaTrash } from 'react-icons/fa6';
import { MdAdminPanelSettings, MdOutlineSupportAgent } from 'react-icons/md';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';
import ConfirmationModal from '../../../../Components/ConfirmationModal/ConfirmationModal';

const ManageUsers = () => {
  const [open, setOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState('');
  const [updateRole, setUpdateRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isPending: usersPending,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const TABLE_HEAD = ['Member', 'Status', 'Change Role', 'Mark as Fraud', ''];

  if (usersPending) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section>
        <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>
          Total Users
        </h2>
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
              {users.map(({ _id, profileImage, name, email, role }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-600';

                return (
                  <tr key={_id} className={`${role === 'fraud' && 'bg-red-200'}`}>
                    {/* Name and Info */}
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Avatar src={profileImage} alt={name} size='sm' />
                        <div className='flex flex-col'>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
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
                                : role === 'fraud'
                                  ? 'red'
                                  : 'blue-gray'
                          }
                        />
                      </div>
                    </td>
                    {/* Change Role*/}
                    <td className={classes}>
                      {role === 'user' && (
                        <div className='flex items-center gap-6'>
                          <Tooltip content='Make Admin'>
                            <IconButton
                              onClick={() => {
                                setModalStatus('userUpdate');
                                setUpdateRole('admin');
                                setUserEmail(email);
                                setOpen(true);
                              }}
                              variant='text'
                            >
                              <MdAdminPanelSettings className='h-8 w-8 text-green-400' />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content='Make Agent'>
                            <IconButton
                              onClick={() => {
                                setModalStatus('userUpdate');
                                setUpdateRole('agent');
                                setUserEmail(email);
                                setOpen(true);
                              }}
                              variant='text'
                            >
                              <MdOutlineSupportAgent className='h-8 w-8 text-blue-400' />
                            </IconButton>
                          </Tooltip>
                        </div>
                      )}
                    </td>
                    {/* Mark as Fraud */}
                    <td className={classes}>
                      {role === 'agent' && (
                        <Button
                          size='sm'
                          color='red'
                          variant='outlined'
                          onClick={() => {
                            setModalStatus('markAsFraud');
                            setUserId(_id);
                            setUpdateRole('fraud');
                            setUserEmail(email);
                            setOpen(true);
                          }}
                          className='rounded-none capitalize'
                        >
                          Mark as Fraud
                        </Button>
                      )}
                    </td>
                    {/* Delete User */}
                    <td className={classes}>
                      <Tooltip content='Delete User'>
                        <IconButton
                          onClick={() => {
                            setModalStatus('userDelete');
                            setUserId(_id);
                            setUserEmail(email);
                            setOpen(true);
                          }}
                          variant='text'
                        >
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

      {/* Confirmation Modal */}
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        email={userEmail}
        role={updateRole}
        id={userId}
        modalStatus={modalStatus}
      />
    </>
  );
};

export default ManageUsers;
