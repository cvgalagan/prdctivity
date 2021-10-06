import React from "react"
import styles from "./Layout.module.scss"
import Container from "react-bootstrap/Container"
import Menu from "../../features/Menu/Menu"

interface Props {}

const Layout: React.FC<Props> = props => {
    const { children } = props

    return (
        <div className={styles.layout}>
            <Container className={styles["layout__main"]} fluid="xl">
                {children}
            </Container>
            <Menu />
        </div>
    )
}

export default Layout
