import React from "react"
import styles from "./GoalForm.module.scss"
import { useFormContext } from "react-hook-form"
import { ChallengeForm } from "../../../models/challenge"
import { Goal } from "../../../models/goal"
import { Form } from "react-bootstrap"

interface GoalFormProps {
    index: number
    goal: Goal
}

const GoalForm: React.FC<GoalFormProps> = props => {
    const { index, goal } = props
    const { register } = useFormContext<ChallengeForm>()

    return (
        <div className={styles.goalForm}>
            <Form.Control></Form.Control>
        </div>
    )
}
