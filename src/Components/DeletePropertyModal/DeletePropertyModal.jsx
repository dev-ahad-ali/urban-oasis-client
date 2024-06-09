import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const DeletePropertyModal = ({
  deleteOpen,
  setDeleteOpen,
  name,
  id,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    const deleteRes = await axiosSecure.delete(`/properties/${id}`);

    if (deleteRes.data.deletedCount > 0) {
      setDeleteOpen(false);
      refetch();
      toast.success('Property delete successfully');
    }
  };

  return (
    <Dialog open={deleteOpen} size='sm'>
      <DialogHeader>{name}</DialogHeader>
      <DialogBody>Are you sure you want to delete?</DialogBody>
      <DialogFooter>
        <Button
          variant='text'
          color='red'
          onClick={() => setDeleteOpen(false)}
          className='mr-1'
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant='gradient'
          color='green'
          onClick={() => handleDelete(id)}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DeletePropertyModal;
