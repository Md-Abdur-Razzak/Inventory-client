
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackOutFrom from './ChackOutFrom';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe("pk_test_51OECgpLQtllTsrNN3z9oMc1sinyigIsmPI2djStljvr1iM9Ckur8hl5NsWAXb8zoebjbr7IBNTOMbafr0vPO31Dj00IonfgKbb");

const PaymentCard = () => {
    const data=useLoaderData()
    return (
        <div className=''>
           <div className='w-[90%] flex flex-col justify-center items-center  '>
           <Elements stripe={stripePromise}>
                 <ChackOutFrom data={data}></ChackOutFrom>
            </Elements>
           
           </div>
        </div>
    );
};

export default PaymentCard;