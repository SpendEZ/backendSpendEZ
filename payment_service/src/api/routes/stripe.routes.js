import express from 'express';
import { createMerchantAccount } from '../controllers/merchant.controller.js.js';

const stripeRouter = express.Router();

stripeRouter.post('/merchant', createMerchantAccount);
stripeRouter.get('/merchants', async (req,res)=>{res.send("Replace with function listing all merchants")});
stripeRouter.get('/merchant/:Id', async (req,res) => res.send("Relace with function getting a particular merchant"));
stripeRouter.put('/merchant/:id',async (req,res) => res.send("replace with function updating a particular merchant"));
stripeRouter.delete('/merchant/:Id', async (req,res) => res.send("replace with function deleting a particular merchant"));// if a merchant wanna delete his account he will need to know his account id
stripeRouter.get('/:Id/stripe', async (req, res) => res.send("Replace with function retrieving a connected stripe account"));

stripeRouter.post('/merchant/reject/:Id', async (req, res) => res.send("Replace with function rejecting a connected stripe account"));


//adjust this routes some are repeating




export default stripeRouter;