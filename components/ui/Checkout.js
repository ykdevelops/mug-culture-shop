import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({ onCheckout, total }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const [paymentOption, setPaymentOption] = useState('creditCard');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = (token) => {
        onCheckout(userData, paymentOption, total, token);
    };

    return (
        <div>
            <h2>Checkout</h2>


        </div>
    );
};

export default Checkout;
