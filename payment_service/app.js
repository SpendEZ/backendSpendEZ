import express from 'express';
import { PORT } from './src/config/env.js'; 
import { connectDB } from './src/config/sequalize.js';
import {createConnectedStripeAccount} from './src/gateways/stripe/merchant.stripe.js';
import merchantRoutes from './src/api/routes/merchant.routes.js';

const app = express();
app.use(express.json());

app.use('/api/merchants', merchantRoutes);

app.get('/', (req, res) => res.send('Payments service running 🚀'));
//app.get('/connected', createConnectedStripeAccount);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});



export default app;



