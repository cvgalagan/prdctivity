import React from "react"
import { FloatingLabel, Form, FormControlProps } from "react-bootstrap"

interface BasicInputProps extends FormControlProps {
    label: string
    controlId?: string
    invalidFeedback?: string
    inputClassName?: string
}

const BasicInput: React.FC<BasicInputProps> = props => {
    const { label, invalidFeedback, controlId, className, inputClassName, ...inputProps } = props

    return (
        <FloatingLabel controlId={controlId} label={label} className={className}>
            <Form.Control {...inputProps} className={inputClassName} />
            <Form.Control.Feedback type="invalid" tooltip>
                {invalidFeedback}
            </Form.Control.Feedback>
        </FloatingLabel>
    )
}

export default BasicInput
