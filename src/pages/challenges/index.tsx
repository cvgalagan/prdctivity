import React from "react"
import styles from "../../styles/pages/ChallengePage.module.scss"
import { NextAuthPage } from "../../types/auth"
import IconButton from "../../components/IconButton/IconButton"
import { useRouter } from "next/router"
import PageWithTitleLayout from "../../components/PageWithTitleLayout/PageWithTitleLayout"
import { faCirclePlus } from "@fortawesome/pro-thin-svg-icons/faCirclePlus"

const ChallengePage: NextAuthPage = () => {
    const router = useRouter()

    return (
        <PageWithTitleLayout
            className={styles.challengePage}
            title="Твои испытания"
            headerItems={
                <IconButton
                    variant="link"
                    icon={faCirclePlus}
                    href={`${router.pathname}/create`}
                    className={styles["challengePage__icon"]}
                />
            }
        >
            <div className={styles["challengePage__body"]}>
                <div className={styles["challengePage__contentEmpty"]}>У тебя пока нет испытаний для друзей</div>
            </div>
        </PageWithTitleLayout>
    )
}

ChallengePage.auth = true

export default ChallengePage
