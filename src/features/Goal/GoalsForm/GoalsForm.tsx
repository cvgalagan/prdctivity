import React from "react"
import styles from "./GoalsForm.module.scss"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Goal } from "@prisma/client"

interface Props {
    name: string
}

function GoalsForm<FormValues>(props: Props) {
    const { name } = props
    const { register, control } = useFormContext()
    const { fields } = useFieldArray({ control, name })

    return <div className={styles.goalsForm}>{fields.map((item, index) => {})}</div>
}

export default GoalsForm
