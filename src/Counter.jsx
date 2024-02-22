import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);
    
    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    return(
        <div className="container">
            <div className="wrapper">
                <p id="counttxt">{count}</p>
                <div className="buttons">
                    <div className="button" id="decrease" onClick={decrementCount}>-</div>
                    <div className="button" id="reset" onClick={resetCount}>reset</div>
                    <div className="button" id="increase" onClick={incrementCount}>+</div>
                </div>
            </div>
        </div>
    )

}

export default Counter