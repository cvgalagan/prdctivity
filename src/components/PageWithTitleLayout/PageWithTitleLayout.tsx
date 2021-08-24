import React, { ReactNode } from "react"
import styles from "./PageWithTitleLayout.module.scss"
import PageLayout from "../PageLayout/PageLayout"
import cn from "classnames"
import { ClassProp } from "../../types/classProp"

interface Props extends ClassProp {
    title: string
    headerItems?: ReactNode
}

const PageWithTitleLayout: React.FC<Props> = props => {
    const { children, title, headerItems, className } = props
    return (
        <PageLayout className={styles.pageWithTitleLayout}>
            <div className={styles["pageWithTitleLayout__header"]}>
                <div className={styles["pageWithTitleLayout__title"]}>{title}</div>
                {headerItems}
            </div>
            <div className={cn(styles["pageWithTitleLayout__body"], className)}>{children}</div>
        </PageLayout>
    )
}

export default PageWithTitleLayout
