import React from "react"
import { NextPage } from "next"
import ErrorView from "../components/ErrorView/ErrorView"
import FullPageLayout from "../components/FullpageLayout/FullPageLayout"
import { errors } from "../utility/constants"

const NotFound: NextPage = () => {
    return (
        <FullPageLayout>
            <ErrorView message={errors.pageNotFound} />
        </FullPageLayout>
    )
}

export default NotFound
