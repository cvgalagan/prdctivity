import React from "react"
import {ClientSafeProvider, getProviders, signIn} from "next-auth/client"
import styles from "../../styles/SignIn.module.scss"
import type {NextPage} from "next"

interface Props {
    providers: Record<string, ClientSafeProvider>
}

const SignIn: NextPage<Props> = ({ providers }) => {

    return (
        <div className={styles.signIn}>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps = async () => {
    const providers = await getProviders() ?? {}
    return {
        props: { providers }
    }
}

export default SignIn