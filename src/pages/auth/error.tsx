import React from "react"
import { useRouter } from "next/router"
import type { NextPage } from "next"
import FullPageLayout from "../../components/FullpageContainer/FullPageLayout"
import ErrorView from "../../components/ErrorView/ErrorView"

const Error: NextPage = () => {
    const router = useRouter()
    const { error } = router.query

    const errorMessage = error ? (Array.isArray(error) ? error.join(", ") : error) : undefined

    return (
        <FullPageLayout>
            <ErrorView message={errorMessage}/>
        </FullPageLayout>
    )
}

export default Error
