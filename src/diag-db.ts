import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

async function main() {
    console.log('--- Explicit Diagnostic (Native Driver) ---');
    const url = process.env.DATABASE_URL;
    console.log('DATABASE_URL length:', url?.length);

    if (!url) {
        console.error('ERROR: DATABASE_URL is not defined');
        return;
    }

    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error']
    });

    try {
        console.log('Attempting to count videos...');
        const start = Date.now();
        const count = await prisma.video.count();
        console.log('SUCCESS: Prisma connected natively. Video count:', count);
        console.log(`Time taken: ${Date.now() - start}ms`);
    } catch (err: any) {
        console.error('FAILURE: Prisma native error:', err.message);
        if (err.stack) console.error(err.stack);
    } finally {
        await prisma.$disconnect();
    }
}

main();
