import React from "react"
import styles from "./PageLayout.module.scss"
import Container from "react-bootstrap/Container"
import { ClassProp } from "../../types/classProp"
import cn from "classnames"

const PageLayout: React.FC<ClassProp> = props => {
    const { children, className } = props
    return <Container className={cn(styles.pageLayout, className)}>{children}</Container>
}

export default PageLayout
