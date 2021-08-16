import type { User } from "@prisma/client"

export type SafeUser = Omit<User, "passwordHash">

export const safeUserSelect = {
    id: true,
    name: true,
    email: true,
    emailVerified: true,
    image: true,
    createdAt: true,
    updatedAt: true
}