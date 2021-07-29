import React from "react"
import type { NextPage } from "next"
import { signIn, useSession } from "next-auth/client"

import Counter from "../features/Counter/Counter"
import styles from "../styles/Home.module.scss"
import Loading from "../components/Loading/Loading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from "@fortawesome/pro-thin-svg-icons"

const IndexPage: NextPage = () => {
    const [session, loading] = useSession()

    if (!session) {
        signIn()
        return <Loading/>
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Counter />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <FontAwesomeIcon icon={faHand}/>
            </header>
        </div>
    )
}

export default IndexPage
