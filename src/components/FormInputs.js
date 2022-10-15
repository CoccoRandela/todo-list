import React from "react";


function TextInput({ field, handleChange }) {

    const type = () => {
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
        onChange={(e) => handleChange(e, field)}
        >   
            <option disabled selected>
                priority
            </option>
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