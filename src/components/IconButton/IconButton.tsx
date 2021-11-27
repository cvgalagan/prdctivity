import React from "react"
import styles from "./IconButton.module.scss"
import Button from "react-bootstrap/Button"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cn from "classnames"

interface Props extends React.ComponentProps<typeof Button> {
    icon: IconProp
}

const IconButton: React.FC<Props> = props => {
    const { icon, className, children, ...buttonProps } = props
    return (
        <Button {...buttonProps} className={cn(className, styles.iconButton)}>
            <FontAwesomeIcon
                icon={icon}
                className={cn(styles.iconButton__icon, children ?? styles.iconButton__icon_withSpace)}
            />
            {children}
        </Button>
    )
}

export default IconButton
