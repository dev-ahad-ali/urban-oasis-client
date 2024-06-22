import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const AllPropertyCard = ({ property }) => {
  const {
    title,
    location,
    agentImage,
    agentName,
    agentEmail,
    image,
    minPrice,
    maxPrice,
    status,
    description,
    _id,
    propertyBought,
  } = property;
  return (
    <Card className='w-full max-w-[50rem] shadow-lg'>
      <CardHeader floated={false} color='blue-gray' className='md:h-[400px]'>
        <img className='h-full w-full' src={image} />
        {propertyBought === 'bought' && (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 px-4 py-2 font-title text-7xl uppercase text-white'>
            Sold
          </span>
        )}
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60' />
        <Button size='sm' color='green' className='!absolute right-4 top-4 rounded-full'>
          {status}
        </Button>
      </CardHeader>
      <CardBody>
        <div className='mb-3 flex items-center justify-between'>
          <Typography variant='h2' color='blue-gray' className='font-title font-medium'>
            {title}
          </Typography>
          <Typography
            color='blue-gray'
            className='flex items-center gap-1.5 font-title font-bold uppercase'
          >
            <span className='font-normal'>Location:</span> {location}
          </Typography>
        </div>
        <Typography color='gray'>{description.slice(0, 400)}</Typography>
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
          <p className='font-title text-2xl font-bold uppercase'>
            Price : ${minPrice} : ${maxPrice}
          </p>
          <div>
            <div className='grid place-items-center'>
              <div className='item-center flex gap-2 rounded-xl border border-customBlack p-4'>
                <img src={agentImage} alt='' className='w-12 rounded-md' />
                <div>
                  <p className='text-lg'>{agentName}</p>
                  <p className='font-semibold'>{agentEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className='pt-3'>
        <Link to={`/propertyDetails/${_id}`}>
          <Button
            color='brown'
            className='flex items-center justify-center gap-5 font-title text-lg'
            fullWidth={true}
          >
            View Details
            <CgDetailsMore className='text-2xl' />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AllPropertyCard;
