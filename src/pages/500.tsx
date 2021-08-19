import React from "react"
import { NextPage } from "next"
import ErrorView from "../components/ErrorView/ErrorView"
import { errors } from "../utility/constants"
import FullPageLayout from "../components/FullpageLayout/FullPageLayout"

const ServerError: NextPage = () => {
    return (
        <FullPageLayout>
            <ErrorView message={errors.serverError} />
        </FullPageLayout>
    )
}

export default ServerError
