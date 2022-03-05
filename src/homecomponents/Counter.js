import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);

    }
    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            alert("Already reached 0 can't go negative.");
        }




    }



    return (
        <>
            <div className='container'>
                <hr></hr>
                <h1>Welcome to the counter Page</h1>
                <hr></hr>
                <div className="counter">
                    <span id="minus" className="action" onClick={minus}>-</span>
                    <div id="output"> {count} </div>
                    <span id="plus" className="action" onClick={add}>+</span>
                </div>
            </div>
        </>
    )
}
