import React from "react"
import styles from "./MenuItem.module.scss"
import { MenuDataItem } from "./model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClassProp } from "../../types/classProp"
import cn from "classnames"
import { useRouter } from "next/router"

interface Props extends ClassProp {
    value: MenuDataItem
    tabIndex?: number
    selected?: boolean
}

const MenuItem: React.FC<Props> = props => {
    const { value, className, tabIndex, selected = false } = props
    const router = useRouter()

    const onClick = (route: string) => () => router.push(route)

    return (
        <div
            className={cn(styles.menuItem, selected && styles["menuItem_selected"], className)}
            tabIndex={tabIndex}
            onClick={onClick(value.link)}
        >
            <div className={styles["menuItem__icon"]}>
                <FontAwesomeIcon icon={value.icon} size="2x" />
            </div>
            <div className={styles["menuItem__title"]}>{value.title}</div>
        </div>
    )
}

export default MenuItem
