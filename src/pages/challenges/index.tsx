import React from "react"
import styles from "../../styles/pages/ChallengePage.module.scss"
import { NextAuthPage } from "../../types/auth"
import { faPlus } from "@fortawesome/pro-thin-svg-icons/faPlus"
import IconButton from "../../components/IconButton/IconButton"
import { useRouter } from "next/router"

const ChallengePage: NextAuthPage = () => {
    const router = useRouter()

    return (
        <div className={styles.challengePage}>
            <div className={styles["challengePage__header"]}>
                <div className={styles["challengePage__title"]}>Твои испытания</div>
                <IconButton
                    variant="link"
                    icon={faPlus}
                    href={`${router.pathname}/create`}
                    className={styles["challengePage__icon"]}
                />
            </div>
            <div className={styles["challengePage__body"]}>
                <div className={styles["challengePage__contentEmpty"]}>У тебя пока нет испытаний для друзей</div>
            </div>
        </div>
    )
}

ChallengePage.auth = true

export default ChallengePage
