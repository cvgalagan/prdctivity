import React from "react"
import styles from "./Goal.module.scss"
import { Goal } from "../../../models/goal"
import { formatDurationLocale } from "../../../utility/dateTime"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getProofTypeIcon } from "../../../utility/proof"
import GoalContext from "../GoalContext/GoalContext"

interface Props {
    goal: Goal
}

const GoalView: React.FC<Props> = props => {
    const { goal } = props

    return (
        <GoalContext
            className={styles.goal}
            options={
                <div className={styles["goal__options"]}>
                    <div className={styles["goal__duration"]}>{formatDurationLocale(goal.duration)}</div>
                    <div className={styles["goal__proofTypes"]}>
                        {goal.proofTypes.map((p, i) => (
                            <div key={i} className={styles["goal__proofType"]}>
                                <FontAwesomeIcon icon={getProofTypeIcon(p)} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        >
            <div className={styles["goal__description"]}>{goal.description}</div>
        </GoalContext>
    )
}

export default GoalView
