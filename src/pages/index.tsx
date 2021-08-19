import React, { useState } from "react"
import Counter from "../features/Counter/Counter"
import styles from "../styles/pages/Home.module.scss"
import Button from "react-bootstrap/Button"
import { signOut } from "next-auth/client"
import { NextAuthPage } from "../types/auth"
import LoadingButton from "../components/LoadingButton/LoadingButton"

interface Props {}

const IndexPage: NextAuthPage<Props> = () => {
    const [isLoading, setLoading] = useState(false)

    return (
        <header className={styles.header}>
            <Counter />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button variant="outline-primary" onClick={() => signOut()}>
                Выйти
            </Button>
            <LoadingButton loading={isLoading} onClick={() => setLoading(!isLoading)}>
                Кнопка с загрузкой
            </LoadingButton>
        </header>
    )
}

IndexPage.auth = true

export default IndexPage
