import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: ".env.development.local" });


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function createConnectedStripeAccount(){
    const account = await stripe.accounts.create({
        country: 'US',
        email: 'Aghetseh@example.com',
        controller: {
            fees: {
            payer: 'application',
            },
            losses: {
            payments: 'application',
            },
            stripe_dashboard: {
            type: 'express',
            },
        },
        capabilities:{
            card_payments: {requested: true},
            transfers: {requested: true},
        }
    });

    console.log("stripe account created");
    console.log(account);
    
}

