import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis 

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma



// import { PrismaClient } from '@prisma/client'

// let globalForPrisma = globalThis;

// globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient({
//   log: ['query'],
// })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export const prisma = globalForPrisma.prisma;





