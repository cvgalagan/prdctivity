import React from "react"
import {useRouter} from "next/router"
import type {NextPage} from "next"
import FullPageContainer from "../../components/FullpageContainer/FullPageContainer"
import Button from "react-bootstrap/Button"

const Error: NextPage = () => {
    const router = useRouter()
    const { error } = router.query

    const errorMessage = error
        ? Array.isArray(error)
            ? error.join(", ")
            : error
        : "Непонятно что случилось"

    return (
        <FullPageContainer>
            <h1>У нас какая-то неприятность при авторизации</h1>
            <p>{errorMessage}</p>
            <Button href="/">Вернуться на главную</Button>
        </FullPageContainer>
    )
}

export default Error