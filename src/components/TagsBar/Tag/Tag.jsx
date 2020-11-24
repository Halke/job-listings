import React from 'react'
import "./Tag.css";

function Tag({title}) {
    return (
        <div className="tag">
            <h5 className="tag__title">{title}</h5>
            <button className="tag__delete-btn">
                <img className="tag__delete-btn-image" 
                    src={`${process.env.PUBLIC_URL}/images/icon-remove.svg`} 
                    alt="Remove icon"
                />
            </button>
        </div>
    )

}

export default Tag
