import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ offerAmount, propertyId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: offerAmount }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, offerAmount]);

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
      // console.log('payment error', error);
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || user?.providerData[0]?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          buyerName: user?.displayName,
          buyerEmail: user?.email || user?.providerData[0]?.email,
          paymentId: paymentIntent.id,
          price: offerAmount,
        };

        axiosSecure.patch(`/propertyBought/${propertyId}`, paymentInfo).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success('Payment successful');
            navigate('/dashboard/userPropertyBought');
          }
        });
      }
    }
  };

  return (
    <div>
      <h2 className='my-6 text-2xl'>Payment Amount : {offerAmount}</h2>
      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-2xl rounded-md border border-black p-4 px-3'
      >
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
        <div className='my-4 h-[1px] bg-black'></div>
        <button
          type='submit'
          disabled={!stripe || !clientSecret}
          className='bg-green-500 px-6 py-1 font-title text-xl uppercase text-white shadow-xl'
        >
          Pay
        </button>
        {error && <p className='text-sm text-red-500'>{error?.message}</p>}
        {transactionId && (
          <p className='text-sm text-green-500'>Your Transaction Id : {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
