import React from 'react';

class Counter extends React.Component {
    // Tech Challenge: Make this counter functional
    
    // Step 1: Populate the div with the classname 'count' with a dynamic number that can be manipulated when other buttons are clicked
    // Step 2: Make the 'Plus' button add 1 to the total count
    // Step 3: Make the 'Minus' button decrease 1 from the total count
    // Step 4: Build a component that will reset the counter back to 0. Place it as a child of the div with the className 'counter'

    // Bonus 1: Make the reset component a 'dumb' component
    // Bonus 2: Change the cursor to a pointer

    render() {
        return (
            <div className="counter-page">
                <div className="counter">
                    <div className="block minus">-</div> 
                    <div className="block count"></div>
                    <div className="block plus">+</div>
                </div>
            </div>
        )
    }
}

export default Counter ;