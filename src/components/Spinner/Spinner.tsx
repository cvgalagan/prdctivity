import React, { CSSProperties } from "react"
import styles from "./Spinner.module.scss"
import cn from "classnames"

const SIZE = 44

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    disableShrink?: boolean
    size?: number | string
    thickness?: number
    value?: number
    variant?: "determinate" | "indeterminate" | "static"
}

function getRelativeValue(value: number, min: number, max: number) {
    return (Math.min(Math.max(min, value), max) - min) / (max - min)
}

function easeOut(t: number) {
    t = getRelativeValue(t, 0, 1)
    t = (t -= 1) * t * t + 1
    return t
}

function easeIn(t: number) {
    return t * t
}

const Spinner = React.forwardRef<HTMLDivElement, Props>(function (props, ref) {
    const {
        className,
        disableShrink = false,
        size,
        thickness = 3.6,
        value = 0,
        variant = "indeterminate",
        ...other
    } = props

    const circleStyle: CSSProperties = {}
    const rootStyle: CSSProperties = {}
    const rootProps: React.HTMLAttributes<HTMLDivElement> = {}

    if (variant === "determinate" || variant === "static") {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2)
        circleStyle.strokeDasharray = circumference.toFixed(3)
        rootProps["aria-valuenow"] = Math.round(value)

        if (variant === "static") {
            circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`
            rootStyle.transform = "rotate(-90deg)"
        } else {
            circleStyle.strokeDashoffset = `${(easeIn((100 - value) / 100) * circumference).toFixed(3)}px`
            rootStyle.transform = `rotate(${(easeOut(value / 70) * 270).toFixed(3)}deg)`
        }
    }

    return (
        <div
            className={cn(
                styles.spinner,
                variant === "indeterminate"
                    ? styles.spinner_indeterminate
                    : variant === "static" && styles.spinner_static,
                disableShrink && styles["spinner_disable-shrink"],
                className
            )}
            style={{ width: size, height: size, ...rootStyle }}
            ref={ref}
            role="progressbar"
            {...rootProps}
            {...other}
        >
            <svg className={styles["spinner__svg"]} viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
                <circle
                    className={styles["spinner__circle"]}
                    style={circleStyle}
                    cx={SIZE}
                    cy={SIZE}
                    r={(SIZE - thickness) / 2}
                    fill="none"
                    strokeWidth={thickness}
                />
            </svg>
        </div>
    )
})

export default Spinner
