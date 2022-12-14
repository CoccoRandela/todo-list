import React, { useState } from "react";
import { TextInput, SelectInput, DateInput } from "./FormInputs";
import { ButtonStyles, FormStyles } from "./styles";

export default function Form({ fields, submitFunc, cancelButton, buttonText, returnFunc }) {  

    const [inputs, setInputs] = useState({});

    console.log(inputs)

    function handleSubmit(e) {
        e.preventDefault();
        submitFunc(inputs);
    }

    function handleReturn(e) {
        e.preventDefault();
        returnFunc();
    }

    function handleChange(e, field) {
        setInputs({
            ...inputs, [field]: e.target.value
        })
    }

    const formFields = fields.map(field => {
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
        <FormStyles onSubmit={handleSubmit}>
            {formFields}
            <div>
                { cancelButton && 
                <ButtonStyles onClick={handleReturn}>Cancel</ButtonStyles>
                }
                <ButtonStyles type="submit">{buttonText}</ButtonStyles>    
            </div>
        </FormStyles>
    )
}