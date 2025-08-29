import { createConnectedStripeAccount, deleteConnectedStripeAccount, updateConnectedStripeAccount, retrieveConnectedStripeAccount, rejectConnectedStripeAccount, ListConnectedStripeAccounts } from '../../gateways/stripe/merchant.stripe.js';
//import errorMiddleware from '../../utils/middleware/error.middleware.js';




export const createMerchantAccount = async (req, res) => {
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

export const deletemerchantAccounts = async (req, res) => {
    try{
        const { accountId} = req.params;
        if(!accountId){
            return res.status(400).json({ error: 'Account ID is required'});
        }
        await deleteConnectedStripeAccount(accountId);
        return res.status(200).json({ message: 'Merchant account deleted successfully'});
        

    }catch(error){
        console.error("Error deleting merchant accounts: ", error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

//app.use(errorMiddleware); 

