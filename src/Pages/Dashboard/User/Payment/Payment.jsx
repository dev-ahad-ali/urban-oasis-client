import { useLocation } from 'react-router-dom';
import usePropertyData from '../../../../Hooks/usePropertyData';

const Payment = () => {
  const { state } = useLocation();
  const { property } = usePropertyData(state);
  return (
    <div>
      <h2 className='text-2xl'>Payment For : {property.title}</h2>
    </div>
  );
};

export default Payment;
