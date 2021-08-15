import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import * as constants from "../../../utility/constants"
import hashPassword from "../../../utility/password"
import {CredentialsSignInForm} from "../../../models/signIn"
import userRequests from "../../../app/db/user"

export default NextAuth({
    providers: [
        Providers.Apple({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_KEY_SECRET
        }),
        Providers.VK({
            clientId: process.env.VK_CLIENT_ID,
            clientSecret: process.env.VK_CLIENT_SECRET
        }),
        Providers.Credentials({
            id: constants.credentials.id,
            name: constants.credentials.name,
            credentials: {
                email: { label: "email" },
                password: { label: "password" }
            },
            async authorize(credentials) {
                const typedCredentials = credentials as Partial<CredentialsSignInForm>
                if (typedCredentials.password && typedCredentials.email) {
                    const passwordHash = hashPassword(typedCredentials.password)
                    return userRequests.get(typedCredentials.email, passwordHash)
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error'
    },
    database: process.env.DATABASE_URL,
    secret: process.env.SECRET,
    session: {
        jwt: true,
        maxAge: 7 * 24 * 60 * 60, // week
        updateAge: 24 * 60 * 60 // 24 hours
    },
    jwt: {
        secret: process.env.SECRET,
        encryption: true
    },
    debug: true
})