import React from "react"
import styles from "./GoalContext.module.scss"
import { ClassProp } from "../../../../types/classProp"
import cn from "classnames"

interface GoalContextProps extends ClassProp {
    children: JSX.Element
    actions?: JSX.Element
    options?: JSX.Element
}

const GoalContext: React.FC<GoalContextProps> = props => {
    const { children, actions, options, className } = props

    return (
        <div className={cn(styles.goalContext, className)}>
            <div className={styles.goalContext__main}>{children}</div>
            <div className={styles.goalContext__footer}>
                <div className={styles.goalContext__options}>{options}</div>
                <div className={styles.goalContext__actions}>{actions}</div>
            </div>
        </div>
    )
}

export default GoalContext
