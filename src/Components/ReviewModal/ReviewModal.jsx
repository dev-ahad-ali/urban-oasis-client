import { Button, Dialog, DialogBody, DialogHeader, Rating } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import useAuth from '../../Hooks/useAuth';
import { MdRateReview } from 'react-icons/md';
import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ReviewModal = ({ open, handleOpen, propertyId, refetch }) => {
  const { property } = usePropertyData(propertyId);
  const { user } = useAuth();
  const { title, agentName } = property;
  const date = new Date().toDateString();
  const [rating, setRating] = useState(3);
  const axiosSecure = useAxiosSecure();

  const handleReview = async () => {
    const reviewMessage = document.getElementById('reviewMessage').value;

    const review = {
      reviewerImage: user?.photoURL,
      reviewerName: user?.displayName,
      reviewerEmail: user?.email || user?.providerData[0]?.email,
      reviewMessage: reviewMessage,
      reviewRating: rating,
      reviewDate: date,
      agentName: agentName,
      propertyId: propertyId,
      propertyTitle: title,
    };

    const reviewRes = await axiosSecure.post('/reviews', review);
    if (reviewRes.data.insertedId) {
      toast.success('Review Added Successfully');
      refetch();
      handleOpen(false);
      setRating(3);
    }
  };

  return (
    <Dialog open={open} className='p-4' size='sm'>
      <DialogHeader className='p-0 text-xl font-medium'>Give a review for : {title}</DialogHeader>
      <div className='my-2 flex justify-center'>
        <Rating value={rating} onChange={setRating} />
      </div>
      <DialogBody className='p-0'>
        <p className='font-medium'>Message:</p>
        <textarea
          id='reviewMessage'
          className='h-[130px] w-full resize-none rounded-md border border-customBlack p-2'
        ></textarea>
      </DialogBody>
      <p className='text-end text-sm'>Current Date : {date}</p>
      <div className='mt-4 flex w-full items-center gap-3 p-0'>
        <Button
          color='red'
          size='sm'
          onClick={() => handleOpen(false)}
          className='w-full font-title capitalize'
        >
          <span>Cancel</span>
        </Button>
        <Button
          size='sm'
          color='blue'
          onClick={handleReview}
          className='flex w-full items-center justify-center gap-1 font-title capitalize'
        >
          Post
          <MdRateReview className='mt-[2px]' />
        </Button>
      </div>
    </Dialog>
  );
};

export default ReviewModal;
