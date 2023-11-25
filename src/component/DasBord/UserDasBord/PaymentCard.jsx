
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackOutFrom from './ChackOutFrom';
const stripePromise = loadStripe("pk_test_51OECgpLQtllTsrNN3z9oMc1sinyigIsmPI2djStljvr1iM9Ckur8hl5NsWAXb8zoebjbr7IBNTOMbafr0vPO31Dj00IonfgKbb");

const PaymentCard = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                 <ChackOutFrom></ChackOutFrom>
            </Elements>
           
        </div>
    );
};

export default PaymentCard;