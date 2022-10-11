import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosTutorial() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then((response) => {
                setData(response.data[0].title)
                console.log("Api was called")
                // console.log(res.data)
            });
    }, [])
    return (
        <div>

            <div>Hi!{data}</div>
            <div>{count}</div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Click!
            </button>
        </div>

    )
}

export default AxiosTutorial