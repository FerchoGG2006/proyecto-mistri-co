import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

// Standard Prisma Client configuration for Node.js
// We avoid the Neon serverless adapter locally to circumvent driver-level hangs

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL;

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    // Prisma 7 handles the connection string automatically if defined in .env
    // but we can pass it explicitly for extra certainty
    log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
