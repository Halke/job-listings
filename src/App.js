import React from "react";
import './App.css';
import Page from "./components/Jobs/Page/Page";
import TagsContext from "./components/context/TagsContext";

function App() {

  return (
    <div className="App">
      <TagsContext>
        <Page />
      </TagsContext>
    </div>
  );
}

export default App;
