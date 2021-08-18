import prisma from "../../lib/prisma"
import { safeUserSelect } from "../../models/user"

const userRequests = {
    get: (email: string, passwordHash: string) =>
        prisma.user.findFirst({
            where: { email, passwordHash },
            select: safeUserSelect
        }),
    getById: (userId: number) =>
        prisma.user.findUnique({
            where: { id: userId },
            select: safeUserSelect
        })
}

export default userRequests
