import {H3Event} from "h3";
import {User} from "~/types";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const users = defineEventHandler(async (e: H3Event): Promise<{ users: User[] }> =>  {
    const users = await prisma.user.findMany();
    return {users};
});
export default users