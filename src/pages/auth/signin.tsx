import React, { useEffect } from "react"
import { ClientSafeProvider, getProviders, signIn, useSession } from "next-auth/client"
import styles from "../../styles/pages/SignIn.module.scss"
import Button from "react-bootstrap/Button"
import type { GetServerSideProps, NextPage } from "next"
import FullPageLayout from "../../components/FullpageLayout/FullPageLayout"
import * as constants from "../../utility/constants"
import LoginForm from "../../components/LoginForm/LoginForm"
import { CredentialsSignInForm } from "../../models/signIn"
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple"
import { faVk } from "@fortawesome/free-brands-svg-icons/faVk"
import { faCircleQuestion } from "@fortawesome/pro-thin-svg-icons/faCircleQuestion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cn from "classnames"
import { useRouter } from "next/router"

interface Props {
    providers: Record<string, ClientSafeProvider>
}

const getProviderIcon = (providerName: string) => {
    switch (providerName) {
        case "apple":
            return faApple
        case "vk":
            return faVk
        default:
            return faCircleQuestion
    }
}

const SignIn: NextPage<Props> = ({ providers }) => {
    const router = useRouter()
    const [session] = useSession()

    useEffect(() => {
        const callbackUrl = router.query["callbackUrl"]
        if (session) {
            typeof callbackUrl === "string" ? router.push(callbackUrl) : router.push("/")
        }
    }, [router, session])

    const onSubmitForm = async (data: CredentialsSignInForm) => {
        await signIn(constants.credentials.id, { ...data })
    }

    return (
        <FullPageLayout className={styles.signIn}>
            <div className={styles["signIn__container"]}>
                <LoginForm className={styles["signIn__form"]} onSubmit={onSubmitForm} />
                <div className={styles["signIn__bottomSpace"]}>
                    <div className={styles["signIn__bottomText"]}>Или войдите через:</div>
                    <div className={styles["signIn__brandProviders"]}>
                        {Object.values(providers).map(provider => {
                            if (provider.name === constants.credentials.name) {
                                return
                            }
                            return (
                                <Button
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className={cn(styles["signIn__brandButton"], styles[`signIn__${provider.id}`])}
                                    area-label={`Войти через ${provider.name}`}
                                >
                                    <FontAwesomeIcon
                                        icon={getProviderIcon(provider.id)}
                                        className={styles["signIn__brandIcon"]}
                                    />
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </FullPageLayout>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const providers = (await getProviders()) ?? {}
    return {
        props: { providers }
    }
}

export default SignIn
