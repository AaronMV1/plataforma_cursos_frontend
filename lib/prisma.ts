

import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Configura la conexión a PostgreSQL (Neon)
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

// Almacena una instancia global de Prisma para reutilizarla
const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

// Reutiliza la instancia existente o crea una nueva
const prisma = globalForPrisma.prisma ?? new PrismaClient({
    adapter,
});

// Evita crear múltiples instancias durante el desarrollo
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;

