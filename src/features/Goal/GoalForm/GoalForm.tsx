import React from "react"
import styles from "./GoalForm.module.scss"
import BasicInput from "../../../components/BasicInput/BasicInput"
import GoalContext from "../GoalContext/GoalContext"
import IconButton from "../../../components/IconButton/IconButton"
import { faTrashCan } from "@fortawesome/pro-thin-svg-icons"
import { UseFormRegister } from "react-hook-form/dist/types/form"
import { ChallengeForm } from "../../../models/challenge"

const label = "Описание"

interface GoalFormProps {
    index: number
    register: UseFormRegister<ChallengeForm>
    onDelete?: () => void
    isInvalid?: boolean
    invalidFeedback?: string
}
const GoalForm: React.FC<GoalFormProps> = props => {
    const { onDelete, index, register, isInvalid, invalidFeedback } = props

    return (
        <GoalContext
            className={styles.goalForm}
            actions={
                <IconButton icon={faTrashCan} onClick={onDelete}>
                    Удалить
                </IconButton>
            }
        >
            <BasicInput
                {...register(`goals.${index}.description` as const)}
                label={label}
                as="textarea"
                className={styles.goalForm__description}
                isInvalid={isInvalid}
                invalidFeedback={invalidFeedback}
            />
        </GoalContext>
    )
}

export default GoalForm
