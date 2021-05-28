import React from "react"
import type { NextPage } from "next"
import Head from "next/head"

import Counter from "../features/counter/Counter"
import styles from "../styles/Home.module.scss"

const IndexPage: NextPage = () => {
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
