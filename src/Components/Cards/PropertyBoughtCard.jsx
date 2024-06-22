import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import { Link } from 'react-router-dom';

const PropertyBoughtCard = ({ offer }) => {
  const { propertyId, offerAmount, offerDate, status } = offer;
  const { property } = usePropertyData(propertyId);
  const { title, location, paymentInfo, image, agentName, propertyBought } = property;

  return (
    <Card className='w-full max-w-[48rem] flex-row'>
      <CardHeader
        shadow={false}
        floated={false}
        className='relative m-0 w-2/5 shrink-0 rounded-r-none'
      >
        <img src={image} className='h-full w-full object-cover' />
        {propertyBought === 'bought' && status === 'accepted' ? (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 px-4 py-2 font-title text-2xl uppercase text-white'>
            Bought
          </span>
        ) : status === 'rejected' ? (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 px-4 py-2 font-title text-2xl uppercase text-white'>
            Rejected
          </span>
        ) : (
          <></>
        )}
      </CardHeader>
      <CardBody>
        <Typography variant='h6' color='gray' className='mb-2 capitalize'>
          Status : {status === 'accepted' && propertyBought === 'bought' ? 'Bought' : status}
        </Typography>
        <Typography variant='h3' color='blue-gray' className='mb-2 font-title'>
          {title}
        </Typography>
        <Typography color='gray' className='font-normal'>
          Location : <span className='font-bold'>{location}</span>
        </Typography>
        <Typography color='gray' className='font-normal'>
          Agent Name: <span className='font-bold'>{agentName}</span>
        </Typography>
        <div className='flex items-center justify-between gap-4'>
          <Typography color='gray' className='font-normal'>
            Amount : <span className='font-bold'>${offerAmount}</span>
          </Typography>
          <Typography color='gray' className='text-sm font-normal'>
            Date : <span className='font-bold'>{offerDate}</span>
          </Typography>
        </div>
        {status === 'accepted' && paymentInfo ? (
          <p>
            <span className='font-bold'>Transaction ID</span>:{' '}
            <span className='text-xs text-black'>{paymentInfo.paymentId}</span>
          </p>
        ) : status === 'accepted' ? (
          <Link to={'/dashboard/payment'} state={{ propertyId, offerAmount }}>
            <Button color='green' className='mt-1 flex items-center gap-2 rounded-none'>
              Pay
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </CardBody>
    </Card>
  );
};

export default PropertyBoughtCard;
