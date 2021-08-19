import React, { useState } from "react"
import styles from "./LoginForm.module.scss"
import { useForm } from "react-hook-form"
import { CredentialsSignInForm } from "../../models/signIn"
import { yupResolver } from "@hookform/resolvers/yup"
import Form from "react-bootstrap/Form"
import Feedback from "react-bootstrap/Feedback"
import * as yup from "yup"
import { ClassProp } from "../../types/classProp"
import cn from "classnames"
import LoadingButton from "../LoadingButton/LoadingButton"

const schema = yup.object().shape({
    email: yup.string().email("Ваш email не похож на email").required("Без email не войдешь"),
    password: yup.string().required("Пароль - это обязательно")
})

interface Props extends ClassProp {
    onSubmit: (data: CredentialsSignInForm) => void
}

const LoginForm: React.FC<Props> = ({ onSubmit, className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<CredentialsSignInForm>({
        resolver: yupResolver(schema)
    })
    const [isSubmitting, setSubmitting] = useState(false)

    const onSubmitFactory = (data: CredentialsSignInForm) => {
        setSubmitting(true)
        onSubmit(data)
    }

    return (
        <Form className={cn(styles.loginForm, className)} onSubmit={handleSubmit(onSubmitFactory)}>
            <Form.Group className={styles["loginForm__group"]} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    {...register("email")}
                    placeholder="Введите email"
                    isInvalid={touchedFields.email && !!errors.email}
                />
                <Feedback type="invalid" tooltip>
                    {errors.email?.message}
                </Feedback>
            </Form.Group>

            <Form.Group className={styles["loginForm__group"]} controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    {...register("password")}
                    type="password"
                    placeholder="Введите пароль"
                    autoComplete="off"
                    isInvalid={touchedFields.password && !!errors.password}
                />
                <Feedback type="invalid" tooltip>
                    {errors.password?.message}
                </Feedback>
            </Form.Group>
            <LoadingButton className={styles["loginForm__submit"]} type="submit" loading={isSubmitting}>
                Войти
            </LoadingButton>
        </Form>
    )
}

export default LoginForm
