import React, { useState } from "react";

export default function ModalForm({ item, className, options, addItem, closeModal }) {  
    
    const inputsInitialState = {};
    options.map(option => {
        if (option === 'priority' ) {
            inputsInitialState[option] = 'low'
        } else inputsInitialState[option] = '';
    })

    const [inputs, setInputs] = useState(inputsInitialState);

    function handleSubmit(e) {
        e.preventDefault();
        addItem(inputs);
    }

    function handleChange(e, option) {
        setInputs({
            ...inputs, [option]: e.target.value
        })
    }

    const formInputs = options.map(option => {
        if (option === 'priority') {
            return (
                <div key={option}>
                    <label>
                        {option}
                        <select required defaultValue="low" onChange={(e)=> handleChange(e,option)}>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </label>
                </div>               
            )
        } else {
            return (
                <div key={option}>
                    <label>
                        {option === 'dueDate'? 'due date': option}
                        <input type={option === 'dueDate'? "date":"text"} required defaultValue={inputs[option]} onChange={(e)=> handleChange(e,option)}/>
                    </label>
                </div>
            )
        }
    })

    
    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                {formInputs}
                <div>
                    <button onClick={closeModal}>Cancel</button>
                    <button type="submit">{`Create ${item}`}</button>    
                </div>
            </form>
        </div>
    )
}