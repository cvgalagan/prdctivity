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
import { signOut, useSession } from "next-auth/client"
import Button from "react-bootstrap/Button"
import { getColOptions } from "../../utility/layout"

interface Props {
    user: SafeUser | null
}

const imageSize = "200px"

const UserId: NextAuthPage<Props> = ({ user }) => {
    const [session] = useSession()

    if (!user) {
        return <ErrorView message={errors.userNotFound} />
    }

    const onSignOut = () => signOut()

    return (
        <>
            <Row className={styles.userId}>
                <Col {...getColOptions(12, 6)} className={styles["userId__imageContainer"]}>
                    <div className={styles["userId__image"]}>
                        {user.image ? (
                            <img src={user.image} alt="" />
                        ) : (
                            <Image src="/assets/images/default-user.jpg" alt="" width={imageSize} height={imageSize} />
                        )}
                    </div>
                </Col>
                <Col className={styles["userId__personalInfo"]}>
                    <div className={styles["userId__name"]}>{user.name}</div>
                    <div className={styles["userId__email"]}>{user.email}</div>
                </Col>
            </Row>
            {session?.userId === user.id && (
                <Row>
                    <Col className={styles["userId__signOutContainer"]}>
                        <Button variant="outline-danger" onClick={onSignOut}>
                            Выйти из аккаунта
                        </Button>
                    </Col>
                </Row>
            )}
        </>
    )
}

UserId.auth = true

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const userId = context.params?.userId
    let user = null
    if (typeof userId === "string") {
        user = await userRequests.getById(userId)
    }
    return {
        props: {
            user
        }
    }
}

export default UserId
