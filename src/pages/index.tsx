import React from "react"
import Counter from "../features/Counter/Counter"
import styles from "../styles/pages/Home.module.scss"
import Button from "react-bootstrap/Button"
import { signOut } from "next-auth/client"
import { NextAuthPage } from "../types/auth"

interface Props {}

const IndexPage: NextAuthPage<Props> = () => {
    return (
        <header className={styles.header}>
            <Counter />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button variant="outline-primary" onClick={() => signOut()}>
                Выйти
            </Button>
        </header>
    )
}

IndexPage.auth = true

export default IndexPage
