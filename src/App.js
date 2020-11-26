import React, { useState} from "react";
import './App.css';
import Page from "./components/Jobs/Page/Page";
import TagsContext from "./components/context/TagsContext";

function App() {

  const [tags, setTags] = useState([]);

  const addTag = (tag) => {
    setTags(prevTags => [...prevTags, tag]);
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
    <div className="App">
      <TagsContext.Provider value={{tags, addTag, removeTag, setToDefault}}>
        <Page />
      </TagsContext.Provider>
    </div>
  );
}

export default App;
