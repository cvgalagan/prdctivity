import React, { useState } from "react"
import { Goal } from "../../models/goal"
import styles from "./GoalFormContext.module.scss"
import GoalView from "../Goal/Goal"
import IconButton from "../IconButton/IconButton"
import { faPen, faXmark } from "@fortawesome/pro-thin-svg-icons"

interface Props {
    goal: Goal
}

const actionProps = {
    variant: "link",
    className: styles["goalFormContext__action"]
}

const GoalFormContext: React.FC<Props> = ({ goal }) => {
    const [isEdit, setEdit] = useState(false)

    return (
        <div className={styles.goalFormContext}>
            <div className={styles["goalFormContext__body"]}>{isEdit ? <div>Edit</div> : <GoalView goal={goal} />}</div>
            {!isEdit && (
                <div className={styles["goalFormContext__actions"]}>
                    <IconButton icon={faPen} onClick={() => setEdit(true)} {...actionProps} />
                    <IconButton icon={faXmark} {...actionProps} />
                </div>
            )}
        </div>
    )
}

export default GoalFormContext
