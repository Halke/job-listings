import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Bar from "./components/TagsBar/Bar/Bar"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__bar-section">
        <Bar />
      </div>
    </div>
  );
}

export default App;
