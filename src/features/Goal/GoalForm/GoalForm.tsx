import React from "react"
import styles from "./GoalForm.module.scss"
import { Goal } from "../../../models/goal"
import BasicInput from "../../../components/BasicInput/BasicInput"
import GoalContext from "../GoalContext/GoalContext"
import IconButton from "../../../components/IconButton/IconButton"
import { faTrashCan } from "@fortawesome/pro-thin-svg-icons"

const label = "Описание"

interface GoalFormProps {
    index: number
    goal: Goal
    onDelete?: () => void
}
const GoalForm: React.FC<GoalFormProps> = props => {
    const { goal, onDelete } = props

    return (
        <GoalContext
            className={styles.goalForm}
            actions={
                <IconButton icon={faTrashCan} onDelete={onDelete}>
                    Удалить
                </IconButton>
            }
        >
            <BasicInput label={label} as="textarea" value={goal.description} className={styles.goalForm__description} />
        </GoalContext>
    )
}

export default GoalForm
