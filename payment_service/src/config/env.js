import {config} from 'dotenv';
config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});

export const { PORT, NODE_ENV, HOST, USER, PASSWORD, DATABASE, PORT_DB  } = process.env;


