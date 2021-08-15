import prisma from "../../lib/prisma"

const userRequests = {
    get: (email: string, passwordHash: string) =>
        prisma.user.findFirst({
            where: { email, passwordHash }
        })
}

export default userRequests
