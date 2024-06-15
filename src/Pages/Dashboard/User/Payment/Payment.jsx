import { useLocation } from 'react-router-dom';
import usePropertyData from '../../../../Hooks/usePropertyData';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const { state } = useLocation();
  const { property } = usePropertyData(state);
  return (
    <div>
      <h2 className='text-2xl'>Payment For : {property.title}</h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
