import * as path from 'path';
import * as dotenv from 'dotenv';

export async function ReadConfig() {
    dotenv.config();
    const resolveDir = dir => dir ? path.resolve(process.cwd(), dir) : undefined;
    const config = {
        port: +process.env.PORT,
        database: {
            db_url: process.env.DB_URL,
            db_name: process.env.DB_NAME
        }
    };
    return config;
    
}