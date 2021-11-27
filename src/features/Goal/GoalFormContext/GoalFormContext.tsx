import React from "react"
import { Goal } from "../../../models/goal"
import styles from "./GoalFormContext.module.scss"
import IconButton from "../../../components/IconButton/IconButton"
import { faXmark } from "@fortawesome/pro-thin-svg-icons"
import GoalForm from "../GoalForm/GoalForm"

interface Props {
    goal: Goal
}

const actionProps = {
    variant: "link",
    className: styles["goalFormContext__action"]
}

const GoalFormContext: React.FC<Props> = ({ goal }) => {
    return (
        <div className={styles.goalFormContext}>
            <div className={styles["goalFormContext__body"]}>
                <GoalForm goal={goal} index={1} />
            </div>
            <div className={styles["goalFormContext__actions"]}>
                <IconButton icon={faXmark} {...actionProps} />
            </div>
        </div>
    )
}

export default GoalFormContext
