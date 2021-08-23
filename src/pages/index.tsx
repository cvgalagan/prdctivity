import React from "react"
import styles from "../styles/pages/Home.module.scss"
import { NextAuthPage } from "../types/auth"
import ChallengeDashboard from "../features/ChallengeDashboard/ChallengeDashboard"

interface Props {}

const IndexPage: NextAuthPage<Props> = () => {
    return (
        <div className={styles.header}>
            <ChallengeDashboard />
        </div>
    )
}

IndexPage.auth = true

export default IndexPage
