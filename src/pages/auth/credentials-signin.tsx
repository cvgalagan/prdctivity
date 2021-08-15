import React from "react"
import styles from "../../styles/pages/CredentialsSignIn.module.scss"
import Form from "react-bootstrap/Form"
import Feedback from "react-bootstrap/Feedback"
import Button from "react-bootstrap/Button"
import FullPageContainer from "../../components/FullpageContainer/FullPageContainer"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import {signIn} from "next-auth/client"
import {CredentialsSignInForm} from "../../models/signIn"
import * as constants from "../../utility/constants"

const schema = yup.object().shape({
    email: yup.string().email("Ваш email не похож на email").required("Без email не войдешь"),
    password: yup.string().required("Пароль - это обязательно")
})

const CredentialsSignIn = () => {
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm<CredentialsSignInForm>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data: CredentialsSignInForm) => {
        await signIn(constants.credentials.id, { ...data })
    }

    return (
        <FullPageContainer>
            <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className={styles["loginForm__group"]} controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        {...register("email")}
                        placeholder="Введите email"
                        isInvalid={touchedFields.email && !!errors.email}
                    />
                    <Feedback type="invalid" tooltip>{errors.email?.message}</Feedback>
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
                    <Feedback type="invalid" tooltip>{errors.password?.message}</Feedback>
                </Form.Group>
                <Button className={styles["loginForm__submit"]} type="submit">
                    Войти
                </Button>
            </Form>
        </FullPageContainer>
    )
}

export default CredentialsSignIn