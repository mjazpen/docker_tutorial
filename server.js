import dotenv, { config } from 'dotenv';
config();

import exampleRouter from './example/router.js';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect(process.env.DATABASE_URL || 3000, { useNewUrlParser: true})

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
    })
db.once('open', () => {
    console.log('Database connection established');
    })

app.use('/example', exampleRouter);

app.use(express.json());


app.listen(3000, () => {
    console.log('server started');
    })
    