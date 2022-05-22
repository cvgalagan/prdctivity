import React from "react"
import styles from "./GoalForm.module.scss"
import GoalContext from "../GoalContext/GoalContext"
import IconButton from "../../../../components/IconButton/IconButton"
import { faTrashCan } from "@fortawesome/pro-light-svg-icons"
import { UseFormRegister } from "react-hook-form/dist/types/form"
import { ChallengeForm } from "../../../../models/challenge"
import AutosizeTextareaInput from "../../../../components/AutosizeTextareaInput/AutosizeTextareaInput"

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
                <IconButton icon={faTrashCan} onClick={onDelete} variant="outline-danger" size="sm">
                    Удалить
                </IconButton>
            }
        >
            <AutosizeTextareaInput
                {...register(`goals.${index}.description` as const)}
                controlId={`descriptionInput_${index}`}
                label={label}
                className={styles.goalForm__description}
                isInvalid={isInvalid}
                invalidFeedback={invalidFeedback}
            />
        </GoalContext>
    )
}

export default GoalForm
