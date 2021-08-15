import React from "react"
import styles from "./Loading.module.scss"
import Spinner from "../Spinner/Spinner"

const Loading = () => {
    return (
        <div className={styles.loading}>
            <Spinner size={50}/>
        </div>
    )
}

export default Loading