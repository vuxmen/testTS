import { ReadConfig } from './config';
import { MongoClient } from 'mongodb';
import * as cors from 'cors';
import * as express from 'express';

const main = async () => {
    const config = await ReadConfig();
    console.log(config);
    const client = new MongoClient(config.database.db_url, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log(new Date(), 'connected to database');

    
}

main();