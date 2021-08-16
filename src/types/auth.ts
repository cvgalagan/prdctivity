import type { AppProps } from "next/app"
import type { BaseContext, NextComponentType, NextPageContext } from "next/dist/next-server/lib/utils"
import type { ReactElement, ReactNode } from "react"

export type AuthProp = {
    auth?: boolean
}

export type LayoutProp = {
    getLayout?: (page: ReactElement) => ReactNode
}

export type NextLayoutComponentType<C extends BaseContext = NextPageContext, IP = {}, P = {}> = NextComponentType<
    C,
    IP,
    P
> &
    LayoutProp
export type NextAuthComponentType<C extends BaseContext = NextPageContext, IP = {}, P = {}> = NextLayoutComponentType<
    C,
    IP,
    P
> &
    AuthProp
export type NextLayoutPage<P = {}, IP = P> = NextLayoutComponentType<NextPageContext, IP, P>
export type NextAuthPage<P = {}, IP = P> = NextAuthComponentType<NextPageContext, IP, P>

export type LayoutAppProps<P = {}> = AppProps<P> & { Component: NextLayoutComponentType<NextPageContext, any, P> }
export type AuthAppProps<P = {}> = AppProps<P> & { Component: NextAuthComponentType<NextPageContext, any, P> }
