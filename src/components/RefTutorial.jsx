import React, { useRef } from 'react'

function RefTutorial() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1>Eldorbek</h1>
            <input type="text" placeholder='Editing...' ref={inputRef} />
            <button onClick={onClick}>Change name</button>
        </div>
    )
}

export default RefTutorial