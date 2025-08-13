import { createConnectedStripeAccount } from '../gateways/stripe/merchant.stripe.js';

const createMerchantAccount = async (req, res) => {
    try{
        const { emailAddress } = req.body;
        if (!emailAddress){
            return res.status(400).json({ error: 'Email address is required' });
        }
        const account = await createConnectedStripeAccount(emailAddress);
        return res.status(201).json({ message: 'Merchant account created and ready to receive paymnents', account });

    }catch(error){
        console.error("Error creating merchant account: ", error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

