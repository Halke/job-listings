import React, {createContext} from "react";

const TagsContext = createContext({
    tags: [],
    addTag: (tag) => {},
    removeTag: (tag) => {},
    setToDefault: () => {}
});

export default TagsContext;