import React from "react"
import styles from "./Layout.module.scss"
import Menu from "../../features/Menu/Menu"

interface Props {}

const Layout: React.FC<Props> = props => {
    const { children } = props

    return (
        <div className={styles.layout}>
            <div className={styles["layout__main"]}>{children}</div>
            <Menu />
        </div>
    )
}

export default Layout
