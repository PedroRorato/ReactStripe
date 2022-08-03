import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
	}

	return stripePromise;
};

function Checkout() {
	const item = {
		price: `${process.env.REACT_APP_STRIPE_PRODUCT_PRICE_ID}`,
		quantity: 1
	};

	const checkoutOptions = {
		lineItems: [item],
		mode: 'payment',
		successUrl: `${window.location.origin}/success`,
		cancelUrl: `${window.location.origin}/cancel`
	};

	const redirectToCheckout = async () => {
		console.log('redirectToCheckout');

		const stripe = await getStripe();

		try {
			await stripe.redirectToCheckout(checkoutOptions);
		} catch (error) {
			console.log('Stripe checkout error', error);
		}
	};

	return (
		<div>
			<h1>Checkout</h1>
			<button onClick={redirectToCheckout}>Buy</button>
		</div>
	);
}

export default Checkout;