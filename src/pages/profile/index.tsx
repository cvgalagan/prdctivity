import React, { useEffect } from "react"
import { NextAuthPage } from "../../types/auth"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import ErrorView from "../../components/ErrorView/ErrorView"
import { errors } from "../../utility/constants"
import Loading from "../../components/Loading/Loading"

const DefaultProfile: NextAuthPage = () => {
    const router = useRouter()
    const [session] = useSession()
    const userId = session?.userId as string | undefined

    useEffect(() => {
        if (userId) router.push(`${router.pathname}/${userId}`)
    }, [router, userId])

    if (!userId) {
        return <ErrorView message={errors.userIdNotFound} />
    }

    return <Loading />
}

DefaultProfile.auth = true

export default DefaultProfile
