import { PrismaClient } from '@prisma/client';
import { PrismaNeonHttp } from '@prisma/adapter-neon';
import 'dotenv/config';

async function main() {
    console.log('--- Explicit Diagnostic (Neon HTTP Adapter) ---');
    const url = process.env.DATABASE_URL;

    if (!url) {
        console.error('ERROR: DATABASE_URL is not defined');
        return;
    }

    const adapter = new PrismaNeonHttp(url, {});
    const prisma = new PrismaClient({
        adapter,
        log: ['query', 'info', 'warn', 'error']
    });

    try {
        console.log('Attempting to count videos...');
        const start = Date.now();
        const count = await prisma.video.count();
        console.log('SUCCESS: Prisma connected with HTTP Adapter. Video count:', count);
        console.log(`Time taken: ${Date.now() - start}ms`);
    } catch (err: any) {
        console.error('FAILURE: Prisma error:', err.message);
        if (err.stack) console.error(err.stack);
    } finally {
        await prisma.$disconnect();
    }
}

main();
