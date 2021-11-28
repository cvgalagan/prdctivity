import React from "react"
import styles from "../../styles/pages/CreateChallenge.module.scss"
import { NextAuthPage } from "../../types/auth"
import { useFieldArray, useForm } from "react-hook-form"
import PageWithTitleLayout from "../../components/PageWithTitleLayout/PageWithTitleLayout"
import { Form } from "react-bootstrap"
import { ChallengeForm } from "../../models/challenge"
import Button from "react-bootstrap/Button"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import LoadingButton from "../../components/LoadingButton/LoadingButton"
import { useRouter } from "next/router"
import { mockedGoals } from "../../utility/mocks"
import BasicInput from "../../components/BasicInput/BasicInput"
import GoalForm from "../../features/Goal/GoalForm/GoalForm"

const defaultValues: ChallengeForm = {
    title: "Первое испытание",
    description:
        "С Philips Ambilight каждый момент становится ближе. Интеллектуальные светодиоды по краям телевизора реагируют на происходящее на экране и изменяют цвет для еще большего эффекта погружения. Попробовав один раз, вы больше не сможете от этого отказаться.",
    goals: mockedGoals
}

const labels = {
    title: "Название",
    description: "Описание",
    goals: "Цели"
}

const schema = yup.object().shape({
    title: yup.string().required("Название обязательно")
})

const CreateChallenge: NextAuthPage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<ChallengeForm>({
        defaultValues,
        resolver: yupResolver(schema)
    })
    const { fields, remove } = useFieldArray<ChallengeForm>({
        control,
        name: "goals"
    })
    const router = useRouter()

    const onSubmit = (values: ChallengeForm) => console.log("FORM", values)

    return (
        <PageWithTitleLayout className={styles.createChallenge} title="Новое испытание">
            <Form className={styles["createChallenge__form"]} onSubmit={handleSubmit(onSubmit)}>
                <BasicInput
                    {...register("title")}
                    label={labels.title}
                    className={styles["createChallenge__formInput"]}
                    controlId="challengeTitle"
                    type="text"
                    placeholder={labels.title}
                    isInvalid={touchedFields.title && !!errors.title}
                    invalidFeedback={errors?.title?.message}
                />
                <BasicInput
                    {...register("description")}
                    className={styles["createChallenge__formInput"]}
                    inputClassName={styles["createChallenge__challengeDescriptionInput"]}
                    controlId="challengeTitle"
                    label={labels.description}
                    as="textarea"
                    placeholder={labels.description}
                />
                <Form.Label className={styles["createChallenge__divideLabel"]} as="div">
                    {labels.goals}
                </Form.Label>
                <div className={styles["createChallenge__goals"]}>
                    {fields.map((field, index) => (
                        <GoalForm key={field.id} index={index} register={register} onDelete={() => remove(index)} />
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
