import { Elements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Checkout = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className='w-full mt-1'>
      <Helmet>
        <title> Payments</title>
      </Helmet>

      <section className='h-full'>
        <div className='text-center dark:text-blue-200 my-10'>
          <p className=' text-xl'>please process</p>
          <h2 className='text-3xl uppercase text-center my-5 font-bold'>
            Payment
          </h2>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm
            cart={cart}
            price={price}></CheckoutForm>
        </Elements>
      </section>
    </div>
  );
};

export default Checkout;
