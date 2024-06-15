import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
    } else {
      console.log('payment method', paymentMethod);
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
      </form>
    </div>
  );
};

export default CheckoutForm;
