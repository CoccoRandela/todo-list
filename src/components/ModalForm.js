import React, { useState } from "react";
import { TextInput, SelectInput, DateInput } from "./FormInputs";
import { Form } from "./styles";

export default function ModalForm({ fields, submitFunc, cancelButton, buttonText, closeModal }) {  

    const [inputs, setInputs] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        submitFunc(inputs);
    }

    function handleChange(e, field) {
        setInputs({
            ...inputs, [field]: e.target.value
        })
    }

    const formFields = fields.map(field => {
        console.log(field)
        switch(field) {
            case 'priority':
                return <SelectInput field={field} options={['low', 'medium', 'high']}handleChange={handleChange}
                />
                break;
            case 'dueDate':
                return <DateInput field={field} handleChange={handleChange} />
                break;
            default: 
                return <TextInput field={field} handleChange={handleChange} />
              
        }
    })

    
    return (
        <Form onSubmit={handleSubmit}>
            {formFields}
            <div>
                { cancelButton && 
                <button onClick={closeModal}>Cancel</button>
                }
                <button type="submit">{buttonText}</button>    
            </div>
        </Form>
    )
}