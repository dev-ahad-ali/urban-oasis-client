import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className='text-4xl'>{id}</h2>
    </div>
  );
};

export default PropertyDetails;
