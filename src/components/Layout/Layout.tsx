import React from "react"
import styles from "./Layout.module.scss"
import Container from "react-bootstrap/Container"
import Menu from "../../features/Menu/Menu"

interface Props {}

const Layout: React.FC<Props> = props => {
    const { children } = props

    return (
        <Container className={styles.layout} fluid="xl">
            {children}
            <Menu />
        </Container>
    )
}

export default Layout
