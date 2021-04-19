import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IfIQRSGm2tFTdmtuJtw3Le7hfqrUKs0Jhamv95EWPooQQo2TMVCIpWOChMbUYYc3qPUv7diCTzYn4InrkipkQz200a3hclY8H');

const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default StripePayment;