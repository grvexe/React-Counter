import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState();
    

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

}

export default Counter