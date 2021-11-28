import React from "react"
import { FloatingLabel, Form, FormControlProps } from "react-bootstrap"

type BasicInputPropsRefType = HTMLInputElement | HTMLTextAreaElement

interface BasicInputProps extends FormControlProps {
    label: string
    controlId?: string
    invalidFeedback?: string
    inputClassName?: string
}

const BasicInput = React.forwardRef<BasicInputPropsRefType, BasicInputProps>((props, ref) => {
    const { label, invalidFeedback, controlId, className, inputClassName, ...inputProps } = props

    return (
        <FloatingLabel controlId={controlId} label={label} className={className}>
            <Form.Control {...inputProps} ref={ref} className={inputClassName} />
            <Form.Control.Feedback type="invalid" tooltip>
                {invalidFeedback}
            </Form.Control.Feedback>
        </FloatingLabel>
    )
})

export default BasicInput
