import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.Apple({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_KEY_SECRET
        })
    ],
    database: process.env.DATABASE_URL
})