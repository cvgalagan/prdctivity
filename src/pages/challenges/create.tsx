import React from "react"
import styles from "../../styles/pages/CreateChallenge.module.scss"
import { NextAuthPage } from "../../types/auth"
import { useForm } from "react-hook-form"
import PageWithTitleLayout from "../../components/PageWithTitleLayout/PageWithTitleLayout"
import { FloatingLabel, Form } from "react-bootstrap"
import { ChallengeForm } from "../../models/challenge"
import Button from "react-bootstrap/Button"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "../../components/LoadingButton/LoadingButton"
import { useRouter } from "next/router"
import { mockedGoals } from "../../utility/mocks"
import GoalView from "../../components/Goal/Goal"
import GoalFormContext from "../../components/GoalFormContext/GoalFormContext"

const labels = {
    title: "Название",
    description: "Описание"
}

const schema = yup.object().shape({
    title: yup.string().required("Название обязательно")
})

const CreateChallenge: NextAuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<ChallengeForm>({
        resolver: yupResolver(schema)
    })
    const router = useRouter()

    const onSubmit = (values: ChallengeForm) => console.log("FORM", values)

    return (
        <PageWithTitleLayout className={styles.createChallenge} title="Новое испытание">
            <Form className={styles["createChallenge__form"]} onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                    controlId="challengeTitle"
                    label={labels.title}
                    className={styles["createChallenge__formInput"]}
                >
                    <Form.Control
                        {...register("title")}
                        type="text"
                        placeholder={labels.title}
                        isInvalid={touchedFields.title && !!errors.title}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors?.title?.message}
                    </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                    controlId="challengeTitle"
                    label={labels.description}
                    className={styles["createChallenge__formInput"]}
                >
                    <Form.Control
                        {...register("description")}
                        as="textarea"
                        rows={3}
                        cols={10}
                        placeholder={labels.description}
                        className={styles["createChallenge__challengeDescriptionInput"]}
                    />
                </FloatingLabel>
                <div className={styles["createChallenge__goals"]}>
                    {mockedGoals.map(mg => (
                        <GoalFormContext key={mg.id} goal={mg} />
                    ))}
                </div>
                <LoadingButton type="submit" className={styles["createChallenge__submit"]}>
                    Создать
                </LoadingButton>
                <Button variant="link" onClick={() => router.back()} className={styles["createChallenge__back"]}>
                    Назад
                </Button>
            </Form>
        </PageWithTitleLayout>
    )
}

CreateChallenge.auth = true

export default CreateChallenge
