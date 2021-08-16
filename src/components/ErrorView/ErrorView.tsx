import React from "react"
import styles from "./ErrorView.module.scss"
import Button from "react-bootstrap/Button"
import {ClassProp} from "../../types/classProp"
import cn from "classnames"

interface Props extends ClassProp {
    message?: string
}

const ErrorView: React.FC<Props> = ({ message, className }) => {
    return (
        <div className={cn(styles.errorView, className)}>
            <h1>Что-то пошло не так</h1>
            <p>{message ?? "Неизвестная ошибка"}</p>
            <Button href="/">Вернуться на главную</Button>
        </div>
    )
}

export default ErrorView