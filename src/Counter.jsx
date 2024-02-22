import React, {useState} from 'react'

function Counter(){

    let counttxt = document.getElementById("counttxt");
    let decrease = document.getElementById("decrease");
    let reset = document.getElementById("reset");
    let increase = document.getElementById("increase");

    let colours = [ '#92FFF2', '#FF92D3', '#9B92FF', '#E9FF92', '#FD974E', 
                    '#4EFDA9', '#FD4E4E', '#FFD700', '#FD4EEB', '#0085FF',]

    function changeColour() {

        let randomIndex = 0;
        let tempRandom;
                    
        do {
            tempRandom = Math.floor(Math.random() * colours.length);
        } while (tempRandom === randomIndex);
                        
                        
        if (tempRandom != randomIndex){
            randomIndex = tempRandom;
        }
                        
        let colour = colours[randomIndex];
                    
        document.body.style.backgroundColor = colour;
        increase.style.color = colour;
    }

    function resetColour () {
        document.body.style.backgroundColor = colours[0];
        increase.style.color = colours[0];
    }




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