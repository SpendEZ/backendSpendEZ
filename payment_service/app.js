import express from 'express';
import { PORT } from './src/config/env.js'; 
import { connectDB } from './src/config/sequalize.js';
import stripeRouter from './src/api/routes/stripe.routes.js';
import merchantRouter from './src/api/routes/merchant.routes.js'

const app = express();
app.use(express.json());



app.get('/', (req, res) => res.send('Payment Service is running!'));
app.use('/api/v1/stripe', stripeRouter);
app.use('/api/v1/merchant', merchantRouter);
 
//the order of the routes matters, the more specific ones should come first

app.all('*', (req,res)=> {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  })
});


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});



export default app;



