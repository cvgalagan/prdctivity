import React from "react"
import styles from "../../styles/pages/UserId.module.scss"
import type { NextAuthPage } from "../../types/auth"
import type { GetServerSideProps } from "next"
import { SafeUser } from "../../models/user"
import userRequests from "../../app/db/user"
import { Row, Col } from "react-bootstrap"
import Image from "next/image"
import ErrorView from "../../components/ErrorView/ErrorView"
import { errors } from "../../utility/constants"

interface Props {
    user: SafeUser | null
}

const imageSize = "200px"

const blockBreakpoints = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
    xxl: 6
}

const UserId: NextAuthPage<Props> = ({ user }) => {
    if (!user) {
        return <ErrorView message={errors.userNotFound} />
    }

    return (
        <Row className={styles.userId}>
            <Col {...blockBreakpoints} className={styles["userId__imageContainer"]}>
                <div className={styles["userId__image"]}>
                    <Image
                        src={user.image ? user.image : "/assets/images/default-user.jpg"}
                        alt=""
                        width={imageSize}
                        height={imageSize}
                    />
                </div>
            </Col>
            <Col className={styles["userId__personalInfo"]}>
                <div className={styles["userId__name"]}>{user.name}</div>
                <div className={styles["userId__email"]}>{user.email}</div>
            </Col>
        </Row>
    )
}

UserId.auth = true

export const getServerSideProps: GetServerSideProps<Props> = async context => {
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
