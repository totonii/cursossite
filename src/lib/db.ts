import { PrismaClient } from '@prisma/client';

// This is a common pattern to avoid creating too many Prisma Client instances in a serverless environment.
// The global object is not affected by hot-reloading, so we can store the client there.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
