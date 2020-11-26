import React, {useContext} from 'react'
import "./Bar.css";
import Tag from "../Tag/Tag";
import TagsContext from "../../context/TagsContext";

function Bar() {

    const context = useContext(TagsContext);

    const handleOnClear = () => {
        context.setToDefault();
    }

    return (
        <div 
            className={
                (context.tags.length > 0 ? "bar__fade-in " 
                : 
                "bar__fade-out ") + "bar"
            }
        >
            <div className="bar__tags">
                {context.tags.map(tag => (
                    <Tag 
                        isDisabled={true} 
                        title={tag}
                    />
                ))}
            </div>
            <button className="bar__clear-btn" onClick={handleOnClear}>
                Clear
            </button>
        </div>
    )
}

export default Bar
