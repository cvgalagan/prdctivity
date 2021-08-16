import React from "react"
import Loading from "../Loading/Loading"
import { signIn, useSession } from "next-auth/client"

interface Props {}

const Auth: React.FC<Props> = ({ children }) => {
    const [session, loading] = useSession()
    const isUser = !!session?.user
    React.useEffect(() => {
        if (loading) return
        if (!isUser) signIn()
    }, [isUser, loading])

    if (isUser) {
        return <>{children}</>
    }

    return <Loading />
}

export default Auth
