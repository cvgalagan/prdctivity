import type { User } from "@prisma/client"
import { Prisma } from "@prisma/client"

export type SafeUser = Omit<User, "passwordHash">

export const selectUser = Prisma.validator<Prisma.UserSelect>()({
    id: true,
    name: true,
    email: true,
    emailVerified: true,
    image: true,
    createdAt: true,
    updatedAt: true,
    passwordHash: false
})
