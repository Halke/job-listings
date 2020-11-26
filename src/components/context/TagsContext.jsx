import React, {useState, createContext} from "react";

export const TagsContext = createContext();

function Context({children}) {

    const [tags, setTags] = useState([]);

    const addTag = (tag) => {
        if(!tags.includes(tag)){
            setTags(prevTags => [...prevTags, tag]);
        }
    }

    const removeTag = (tag) => {
        setTags(prevTags => {
            return prevTags.filter(t => t !== tag);
        });
    }

    const setToDefault = () => {
        setTags([]);
    }

    return (
        <TagsContext.Provider value={{tags, addTag, removeTag, setToDefault}}>
            {children}
        </TagsContext.Provider>
    )

}

export default Context;