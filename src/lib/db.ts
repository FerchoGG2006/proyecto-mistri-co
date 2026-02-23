import { PrismaClient } from '@prisma/client';
import { PrismaNeonHttp } from '@prisma/adapter-neon';

// NOTE: We avoid 'dotenv/config' here as Next.js handles environment variables natively.

const globalForPrisma = globalThis as unknown as {
    __prisma_stable: PrismaClient | undefined;
    __adapter_stable: PrismaNeonHttp | undefined;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
}

// Reutilizar o crear el Adapter HTTP
if (!globalForPrisma.__adapter_stable) {
    globalForPrisma.__adapter_stable = new PrismaNeonHttp(databaseUrl, {});
}
const adapter = globalForPrisma.__adapter_stable;

// Reutilizar o crear la instancia de Prisma
if (!globalForPrisma.__prisma_stable) {
    globalForPrisma.__prisma_stable = new PrismaClient({
        adapter,
        log: ['query', 'info', 'warn', 'error'],
    });
}
export const prisma = globalForPrisma.__prisma_stable;

export default prisma;
