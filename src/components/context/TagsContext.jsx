import React, {useState, createContext} from "react";

export const TagsContext = createContext();

function Context({children}) {

    const initialState = [];

    const [tags, setTags] = useState(initialState);

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
        setTags(initialState);
    }

    return (
        <TagsContext.Provider value={{tags, addTag, removeTag, setToDefault}}>
            {children}
        </TagsContext.Provider>
    )

}

export default Context;