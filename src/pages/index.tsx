import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { signIn, useSession } from "next-auth/client"

import Counter from "../features/Counter/Counter"
import styles from "../styles/Home.module.scss"
import Loading from "../components/Loading/Loading"

const IndexPage: NextPage = () => {
    const [session, loading] = useSession()

    if (!session) {
        signIn()
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Counter />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    )
}

export default IndexPage
