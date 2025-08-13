import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: ".env.development.local" });


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function createConnectedStripeAccount(emailAddress){
    const account = await stripe.accounts.create({
        country: 'US',
        email: emailAddress,
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

export const updateConnectedStripeAccount = async (accountId) => {
    
    const account = await stripe.accounts.update(
    accountId,
    {
        metadata: {
        order_id: '6735',
        },
    }
    );
    print("stripe account updated");
    console.log(account);
}

export const retrieveConnectedStripeAccount = async (accountId) => {
    const account = await stripe.accounts.retrieve(accountId);
    print("stripe account retrieved");
    console.log(account);
}

export const ListConnectedStripeAccounts = async () => {
    const accounts = await stripe.accounts.list({
        limit: 10,
    });
    print("stripe accounts listed");
    console.log(accounts);
}

export const deleteConnectedStripeAccount = async (accountId) => {
    const deleted = await stripe.accounts.del(accountId);
}

export const rejectConnectedStripeAccount = async (accountId) => {
    const account = await stripe.accounts.reject(
        accountId,
        {
            reason: 'fraud',
        }
    );
}