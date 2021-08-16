import React from "react"
import styles from "../../styles/pages/UserId.module.scss"
import type { NextAuthPage } from "../../types/auth"
import type {GetServerSideProps} from "next"
import {SafeUser} from "../../models/user"
import userRequests from "../../app/db/user"

interface Props {
    user: SafeUser | null
}

const UserId: NextAuthPage<Props> = ({ user }) => {
    console.log(user)

    return <div className={styles.userId}>Тут будет юзер</div>
}

UserId.auth = true

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const userId = context.params?.userId
    let user = null
    if (typeof userId === "string") {
        const userIdNumber = parseInt(userId, 10)
        if (userIdNumber) {
            user = await userRequests.getById(userIdNumber)
        }
    }
    return {
        props: {
            user
        }
    }
}

export default UserId
