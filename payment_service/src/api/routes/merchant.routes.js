import express from 'express'

const merchantRouter = express.Router();

//CRUD and CRUDID

//reading

merchantRouter.get('/', async (req,res)=> res.send("Function to get all merchants and curresponding stripe ID from data base"));
merchantRouter.get('/:Id', async (req,res) => res.send("Function to get a unique merchant stripe ID from datebase"));

//create
merchantRouter.post('/:Id', async (req,res) => res.send("Function to create a unique merchant stripe ID in datebase"));
merchantRouter.post('/:Id/payout', async (req,res) => res.send("Function to make a payout to a merchant"));
//get balace
merchantRouter.get('/:Id/balance', async (req,res) => res.send("Function to get the balance of a merchant"));




