
declare module NodeJS {
    import { PrismaClient } from '@prisma/client';
    interface Global {
        prisma: PrismaClient
    }
}