import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import { Link } from 'react-router-dom';

const PropertyBoughtCard = ({ offer }) => {
  const { propertyId, offerAmount, offerDate, status } = offer;
  const { property } = usePropertyData(propertyId);
  const { title, location, paymentInfo, image, agentName, propertyBought } = property;

  return (
    <Card className='w-full max-w-[48rem] flex-row'>
      <CardHeader shadow={false} floated={false} className='m-0 w-2/5 shrink-0 rounded-r-none'>
        <img src={image} className='h-full w-full object-cover' />
      </CardHeader>
      <CardBody>
        <Typography variant='h6' color='gray' className='mb-4 uppercase'>
          {propertyBought === 'bought' ? 'Bought' : status}
        </Typography>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          {title}
        </Typography>
        <Typography color='gray' className='font-normal'>
          {location}
        </Typography>
        <Typography color='gray' className='font-normal'>
          {agentName}
        </Typography>
        <Typography color='gray' className='font-normal'>
          ${offerAmount}
        </Typography>
        <Typography color='gray' className='font-normal'>
          {offerDate}
        </Typography>
        {status === 'accepted' && paymentInfo ? (
          <p>{paymentInfo.paymentId}</p>
        ) : status === 'accepted' ? (
          <Link to={'/dashboard/payment'} state={{ propertyId, offerAmount }}>
            <Button variant='text' color='green' className='flex items-center gap-2'>
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
