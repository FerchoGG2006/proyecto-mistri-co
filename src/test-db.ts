import 'dotenv/config';
import { prisma } from './lib/db';

async function main() {
    console.log('Testing App Prisma instance...');
    try {
        const videoCount = await prisma.video.count();
        console.log('App Prisma connected successfully!');
        console.log('Video count:', videoCount);
    } catch (error) {
        console.error('App Prisma connection failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
