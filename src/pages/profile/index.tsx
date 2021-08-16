import React, {useEffect} from "react"
import {NextAuthPage} from "../../types/auth"
import {useRouter} from "next/router"
import {GetServerSideProps} from "next"
import {getSession} from "next-auth/client"
import ErrorView from "../../components/ErrorView/ErrorView"

interface Props {
    userId?: string
}

const errorMessage = "Не могу получить твой идентификатор"

const DefaultProfile: NextAuthPage<Props> = ({ userId }) => {
    const router = useRouter()

    useEffect(() => {
        if (userId) router.push(`${router.pathname}/${userId}`)
    }, [])

    if (!userId) {
        return <ErrorView message={errorMessage}/>
    }

    return (
        <div>
            Загрузка...
        </div>
    )
}

DefaultProfile.auth = true

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await getSession(context)
    const userId = session?.userId as string | undefined
    return {
        props: {
            userId
        }
    }
}

export default DefaultProfile