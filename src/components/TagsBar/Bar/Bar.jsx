import React from 'react'
import "./Bar.css";
import Tag from "../Tag/Tag";

function Bar() {

    const handleOnClear = () => {
        console.log("Clicked on CLEAR!");
    }

    return (
        <div className="bar">
            <div className="bar__tags">
                <Tag title="Frontend" />
                <Tag title="Backend" />
                <Tag title="Junior" />
            </div>
            <button className="bar__clear-btn" onClick={handleOnClear}>
                Clear
            </button>
        </div>
    )
}

export default Bar
