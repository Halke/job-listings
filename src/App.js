import React, {useContext, useState} from "react";
import './App.css';
import Page from "./components/Jobs/Page/Page";
import TagsContext from "./components/context/TagsContext";

function App() {

  const Context = useContext(TagsContext);

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
      <Context.Provider>
        <Page value={{tags, addTag, removeTag, setToDefault}} />
      </Context.Provider>
    </div>
  );
}

export default App;
