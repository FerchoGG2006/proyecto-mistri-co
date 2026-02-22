import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import 'dotenv/config';

// Requerido para @neondatabase/serverless en Node.js si se usan WebSockets
neonConfig.webSocketConstructor = ws;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
}

// Configuración de Neon para Prisma
const adapter = new PrismaNeon({ connectionString: databaseUrl });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    adapter,
    log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
