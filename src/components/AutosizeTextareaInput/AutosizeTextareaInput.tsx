import React from "react"
import { FloatingLabel, Form } from "react-bootstrap"
import TextareaAutosize from "react-textarea-autosize"
import cn from "classnames"
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form"

interface AutosizeTextareaInputProps extends Omit<UseFormRegisterReturn, "ref"> {
    label: string
    className?: string
    controlId?: string
    isInvalid?: boolean
    invalidFeedback?: string
    inputClassName?: string
}

const AutosizeTextareaInput = React.forwardRef<HTMLTextAreaElement, AutosizeTextareaInputProps>((props, ref) => {
    const { label, invalidFeedback, controlId, className, inputClassName, isInvalid, ...textareaInputProps } = props
    return (
        <FloatingLabel controlId={controlId} label={label} className={className}>
            <TextareaAutosize
                {...textareaInputProps}
                ref={ref}
                className={cn(inputClassName, "form-control", isInvalid ? "is-invalid" : undefined)}
                id={controlId}
                placeholder={label}
            />
            <Form.Control.Feedback type="invalid" tooltip>
                {invalidFeedback}
            </Form.Control.Feedback>
        </FloatingLabel>
    )
})

export default AutosizeTextareaInput
