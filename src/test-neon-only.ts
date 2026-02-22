import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import 'dotenv/config';

neonConfig.webSocketConstructor = ws;

async function test() {
    console.log('--- Testing Neon Driver ---');
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('SUCCESS:', result.rows[0]);
    } catch (err: any) {
        console.error('FAILURE:', err.message);
    } finally {
        await pool.end();
    }
}

test();
