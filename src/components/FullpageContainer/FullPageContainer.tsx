import React, { ReactNode } from "react"
import styles from "./FullPageContainer.module.scss"
import Container from "react-bootstrap/Container"
import { ClassProp } from "../../types/classProp"
import cn from "classnames"

interface Props extends ClassProp {
    children: ReactNode
}

const FullPageContainer = ({ children, className }: Props) => {
    return (
        <Container className={cn(styles.fullPageContainer, className)} fluid>
            {children}
        </Container>
    )
}

export default FullPageContainer
