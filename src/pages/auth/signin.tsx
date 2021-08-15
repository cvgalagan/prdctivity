import React from "react"
import {ClientSafeProvider, getProviders, signIn} from "next-auth/client"
import styles from "../../styles/pages/SignIn.module.scss"
import Button from "react-bootstrap/Button"
import type {NextPage} from "next"
import FullPageContainer from "../../components/FullpageContainer/FullPageContainer"
import * as constants from "../../utility/constants"

interface Props {
    providers: Record<string, ClientSafeProvider>
}

const SignIn: NextPage<Props> = ({ providers }) => {
    return (
        <FullPageContainer className={styles.signIn}>
            {Object.values(providers).map(provider => {
                if (provider.name === constants.credentials.name) {
                    return;
                }
                return (
                    <div key={provider.name}>
                        <Button onClick={() => signIn(provider.id)}>Войти через {provider.name}</Button>
                    </div>
                )
            })}
            <Button variant="link" href="/auth/credentials-signin">Войти через форму</Button>
        </FullPageContainer>
    )
}

export const getServerSideProps = async () => {
    const providers = await getProviders() ?? {}
    return {
        props: { providers }
    }
}

export default SignIn