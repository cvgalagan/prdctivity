import React, { useState } from "react"
import styles from "../styles/pages/Home.module.scss"
import { NextAuthPage } from "../types/auth"
import LoadingButton from "../components/LoadingButton/LoadingButton"

interface Props {}

const IndexPage: NextAuthPage<Props> = () => {
    const [isLoading, setLoading] = useState(false)

    return (
        <header className={styles.header}>
            <LoadingButton loading={isLoading} onClick={() => setLoading(!isLoading)}>
                Кнопка с загрузкой
            </LoadingButton>
        </header>
    )
}

IndexPage.auth = true

export default IndexPage
