import React from "react"
import styles from "./LoadingButton.module.scss"
import Button from "react-bootstrap/Button"
import cn from "classnames"
import Spinner from "../Spinner/Spinner"

interface Props extends React.ComponentProps<typeof Button> {
    loading?: boolean
}

const LoadingButton: React.FC<Props> = props => {
    const { loading, children, className, disabled, ...buttonProps } = props

    return (
        <Button
            {...buttonProps}
            className={cn(className, styles.loadingButton, loading && styles["loadingButton_isLoading"])}
            disabled={disabled ? true : !!loading}
        >
            <div className={styles["loadingButton__content"]}>{children}</div>
            <div className={styles["loadingButton__spinnerContainer"]}>
                <Spinner className={styles["loadingButton__spinner"]} />
            </div>
        </Button>
    )
}

export default LoadingButton
