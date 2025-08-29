import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: ".env.development.local" });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCustomer = async (name, email) => {
    const customer = await stripe.customers.create({
        name,
        email,
    });
    console.log("Stripe customer created");
    console.log(customer);
}

export const createCheckoutSession = async (merchantAccountId,orderId) => {
        const session = await stripe.checkout.sessions.create({
            
                success_url: 'https://example.com/success',
                cancel_url: 'https://example.com/cancel',
                payment_intent_data: {
                    application_fee_amount: 100, // Amount in cents
                    transfer_data: {
                        destination: merchantAccountId,
                    },
                },
                line_items: [
                    {
                    price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
                    quantity: 2,
                    },
                ],
                mode: 'payment',
                payment_method_types:["card"],
                subscription_data: {
                    transfer_data:{
                        destination: merchantAccountId,
                        amount_percentage:98,
                    },
                }
            },
            {
            idempotencyKey: `checkout-session-${orderId}`, // unique per logical payment
            }
        );
}