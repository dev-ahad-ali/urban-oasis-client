import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

const VerificationModal = ({
  verifyOpen,
  setVerifyOpen,
  verifyStatus,
  propertyId,
  propertyName,
}) => {
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
          <Button variant='gradient' color='green'>
            <span>Verify</span>
          </Button>
        ) : (
          <Button variant='gradient' color='red'>
            <span>Reject</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default VerificationModal;
