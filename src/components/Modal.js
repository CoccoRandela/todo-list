import React, { useState } from "react";

export default function Modal({ className, options }) {  
    
    const inputsInitialState = {};
    options.map(option => {
        inputsInitialState[option] = '';
    })

    const [inputs, setInputs] = useState(inputsInitialState);


    const formInputs = options.map(option => {
        return (
            <div>
                <label>
                    {option}
                    <input defaultValue={inputs[option]} onChange={(e) => 
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
    
    return (
        <div className={className}>
            <form>
            {formInputs}
            </form>
        </div>
    )
}