import React from "react"
import type { NextPage } from "next"
import styles from "./Loading.module.scss"
import Spinner from "../Spinner/Spinner"

const Loading: NextPage = () => {
    return (
        <div className={styles.loading}>
            <Spinner size={50}/>
        </div>
    )
}

export default Loading