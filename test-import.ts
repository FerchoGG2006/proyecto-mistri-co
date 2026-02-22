import prisma from './src/lib/db';
console.log('Test Import - Prisma exists:', !!prisma);
if (prisma) {
    console.log('Test Import - Post model exists:', !!prisma.post);
}
