import React from "react";

function TextInput({ field, handleChange }) {

    console.log(field)

    const type = (field) => {
        switch(field) {
            case 'email':
                return 'email';
                break;
            case 'password':
                return 'password'
                break;
            default: 
                return 'text';
                break;

        }
    }

    console.log(type())

    return(
        <input 
        type={type()}
        defaultValue=""
        placeholder={`${field}`}
        onChange={(e) => handleChange(e, field)}
        required
        />
    )
}

function SelectInput({field, options, handleChange}) {
    const optionSlots = options.map(option => {
        return (
            <option value={option}>{option}</option>
        )
    })

    return (
        <select
        defaultValue="low"
        placeholder={field}
        onChange={(e) => handleChange(e, field)}
        >
            {optionSlots}
        </select>
    )
}

function DateInput({field, handleChange}) {
    return(
        <input 
        type="date"
        placeholder="due date"
        defaultValue=""
        onChange={(e)=> handleChange(e, field)} 
        min={new Date().toLocaleDateString('en-ca')}
        required
        />
    )
}

export {TextInput, SelectInput, DateInput}