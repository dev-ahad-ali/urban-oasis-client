import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from '@material-tailwind/react';
import { FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ReviewCard = ({ review, refetch }) => {
  const {
    _id,
    reviewerImage,
    reviewerName,
    reviewerEmail,
    reviewRating,
    reviewDate,
    reviewMessage,
    propertyTitle,
    agentName,
  } = review;
  const axiosSecure = useAxiosSecure();

  const { pathname } = useLocation();

  const handleDeleteReview = (id) => {
    axiosSecure.delete(`/reviews/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success('Review Deleted Successfully');
        refetch();
      }
    });
  };

  return (
    <Card color='white' shadow={false} className='w-full max-w-[26rem] px-4 py-2 shadow-xl'>
      <CardHeader
        color='transparent'
        floated={false}
        shadow={false}
        className='mx-0 flex items-center gap-4 pb-2 pt-0'
      >
        <Avatar size='lg' variant='circular' src={reviewerImage} />
        <div className='flex w-full flex-col'>
          <div className='flex items-center justify-between'>
            <Typography variant='h6' color='blue-gray'>
              {reviewerName}
            </Typography>
            <div>
              <Rating value={reviewRating} readonly />
            </div>
          </div>
          <Typography color='blue-gray' className='text-xs'>
            {reviewerEmail}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className='mb-3 p-0'>
        <Typography className='font-regular text-sm font-medium'>{reviewMessage}</Typography>
      </CardBody>
      <CardFooter className='p-0'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-sm'>
              <span className='font-semibold'>{propertyTitle}</span> listed by :{' '}
              <span className='font-semibold'>{agentName}</span>
            </p>
          </div>
          <div>
            <p className='text-xs'>{reviewDate}</p>
          </div>
        </div>
        {pathname === '/dashboard/userReviews' || pathname === '/dashboard/manageReviews' ? (
          <Button
            color='red'
            size='sm'
            onClick={() => handleDeleteReview(_id)}
            className='mt-2 flex w-full items-center justify-center gap-2 font-title capitalize'
          >
            Delete
            <FaTrash />
          </Button>
        ) : (
          <></>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
