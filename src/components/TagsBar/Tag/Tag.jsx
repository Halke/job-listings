import React from 'react'
import "./Tag.css";

function Tag({title, removeable=true, className}) {

    return (
        <div className={"tag " + className}>
            <h5 className="tag__title">
                {title}
            </h5>
            {removeable ? 
            (
            <button
                className="tag__delete-btn"
            >
                <img className="tag__delete-btn-image" 
                    src={`${process.env.PUBLIC_URL}/images/icon-remove.svg`} 
                    alt="Remove icon"
                />
            </button>
            )
            :
            null}
        </div>
    )

}

export default Tag
