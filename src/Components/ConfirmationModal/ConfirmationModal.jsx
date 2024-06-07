import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ConfirmationModal = ({
  open,
  setOpen,
  refetch,
  modalStatus,
  role,
  id,
  email,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleChangeRole = async (email, role) => {
    const changeRes = await axiosSecure.patch(`/users/${email}`, { role });
    if (changeRes.data.modifiedCount > 0) {
      toast.success(`${email} Promoted to ${role}`);
      refetch();
      setOpen(false);
    }
  };

  const handleUserDelete = async (id) => {
    const deleteRes = await axiosSecure.delete(`/users/${id}`);
    if (deleteRes.data.deletedCount > 0) {
      toast.success(`User Deleted Successfully`);
      refetch();
      setOpen(false);
    }
  };

  return (
    <Dialog
      open={open}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>{email}</DialogHeader>
      <DialogBody>
        <p>{modalStatus}</p>
        <p>{role}</p>
      </DialogBody>
      <DialogFooter>
        <Button
          variant='text'
          color='red'
          className='mr-1'
          onClick={() => setOpen(false)}
        >
          <span>Cancel</span>
        </Button>
        {modalStatus === 'userUpdate' ? (
          <Button
            variant='gradient'
            color='green'
            onClick={() => handleChangeRole(email, role)}
          >
            <span>Change</span>
          </Button>
        ) : (
          <Button
            variant='gradient'
            color='green'
            onClick={() => handleUserDelete(id)}
          >
            <span>Delete</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmationModal;
