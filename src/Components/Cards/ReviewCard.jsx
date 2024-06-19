import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from '@material-tailwind/react';

const ReviewCard = ({ review }) => {
  const {
    reviewerImage,
    reviewerName,
    reviewerEmail,
    reviewRating,
    reviewDate,
    reviewMessage,
    propertyTitle,
  } = review;
  return (
    <Card color='white' shadow={false} className='w-full max-w-[26rem] px-4 py-2 shadow-xl'>
      <CardHeader
        color='transparent'
        floated={false}
        shadow={false}
        className='mx-0 flex items-center gap-4 pb-4 pt-0'
      >
        <Avatar size='lg' variant='circular' src={reviewerImage} />
        <div className='flex w-full flex-col gap-0.5'>
          <div className='flex items-center justify-between'>
            <Typography variant='h5' color='blue-gray'>
              {reviewerName}
            </Typography>
            <div>
              <Rating value={reviewRating} readonly />
            </div>
          </div>
          <Typography color='blue-gray'>{reviewerEmail}</Typography>
        </div>
      </CardHeader>
      <CardBody className='mb-3 p-0'>
        <Typography className='text-sm'>{reviewMessage}</Typography>
      </CardBody>
      <CardFooter className='p-0'>
        <div className='flex items-center justify-between'>
          <div>{propertyTitle}</div>
          <div>{reviewDate}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
