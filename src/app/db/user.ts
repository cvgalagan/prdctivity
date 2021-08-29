import prisma from "../../lib/prisma"
import { selectUser } from "../../models/user"

const userRequests = {
    get: (email: string, passwordHash: string) =>
        prisma.user.findFirst({
            where: { email, passwordHash },
            select: selectUser
        }),
    getById: (userId: string) =>
        prisma.user.findUnique({
            where: { id: userId },
            select: selectUser
        })
}

export default userRequests
