import React, { useState } from 'react'

const StateInput = () => {
    const [inputValue, setInputValue] = useState("Eldorbek")

    let onChange = (e) => {
        const editingName = e.target.value
        setInputValue(editingName)
    }
    return (
        <div>
            <input type="text" placeholder='edit something.....'
                onChange={onChange} />
            <h1>
                {inputValue}
            </h1>
        </div>
    )
}

export default StateInput