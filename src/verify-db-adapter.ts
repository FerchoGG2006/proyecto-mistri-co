import { prisma } from './lib/db';

async function verify() {
    console.log('--- Verifying Prisma with Neon Adapter ---');
    try {
        const start = Date.now();
        const count = await prisma.video.count();
        console.log('SUCCESS: Connection established.');
        console.log('Video count:', count);
        console.log(`Time taken: ${Date.now() - start}ms`);
    } catch (err: any) {
        console.error('FAILURE: Prisma error:', err.message);
        if (err.stack) console.error(err.stack);
    } finally {
        await prisma.$disconnect();
    }
}

verify();
