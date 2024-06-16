import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('payment error', error);
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }
  };

  return (
    <div>
      <h2 className='text-2xl'>checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type='submit'
          disabled={!stripe}
          className='bg-green-500 px-6 py-1 font-title text-xl uppercase text-white shadow-xl'
        >
          Pay
        </button>
        {error && <p className='text-sm text-red-500'>{error?.message}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
