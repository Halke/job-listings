import React from 'react'
import "./Bar.css";

function Bar() {

    const handleOnClear = () => {
        console.log("Clicked on CLEAR!");
    }

    return (
        <div className="bar">
            <div className="bar__tags">
                
            </div>
            <button className="bar__clear-bar" onClick={handleOnClear}>
                Clear
            </button>
        </div>
    )
}

export default Bar
