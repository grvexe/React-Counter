import React, {useState} from 'react'

function Counter(){

    // Declaring DOM elements as variables to keep the code clean

    let counttxt = document.getElementById("counttxt");
    let decrease = document.getElementById("decrease");
    let reset = document.getElementById("reset");
    let increase = document.getElementById("increase");

    // Creating an array to store colours

    let colours = [ '#92FFF2', '#FF92D3', '#9B92FF', '#E9FF92', '#FD974E', 
                    '#4EFDA9', '#FD4E4E', '#FFD700', '#FD4EEB', '#0085FF',]

    
    /*Creating a function that generates a random number and use it as index 
    in colours array to change the background color of the page and + symbol*/

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

    /* resetColour() function to reset background colour and + symbol 
    color to original colour if reset button is pressed */

    function resetColour () {
        document.body.style.backgroundColor = colours[0];
        increase.style.color = colours[0];
    }

    /* Using useState() to create a stateful variable named count and a setter 
    function setCount with default value 0 */

    let [count, setCount] = useState(0);
    

    /* Decrementing value of count and calling changeColour() function if count 
    is divisble by 10 */

    const decrementCount = () => {
        setCount(count -= 1);
        if (count % 10 == 0) {
            changeColour();
        }
    }

    /* Resetting value of count and calling resetColour() function */
    const resetCount = () => {
        setCount(0);
        resetColour();
    }

    /* Incrementing value of count and calling changeColour() function if count 
    is divisble by 10 */

    const incrementCount = () => {
        setCount(count += 1);
        if (count % 10 === 0) {
            changeColour();
        }
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