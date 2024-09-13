import { PrismaClient } from "@prisma/client";

const prismaClientSingletonm = () => {
    return new PrismaClient();
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingletonm>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingletonm();
export default prisma;

if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}
