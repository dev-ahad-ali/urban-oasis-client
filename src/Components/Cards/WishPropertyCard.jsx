import { Button } from '@material-tailwind/react';
import usePropertyData from '../../Hooks/usePropertyData';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const WishPropertyCard = ({ wishProperty }) => {
  const { property, propertyPending } = usePropertyData(wishProperty.propertyId);
  const { title, image, agentName, agentImage } = property;

  if (propertyPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className='max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800'>
      <img className='h-64 w-full object-cover' src={image} alt='Article' />

      <div className='p-6'>
        <div>
          <span className='text-xs font-medium uppercase text-blue-600 dark:text-blue-400'>
            Property
          </span>
          <a
            href='#'
            className='mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white'
            tabIndex='0'
            role='link'
          >
            {title}
          </a>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem
            ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In
            pretium nec senectus erat. Et malesuada lobortis.
          </p>
        </div>

        <div className='mt-4'>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center'>
              <img className='h-10 rounded-full object-cover' src={agentImage} alt='Avatar' />
              <a
                href='#'
                className='mx-2 font-semibold text-gray-700 dark:text-gray-200'
                tabIndex='0'
                role='link'
              >
                {agentName}
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <Button>Make An Offer</Button>
              <Button>Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishPropertyCard;
