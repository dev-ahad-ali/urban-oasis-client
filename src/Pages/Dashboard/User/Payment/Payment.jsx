import { useLocation } from 'react-router-dom';
import usePropertyData from '../../../../Hooks/usePropertyData';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const { state } = useLocation();
  const { property } = usePropertyData(state.propertyId);
  return (
    <div>
      <h2 className='mb-12 border-b-2 border-customBlack pb-4 font-title text-4xl'>
        Payment For : {property.title}
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm offerAmount={state.offerAmount} propertyId={state.propertyId} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
