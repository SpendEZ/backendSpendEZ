import {config} from 'dotenv';
config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});

export const { DB_PORT, NODE_ENV, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT, STRIPE_SECRET_KEY } = process.env;


