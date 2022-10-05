import React, { useState } from 'react'
import StateInput from './StateInput';

const UseStateHook = () => {
    const [number, setNumber] = useState(0);
    const [showText, setShowText] = useState(true)

    // const increment = () => {
    //     setNumber(number + 1)
    // }

    const decreament = () => {
        setNumber(number - 1)
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* <button onClick={increment}>+</button>
            <button onClick={decreament}>-</button> */}
            <button onClick={() => {
                setNumber(number + 1);
                setShowText(!showText)
            }}>Click Here</button>
            <div>
                {showText && <div><StateInput /></div>}
            </div>
        </div>
    )
}

export default UseStateHook