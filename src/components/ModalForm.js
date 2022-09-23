import React, { useState } from "react";

export default function ModalForm({ item, className, options, addItem, closeModal }) {  
    
    const inputsInitialState = {};
    options.map(option => {
        inputsInitialState[option] = '';
    })

    const [inputs, setInputs] = useState(inputsInitialState);



    const formInputs = options.map(option => {
        return (
            <div key={option}>
                <label>
                    {option}
                    <input required defaultValue={inputs[option]} onChange={(e) => 
                        {
                            setInputs({
                                ...inputs, [option]: e.target.value
                            })
                        }
                    }/>
                </label>
            </div>
        )
    })

    function handleInputs(e) {
        e.preventDefault();
        addItem(inputs);
    }
    
    return (
        <div className={className}>
            <form onSubmit={handleInputs}>
                {formInputs}
                <div>
                    <button onClick={closeModal}>Cancel</button>
                    <button type="submit">{`Create ${item}`}</button>    
                </div>
            </form>
        </div>
    )
}