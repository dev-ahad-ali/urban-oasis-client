import usePropertyData from '../../Hooks/usePropertyData';
import { Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { GiCheckMark } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const OfferRow = ({ offer, classes, refetch }) => {
  const { propertyId, offerAmount, offerDate, buyerName, buyerEmail, status } = offer;
  const { property } = usePropertyData(propertyId);
  const { title, location, image } = property;
  return (
    <tr>
      {/* Image */}
      <td className={classes}>
        <div className='flex items-center gap-3'>
          <img src={image} alt={title} className='w-[120px]' />
        </div>
      </td>
      {/* Name */}
      <td className={classes}>
        <Typography variant='small' color='blue-gray' className='font-bold'>
          {title}
        </Typography>
      </td>
      {/* Location */}
      <td className={classes}>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          {location}
        </Typography>
      </td>
      {/* Buyer Info */}
      <td className={classes}>
        <div className='flex flex-col'>
          <p>{buyerName}</p>
          <p>{buyerEmail}</p>
        </div>
      </td>
      {/* Date */}
      <td className={classes}>
        <p className='text-sm'>{offerDate}</p>
      </td>
      {/* Agent Info */}
      <td className={classes}>
        <p>${offerAmount}</p>
      </td>
      {/* Status */}
      <td className={classes}>
        <div className='w-max'>
          <Chip
            variant='ghost'
            size='lg'
            value={status}
            color={status === 'pending' ? 'yellow' : status === 'accepted' ? 'blue' : 'red'}
          />
        </div>
      </td>

      {/* Delete or Update */}
      <td className={classes}>
        <div className='flex items-center gap-3'>
          <Tooltip content='Accept Offer'>
            <IconButton variant='text'>
              <GiCheckMark className='text-xl text-green-400' />
            </IconButton>
          </Tooltip>
          <Tooltip content='Reject'>
            <IconButton variant='text'>
              <ImCross className='h-4 w-4 text-red-400' />
            </IconButton>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};

export default OfferRow;
