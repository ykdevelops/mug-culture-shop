import React, { useState } from 'react';

const Checkout = ({ onCheckout }) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        onCheckout(userData, paymentOption);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            {/* User data form */}
            <label>
                Name:
                <input name="name" value={userData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input name="email" value={userData.email} onChange={handleChange} type="email" />
            </label>
            <label>
                Address:
                <input name="address" value={userData.address} onChange={handleChange} />
            </label>

            {/* Payment options */}
            <fieldset>
                <legend>Payment Options</legend>
                <label>
                    <input
                        type="radio"
                        name="paymentOption"
                        value="creditCard"
                        checked={paymentOption === 'creditCard'}
                        onChange={handlePaymentOptionChange}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentOption"
                        value="paypal"
                        checked={paymentOption === 'paypal'}
                        onChange={handlePaymentOptionChange}
                    />
                    PayPal
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Checkout;
