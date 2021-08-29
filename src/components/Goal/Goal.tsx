import React from "react"
import styles from "./Goal.module.scss"
import { Goal } from "@prisma/client"

interface Props {
    goal: Goal
}

const GoalView: React.FC<Props> = props => {
    return <div className={styles.goal}>Here will be goal</div>
}

export default GoalView
