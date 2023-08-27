import express from 'express';
import pino from 'pino-http';
import helmet from "helmet";
import requestIp from 'request-ip';
import 'dotenv/config';

import config from './config/config.js';
console.log( config.get() );

const app = express();
 
app.use( pino() );
app.use( express.json( { limit: '500kb' } ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( '/public', express.static( 'public' ) );
app.use( helmet() );
app.use( requestIp.mw() );

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen( 3000, () => console.log( 'Server started' ) );