import React, { ReactNode } from "react"
import styles from "./FullPageLayout.module.scss"
import Container from "react-bootstrap/Container"
import { ClassProp } from "../../types/classProp"
import cn from "classnames"

interface Props extends ClassProp {
    children: ReactNode
}

const FullPageLayout = ({ children, className }: Props) => {
    return (
        <Container className={cn(styles.fullPageLayout, className)} fluid>
            {children}
        </Container>
    )
}

export default FullPageLayout
