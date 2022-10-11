import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffectTutorial() {
    const inputRef = useRef(null)


    useEffect(() => {
        inputRef.current.value = "Ahmadaliev"
    }, []);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])
    return (
        <div>
            <input ref={inputRef} value="Eldobek" style={{ width: 500, height: 100 }} />
        </div>
    )
}

export default LayoutEffectTutorial