import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const VerificationModal = ({
  verifyOpen,
  setVerifyOpen,
  verifyStatus,
  propertyId,
  propertyName,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleVerify = async (id, status) => {
    const verifyRes = await axiosSecure.patch(`/propertyVerify/${id}`, {
      status,
    });
    if (verifyRes.data.modifiedCount > 0) {
      refetch();
      setVerifyOpen(false);
      toast.success(`Property ${status}`);
    }
  };

  return (
    <Dialog open={verifyOpen}>
      <DialogHeader>{propertyName}</DialogHeader>
      <DialogFooter>
        <Button
          variant='text'
          color='red'
          className='mr-1'
          onClick={() => setVerifyOpen(false)}
        >
          <span>Cancel</span>
        </Button>
        {verifyStatus === 'verified' ? (
          <Button
            onClick={() => handleVerify(propertyId, verifyStatus)}
            variant='gradient'
            color='green'
          >
            <span>Verify</span>
          </Button>
        ) : (
          <Button
            onClick={() => handleVerify(propertyId, verifyStatus)}
            variant='gradient'
            color='red'
          >
            <span>Reject</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default VerificationModal;
