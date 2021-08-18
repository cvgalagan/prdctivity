import React, { useEffect } from "react"
import { NextAuthPage } from "../../types/auth"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import ErrorView from "../../components/ErrorView/ErrorView"
import { errors } from "../../utility/constants"
import Loading from "../../components/Loading/Loading"

interface Props {
    userId?: string
}

const DefaultProfile: NextAuthPage<Props> = ({ userId }) => {
    const router = useRouter()

    useEffect(() => {
        if (userId) router.push(`${router.pathname}/${userId}`)
    }, [router, userId])

    if (!userId) {
        return <ErrorView message={errors.userIdNotFound} />
    }

    return <Loading />
}

DefaultProfile.auth = true

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const session = await getSession(context)
    const userId = session?.userId as string | undefined
    return {
        props: {
            userId
        }
    }
}

export default DefaultProfile
