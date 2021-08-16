import "../styles/globals.scss"
import React from "react"
import { Provider } from "react-redux"
import { Provider as SessionProvider } from "next-auth/client"
import Head from "next/head"
import store from "../app/store"
import Auth from "../components/Auth/Auth"
import { AuthAppProps } from "../types/auth"
import Layout from "../components/Layout/Layout"

const title = "Prdctivity"
const description = "Испытания для друзей"
const keywords = "Challenges goal wish productivity development"

function MyApp({ Component, pageProps }: AuthAppProps) {
    const getLayout = Component.getLayout ?? (page => page)

    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta name="application-name" content={title} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content={title} />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
                <meta name="theme-color" content="#F2F2F2" />
            </Head>
            <SessionProvider session={pageProps.session}>
                {getLayout(
                    Component.auth ? (
                        <Auth>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </Auth>
                    ) : (
                        <Component {...pageProps} />
                    )
                )}
            </SessionProvider>
        </Provider>
    )
}

export default MyApp
