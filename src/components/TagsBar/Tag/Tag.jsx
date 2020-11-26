import React, {useContext} from 'react'
import {TagsContext} from "../../context/TagsContext";
import "./Tag.css";

function Tag({title, removeable=true, className="", isDisabled}) {

    const context = useContext(TagsContext);

    const handleClick = (e) => {
        context.addTag(e.target.id);
    }

    const handleDelete = (e) => {
        context.removeTag(e.target.id);
    }

    return (
        <div className={"tag " + className}>
            <button disabled={isDisabled ? true : false} 
                id={isDisabled ? null : title} 
                onClick={handleClick} 
                className="tag__title"
            >
                {title}
            </button>
            {removeable ? 
            (
            <button
                id={title}
                onClick={handleDelete}
                className="tag__delete-btn"
            />

            )
            :
            null}
        </div>
    )

}

export default Tag
